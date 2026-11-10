// import React, { useState } from 'react'
// import cls from './Header.module.scss'
// import { Container, Typography, Box, Popover } from '@mui/material'
// import nookies from 'nookies'
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import Image from 'next/image'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'

// import LoginPopover from '../LoginPopover/LoginPopover'
// import RightMenu from '../RightMenu/RightMenu'
// import Navbar from '../Navbar/Navbar'
// import { LocationIcon } from '../Icons/LocationIcon'

// import basket from '../../public/images/svg/basket.svg'

// /* ICONS */
// import {
//   ExpandIcon,
//   EvosLogo,
//   MenuIcon,
//   User
// } from '../Icons'

// import { cartTotalPriceSelector } from '../../store/selectors/cartSelectors'
// import { numberToPrice } from '../../utils/numberToPrice'
// import { openCartDrawer } from '../../store/actions/drawerActions/drawerActions'
// import { menu } from '../../mock/menu'
// import { useIsMobile } from '../../utils/useIsMobile'

// import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
// import LanguageIcon from '@mui/icons-material/Language'

// import AddressPopup from './AddressPopup'

// function Header({ onOpenAddress }) {
//   const dispatch = useDispatch()
//   const totalPrice = useSelector(
//     (state) => cartTotalPriceSelector(state),
//     shallowEqual
//   )

//   const { currentAddress } = useSelector((state) => state.address)
//   const router = useRouter()
//   const { locale } = router
//   const [isMobile] = useIsMobile(800)

//   const [anchorLoginEl, setAnchorLoginEl] = useState(null)
//   const [anchorEl2, setAnchorEl2] = useState(null)
//   const [openRightMenu, setOpenRightMenu] = useState(false)

//   const handleOpenDrawer = () => {
//     dispatch(openCartDrawer())
//   }

//   const handleOpenRightMenu = () => {
//     setOpenRightMenu(!openRightMenu)
//   }

//   const handleCloseRightMenu = () => {
//     setOpenRightMenu(false)
//   }

//   const handleClick2 = (event) => {
//     setAnchorEl2(event.currentTarget)
//   }

//   const handleClose = () => {
//     setAnchorEl2(null)
//   }

//   const handleLoginClick = (event) => {
//     setAnchorLoginEl(event.currentTarget)
//   }

//   const handleLoginClose = () => {
//     setAnchorLoginEl(null)
//   }

//   const openLogin = Boolean(anchorLoginEl)
//   const idLogin = openLogin ? 'login-popover' : undefined
//   const { token } = nookies.get()

//   // Tanlangan til matnini aniqlash (Kichik harf yoki katta harfda)
//   const getLocaleLabel = (loc) => {
//     switch (loc) {
//       case 'uz': return 'UZ';
//       case 'ru': return 'RU';
//       case 'en': return 'EN';
//       default: return 'UZ';
//     }
//   }

//   return (
//     <>
//       <div className={cls.root}>
//         <Container maxWidth="xl">
//           <div className={cls.header}>

//             {/* LEFT */}
//             <div className={cls.headerLeftBox}>
//               <Link href="/">
//                 <a className={cls.brandLogo}>
//                   <EvosLogo />
//                 </a>
//               </Link>
//               <Box className={cls.navbar}>
//                 <Navbar />
//               </Box>
//             </div>

//             {/* RIGHT */}
//             <div className={cls.headerRightBox}>

//               {/* ADDRESS */}
//               <button className={cls.address} onClick={handleClick2}>
//                 {/* LOKATSIYA ICONI SHU YERDA O'ZGARTIRILDI VA RANG BERILDI */}
//                 <LocationOnRoundedIcon sx={{ color: '#007855' }} />
//                 <p>
//                   {currentAddress?.address?.replace('Узбекистан, Ташкент,', '') || menu[locale].selectYourAddress}
//                 </p>
//                 <ExpandIcon />
//               </button>

//               {/* LANGUAGE SECTION */}
//               <div className={cls.lang} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
//                 {/* YERSAYORA ICONI - RANGI #309b42 */}
//                 <LanguageIcon sx={{ color: '#007855' }} />

//                 {/* TANLANGAN TIL MATNI */}
//                 <Typography 
//                    variant="body1" 
//                    sx={{ 
//                      ml: 1, 
//                      fontWeight: 600, 
//                      fontSize: '14px', 
//                      textTransform: 'uppercase',
//                      color: '#000' 
//                    }}
//                 >
//                   {getLocaleLabel(locale)}
//                 </Typography>

//                 <div className={cls.expandIcon} style={{ marginLeft: '4px' }}>
//                   <ExpandIcon />
//                 </div>

//                 {/* HOVER QILGANDA CHIQADIGAN RO'YXAT */}
//                 <div className={cls.wrapper}>
//                   <div className={cls.langList}>
//                     <Link href={router.asPath} locale="uz">
//                       <a className={cls.listItem}>
//                         <img src="/images/svg/uz.svg" alt="uz" />
//                         <Typography sx={{ ml: 2 }}>O’zbekcha</Typography>
//                       </a>
//                     </Link>

//                     <Link href={router.asPath} locale="ru">
//                       <a className={cls.listItem}>
//                         <img src="/images/svg/ru.svg" alt="ru" />
//                         <Typography sx={{ ml: 2 }}>Русский</Typography>
//                       </a>
//                     </Link>

//                     <Link href={router.asPath} locale="en">
//                       <a className={cls.listItem}>
//                         <img src="/images/svg/en.svg" alt="en" />
//                         <Typography sx={{ ml: 2 }}>English</Typography>
//                       </a>
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               {/* USER ACCOUNT */}
//               <div className={token ? cls.userActive : cls.user} onClick={handleLoginClick}>
//                 <User className={cls.userIcon} color="#007855" />
//               </div>

//             </div>
//           </div>
//         </Container>

//         <RightMenu open={openRightMenu} onClose={handleCloseRightMenu} />
//       </div>

//       <AddressPopup
//         onOpenAddress={onOpenAddress}
//         anchorEl={anchorEl2}
//         handleClose={handleClose}
//       />

//       <Popover
//         id={idLogin}
//         open={openLogin}
//         anchorEl={anchorLoginEl}
//         onClose={handleLoginClose}
//       >
//         <LoginPopover />
//       </Popover>
//     </>
//   )
// }

// export default Header


// import React, { useState } from 'react'
// import cls from './Header.module.scss'
// import { Container, Typography, Box, Popover } from '@mui/material'
// import nookies from 'nookies'
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import Image from 'next/image'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'

// import LoginPopover from '../LoginPopover/LoginPopover'
// import RightMenu from '../RightMenu/RightMenu'
// import Navbar from '../Navbar/Navbar'
// import { LocationIcon } from '../Icons/LocationIcon'

// import basket from '../../public/images/svg/basket.svg'

// /* ICONS */
// import {
//   ExpandIcon,
//   EvosLogo,
//   MenuIcon,
//   User
// } from '../Icons'

// import { cartTotalPriceSelector } from '../../store/selectors/cartSelectors'
// import { numberToPrice } from '../../utils/numberToPrice'
// import { openCartDrawer } from '../../store/actions/drawerActions/drawerActions'
// import { menu } from '../../mock/menu'
// import { useIsMobile } from '../../utils/useIsMobile'

// import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
// import LanguageIcon from '@mui/icons-material/Language'

// import AddressPopup from './AddressPopup'

// function Header({ onOpenAddress }) {
//   const dispatch = useDispatch()
//   const totalPrice = useSelector(
//     (state) => cartTotalPriceSelector(state),
//     shallowEqual
//   )

