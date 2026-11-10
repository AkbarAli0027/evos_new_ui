// import React, { useState, useEffect, createRef } from 'react'
// import { Box, Container } from '@mui/material'
// import cls from './Menu.module.scss'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { ArrowLeft, ArrowRight } from './SlickArrows'
// import ReactSlick from 'react-slick'
// import { Link } from 'react-scroll'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { cartTotalPriceSelector } from '../../store/selectors/cartSelectors'
// import { openCartDrawer } from '../../store/actions/drawerActions/drawerActions'
// import { numberToPrice } from '../../utils/numberToPrice'
// import { menu as mockMenu } from '../../mock/menu'
// import { useRouter } from 'next/router'
// import { useIsMobile } from '../../utils/useIsMobile'

// function useWindowSize() {
//   const [size, setSize] = useState([typeof window !== 'undefined' ? window.innerWidth : 0])

//   useEffect(() => {
//     const handleResize = () => setSize([window.innerWidth])
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   return size
// }

// const localeMenu = mockMenu

// function Menu({ menu }) {
//   const router = useRouter()
//   const { locale } = router
//   const [isAnimation, setAnimation] = useState(false)
//   const [categoriesRef] = useState(menu?.map(() => createRef()))
//   const dispatch = useDispatch()
//   const [isMobile] = useIsMobile()
//   const [navbarScroll, setNavbarScroll] = useState(false)

//   // 1. Savatdagi mahsulotlar sonini hisoblaymiz
//   const cartItems = useSelector((state) => state.cart.cartItems, shallowEqual)
//   const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0)

//   const totalPrice = useSelector(
//     (state) => cartTotalPriceSelector(state),
//     shallowEqual
//   )

//   const scrollToCategory = (index) => {
//     categoriesRef[index]?.current?.scrollIntoView({
//       behavior: 'auto',
//       block: 'center',
//       inline: 'center',
//     })
//   }

//   const handleOpenDrawer = () => {
//     dispatch(openCartDrawer())
//   }

//   const pushSlugToRouter = (title) =>
//     router.push(`#${title.split(' ').join('-')}`, undefined, { shallow: true })

//   const handleClick = (title) => pushSlugToRouter(title)

//   useEffect(() => {
//     const handleScroll = () => {
//       const slider = document.getElementById('slider-category')
//       const distanceToTop = slider?.getBoundingClientRect()?.top
//       setAnimation(isMobile ? distanceToTop < 30 : distanceToTop < -72)
//       setNavbarScroll(window.scrollY > 0)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [isMobile])

//   // 2. Savat (Basket) tugmasi - Format: ( Корзина | 0 )
//   const renderBasket = () => (
//     <Box className={cls.shopIconWrapper} id="basketIcon">
//       <button 
//         className={`${cls.shop} ${totalCount > 0 ? cls.total : ''}`} 
//         onClick={handleOpenDrawer} 
//         id="cartButton"
//       >
//         <div className={cls.shopping}>
//           <p className={cls.shopText}>
//             {localeMenu[locale]?.basket || 'Savat'} | {totalCount}
//           </p>
//         </div>
//       </button>
//     </Box>
//   )

//   return (
//     <div className={cls.root}>
//       <Container maxWidth="xl">
//         {/* Sticky/Animated Menu */}
//         <div
//           style={
//             !isMobile
//               ? { transform: isAnimation ? 'translateY(0)' : 'translateY(-100px)', height: isAnimation ? '80px' : '0', opacity: isAnimation ? 1 : 0 }
//               : { transform: isAnimation ? 'translateY(60px)' : 'translateY(-100px)', height: isAnimation ? '60px' : '0', opacity: isAnimation ? 1 : 0 }
//           }
//           className={cls.animation}
//         >
//           <Container maxWidth="xl">
//             {menu?.length > 0 && (
//               <div
//                 className={cls.menuList}
//                 style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', justifyContent: 'space-between' }}
//               >
//                 <ReactSlick
//                   {...{
//                     focusOnSelect: true,
//                     dots: false,
//                     infinite: false,
//                     speed: 500,
//                     slidesToShow: 6,
//                     slidesToScroll: 1,
//                     variableWidth: true,
//                     nextArrow: <ArrowRight styles={cls.nextButton} />,
//                     prevArrow: <ArrowLeft styles={cls.prevButton} />,
//                     responsive: [
//                       { breakpoint: 800, settings: { slidesToShow: 4, slidesToScroll: 2 } },
//                       { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//                     ],
//                   }}
//                   className={cls.items}
//                 >
//                   {menu?.map((item, index) => (
//                     <li
//                       ref={categoriesRef[index]}
//                       key={item.id}
//                       className={`${cls.listItem} ${item.title === 'Fast Food' || item.title === 'Taomlar' ? cls.foodItem : ''}`}
//                     >
//                       <Link
//                         activeClass={cls.active}
//                         to={item.title}
//                         spy={true}
//                         offset={!isMobile ? -80 : -140}
//                         onSetActive={() => scrollToCategory(index)}
//                         onClick={() => handleClick(item.title)}
//                       >
//                         {item.title}
//                       </Link>
//                     </li>
//                   ))}
//                 </ReactSlick>
//                 {!isMobile && renderBasket()}
//               </div>
//             )}
//           </Container>
//         </div>

