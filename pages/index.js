import dynamic from 'next/dynamic'
import NewBanner from '../components/NewBanner/NewBanner'
import SEO from '../components/seo'
import { fetchMultipleUrls } from '../utils/fetchMultipleUrls'
import Info from '../components/Info/Info'
import About from '../components/About/About'
import { motion } from 'framer-motion'
import { metaData } from '../mock/metaData'
import { useRouter } from 'next/router'
import dataToArrayStrapiConverter from '../utils/dataToArrayStrapiConverter'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { requestV2 } from '../utils/axios'
import nookies from 'nookies'
const Menu = dynamic(() => import('../components/Menu/Menu'))
const Products = dynamic(() => import('../components/Products/Products'))
const ToTop = dynamic(() => import('../components/ToTop/ToTop'))
const SwiperMenu = dynamic(() => import('../components/SwiperMenu/SwiperMenu'))

export default function Home({
  bestsellersData,
  instruction,
  features,
  bannerData,
  getMenu,
  menu,
  sale,
  data,
}) {
  const { locale } = useRouter()

  // console.log('menu', menu)
  // console.log('getMenu', getMenu)

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <SEO
        title={metaData[locale]?.home?.title}
        description={metaData[locale]?.home?.description}
        keywords={metaData[locale]?.home?.keywords}
      />
      {/* <Banner /> */}
      {/* <HeroSection /> */}
      <NewBanner bannerData={bannerData} adress={getMenu?.data?.branch} />
      <Menu menu={getMenu?.data?.menu} />
      {/* <MobileMenu menu={menu} /> */}
      {<SwiperMenu bestsellersData={sale?.data} />}
      <Products products={getMenu?.data?.menu} />
      <Info features={features} />
      <About instructions={instruction} />
      <ToTop />
    </motion.div>
  )
}

export async function getServerSideProps(ctx) {
  //!get data from strapi admin
  const response = await fetch(
    process.env.HOME_PAGE_API_URL +
      `?populate=features,features.image,instruction,instruction.image,instruction.qr_image,instruction.steps,instruction.steps.image,bestsellers`
  )
  const data = await response.json()

  const { instruction, features, bestsellers } = await data?.data?.attributes
  const formattedBestsellers = await dataToArrayStrapiConverter(bestsellers)
  const bestsellersId = await formattedBestsellers.map(
    (item) => item?.product_id
  )

  const cookies = nookies.get(ctx)

  let getLongLat = cookies.geoLocation

  if (!getLongLat) {
    getLongLat = '41.320077,69.282501'
  }

  // from axios
  // const getLongLat = await axios
  //   .get('https://ipinfo.io/94.232.24.122?token=65f30a36262db7')
  //   .then((res) => res?.data?.loc)

  // from axios
  const nearby = await requestV2({
    url: process.env.BASE_URL_V2 + '/service/branch-nearby',
    method: 'POST',
    data: {
      geo: getLongLat,
    },
    headers: {
      token: process.env.TOKEN_V2,
    },
  })

  // console.log('nearby', nearby.data.polygon)

  const locationId = nearby?.data?.polygon?.[0]?.id
  // console.log(`ctx`,ctx?.locale)

  // console.log('locationId', locationId)

  const urls = [
    process.env.MENU_API_URL,
    {
      endpoint: process.env.BASE_URL_V2 + '/service/get-menu',
      method: 'POST',
      body: {
        branch_id: locationId,
        lang: ctx.locale,
      },
      version: 2,
    },
  ]

  const [menu, getMenu] = await fetchMultipleUrls(urls, cookies)

  // console.log('nearby', nearby.data.nearest)
  // console.log('menu', menu)
  // console.log('getMenu', getMenu.data.menu)

  const [sale] = await fetchMultipleUrls(
    [
      {
        version: 2,
        endpoint: '/service/sale-hit',
        method: 'POST',
        body: {
          lang: ctx.locale,
          branch_id: locationId,
        },
      },
    ],
    cookies
  )

  const keys = ['id']
  const menues = menu?.menuWithDetails
    ?.map((item) => item.topMenu)
    ?.filter(
      (value, index, self) =>
        self.findIndex((v) => keys.every((k) => v[k] === value[k])) === index
    )

  let allCategoriesMenu = getAllCategoriesMenu()
  function getAllCategoriesMenu() {
    const list = menues?.map((item) => {
      const products = menu.menuWithDetails
        ?.filter((element) => element.itemMenu.parent === item.id)
        ?.map((element) => ({
          ...element.itemMenu,
          details: element.itemMenuDetails,
          price: element.itemMenuPrice,
        }))

      return {
        ...item,
        products,
      }
    })
    return list
      ?.filter((element) => element.products.length)
      ?.sort((a, b) => a.sortIndex - b.sortIndex)
  }

  const bestsellersProducts = await bestsellersId.reduce((acum, i) => {
    allCategoriesMenu?.forEach((elem) => {
      elem.products.forEach((product) => {
        if (+product.id === +i) acum.push(product)
      })
    })
    return acum
  }, [])

  const bestsellersData = {
    id: 1000,
    title: 'Хиты продаж',
    products: [...bestsellersProducts],
  }

  const allProducts = [
    bestsellersData,
    ...(allCategoriesMenu?.length ? allCategoriesMenu : []),
  ]

  const insertPathsToCategories = (allProductsArray) =>
    allProductsArray.map((category, index) => ({
      slug: `Меню-${category.title}`,
      ...category,
    }))

  const formattedMenu = insertPathsToCategories(allProducts)
  const banner = await fetch(
    process.env.BASE_URL_STRAPI + `/banners?populate=*`
  )

  const bannerData = await banner.json()
  return {
    props: {
      bestsellersData,
      instruction,
      features,
      bannerData,
      getMenu,
      menu,
      sale,
      data,
    },
  }
}