//   const { currentAddress } = useSelector((state) => state.address)
//   const router = useRouter()
//   const { locale } = router
//   const [isMobile] = useIsMobile(800)

//   const [anchorLoginEl, setAnchorLoginEl] = useState(null)
//   const [anchorEl2, setAnchorEl2] = useState(null)
//   const [openRightMenu, setOpenRightMenu] = useState(false)

//   const handleOpenDrawer = () => {
//     dispatch(openCartDrawer())
//   }

//   const handleOpenRightMenu = () => {
//     setOpenRightMenu(!openRightMenu)
//   }

//   const handleCloseRightMenu = () => {
//     setOpenRightMenu(false)
//   }

//   const handleClick2 = (event) => {
//     setAnchorEl2(event.currentTarget)
//   }

//   const handleClose = () => {
//     setAnchorEl2(null)
//   }

//   const handleLoginClick = (event) => {
//     setAnchorLoginEl(event.currentTarget)
//   }

//   const handleLoginClose = () => {
//     setAnchorLoginEl(null)
//   }

//   const openLogin = Boolean(anchorLoginEl)
//   const idLogin = openLogin ? 'login-popover' : undefined
//   const { token } = nookies.get()

//   // Tanlangan til matnini aniqlash
//   const getLocaleLabel = (loc) => {
//     switch (loc) {
//       case 'uz': return 'UZ';
//       case 'ru': return 'RU';
//       case 'en': return 'EN';
//       default: return 'UZ';
//     }
//   }

//   return (
//     <>
//       <div className={cls.root}>
//         <Container maxWidth="xl">
//           <div className={cls.header}>

//             {/* LEFT */}
//             <div className={cls.headerLeftBox}>
//               <Link href="/">
//                 <a className={cls.brandLogo}>
//                   <EvosLogo />
//                 </a>
//               </Link>
//               <Box className={cls.navbar}>
//                 <Navbar />
//               </Box>
//             </div>

//             {/* RIGHT */}
//             <div className={cls.headerRightBox}>

//               {/* ADDRESS SECTION */}
//               <button className={cls.address} onClick={handleClick2} style={{ display: 'flex', alignItems: 'center' }}>
//                 {/* LOKATSIYA ICONI: FAQAT BORDER RANGI VA KATTAROQ HAJM */}
//                 <div style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   color: '#309b42',
//                   transform: 'scale(1.0)', // Iconni kattalashtirish
//                   marginRight: '8px'
//                 }}>
//                   <LocationIcon stroke="#007855" fill="none" />
//                 </div>
//                 <p>
//                   {currentAddress?.address?.replace('Узбекистан, Ташкент,', '') || menu[locale].selectYourAddress}
//                 </p>
//                 <ExpandIcon />
//               </button>

//               {/* LANGUAGE SECTION */}
//               <div className={cls.lang} style={{ display: 'flex', alignItems: 'center', transform: 'scale(1.3)', cursor: 'pointer' }}>
//                 <LanguageIcon sx={{ color: '#007855' }} />

//                 <Typography
//                   variant="body1"
//                   sx={{
//                     ml: 1,
//                     fontWeight: 600,
//                     fontSize: '14px',
//                     textTransform: 'uppercase',
//                     color: '#000'
//                   }}
//                 >
//                   {getLocaleLabel(locale)}
//                 </Typography>

//                 <div className={cls.expandIcon} style={{ marginLeft: '4px' }}>
//                   <ExpandIcon />
//                 </div>

//                 <div className={cls.wrapper}>
//                   <div className={cls.langList}>
//                     <Link href={router.asPath} locale="uz">
//                       <a className={cls.listItem}>
//                         <img src="/images/svg/uz.svg" alt="uz" />
//                         <Typography sx={{ ml: 2 }}>O’zbekcha</Typography>
//                       </a>
//                     </Link>
//                     <Link href={router.asPath} locale="ru">
//                       <a className={cls.listItem}>
//                         <img src="/images/svg/ru.svg" alt="ru" />
//                         <Typography sx={{ ml: 2 }}>Русский</Typography>
//                       </a>
//                     </Link>
//                     <Link href={router.asPath} locale="en">
//                       <a className={cls.listItem}>
//                         <img src="/images/svg/en.svg" alt="en" />
//                         <Typography sx={{ ml: 2 }}>English</Typography>
//                       </a>
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               {/* USER ACCOUNT */}
//               {/* <div className={token ? cls.userActive : cls.user} onClick={handleLoginClick} style={{transform: 'scale(1.0)' }}>
//                 <User className={cls.userIcon} color="#007855" />
//               </div> */}
//               <div
//                 className={token ? cls.userActive : cls.user}
//                 onClick={handleLoginClick}
//               >
//                 {/* Agar token bo'lsa (registratsiya o'tgan bo'lsa) oq rang, bo'lmasa yashil */}
//                 <User color={token ? "#fff" : "#007855"} />
//               </div>
//             </div>
//           </div>
//         </Container>

//         <RightMenu open={openRightMenu} onClose={handleCloseRightMenu} />
//       </div>

//       <AddressPopup
//         onOpenAddress={onOpenAddress}
//         anchorEl={anchorEl2}
//         handleClose={handleClose}
//       />

//       <Popover
//         id={idLogin}
//         open={openLogin}
//         anchorEl={anchorLoginEl}
//         onClose={handleLoginClose}
//       >
//         <LoginPopover />
//       </Popover>
//     </>
//   )
// }

// export default Header





















// import React, { useState } from 'react'
// import cls from './Header.module.scss'
// import { Container, Typography, Box, Popover } from '@mui/material'
// import nookies from 'nookies'
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'

// import LoginPopover from '../LoginPopover/LoginPopover'
// import RightMenu from '../RightMenu/RightMenu'
// import Navbar from '../Navbar/Navbar'
// import { LocationIcon } from '../Icons/LocationIcon'

// /* ICONS */
// import {
//   ExpandIcon,
//   EvosLogo,
//   User
// } from '../Icons'

// import { cartTotalPriceSelector } from '../../store/selectors/cartSelectors'
// import { openCartDrawer } from '../../store/actions/drawerActions/drawerActions'
// import { menu } from '../../mock/menu'
// import { useIsMobile } from '../../utils/useIsMobile'

// import LanguageIcon from '@mui/icons-material/Language'
// import AddressPopup from './AddressPopup'

// function Header({ onOpenAddress }) {
//   const dispatch = useDispatch()
//   const totalPrice = useSelector(
//     (state) => cartTotalPriceSelector(state),
//     shallowEqual
//   )

//   const { currentAddress } = useSelector((state) => state.address)
//   const router = useRouter()
//   const { locale } = router
//   const [isMobile] = useIsMobile(800)

//   const [anchorLoginEl, setAnchorLoginEl] = useState(null)
//   const [anchorEl2, setAnchorEl2] = useState(null)
//   const [openRightMenu, setOpenRightMenu] = useState(false)

//   const handleOpenDrawer = () => {
//     dispatch(openCartDrawer())
//   }

//   const handleClick2 = (event) => {
//     setAnchorEl2(event.currentTarget)
//   }

//   const handleClose = () => {
//     setAnchorEl2(null)
//   }

//   const handleLoginClick = (event) => {
//     setAnchorLoginEl(event.currentTarget)
//   }

//   const handleLoginClose = () => {
//     setAnchorLoginEl(null)
//   }