//         {/* Static Menu */}
//         <div className={navbarScroll ? cls.menuListTop : cls.navbar_scroll} id="slider-category">
//           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
//             <ul className={cls.list} style={{ flex: 1, display: 'flex', overflowX: 'auto' }}>
//               {menu?.map((item) => (
//                 <li
//                   key={item.id}
//                   className={`${cls.listItem} ${item.title === 'Fast Food' || item.title === 'Taomlar' ? cls.foodItem : ''}`}
//                   onClick={() => handleClick(item.title)}
//                 >
//                   <AnchorLink offset={80} href={`#${item.title}`} style={{ whiteSpace: 'nowrap' }}>
//                     {item.title}
//                   </AnchorLink>
//                 </li>
//               ))}
//             </ul>

//             {!isMobile && !isAnimation && (
//                <div className={cls.staticBasket}>
//                   {renderBasket()}
//                </div>
//             )}
//           </div>
//         </div>
//       </Container>
//     </div>
//   )
// }

// export default Menu








// import React, { useState, useEffect, createRef } from 'react'
// import { Box, Container } from '@mui/material'
// import cls from './Menu.module.scss'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { ArrowLeft, ArrowRight } from './SlickArrows'
// import ReactSlick from 'react-slick'
// import { Link } from 'react-scroll'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { cartTotalPriceSelector } from '../../store/selectors/cartSelectors'
// import { openCartDrawer } from '../../store/actions/drawerActions/drawerActions'
// import { numberToPrice } from '../../utils/numberToPrice'
// import { menu as mockMenu } from '../../mock/menu'
// import { useRouter } from 'next/router'
// import { useIsMobile } from '../../utils/useIsMobile'

// function useWindowSize() {
//   const [size, setSize] = useState([typeof window !== 'undefined' ? window.innerWidth : 0])
//   useEffect(() => {
//     const handleResize = () => setSize([window.innerWidth])
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])
//   return size
// }

// const localeMenu = mockMenu

// function Menu({ menu }) {
//   const router = useRouter()
//   const { locale } = router
//   const [isAnimation, setAnimation] = useState(false)
//   const [categoriesRef] = useState(menu?.map(() => createRef()))
//   const dispatch = useDispatch()
//   const [isMobile] = useIsMobile()
//   const [navbarScroll, setNavbarScroll] = useState(false)

//   const cartItems = useSelector((state) => state.cart.cartItems, shallowEqual)

//   // Faqat oddiy mahsulotlar sonini hisoblaymiz — modifier lar chiqarib tashlanadi
//   const totalCount = cartItems
//     .filter(item => item.type !== 'modifier')
//     .reduce((total, item) => total + item.quantity, 0)

//   const totalPrice = useSelector(
//     (state) => cartTotalPriceSelector(state),
//     shallowEqual
//   )

//   const scrollToCategory = (index) => {
//     categoriesRef[index]?.current?.scrollIntoView({
//       behavior: 'auto',
//       block: 'center',
//       inline: 'center',
//     })
//   }

//   const handleOpenDrawer = () => dispatch(openCartDrawer())

//   const pushSlugToRouter = (title) =>
//     router.push(`#${title.split(' ').join('-')}`, undefined, { shallow: true })

//   const handleClick = (title) => pushSlugToRouter(title)

//   useEffect(() => {
//     const handleScroll = () => {
//       const slider = document.getElementById('slider-category')
//       const distanceToTop = slider?.getBoundingClientRect()?.top
//       setAnimation(isMobile ? distanceToTop < 30 : distanceToTop < -72)
//       setNavbarScroll(window.scrollY > 0)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [isMobile])

