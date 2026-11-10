import React from 'react'
import { Box, Container } from '@mui/material'
import { fetchMultipleUrls } from '../../utils/fetchMultipleUrls'
import ProductInfo from '../../components/ProductInfo/ProductInfo'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { motion } from 'framer-motion'
import { metaData } from '../../mock/metaData'
import SEO from '../../components/seo'
import { useRouter } from 'next/router'

export default function productInfo({ productItem }) {
  const { locale } = useRouter()
  return (
    <>
      <SEO
        title={productItem.title}
        description={metaData[locale]?.home?.description}
        keywords={metaData[locale]?.home?.keywords}
      />
      <motion.div exit={{ opacity: 0 }}>
        <Box id='boxRoot'>
          <Container maxWidth='xl'>
            <ProductInfo data={productItem} />
          </Container>
        </Box>
      </motion.div>
    </>
  )
}

export async function getServerSideProps({ query, locale }) {
  // const cyrillicToTranslit = new CyrillicToTranslit()
  const [menu] = await fetchMultipleUrls([
    {
      version: 2,
      endpoint: '/service/product-card',
      method: 'POST',
      body: {
        id: +query?.title,
        lang: locale,
        ...(query.hasOwnProperty('isIikoProduct') && {
          isIikoProduct: query?.isIikoProduct,
        }),
        ...(query.hasOwnProperty('price') && {
          price: query?.price,
        }),
        ...(query.hasOwnProperty('img') && {
          img: query?.img,
        }),
      },
    },
  ])

  // const productTitle = query?.title
  // const menues = menu?.menuWithDetails?.map((item) => ({
  //   ...item.itemMenu,
  //   details: item.itemMenuDetails,
  //   price: item.itemMenuPrice,
  // }))

  // const findSingleProductByTitle = (title, products) =>
  //   products?.find((product) => {
  //     return (
  //       cyrillicToTranslit?.transform(product.title)?.split(' ')?.join('-') ===
  //       title
  //     )
  //   })

  // let productItem = findSingleProductByTitle(productTitle, menues || [])

  return {
    props: {
      productItem: menu.data || {},
      query,
      // id: query.title,
    },
  }
}