//   const openLogin = Boolean(anchorLoginEl)
//   const idLogin = openLogin ? 'login-popover' : undefined
//   const { token } = nookies.get()

//   const getLocaleLabel = (loc) => {
//     switch (loc) {
//       case 'uz': return 'UZ';
//       case 'ru': return 'RU';
//       case 'en': return 'EN';
//       default: return 'UZ';
//     }
//   }

//   return (
//     <>
//       <div className={cls.root}>
//         <Container maxWidth="xl">
//           <div className={cls.header}>

//             {/* LEFT */}
//             <div className={cls.headerLeftBox}>
//               <Link href="/">
//                 <a className={cls.brandLogo}>
//                   <EvosLogo />
//                 </a>
//               </Link>
//               <Box className={cls.navbar}>
//                 <Navbar />
//               </Box>
//             </div>

//             {/* RIGHT */}
//             <div className={cls.headerRightBox}>

//               {/* ADDRESS SECTION */}
//               <button className={cls.address} onClick={handleClick2}>
//                 <div style={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}>
//                   <LocationIcon stroke="#007855" fill="none" />
//                 </div>
//                 <p>
//                   {currentAddress?.address?.replace('Узбекистан, Ташкент,', '') || menu[locale].selectYourAddress}
                  
//                 </p>
//                 <ExpandIcon />
//               </button>

//               {/* LANGUAGE SECTION - DROPDOWN QISMI SHU YERDA */}
//               <div className={cls.lang}>
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <LanguageIcon sx={{ color: '#007855', fontSize: '32px'}} />
//                     <Typography
//                         variant="body1"
//                         sx={{
//                             ml: 1,
//                             fontWeight: 600,
//                             fontSize: '14px',
//                             textTransform: 'uppercase',
//                             color: '#000'
//                         }}
//                     >
//                         {getLocaleLabel(locale)}
//                     </Typography>
//                     <div className={cls.expandIcon} style={{ marginLeft: '4px' }}>
//                         <ExpandIcon />
//                     </div>
//                 </div>

//                 {/* SCSS dagi .wrapper klassi hoverda ishlashi uchun */}
//                 <div className={cls.wrapper}>
//                   <div className={cls.langList}>
//                     {['uz', 'ru', 'en'].map((lng) => (
//                         <Link key={lng} href={router.asPath} locale={lng}>
//                             <a className={cls.listItem}>
//                                 <img src={`/images/svg/${lng}.svg`} alt={lng} width={24} height={24} />
//                                 <Typography sx={{ ml: 2 }}>
//                                     {lng === 'uz' ? 'O’zbekcha' : lng === 'ru' ? 'Русский' : 'English'}
//                                 </Typography>
//                             </a>
//                         </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* USER ACCOUNT */}
//               <div
//                 className={token ? cls.userActive : cls.user}
//                 onClick={handleLoginClick}
//               >
//                 <User color={token ? "#fff" : "#007855"} />
//               </div>
//             </div>
//           </div>
//         </Container>

//         <RightMenu open={openRightMenu} onClose={() => setOpenRightMenu(false)} />
//       </div>

//       <AddressPopup
//         onOpenAddress={onOpenAddress}
//         anchorEl={anchorEl2}
//         handleClose={handleClose}
//       />

//       <Popover
//         id={idLogin}
//         open={openLogin}
//         anchorEl={anchorLoginEl}
//         onClose={handleLoginClose}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       >
//         <LoginPopover />
//       </Popover>
//     </>
//   )
// }

// export default Header




















// import React, { useState } from 'react'
// import cls from './Header.module.scss'
// import { Container, Typography, Box, Popover } from '@mui/material'
// import nookies from 'nookies'
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'

// import LoginPopover from '../LoginPopover/LoginPopover'
// import RightMenu from '../RightMenu/RightMenu'
// import Navbar from '../Navbar/Navbar'
// import { LocationIcon } from '../Icons/LocationIcon'

// import { ExpandIcon, EvosLogo, User } from '../Icons'

// import { cartTotalPriceSelector } from '../../store/selectors/cartSelectors'
// import { openCartDrawer } from '../../store/actions/drawerActions/drawerActions'
// import { menu } from '../../mock/menu'
// import { useIsMobile } from '../../utils/useIsMobile'

// import LanguageIcon from '@mui/icons-material/Language'
// import MenuIcon from '@mui/icons-material/Menu'
// import CloseIcon from '@mui/icons-material/Close'
// import AddressPopup from './AddressPopup'

// // ─── MOBILE MENU (inline) ───────────────────────────────────────────────────
// function MobileDrawer({ open, onClose, onOpenAddress, onLoginClick, currentAddress, locale, router, token }) {
//   const [aboutOpen, setAboutOpen] = useState(false)
//   const [kidsOpen, setKidsOpen]   = useState(false)
//   const [langOpen, setLangOpen]   = useState(false)
//   const { pathname } = router

//   const close = () => { onClose(); setAboutOpen(false); setKidsOpen(false); setLangOpen(false) }

//   const getLangLabel = (l) => ({ uz: "O'zbekcha", ru: 'Русский', en: 'English' }[l] || l)

//   const row = (onClick, children, active) => (
//     <button onClick={onClick} style={{
//       display:'flex', alignItems:'center', justifyContent:'space-between',
//       width:'100%', padding:'14px 20px', background:'none', border:'none',
//       borderBottom:'1px solid #f5f5f5', cursor:'pointer',
//       fontSize:15, fontWeight: active ? 700 : 500, color: active ? '#007855' : '#111',
//     }}>{children}</button>
//   )

//   const chevron = (isOpen) => (
//     <span style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition:'0.25s', display:'flex', flexShrink:0 }}>
//       <ExpandIcon />
//     </span>
//   )

//   return (
//     <>
//       {/* Overlay */}
//       {open && (
//         <div onClick={close} style={{
//           position:'fixed', inset:0, backgroundColor:'rgba(0,0,0,0.45)',
//           backdropFilter:'blur(4px)', zIndex:10000,
//         }}/>
//       )}

//       {/* Drawer */}
//       <div style={{
//         position:'fixed', top:0, right:0,
//         width:'85vw', maxWidth:340, height:'100vh',
//         backgroundColor:'#fff', zIndex:10001,
//         transform: open ? 'translateX(0)' : 'translateX(110%)',
//         transition:'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
//         display:'flex', flexDirection:'column', overflowY:'auto',
//         boxShadow:'-4px 0 24px rgba(0,0,0,0.13)',
//       }}>

//         {/* Bosh */}
//         <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 20px', borderBottom:'1px solid #f0f0f0' }}>
//           <span style={{ fontSize:16, fontWeight:700, color:'#111' }}>Menyu</span>
//           <button onClick={close} style={{ background:'none', border:'none', cursor:'pointer', padding:4, display:'flex' }}>
//             <CloseIcon style={{ fontSize:24, color:'#555' }} />
//           </button>
//         </div>

//         {/* Manzil */}
//         <button onClick={(e) => { close(); onOpenAddress?.(e) }} style={{
//           display:'flex', alignItems:'center', gap:10,
//           padding:'14px 20px', background:'#f8fffe',
//           border:'none', borderBottom:'1px solid #f0f0f0',
//           cursor:'pointer', width:'100%', textAlign:'left',
//         }}>
//           <LocationIcon stroke="#007855" fill="none" />
//           <span style={{ fontSize:14, color:'#007855', fontWeight:500, flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
//             {currentAddress?.address?.replace('Узбекистан, Ташкент,','') || menu[locale].selectYourAddress}
//           </span>
//           <ExpandIcon />
//         </button>