//   const renderBasket = () => (
//     <Box className={cls.shopIconWrapper} id="basketIcon">
//       <button
//         className={`${cls.shop} ${totalCount > 0 ? cls.total : ''}`}
//         onClick={handleOpenDrawer}
//         id="cartButton"
//       >
//         <div className={cls.shopping}>
//           <p className={cls.shopText}>
//             {localeMenu[locale]?.basket || 'Savat'} | {totalCount}
//           </p>
//         </div>
//       </button>
//     </Box>
//   )

//   return (
//     <div className={cls.root}>
//       <Container maxWidth="xl">
//         <div
//           style={
//             !isMobile
//               ? { transform: isAnimation ? 'translateY(0)' : 'translateY(-100px)', height: isAnimation ? '80px' : '0', opacity: isAnimation ? 1 : 0 }
//               : { transform: isAnimation ? 'translateY(60px)' : 'translateY(-100px)', height: isAnimation ? '60px' : '0', opacity: isAnimation ? 1 : 0 }
//           }
//           className={cls.animation}
//         >
//           <Container maxWidth="xl">
//             {menu?.length > 0 && (
//               <div
//                 className={cls.menuList}
//                 style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', justifyContent: 'space-between' }}
//               >
//                 <ReactSlick
//                   {...{
//                     focusOnSelect: true,
//                     dots: false,
//                     infinite: false,
//                     speed: 500,
//                     slidesToShow: 6,
//                     slidesToScroll: 1,
//                     variableWidth: true,
//                     nextArrow: <ArrowRight styles={cls.nextButton} />,
//                     prevArrow: <ArrowLeft styles={cls.prevButton} />,
//                     responsive: [
//                       { breakpoint: 800, settings: { slidesToShow: 4, slidesToScroll: 2 } },
//                       { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//                     ],
//                   }}
//                   className={cls.items}
//                 >
//                   {menu?.map((item, index) => (
//                     <li
//                       ref={categoriesRef[index]}
//                       key={item.id}
//                       className={`${cls.listItem} ${item.title === 'Fast Food' || item.title === 'Taomlar' ? cls.foodItem : ''}`}
//                     >
//                       <Link
//                         activeClass={cls.active}
//                         to={item.title}
//                         spy={true}
//                         offset={!isMobile ? -80 : -140}
//                         onSetActive={() => scrollToCategory(index)}
//                         onClick={() => handleClick(item.title)}
//                       >
//                         {item.title}
//                       </Link>
//                     </li>
//                   ))}
//                 </ReactSlick>
//                 {!isMobile && renderBasket()}
//               </div>
//             )}
//           </Container>
//         </div>

//         <div className={navbarScroll ? cls.menuListTop : cls.navbar_scroll} id="slider-category">
//           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
//             <ul className={cls.list} style={{ flex: 1, display: 'flex', overflowX: 'auto' }}>
//               {menu?.map((item) => (
//                 <li
//                   key={item.id}
//                   className={`${cls.listItem} ${item.title === 'Fast Food' || item.title === 'Taomlar' ? cls.foodItem : ''}`}
//                   onClick={() => handleClick(item.title)}
//                 >
//                   <AnchorLink offset={80} href={`#${item.title}`} style={{ whiteSpace: 'nowrap' }}>
//                     {item.title}
//                   </AnchorLink>
//                 </li>
//               ))}
//             </ul>

//             {!isMobile && !isAnimation && (
//               <div className={cls.staticBasket}>
//                 {renderBasket()}
//               </div>
//             )}
//           </div>
//         </div>
//       </Container>
//     </div>
//   )
// }

// export default Menu










import React, { useState, useEffect, createRef } from 'react'
import { Box, Container } from '@mui/material'
import cls from './Menu.module.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ArrowLeft, ArrowRight } from './SlickArrows'
import ReactSlick from 'react-slick'
import { Link } from 'react-scroll'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { cartTotalPriceSelector } from '../../store/selectors/cartSelectors'
import { openCartDrawer } from '../../store/actions/drawerActions/drawerActions'
import { numberToPrice } from '../../utils/numberToPrice'
import { menu as mockMenu } from '../../mock/menu'
import { useRouter } from 'next/router'
import { useIsMobile } from '../../utils/useIsMobile'