//         {/* Nav */}
//         <div style={{ flex:1 }}>

//           {/* Biz haqimizda */}
//           {row(() => setAboutOpen(v=>!v), <><span>{menu[locale].abouts}</span>{chevron(aboutOpen)}</>, false)}
//           {aboutOpen && (
//             <div style={{ background:'#f9f9f9', paddingLeft:12 }}>
//               {[
//                 { href:'/news',    label:menu[locale].news },
//                 { href:'/contacts',label:menu[locale].contacts },
//                 { href:'/about/gallery/gallery-item/#gallery', label:menu[locale].certificates },
//               ].map(item => (
//                 <Link key={item.href} href={item.href}>
//                   <a onClick={close} style={{ display:'block', padding:'12px 20px', fontSize:14, color:'#444', textDecoration:'none' }}>
//                     {item.label}
//                   </a>
//                 </Link>
//               ))}
//             </div>
//           )}

//           {/* Oddiy linklar */}
//           {[
//             { href:'/branches',      label:menu[locale].branches },
//             { href:'/vacancy',       label:menu[locale].vacancies },
//             { href:'/table-service', label:menu[locale].tableService },
//           ].map(item => (
//             <Link key={item.href} href={item.href}>
//               <a onClick={close} style={{
//                 display:'block', padding:'14px 20px', fontSize:15,
//                 color: pathname===item.href ? '#007855' : '#111',
//                 fontWeight: pathname===item.href ? 700 : 500,
//                 textDecoration:'none', borderBottom:'1px solid #f5f5f5',
//               }}>{item.label}</a>
//             </Link>
//           ))}

//           {/* Kids */}
//           {row(() => setKidsOpen(v=>!v),
//             <><span style={{ fontWeight:900, color:'#0a8cdc', fontSize:18 }}>kids</span>{chevron(kidsOpen)}</>,
//           false)}
//           {kidsOpen && (
//             <div style={{ background:'#f9f9f9', padding:'8px 20px 12px', borderBottom:'1px solid #f5f5f5' }}>
//               {[
//                 { href:'/kids/playgrounds/', label:menu[locale].playground, bg:'#fa6464' },
//                 { href:'/kids/aquagrim/',    label:menu[locale].aquagrim,   bg:'#00b987' },
//                 { href:'/kids/events/',      label:menu[locale].events,     bg:'#ffeb32', color:'#fa6464' },
//               ].map(item => (
//                 <Link key={item.href} href={item.href}>
//                   <a onClick={close} style={{
//                     display:'inline-block', margin:'4px 4px 4px 0',
//                     padding:'6px 14px', borderRadius:20,
//                     background:item.bg, color: item.color || '#fff',
//                     fontSize:13, fontWeight:700, textDecoration:'none',
//                   }}>{item.label}</a>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Pastki qism */}
//         <div style={{ borderTop:'1px solid #f0f0f0', padding:'16px 20px', display:'flex', flexDirection:'column', gap:10 }}>

//           {/* Til */}
//           <button onClick={() => setLangOpen(v=>!v)} style={{
//             display:'flex', alignItems:'center', gap:8,
//             background:'none', border:'none', cursor:'pointer', padding:'8px 0', width:'100%',
//           }}>
//             <LanguageIcon style={{ color:'#007855', fontSize:22 }} />
//             <span style={{ fontSize:14, fontWeight:600, color:'#111' }}>{getLangLabel(locale)}</span>
//             <span style={{ marginLeft:'auto', transform: langOpen?'rotate(180deg)':'none', transition:'0.25s', display:'flex' }}>
//               <ExpandIcon />
//             </span>
//           </button>
//           {langOpen && (
//             <div style={{ paddingLeft:8 }}>
//               {['uz','ru','en'].map(lng => (
//                 <Link key={lng} href={router.asPath} locale={lng}>
//                   <a onClick={close} style={{
//                     display:'flex', alignItems:'center', gap:10, padding:'10px 8px',
//                     textDecoration:'none', fontSize:14,
//                     color: locale===lng ? '#007855' : '#444',
//                     fontWeight: locale===lng ? 700 : 400,
//                   }}>
//                     <img src={`/images/svg/${lng}.svg`} alt={lng} width={22} height={22} />
//                     {getLangLabel(lng)}
//                   </a>
//                 </Link>
//               ))}
//             </div>
//           )}

//           {/* Login */}
//           <button onClick={() => { close(); onLoginClick?.() }} style={{
//             display:'flex', alignItems:'center', gap:10,
//             padding:'12px 16px', borderRadius:12,
//             border:'2px solid #007855',
//             background: token ? '#007855' : 'transparent',
//             cursor:'pointer', width:'100%',
//           }}>
//             <User color={token ? '#fff' : '#007855'} />
//             <span style={{ fontSize:14, fontWeight:600, color: token ? '#fff' : '#007855' }}>
//               {token ? (menu[locale].myOrders || 'Buyurtmalarim') : (menu[locale].login || 'Kirish')}
//             </span>
//           </button>
//         </div>
//       </div>
//     </>
//   )
// }
// // ────────────────────────────────────────────────────────────────────────────

// function Header({ onOpenAddress }) {
//   const dispatch = useDispatch()
//   const { currentAddress } = useSelector((state) => state.address)
//   const router = useRouter()
//   const { locale } = router
//   const [isMobile] = useIsMobile(800)

//   const [anchorLoginEl, setAnchorLoginEl] = useState(null)
//   const [anchorEl2, setAnchorEl2]         = useState(null)
//   const [openRightMenu, setOpenRightMenu] = useState(false)
//   const [mobileOpen, setMobileOpen]       = useState(false)

//   const handleOpenDrawer = () => dispatch(openCartDrawer())
//   const handleClick2     = (e) => setAnchorEl2(e?.currentTarget || null)
//   const handleClose      = ()  => setAnchorEl2(null)
//   const handleLoginClick = (e) => setAnchorLoginEl(e.currentTarget)
//   const handleLoginClose = ()  => setAnchorLoginEl(null)

//   const openLogin = Boolean(anchorLoginEl)
//   const { token } = nookies.get()

//   const getLocaleLabel = (loc) => ({ uz:'UZ', ru:'RU', en:'EN' }[loc] || 'UZ')

//   return (
//     <>
//       <div className={cls.root}>
//         <Container maxWidth="xl">
//           <div className={cls.header}>

//             {/* LEFT */}
//             <div className={cls.headerLeftBox}>
//               <Link href="/"><a className={cls.brandLogo}><EvosLogo /></a></Link>
//               <Box className={cls.navbar}><Navbar /></Box>
//             </div>

//             {/* RIGHT — Desktop */}
//             <div className={cls.headerRightBox}>
//               <button className={cls.address} onClick={handleClick2}>
//                 <div style={{ display:'flex', alignItems:'center', marginRight:'8px' }}>
//                   <LocationIcon stroke="#007855" fill="none" />
//                 </div>
//                 <p>{currentAddress?.address?.replace('Узбекистан, Ташкент,','') || menu[locale].selectYourAddress}</p>
//                 <ExpandIcon />
//               </button>

//               <div className={cls.lang}>
//                 <div style={{ display:'flex', alignItems:'center' }}>
//                   <LanguageIcon sx={{ color:'#007855', fontSize:'32px' }} />
//                   <Typography variant="body1" sx={{ ml:1, fontWeight:600, fontSize:'14px', textTransform:'uppercase', color:'#000' }}>
//                     {getLocaleLabel(locale)}
//                   </Typography>
//                   <div className={cls.expandIcon} style={{ marginLeft:'4px' }}><ExpandIcon /></div>
//                 </div>
//                 <div className={cls.wrapper}>
//                   <div className={cls.langList}>
//                     {['uz','ru','en'].map((lng) => (
//                       <Link key={lng} href={router.asPath} locale={lng}>
//                         <a className={cls.listItem}>
//                           <img src={`/images/svg/${lng}.svg`} alt={lng} width={24} height={24} />
//                           <Typography sx={{ ml:2 }}>{lng==='uz'?"O'zbekcha":lng==='ru'?'Русский':'English'}</Typography>
//                         </a>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className={token ? cls.userActive : cls.user} onClick={handleLoginClick}>
//                 <User color={token ? "#fff" : "#007855"} />
//               </div>
//             </div>

//             {/* RIGHT — Mobile hamburger */}
//             <button
//               className={cls.mobileMenuBtn}
//               onClick={() => setMobileOpen(true)}
//             >
//               <MenuIcon style={{ fontSize:28, color:'#007855' }} />
//             </button>

//           </div>
//         </Container>
//         <RightMenu open={openRightMenu} onClose={() => setOpenRightMenu(false)} />
//       </div>

//       {/* Mobile Drawer */}
//       <MobileDrawer
//         open={mobileOpen}
//         onClose={() => setMobileOpen(false)}
//         onOpenAddress={onOpenAddress}
//         onLoginClick={handleLoginClick}
//         currentAddress={currentAddress}
//         locale={locale}
//         router={router}
//         token={token}
//       />

//       <AddressPopup onOpenAddress={onOpenAddress} anchorEl={anchorEl2} handleClose={handleClose} />

//       <Popover
//         id={openLogin ? 'login-popover' : undefined}
//         open={openLogin}
//         anchorEl={anchorLoginEl}
//         onClose={handleLoginClose}
//         anchorOrigin={{ vertical:'bottom', horizontal:'right' }}
//         transformOrigin={{ vertical:'top', horizontal:'right' }}
//       >
//         <LoginPopover />
//       </Popover>
//     </>
//   )
// }

// export default Header
























// import React, { useState } from 'react'
// import cls from './Header.module.scss'
// import { Container, Typography, Box, Popover } from '@mui/material'
// import nookies from 'nookies'
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'

// import LoginPopover from '../LoginPopover/LoginPopover'
// import RightMenu from '../RightMenu/RightMenu'
// import Navbar from '../Navbar/Navbar'
// import { LocationIcon } from '../Icons/LocationIcon'

// import { ExpandIcon, EvosLogo, User } from '../Icons'

// import { cartTotalPriceSelector } from '../../store/selectors/cartSelectors'
// import { openCartDrawer } from '../../store/actions/drawerActions/drawerActions'
// import { menu } from '../../mock/menu'
// import { useIsMobile } from '../../utils/useIsMobile'

// import LanguageIcon from '@mui/icons-material/Language'
// import MenuIcon from '@mui/icons-material/Menu'
// import CloseIcon from '@mui/icons-material/Close'
// import AddressPopup from './AddressPopup'

// // ─── MOBILE MENU (inline) ───────────────────────────────────────────────────
// function MobileDrawer({ open, onClose, onOpenAddress, onLoginClick, currentAddress, locale, router, token }) {
//   const [aboutOpen, setAboutOpen] = useState(false)
//   const [kidsOpen, setKidsOpen]   = useState(false)
//   const [langOpen, setLangOpen]   = useState(false)
//   const { pathname } = router

//   const close = () => { onClose(); setAboutOpen(false); setKidsOpen(false); setLangOpen(false) }

//   const getLangLabel = (l) => ({ uz: "O'zbekcha", ru: 'Русский', en: 'English' }[l] || l)

//   const row = (onClick, children, active) => (
//     <button onClick={onClick} style={{
//       display:'flex', alignItems:'center', justifyContent:'space-between',
//       width:'100%', padding:'14px 20px', background:'none', border:'none',
//       borderBottom:'1px solid #f5f5f5', cursor:'pointer',
//       fontSize:15, fontWeight: active ? 700 : 500, color: active ? '#007855' : '#111',
//     }}>{children}</button>
//   )

//   const chevron = (isOpen) => (
//     <span style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition:'0.25s', display:'flex', flexShrink:0 }}>
//       <ExpandIcon />
//     </span>
//   )

//   return (
//     <>
//       {/* Overlay */}
//       {open && (
//         <div onClick={close} style={{
//           position:'fixed', inset:0, backgroundColor:'rgba(0,0,0,0.45)',
//           backdropFilter:'blur(4px)', zIndex:10000,
//         }}/>
//       )}

//       {/* Drawer */}
//       <div style={{
//         position:'fixed', top:0, right:0,
//         width:'85vw', maxWidth:340, height:'100vh',
//         backgroundColor:'#fff', zIndex:10001,
//         transform: open ? 'translateX(0)' : 'translateX(110%)',
//         transition:'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
//         display:'flex', flexDirection:'column', overflowY:'auto',
//         boxShadow:'-4px 0 24px rgba(0,0,0,0.13)',
//       }}>

//         {/* Bosh */}
//         <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 20px', borderBottom:'1px solid #f0f0f0' }}>
//           <span style={{ fontSize:16, fontWeight:700, color:'#111' }}>Menyu</span>
//           <button onClick={close} style={{ background:'none', border:'none', cursor:'pointer', padding:4, display:'flex' }}>
//             <CloseIcon style={{ fontSize:24, color:'#555' }} />
//           </button>
//         </div>

//         {/* Manzil */}
//         <button onClick={(e) => { close(); onOpenAddress?.(e) }} style={{
//           display:'flex', alignItems:'center', gap:10,
//           padding:'14px 20px', background:'#f8fffe',
//           border:'none', borderBottom:'1px solid #f0f0f0',
//           cursor:'pointer', width:'100%', textAlign:'left',
//         }}>
//           <LocationIcon stroke="#007855" fill="none" />
//           <span style={{ fontSize:14, color:'#007855', fontWeight:500, flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
//             {currentAddress?.address?.replace('Узбекистан, Ташкент,','') || menu[locale].selectYourAddress}
//           </span>
//           <ExpandIcon />
//         </button>

//         {/* Nav */}
//         <div style={{ flex:1 }}>

//           {/* Biz haqimizda */}
//           {row(() => setAboutOpen(v=>!v), <><span>{menu[locale].abouts}</span>{chevron(aboutOpen)}</>, false)}
//           {aboutOpen && (
//             <div style={{ background:'#f9f9f9', paddingLeft:12 }}>
//               {[
//                 { href:'/news',    label:menu[locale].news },
//                 { href:'/contacts',label:menu[locale].contacts },
//                 { href:'/about/gallery/gallery-item/#gallery', label:menu[locale].certificates },
//               ].map(item => (
//                 <Link key={item.href} href={item.href}>
//                   <a onClick={close} style={{ display:'block', padding:'12px 20px', fontSize:14, color:'#444', textDecoration:'none' }}>
//                     {item.label}
//                   </a>
//                 </Link>
//               ))}
//             </div>
//           )}