function useWindowSize() {
  const [size, setSize] = useState([typeof window !== 'undefined' ? window.innerWidth : 0])
  useEffect(() => {
    const handleResize = () => setSize([window.innerWidth])
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return size
}

const localeMenu = mockMenu

function Menu({ menu }) {
  const router = useRouter()
  const { locale } = router
  const [isAnimation, setAnimation] = useState(false)
  const [categoriesRef] = useState(menu?.map(() => createRef()))
  const dispatch = useDispatch()
  const [isMobile] = useIsMobile()
  const [navbarScroll, setNavbarScroll] = useState(false)

  const cartItems = useSelector((state) => state.cart.cartItems, shallowEqual)

  const totalCount = cartItems
    .filter(item => item.type !== 'modifier')
    .reduce((total, item) => total + item.quantity, 0)

  const totalPrice = useSelector(
    (state) => cartTotalPriceSelector(state),
    shallowEqual
  )

  const scrollToCategory = (index) => {
    categoriesRef[index]?.current?.scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center',
    })
  }

  const handleOpenDrawer = () => dispatch(openCartDrawer())

  const pushSlugToRouter = (title) =>
    router.push(`#${title.split(' ').join('-')}`, undefined, { shallow: true })

  const handleClick = (title) => pushSlugToRouter(title)

  useEffect(() => {
    const handleScroll = () => {
      const slider = document.getElementById('slider-category')
      const distanceToTop = slider?.getBoundingClientRect()?.top
      setAnimation(isMobile ? distanceToTop < 30 : distanceToTop < -72)
      setNavbarScroll(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  // ✅ Barcha ekranlarda ko'rinadigan savat tugmasi
  const renderBasket = () => (
    <Box className={cls.shopIconWrapper} id="basketIcon">
      <button
        className={`${cls.shop} ${totalCount > 0 ? cls.total : ''}`}
        onClick={handleOpenDrawer}
        id="cartButton"
      >
        <div className={cls.shopping}>
          <p className={cls.shopText}>
            {localeMenu[locale]?.basket || 'Savat'} | {totalCount}
          </p>
        </div>
      </button>
    </Box>
  )

  return (
    <div className={cls.root}>
      <Container maxWidth="xl">
        <div
          style={
            !isMobile
              ? { transform: isAnimation ? 'translateY(0)' : 'translateY(-100px)', height: isAnimation ? '80px' : '0', opacity: isAnimation ? 1 : 0 }
              : { transform: isAnimation ? 'translateY(60px)' : 'translateY(-100px)', height: isAnimation ? '60px' : '0', opacity: isAnimation ? 1 : 0 }
          }
          className={cls.animation}
        >
          <Container maxWidth="xl">
            {menu?.length > 0 && (
              <div
                className={cls.menuList}
                style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', justifyContent: 'space-between' }}
              >
                <ReactSlick
                  {...{
                    focusOnSelect: true,
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    variableWidth: true,
                    nextArrow: <ArrowRight styles={cls.nextButton} />,
                    prevArrow: <ArrowLeft styles={cls.prevButton} />,
                    responsive: [
                      { breakpoint: 800, settings: { slidesToShow: 4, slidesToScroll: 2 } },
                      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                    ],
                  }}
                  className={cls.items}
                >
                  {menu?.map((item, index) => (
                    <li
                      ref={categoriesRef[index]}
                      key={item.id}
                      className={`${cls.listItem} ${item.title === 'Fast Food' || item.title === 'Taomlar' ? cls.foodItem : ''}`}
                    >
                      <Link
                        activeClass={cls.active}
                        to={item.title}
                        spy={true}
                        offset={!isMobile ? -80 : -140}
                        onSetActive={() => scrollToCategory(index)}
                        onClick={() => handleClick(item.title)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ReactSlick>
                {/* ✅ Desktop animatsiyali navbar da ham ko'rinadi */}
                {renderBasket()}
              </div>
            )}
          </Container>
        </div>

        <div className={navbarScroll ? cls.menuListTop : cls.navbar_scroll} id="slider-category">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <ul className={cls.list} style={{ flex: 1, display: 'flex', overflowX: 'auto' }}>
              {menu?.map((item) => (
                <li
                  key={item.id}
                  className={`${cls.listItem} ${item.title === 'Fast Food' || item.title === 'Taomlar' ? cls.foodItem : ''}`}
                  onClick={() => handleClick(item.title)}
                >
                  <AnchorLink offset={80} href={`#${item.title}`} style={{ whiteSpace: 'nowrap' }}>
                    {item.title}
                  </AnchorLink>
                </li>
              ))}
            </ul>

            {/* ✅ Mobilda ham, desktopda ham ko'rinadi — !isAnimation tekshiruvi olib tashlandi */}
            <div className={cls.staticBasket}>
              {renderBasket()}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Menu