//           {/* Oddiy linklar */}
//           {[
//             { href:'/branches',      label:menu[locale].branches },
//             { href:'/vacancy',       label:menu[locale].vacancies },
//             { href:'/table-service', label:menu[locale].tableService },
//           ].map(item => (
//             <Link key={item.href} href={item.href}>
//               <a onClick={close} style={{
//                 display:'block', padding:'14px 20px', fontSize:15,
//                 color: pathname===item.href ? '#007855' : '#111',
//                 fontWeight: pathname===item.href ? 700 : 500,
//                 textDecoration:'none', borderBottom:'1px solid #f5f5f5',
//               }}>{item.label}</a>
//             </Link>
//           ))}

//           {/* Kids */}
//           {row(() => setKidsOpen(v=>!v),
//             <><span style={{ fontWeight:900, color:'#0a8cdc', fontSize:18 }}>kids</span>{chevron(kidsOpen)}</>,
//           false)}
//           {kidsOpen && (
//             <div style={{ background:'#f9f9f9', padding:'8px 20px 12px', borderBottom:'1px solid #f5f5f5' }}>
//               {[
//                 { href:'/kids/playgrounds/', label:menu[locale].playground, bg:'#fa6464' },
//                 { href:'/kids/aquagrim/',    label:menu[locale].aquagrim,   bg:'#00b987' },
//                 { href:'/kids/events/',      label:menu[locale].events,     bg:'#ffeb32', color:'#fa6464' },
//               ].map(item => (
//                 <Link key={item.href} href={item.href}>
//                   <a onClick={close} style={{
//                     display:'inline-block', margin:'4px 4px 4px 0',
//                     padding:'6px 14px', borderRadius:20,
//                     background:item.bg, color: item.color || '#fff',
//                     fontSize:13, fontWeight:700, textDecoration:'none',
//                   }}>{item.label}</a>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Pastki qism */}
//         <div style={{ borderTop:'1px solid #f0f0f0', padding:'16px 20px', display:'flex', flexDirection:'column', gap:10 }}>

//           {/* Til */}
//           <button onClick={() => setLangOpen(v=>!v)} style={{
//             display:'flex', alignItems:'center', gap:8,
//             background:'none', border:'none', cursor:'pointer', padding:'8px 0', width:'100%',
//           }}>
//             <LanguageIcon style={{ color:'#007855', fontSize:22 }} />
//             <span style={{ fontSize:14, fontWeight:600, color:'#111' }}>{getLangLabel(locale)}</span>
//             <span style={{ marginLeft:'auto', transform: langOpen?'rotate(180deg)':'none', transition:'0.25s', display:'flex' }}>
//               <ExpandIcon />
//             </span>
//           </button>
//           {langOpen && (
//             <div style={{ paddingLeft:8 }}>
//               {['uz','ru','en'].map(lng => (
//                 <Link key={lng} href={router.asPath} locale={lng}>
//                   <a onClick={close} style={{
//                     display:'flex', alignItems:'center', gap:10, padding:'10px 8px',
//                     textDecoration:'none', fontSize:14,
//                     color: locale===lng ? '#007855' : '#444',
//                     fontWeight: locale===lng ? 700 : 400,
//                   }}>
//                     <img src={`/images/svg/${lng}.svg`} alt={lng} width={22} height={22} />
//                     {getLangLabel(lng)}
//                   </a>
//                 </Link>
//               ))}
//             </div>
//           )}

//           {/* ✅ Login — event yuboriladi, keyin drawer yopiladi */}
//           <button onClick={(e) => { close(); onLoginClick?.(e) }} style={{
//             display:'flex', alignItems:'center', gap:10,
//             padding:'12px 16px', borderRadius:12,
//             border:'2px solid #007855',
//             background: token ? '#007855' : 'transparent',
//             cursor:'pointer', width:'100%',
//           }}>
//             <User color={token ? '#fff' : '#007855'} />
//             <span style={{ fontSize:14, fontWeight:600, color: token ? '#fff' : '#007855' }}>
//               {token ? (menu[locale].myOrders || 'Buyurtmalarim') : (menu[locale].login || 'Kirish')}
//             </span>
//           </button>
//         </div>
//       </div>
//     </>
//   )
// }
// // ────────────────────────────────────────────────────────────────────────────

// function Header({ onOpenAddress }) {
//   const dispatch = useDispatch()
//   const { currentAddress } = useSelector((state) => state.address)
//   const router = useRouter()
//   const { locale } = router
//   const [isMobile] = useIsMobile(800)

//   const [anchorLoginEl, setAnchorLoginEl] = useState(null)
//   const [anchorEl2, setAnchorEl2]         = useState(null)
//   const [openRightMenu, setOpenRightMenu] = useState(false)
//   const [mobileOpen, setMobileOpen]       = useState(false)

//   const handleOpenDrawer = () => dispatch(openCartDrawer())
//   const handleClick2     = (e) => setAnchorEl2(e?.currentTarget || null)
//   const handleClose      = ()  => setAnchorEl2(null)
//   // ✅ FIX: e bo'lmasa null o'rnatadi, xato chiqmaydi
//   const handleLoginClick = (e) => setAnchorLoginEl(e?.currentTarget || null)
//   const handleLoginClose = ()  => setAnchorLoginEl(null)

//   const openLogin = Boolean(anchorLoginEl)
//   const { token } = nookies.get()

//   const getLocaleLabel = (loc) => ({ uz:'UZ', ru:'RU', en:'EN' }[loc] || 'UZ')

//   return (
//     <>
//       <div className={cls.root}>
//         <Container maxWidth="xl">
//           <div className={cls.header}>

//             {/* LEFT */}
//             <div className={cls.headerLeftBox}>
//               <Link href="/"><a className={cls.brandLogo}><EvosLogo /></a></Link>
//               <Box className={cls.navbar}><Navbar /></Box>
//             </div>

//             {/* RIGHT — Desktop */}
//             <div className={cls.headerRightBox}>
//               <button className={cls.address} onClick={handleClick2}>
//                 <div style={{ display:'flex', alignItems:'center', marginRight:'8px' }}>
//                   <LocationIcon stroke="#007855" fill="none" />
//                 </div>
//                 <p>{currentAddress?.address?.replace('Узбекистан, Ташкент,','') || menu[locale].selectYourAddress}</p>
//                 <ExpandIcon />
//               </button>

//               <div className={cls.lang}>
//                 <div style={{ display:'flex', alignItems:'center' }}>
//                   <LanguageIcon sx={{ color:'#007855', fontSize:'32px' }} />
//                   <Typography variant="body1" sx={{ ml:1, fontWeight:600, fontSize:'14px', textTransform:'uppercase', color:'#000' }}>
//                     {getLocaleLabel(locale)}
//                   </Typography>
//                   <div className={cls.expandIcon} style={{ marginLeft:'4px' }}><ExpandIcon /></div>
//                 </div>
//                 <div className={cls.wrapper}>
//                   <div className={cls.langList}>
//                     {['uz','ru','en'].map((lng) => (
//                       <Link key={lng} href={router.asPath} locale={lng}>
//                         <a className={cls.listItem}>
//                           <img src={`/images/svg/${lng}.svg`} alt={lng} width={24} height={24} />
//                           <Typography sx={{ ml:2 }}>{lng==='uz'?"O'zbekcha":lng==='ru'?'Русский':'English'}</Typography>
//                         </a>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className={token ? cls.userActive : cls.user} onClick={handleLoginClick}>
//                 <User color={token ? "#fff" : "#007855"} />
//               </div>
//             </div>

//             {/* RIGHT — Mobile hamburger */}
//             <button
//               className={cls.mobileMenuBtn}
//               onClick={() => setMobileOpen(true)}
//             >
//               <MenuIcon style={{ fontSize:28, color:'#007855' }} />
//             </button>

//           </div>
//         </Container>
//         <RightMenu open={openRightMenu} onClose={() => setOpenRightMenu(false)} />
//       </div>

//       {/* Mobile Drawer */}
//       <MobileDrawer
//         open={mobileOpen}
//         onClose={() => setMobileOpen(false)}
//         onOpenAddress={onOpenAddress}
//         onLoginClick={handleLoginClick}
//         currentAddress={currentAddress}
//         locale={locale}
//         router={router}
//         token={token}
//       />

//       <AddressPopup onOpenAddress={onOpenAddress} anchorEl={anchorEl2} handleClose={handleClose} />

//       <Popover
//         id={openLogin ? 'login-popover' : undefined}
//         open={openLogin}
//         anchorEl={anchorLoginEl}
//         onClose={handleLoginClose}
//         anchorOrigin={{ vertical:'bottom', horizontal:'right' }}
//         transformOrigin={{ vertical:'top', horizontal:'right' }}
//       >
//         <LoginPopover />
//       </Popover>
//     </>
//   )
// }

// export default Header




















import React, { useState } from 'react'
import cls from './Header.module.scss'
import { Container, Typography, Box, Popover, Dialog, DialogContent, useMediaQuery, useTheme } from '@mui/material'
import nookies from 'nookies'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import LoginPopover from '../LoginPopover/LoginPopover'
import RightMenu from '../RightMenu/RightMenu'
import Navbar from '../Navbar/Navbar'
import { LocationIcon } from '../Icons/LocationIcon'
import { ExpandIcon, EvosLogo, User } from '../Icons'
import { openCartDrawer } from '../../store/actions/drawerActions/drawerActions'
import { menu } from '../../mock/menu'
import { useIsMobile } from '../../utils/useIsMobile'

import LanguageIcon from '@mui/icons-material/Language'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import AddressPopup from './AddressPopup'

// ─── MOBILE MENU ─────────────────────────────────────────────────────────────
function MobileDrawer({ open, onClose, onOpenAddress, onLoginClick, currentAddress, locale, router, token }) {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [kidsOpen, setKidsOpen]   = useState(false)
  const [langOpen, setLangOpen]   = useState(false)
  const { pathname } = router

  const close = () => { onClose(); setAboutOpen(false); setKidsOpen(false); setLangOpen(false) }
  const getLangLabel = (l) => ({ uz: "O'zbekcha", ru: 'Русский', en: 'English' }[l] || l)

  const row = (onClick, children, active) => (
    <button onClick={onClick} style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      width:'100%', padding:'14px 20px', background:'none', border:'none',
      borderBottom:'1px solid #f5f5f5', cursor:'pointer',
      fontSize:15, fontWeight: active ? 700 : 500, color: active ? '#007855' : '#111',
    }}>{children}</button>
  )

  const chevron = (isOpen) => (
    <span style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition:'0.25s', display:'flex', flexShrink:0 }}>
      <ExpandIcon />
    </span>
  )

  return (
    <>
      {open && (
        <div onClick={close} style={{
          position:'fixed', inset:0, backgroundColor:'rgba(0,0,0,0.45)',
          backdropFilter:'blur(4px)', zIndex:10000,
        }}/>
      )}

      <div style={{
        position:'fixed', top:0, right:0,
        width:'85vw', maxWidth:340, height:'100vh',
        backgroundColor:'#fff', zIndex:10001,
        transform: open ? 'translateX(0)' : 'translateX(110%)',
        transition:'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        display:'flex', flexDirection:'column', overflowY:'auto',
        boxShadow:'-4px 0 24px rgba(0,0,0,0.13)',
      }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 20px', borderBottom:'1px solid #f0f0f0' }}>
          <span style={{ fontSize:16, fontWeight:700, color:'#111' }}>Menyu</span>
          <button onClick={close} style={{ background:'none', border:'none', cursor:'pointer', padding:4, display:'flex' }}>
            <CloseIcon style={{ fontSize:24, color:'#555' }} />
          </button>
        </div>

        <button onClick={(e) => { close(); onOpenAddress?.(e) }} style={{
          display:'flex', alignItems:'center', gap:10,
          padding:'14px 20px', background:'#f8fffe',
          border:'none', borderBottom:'1px solid #f0f0f0',
          cursor:'pointer', width:'100%', textAlign:'left',
        }}>
          <LocationIcon stroke="#007855" fill="none" />
          <span style={{ fontSize:14, color:'#007855', fontWeight:500, flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
            {currentAddress?.address?.replace('Узбекистан, Ташкент,','') || menu[locale].selectYourAddress}
          </span>
          <ExpandIcon />
        </button>

        <div style={{ flex:1 }}>
          {row(() => setAboutOpen(v=>!v), <><span>{menu[locale].abouts}</span>{chevron(aboutOpen)}</>, false)}
          {aboutOpen && (
            <div style={{ background:'#f9f9f9', paddingLeft:12 }}>
              {[
                { href:'/news',    label:menu[locale].news },
                { href:'/contacts',label:menu[locale].contacts },
                { href:'/about/gallery/gallery-item/#gallery', label:menu[locale].certificates },
              ].map(item => (
                <Link key={item.href} href={item.href}>
                  <a onClick={close} style={{ display:'block', padding:'12px 20px', fontSize:14, color:'#444', textDecoration:'none' }}>
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          )}

          {[
            { href:'/branches',      label:menu[locale].branches },
            { href:'/vacancy',       label:menu[locale].vacancies },
            { href:'/table-service', label:menu[locale].tableService },
          ].map(item => (
            <Link key={item.href} href={item.href}>
              <a onClick={close} style={{
                display:'block', padding:'14px 20px', fontSize:15,
                color: pathname===item.href ? '#007855' : '#111',
                fontWeight: pathname===item.href ? 700 : 500,
                textDecoration:'none', borderBottom:'1px solid #f5f5f5',
              }}>{item.label}</a>
            </Link>
          ))}

          {row(() => setKidsOpen(v=>!v),
            <><span style={{ fontWeight:900, color:'#0a8cdc', fontSize:18 }}>kids</span>{chevron(kidsOpen)}</>,
          false)}
          {kidsOpen && (
            <div style={{ background:'#f9f9f9', padding:'8px 20px 12px', borderBottom:'1px solid #f5f5f5' }}>
              {[
                { href:'/kids/playgrounds/', label:menu[locale].playground, bg:'#fa6464' },
                { href:'/kids/aquagrim/',    label:menu[locale].aquagrim,   bg:'#00b987' },
                { href:'/kids/events/',      label:menu[locale].events,     bg:'#ffeb32', color:'#fa6464' },
              ].map(item => (
                <Link key={item.href} href={item.href}>
                  <a onClick={close} style={{
                    display:'inline-block', margin:'4px 4px 4px 0',
                    padding:'6px 14px', borderRadius:20,
                    background:item.bg, color: item.color || '#fff',
                    fontSize:13, fontWeight:700, textDecoration:'none',
                  }}>{item.label}</a>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div style={{ borderTop:'1px solid #f0f0f0', padding:'16px 20px', display:'flex', flexDirection:'column', gap:10 }}>
          <button onClick={() => setLangOpen(v=>!v)} style={{
            display:'flex', alignItems:'center', gap:8,
            background:'none', border:'none', cursor:'pointer', padding:'8px 0', width:'100%',
          }}>
            <LanguageIcon style={{ color:'#007855', fontSize:22 }} />
            <span style={{ fontSize:14, fontWeight:600, color:'#111' }}>{getLangLabel(locale)}</span>
            <span style={{ marginLeft:'auto', transform: langOpen?'rotate(180deg)':'none', transition:'0.25s', display:'flex' }}>
              <ExpandIcon />
            </span>
          </button>
          {langOpen && (
            <div style={{ paddingLeft:8 }}>
              {['uz','ru','en'].map(lng => (
                <Link key={lng} href={router.asPath} locale={lng}>
                  <a onClick={close} style={{
                    display:'flex', alignItems:'center', gap:10, padding:'10px 8px',
                    textDecoration:'none', fontSize:14,
                    color: locale===lng ? '#007855' : '#444',
                    fontWeight: locale===lng ? 700 : 400,
                  }}>
                    <img src={`/images/svg/${lng}.svg`} alt={lng} width={22} height={22} />
                    {getLangLabel(lng)}
                  </a>
                </Link>
              ))}
            </div>
          )}

          {/* ✅ Drawer yopiladi → animatsiya tugashi kutiladi → modal ochiladi */}
          <button
            onClick={() => { close(); setTimeout(() => onLoginClick?.(), 320) }}
            style={{
              display:'flex', alignItems:'center', gap:10,
              padding:'12px 16px', borderRadius:12,
              border:'2px solid #007855',
              background: token ? '#007855' : 'transparent',
              cursor:'pointer', width:'100%',
            }}
          >
            <User color={token ? '#fff' : '#007855'} />
            <span style={{ fontSize:14, fontWeight:600, color: token ? '#fff' : '#007855' }}>
              {token ? (menu[locale].myOrders || 'Buyurtmalarim') : (menu[locale].login || 'Kirish')}
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
// ─────────────────────────────────────────────────────────────────────────────

function Header({ onOpenAddress }) {
  const dispatch = useDispatch()
  const { currentAddress } = useSelector((state) => state.address)
  const router = useRouter()
  const { locale } = router
  const [isMobile] = useIsMobile(800)

  const [anchorLoginEl, setAnchorLoginEl]   = useState(null)
  const [anchorEl2, setAnchorEl2]           = useState(null)
  const [openRightMenu, setOpenRightMenu]   = useState(false)
  const [mobileOpen, setMobileOpen]         = useState(false)
  // ✅ Mobil login modal
  const [mobileLoginOpen, setMobileLoginOpen] = useState(false)

  const theme = useTheme()
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleOpenDrawer = () => dispatch(openCartDrawer())
  const handleClick2     = (e) => setAnchorEl2(e?.currentTarget || null)
  const handleClose      = ()  => setAnchorEl2(null)

  // ✅ Mobilda Dialog, desktopda Popover
  const handleLoginClick = (e) => {
    if (isMobileScreen) {
      setMobileLoginOpen(true)
    } else {
      setAnchorLoginEl(e?.currentTarget || null)
    }
  }

  const handleLoginClose = () => {
    setAnchorLoginEl(null)
    setMobileLoginOpen(false)
  }

  const openLogin = Boolean(anchorLoginEl)
  const { token } = nookies.get()
  const getLocaleLabel = (loc) => ({ uz:'UZ', ru:'RU', en:'EN' }[loc] || 'UZ')

  return (
    <>
      <div className={cls.root}>
        <Container maxWidth="xl">
          <div className={cls.header}>

            {/* LEFT */}
            <div className={cls.headerLeftBox}>
              <Link href="/"><a className={cls.brandLogo}><EvosLogo /></a></Link>
              <Box className={cls.navbar}><Navbar /></Box>
            </div>

            {/* RIGHT — Desktop */}
            <div className={cls.headerRightBox}>
              <button className={cls.address} onClick={handleClick2}>
                <div style={{ display:'flex', alignItems:'center', marginRight:'8px' }}>
                  <LocationIcon stroke="#007855" fill="none" />
                </div>
                <p>{currentAddress?.address?.replace('Узбекистан, Ташкент,','') || menu[locale].selectYourAddress}</p>
                <ExpandIcon />
              </button>

              <div className={cls.lang}>
                <div style={{ display:'flex', alignItems:'center' }}>
                  <LanguageIcon sx={{ color:'#007855', fontSize:'32px' }} />
                  <Typography variant="body1" sx={{ ml:1, fontWeight:600, fontSize:'14px', textTransform:'uppercase', color:'#000' }}>
                    {getLocaleLabel(locale)}
                  </Typography>
                  <div className={cls.expandIcon} style={{ marginLeft:'4px' }}><ExpandIcon /></div>
                </div>
                <div className={cls.wrapper}>
                  <div className={cls.langList}>
                    {['uz','ru','en'].map((lng) => (
                      <Link key={lng} href={router.asPath} locale={lng}>
                        <a className={cls.listItem}>
                          <img src={`/images/svg/${lng}.svg`} alt={lng} width={24} height={24} />
                          <Typography sx={{ ml:2 }}>{lng==='uz'?"O'zbekcha":lng==='ru'?'Русский':'English'}</Typography>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className={token ? cls.userActive : cls.user} onClick={handleLoginClick}>
                <User color={token ? "#fff" : "#007855"} />
              </div>
            </div>

            {/* Mobile hamburger */}
            <button className={cls.mobileMenuBtn} onClick={() => setMobileOpen(true)}>
              <MenuIcon style={{ fontSize:28, color:'#007855' }} />
            </button>

          </div>
        </Container>
        <RightMenu open={openRightMenu} onClose={() => setOpenRightMenu(false)} />
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onOpenAddress={onOpenAddress}
        onLoginClick={handleLoginClick}
        currentAddress={currentAddress}
        locale={locale}
        router={router}
        token={token}
      />

      <AddressPopup onOpenAddress={onOpenAddress} anchorEl={anchorEl2} handleClose={handleClose} />

      {/* DESKTOP — Popover */}
      <Popover
        id={openLogin ? 'login-popover' : undefined}
        open={openLogin}
        anchorEl={anchorLoginEl}
        onClose={handleLoginClose}
        anchorOrigin={{ vertical:'bottom', horizontal:'right' }}
        transformOrigin={{ vertical:'top', horizontal:'right' }}
      >
        <LoginPopover onClose={handleLoginClose} />
      </Popover>

      {/* ✅ MOBIL — ekran o'rtasida Dialog */}
      <Dialog
        open={mobileLoginOpen}
        onClose={handleLoginClose}
        fullWidth
        maxWidth="xs"
        PaperProps={{
          sx: {
            borderRadius: '20px',
            margin: '16px',
            width: 'calc(100% - 32px)',
            maxWidth: '400px',
            overflow: 'visible',
            boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
          }
        }}
        sx={{ zIndex: 10002 }}
      >
        {/* Header qismi */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px',
          borderBottom: '1px solid #f0f0f0',
        }}>
          <Typography sx={{ fontSize: 17, fontWeight: 700, color: '#111', fontFamily: '"Open Sans", sans-serif' }}>
            {token
              ? (menu[locale].myOrders || 'Buyurtmalarim')
              : (menu[locale].login || 'Kirish')
            }
          </Typography>
          <button
            onClick={handleLoginClose}
            style={{
              background: '#f5f5f5',
              border: 'none',
              borderRadius: '50%',
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <CloseIcon style={{ fontSize: 20, color: '#555' }} />
          </button>
        </Box>

        {/* LoginPopover content */}
        <DialogContent sx={{ padding: '20px 20px 24px' }}>
          <LoginPopover onClose={handleLoginClose} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Header