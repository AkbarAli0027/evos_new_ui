// // import React, { useEffect, useState } from 'react'
// // import { Drawer, IconButton, Typography, Box } from '@mui/material'
// // import { useRouter } from 'next/router'
// // import CloseIcon from '@mui/icons-material/Close'
// // import Image from 'next/image'
// // import nookies, { parseCookies } from 'nookies'
// // import Counter from '../Counter/Counter'
// // import cls from './Basket.module.scss'
// // import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// // import { numberToPrice } from '../../utils/numberToPrice'
// // import { cartTotalPriceSelector } from '../../store/selectors/cartSelectors'
// // import { clearCartAction, removeFromCartAction } from '../../store/actions/cartActions/cartActions'
// // import { closeCartDrawer } from '../../store/actions/drawerActions/drawerActions'
// // import FullButton from '../FullButton/FullButton'
// // import ConfirmationPopup from '../ConfirmationPopup/ConfirmationPopup'
// // import EmptyBasket from './EmptyBasket'
// // import DeletePopup from '../ConfirmationPopup/DeleteConfirmationPopup'
// // import Login from '../Login/Login'
// // import dynamicImageLink from '../../utils/dynamicImageLink'

// // function Basket() {
// //   const { cartItems } = useSelector((state) => state.cart, shallowEqual)
// //   const totalPrice = useSelector((state) => cartTotalPriceSelector(state), shallowEqual)
// //   const { isCartOpen } = useSelector((state) => state.drawer, shallowEqual)
// //   const dispatch = useDispatch()
// //   const router = useRouter()
// //   const { locale } = router

// //   const [isOpenPopup, setIsOpenPopup] = useState(false)
// //   const [isOpenLogin, setIsOpenLogin] = useState(false)
// //   const [isOpenProductPopup, setIsOpenProductPopup] = useState(false)
// //   const [selectedItem, setSelectedItem] = useState(null)

// //   // Login uchun kerakli state-lar
// //   const [authData, setAuthData] = useState({ phone: '', fullName: '', sms: '' });
// //   const [isCheckCode, setIsCheckCode] = useState(false);

// //   const closeDrawer = () => dispatch(closeCartDrawer())

// //   const removeItemFromCart = (item) => {
// //     if (cartItems.length === 1) closeDrawer()
// //     dispatch(removeFromCartAction(item))
// //     setIsOpenProductPopup(false)
// //   }

// //   return (
// //     <div className={cls.root}>
// //       <Drawer
// //         anchor='right'
// //         open={isCartOpen}
// //         onClose={closeDrawer}
// //         classes={{ paper: cls.drawerPaper }}
// //         BackdropProps={{
// //           style: {
// //             backgroundColor: 'rgba(0, 0, 0, 0.4)',
// //             backdropFilter: 'blur(8px)',
// //             WebkitBackdropFilter: 'blur(8px)'
// //           }
// //         }}
// //       >
// //         <div className={cls.externalClose} onClick={closeDrawer}>
// //           <IconButton className={cls.closeIconButton}>
// //             <CloseIcon />
// //           </IconButton>
// //         </div>

// //         {cartItems.length > 0 ? (
// //           <div className={cls.container}>
// //             <div className={cls.header}>
// //               <Typography className={cls.title}>Buyurtmangiz</Typography>
// //               <Typography className={cls.clearBtn} onClick={() => setIsOpenPopup(true)}>
// //                 Tozalash
// //               </Typography>
// //             </div>

// //             <div className={cls.scrollArea}>
// //               {cartItems.map((item) => (
// //                 <div key={item.id} className={cls.card}>
// //                   <IconButton
// //                     className={cls.cardDelete}
// //                     onClick={() => { setSelectedItem(item); setIsOpenProductPopup(true); }}
// //                   >
// //                     <CloseIcon fontSize="small" />
// //                   </IconButton>

// //                   <div className={cls.cardMain}>
// //                     <div className={cls.imageWrapper}>
// //                       <Image
// //                         src={dynamicImageLink(item.dlvimg ? item.dlvimg : item.deliveryImage)}
// //                         alt={item.title}
// //                         width={80}
// //                         height={80}
// //                         objectFit="contain"
// //                         unoptimized={true}
// //                       />
// //                     </div>
// //                     <div className={cls.info}>
// //                       <Typography className={cls.itemTitle}>{item.title}</Typography>
// //                       <Typography
// //                         className={cls.itemDescription}
// //                         sx={{
// //                           fontSize: '13px',
// //                           color: '#666',
// //                           display: '-webkit-box',
// //                           WebkitLineClamp: 2,
// //                           WebkitBoxOrient: 'vertical',
// //                           overflow: 'hidden',
// //                           lineHeight: '1.4'
// //                         }}
// //                         dangerouslySetInnerHTML={{ __html: item.desc || item.description }}
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className={cls.cardFooter}>
// //                     <Typography className={cls.itemPrice}>
// //                       {numberToPrice((item?.dprice ? item?.dprice?.slice(0, -3) : (item.price.deliveryPrice || item.price.salePrice)) * item.quantity)}
// //                     </Typography>
// //                     <div className={cls.counterWrapper}><Counter data={item} /></div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             <div className={cls.footerActions}>
// //               <div className={cls.totalRow}>
// //                 <Typography className={cls.totalLabel}>To'plam:</Typography>
// //                 <Typography className={cls.totalValue}>{numberToPrice(totalPrice)}</Typography>
// //               </div>
// //               <FullButton
// //                 text="Buyurtma berish"
// //                 onClick={() => {
// //                   const { token } = nookies.get()
// //                   if (token) { 
// //                     router.push('/checkout'); 
// //                     closeDrawer(); 
// //                   } else {
// //                     setIsOpenLogin(true);
// //                   }
// //                 }}
// //               />
// //             </div>
// //           </div>
// //         ) : (
// //           <EmptyBasket closeDrawer={closeDrawer} />
// //         )}
// //       </Drawer>

// //       {/* MODAL OYNALAR */}
// //       <ConfirmationPopup
// //         open={isOpenPopup}
// //         onClose={() => setIsOpenPopup(false)}
// //         clearCart={() => {
// //           dispatch(clearCartAction());
// //           setIsOpenPopup(false);
// //           closeDrawer();
// //         }}
// //       />

// //       <DeletePopup 
// //         open={isOpenProductPopup} 
// //         onClose={() => setIsOpenProductPopup(false)} 
// //         clearProduct={removeItemFromCart} 
// //         selectedItem={selectedItem} 
// //       />

// //       <Login 
// //         open={isOpenLogin} 
// //         onClose={() => setIsOpenLogin(false)} 
// //         setOpenLoginDialog={setIsOpenLogin}
// //         data={authData}           // DATA UZATILDI
// //         setData={setAuthData}     // SETDATA FUNKSIYASI UZATILDI
// //         isCheckCode={isCheckCode} 
// //         setIsCheckCode={setIsCheckCode} 
// //       />
// //     </div>
// //   )
// // }

// // export default Basket



// import React, { useEffect, useState } from 'react'
// import { Drawer, IconButton, Typography, Box } from '@mui/material'
// import { useRouter } from 'next/router'
// import CloseIcon from '@mui/icons-material/Close'
// import Image from 'next/image'
// import nookies, { parseCookies } from 'nookies'
// import Counter from '../Counter/Counter'
// import cls from './Basket.module.scss'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { numberToPrice } from '../../utils/numberToPrice'
// import { cartTotalPriceSelector } from '../../store/selectors/cartSelectors'
// import { clearCartAction, removeFromCartAction } from '../../store/actions/cartActions/cartActions'
// import { closeCartDrawer } from '../../store/actions/drawerActions/drawerActions'
// import FullButton from '../FullButton/FullButton'
// import ConfirmationPopup from '../ConfirmationPopup/ConfirmationPopup'
// import EmptyBasket from './EmptyBasket'
// import DeletePopup from '../ConfirmationPopup/DeleteConfirmationPopup'
// import Login from '../Login/Login'
// import dynamicImageLink from '../../utils/dynamicImageLink'

// function Basket() {
//   const { cartItems } = useSelector((state) => state.cart, shallowEqual)
//   const totalPrice = useSelector((state) => cartTotalPriceSelector(state), shallowEqual)
//   const { isCartOpen } = useSelector((state) => state.drawer, shallowEqual)
//   const dispatch = useDispatch()
//   const router = useRouter()
//   const { locale } = router

//   const [isOpenPopup, setIsOpenPopup] = useState(false)
//   const [isOpenLogin, setIsOpenLogin] = useState(false)
//   const [isOpenProductPopup, setIsOpenProductPopup] = useState(false)
//   const [selectedItem, setSelectedItem] = useState(null)

//   const [authData, setAuthData] = useState({ phone: '', fullName: '', sms: '' })
//   const [isCheckCode, setIsCheckCode] = useState(false)

//   const closeDrawer = () => dispatch(closeCartDrawer())

//   const removeItemFromCart = (item) => {
//     if (cartItems.length === 1) closeDrawer()
//     dispatch(removeFromCartAction(item))
//     setIsOpenProductPopup(false)
//   }

//   // Modifier item uchun alohida mini karta
//   const ModifierBadge = ({ item }) => (
//     <div style={{
//       display: 'flex',
//       alignItems: 'center',
//       gap: 6,
//       padding: '4px 8px',
//       backgroundColor: '#f0faf6',
//       borderRadius: 8,
//       border: '1px solid #d0ede3',
//       marginTop: 4,
//     }}>
//       <Image
//         src={dynamicImageLink(item.dlvimg ? item.dlvimg : item.deliveryImage)}
//         alt={item.title}
//         width={24}
//         height={24}
//         objectFit="contain"
//         unoptimized
//       />
//       <Typography style={{ fontSize: 12, color: '#007855', fontWeight: 600 }}>
//         {item.title}
//       </Typography>
//       <IconButton
//         size="small"
//         style={{ padding: 2, marginLeft: 'auto' }}
//         onClick={() => dispatch(removeFromCartAction(item))}
//       >
//         <CloseIcon style={{ fontSize: 12, color: '#999' }} />
//       </IconButton>
//     </div>
//   )

//   // Oddiy itemlar (modifier emas)
//   const regularItems = cartItems.filter(i => i.type !== 'modifier')
//   // Modifier itemlar
//   const modifierItems = cartItems.filter(i => i.type === 'modifier')

//   return (
//     <div className={cls.root}>
//       <Drawer
//         anchor='right'
//         open={isCartOpen}
//         onClose={closeDrawer}
//         classes={{ paper: cls.drawerPaper }}
//         BackdropProps={{
//           style: {
//             backgroundColor: 'rgba(0, 0, 0, 0.4)',
//             backdropFilter: 'blur(8px)',
//             WebkitBackdropFilter: 'blur(8px)'
//           }
//         }}
//       >
//         <div className={cls.externalClose} onClick={closeDrawer}>
//           <IconButton className={cls.closeIconButton}>
//             <CloseIcon />
//           </IconButton>
//         </div>

//         {cartItems.length > 0 ? (
//           <div className={cls.container}>
//             <div className={cls.header}>
//               <Typography className={cls.title}>Buyurtmangiz</Typography>
//               <Typography className={cls.clearBtn} onClick={() => setIsOpenPopup(true)}>
//                 Tozalash
//               </Typography>
//             </div>

//             <div className={cls.scrollArea}>
//               {regularItems.map((item) => (
//                 <div key={item.id} className={cls.card}>
//                   <IconButton
//                     className={cls.cardDelete}
//                     onClick={() => { setSelectedItem(item); setIsOpenProductPopup(true) }}
//                   >
//                     <CloseIcon fontSize="small" />
//                   </IconButton>

//                   <div className={cls.cardMain}>
//                     <div className={cls.imageWrapper}>
//                       <Image
//                         src={dynamicImageLink(item.dlvimg ? item.dlvimg : item.deliveryImage)}
//                         alt={item.title}
//                         width={80}
//                         height={80}
//                         objectFit="contain"
//                         unoptimized={true}
//                       />
//                     </div>
//                     <div className={cls.info}>
//                       <Typography className={cls.itemTitle}>{item.title}</Typography>
//                       <Typography
//                         className={cls.itemDescription}
//                         sx={{
//                           fontSize: '13px',
//                           color: '#666',
//                           display: '-webkit-box',
//                           WebkitLineClamp: 2,
//                           WebkitBoxOrient: 'vertical',
//                           overflow: 'hidden',
//                           lineHeight: '1.4'
//                         }}
//                         dangerouslySetInnerHTML={{ __html: item.desc || item.description }}
//                       />

//                       {/* Shu itemga tegishli modifierlar — badge ko'rinishida */}
//                       {modifierItems.length > 0 && (
//                         <div style={{ marginTop: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
//                           {modifierItems.map(mod => (
//                             <ModifierBadge key={mod.id} item={mod} />
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <div className={cls.cardFooter}>
//                     <Typography className={cls.itemPrice}>
//                       {numberToPrice((item?.dprice ? item?.dprice?.slice(0, -3) : (item.price.deliveryPrice || item.price.salePrice)) * item.quantity)}
//                     </Typography>
//                     <div className={cls.counterWrapper}><Counter data={item} /></div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className={cls.footerActions}>
//               <div className={cls.totalRow}>
//                 <Typography className={cls.totalLabel}>To'plam:</Typography>
//                 <Typography className={cls.totalValue}>{numberToPrice(totalPrice)}</Typography>
//               </div>
//               <FullButton
//                 text="Buyurtma berish"
//                 onClick={() => {
//                   const { token } = nookies.get()
//                   if (token) {
//                     router.push('/checkout')
//                     closeDrawer()
//                   } else {
//                     setIsOpenLogin(true)
//                   }
//                 }}
//               />
//             </div>
//           </div>
//         ) : (
//           <EmptyBasket closeDrawer={closeDrawer} />
//         )}
//       </Drawer>

//       <ConfirmationPopup
//         open={isOpenPopup}
//         onClose={() => setIsOpenPopup(false)}
//         clearCart={() => {
//           dispatch(clearCartAction())
//           setIsOpenPopup(false)
//           closeDrawer()
//         }}
//       />

//       <DeletePopup
//         open={isOpenProductPopup}
//         onClose={() => setIsOpenProductPopup(false)}
//         clearProduct={removeItemFromCart}
//         selectedItem={selectedItem}
//       />

//       <Login
//         open={isOpenLogin}
//         onClose={() => setIsOpenLogin(false)}
//         setOpenLoginDialog={setIsOpenLogin}
//         data={authData}
//         setData={setAuthData}
//         isCheckCode={isCheckCode}
//         setIsCheckCode={setIsCheckCode}
//       />
//     </div>
//   )
// }

// export default Basket




// import React, { useEffect, useState } from 'react'
// import { Drawer, IconButton, Typography, Box } from '@mui/material'
// import { useRouter } from 'next/router'
// import CloseIcon from '@mui/icons-material/Close'
// import Image from 'next/image'
// import nookies, { parseCookies } from 'nookies'
// import Counter from '../Counter/Counter'
// import cls from './Basket.module.scss'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { numberToPrice } from '../../utils/numberToPrice'
// import { cartTotalPriceSelector } from '../../store/selectors/cartSelectors'
// import { clearCartAction, removeFromCartAction } from '../../store/actions/cartActions/cartActions'
// import { closeCartDrawer } from '../../store/actions/drawerActions/drawerActions'
// import FullButton from '../FullButton/FullButton'
// import ConfirmationPopup from '../ConfirmationPopup/ConfirmationPopup'
// import EmptyBasket from './EmptyBasket'
// import DeletePopup from '../ConfirmationPopup/DeleteConfirmationPopup'
// import Login from '../Login/Login'
// import dynamicImageLink from '../../utils/dynamicImageLink'

// function Basket() {
//   const { cartItems } = useSelector((state) => state.cart, shallowEqual)
//   const totalPrice = useSelector((state) => cartTotalPriceSelector(state), shallowEqual)
//   const { isCartOpen } = useSelector((state) => state.drawer, shallowEqual)
//   const dispatch = useDispatch()
//   const router = useRouter()
//   const { locale } = router

//   const [isOpenPopup, setIsOpenPopup] = useState(false)
//   const [isOpenLogin, setIsOpenLogin] = useState(false)
//   const [isOpenProductPopup, setIsOpenProductPopup] = useState(false)
//   const [selectedItem, setSelectedItem] = useState(null)

//   const [authData, setAuthData] = useState({ phone: '', fullName: '', sms: '' })
//   const [isCheckCode, setIsCheckCode] = useState(false)

//   const closeDrawer = () => dispatch(closeCartDrawer())

//   const removeItemFromCart = (item) => {
//     if (cartItems.length === 1) closeDrawer()
//     dispatch(removeFromCartAction(item))
//     setIsOpenProductPopup(false)
//   }

//   // Modifier item — 2 ustunli grid, x yo'q
//   const ModifierBadge = ({ item }) => (
//     <div style={{
//       display: 'flex',
//       alignItems: 'center',
//       gap: 8,
//       padding: '6px 10px',
//       backgroundColor: '#f0faf6',
//       borderRadius: 10,
//       border: '1px solid #c8ece1',
//       width: '100%',
//       boxSizing: 'border-box',
//       overflow: 'hidden',
//     }}>
//       <Image
//         src={dynamicImageLink(item.dlvimg ? item.dlvimg : item.deliveryImage)}
//         alt={item.title}
//         width={28}
//         height={28}
//         objectFit="contain"
//         unoptimized
//       />
//       <Typography style={{ fontSize: 12, color: '#007855', fontWeight: 600, lineHeight: 1.3, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
//         {item.title}
//       </Typography>
//     </div>
//   )

//   // Oddiy itemlar (modifier emas)
//   const regularItems = cartItems.filter(i => i.type !== 'modifier')
//   // Modifier itemlar
//   const modifierItems = cartItems.filter(i => i.type === 'modifier')

//   return (
//     <div className={cls.root}>
//       <Drawer
//         anchor='right'
//         open={isCartOpen}
//         onClose={closeDrawer}
//         classes={{ paper: cls.drawerPaper }}
//         BackdropProps={{
//           style: {
//             backgroundColor: 'rgba(0, 0, 0, 0.4)',
//             backdropFilter: 'blur(8px)',
//             WebkitBackdropFilter: 'blur(8px)'
//           }
//         }}
//       >
//         <div className={cls.externalClose} onClick={closeDrawer}>
//           <IconButton className={cls.closeIconButton}>
//             <CloseIcon />
//           </IconButton>
//         </div>

//         {cartItems.length > 0 ? (
//           <div className={cls.container}>
//             <div className={cls.header}>
//               <Typography className={cls.title}>Buyurtmangiz</Typography>
//               <Typography className={cls.clearBtn} onClick={() => setIsOpenPopup(true)}>
//                 Tozalash
//               </Typography>
//             </div>

//             <div className={cls.scrollArea}>
//               {regularItems.map((item) => (
//                 <div key={item.id} className={cls.card}>
//                   <IconButton
//                     className={cls.cardDelete}
//                     onClick={() => { setSelectedItem(item); setIsOpenProductPopup(true) }}
//                   >
//                     <CloseIcon fontSize="small" />
//                   </IconButton>

//                   <div className={cls.cardMain} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
//                     {/* Yuqori qator: rasm + nom + tavsif */}
//                     <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, width: '100%' }}>
//                       <div className={cls.imageWrapper} style={{ flexShrink: 0 }}>
//                         <Image
//                           src={dynamicImageLink(item.dlvimg ? item.dlvimg : item.deliveryImage)}
//                           alt={item.title}
//                           width={80}
//                           height={80}
//                           objectFit="contain"
//                           unoptimized={true}
//                         />
//                       </div>
//                       <div style={{ flex: 1, minWidth: 0 }}>
//                         <Typography className={cls.itemTitle}>{item.title}</Typography>
//                         <Typography
//                           className={cls.itemDescription}
//                           sx={{
//                             fontSize: '13px',
//                             color: '#666',
//                             display: '-webkit-box',
//                             WebkitLineClamp: 2,
//                             WebkitBoxOrient: 'vertical',
//                             overflow: 'hidden',
//                             lineHeight: '1.4'
//                           }}
//                           dangerouslySetInnerHTML={{ __html: item.desc || item.description }}
//                         />
//                       </div>
//                     </div>

//                     {/* Modifierlar — rasm tagida to'liq kenglikda 2 ustun */}
//                     {modifierItems.length > 0 && (
//                       <div style={{
//                         marginTop: 8,
//                         display: 'grid',
//                         gridTemplateColumns: '1fr 1fr',
//                         gap: 6,
//                         width: '100%',
//                       }}>
//                         {modifierItems.map(mod => (
//                           <ModifierBadge key={mod.id} item={mod} />
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                   <div className={cls.cardFooter}>
//                     <Typography className={cls.itemPrice}>
//                       {numberToPrice((item?.dprice ? item?.dprice?.slice(0, -3) : (item.price.deliveryPrice || item.price.salePrice)) * item.quantity)}
//                     </Typography>
//                     <div className={cls.counterWrapper}><Counter data={item} /></div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className={cls.footerActions}>
//               <div className={cls.totalRow}>
//                 <Typography className={cls.totalLabel}>To'plam:</Typography>
//                 <Typography className={cls.totalValue}>{numberToPrice(totalPrice)}</Typography>
//               </div>
//               <FullButton
//                 text="Buyurtma berish"
//                 onClick={() => {
//                   const { token } = nookies.get()
//                   if (token) {
//                     router.push('/checkout')
//                     closeDrawer()
//                   } else {
//                     setIsOpenLogin(true)
//                   }
//                 }}
//               />
//             </div>
//           </div>
//         ) : (
//           <EmptyBasket closeDrawer={closeDrawer} />
//         )}
//       </Drawer>

//       <ConfirmationPopup
//         open={isOpenPopup}
//         onClose={() => setIsOpenPopup(false)}
//         clearCart={() => {
//           dispatch(clearCartAction())
//           setIsOpenPopup(false)
//           closeDrawer()
//         }}
//       />

//       <DeletePopup
//         open={isOpenProductPopup}
//         onClose={() => setIsOpenProductPopup(false)}
//         clearProduct={removeItemFromCart}
//         selectedItem={selectedItem}
//       />

//       <Login
//         open={isOpenLogin}
//         onClose={() => setIsOpenLogin(false)}
//         setOpenLoginDialog={setIsOpenLogin}
//         data={authData}
//         setData={setAuthData}
//         isCheckCode={isCheckCode}
//         setIsCheckCode={setIsCheckCode}
//       />
//     </div>
//   )
// }

// export default Basket

















// import React, { useEffect, useState } from 'react'
// import { Drawer, IconButton, Typography, Box } from '@mui/material'
// import { useRouter } from 'next/router'
// import CloseIcon from '@mui/icons-material/Close'
// import Image from 'next/image'
// import nookies, { parseCookies } from 'nookies'
// import Counter from '../Counter/Counter'
// import cls from './Basket.module.scss'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import { numberToPrice } from '../../utils/numberToPrice'
// import { cartTotalPriceSelector } from '../../store/selectors/cartSelectors'
// import { clearCartAction, removeFromCartAction } from '../../store/actions/cartActions/cartActions'
// import { closeCartDrawer } from '../../store/actions/drawerActions/drawerActions'
// import FullButton from '../FullButton/FullButton'
// import ConfirmationPopup from '../ConfirmationPopup/ConfirmationPopup'
// import EmptyBasket from './EmptyBasket'
// import DeletePopup from '../ConfirmationPopup/DeleteConfirmationPopup'
// import Login from '../Login/Login'
// import dynamicImageLink from '../../utils/dynamicImageLink'

// function Basket() {
//   const { cartItems } = useSelector((state) => state.cart, shallowEqual)
//   const totalPrice = useSelector((state) => cartTotalPriceSelector(state), shallowEqual)
//   const { isCartOpen } = useSelector((state) => state.drawer, shallowEqual)
//   const dispatch = useDispatch()
//   const router = useRouter()
//   const { locale } = router

//   const [isOpenPopup, setIsOpenPopup] = useState(false)
//   const [isOpenLogin, setIsOpenLogin] = useState(false)
//   const [isOpenProductPopup, setIsOpenProductPopup] = useState(false)
//   const [selectedItem, setSelectedItem] = useState(null)

//   const [authData, setAuthData] = useState({ phone: '', fullName: '', sms: '' })
//   const [isCheckCode, setIsCheckCode] = useState(false)

//   const closeDrawer = () => dispatch(closeCartDrawer())

//   const removeItemFromCart = (item) => {
//     if (cartItems.length === 1) closeDrawer()
//     dispatch(removeFromCartAction(item))
//     setIsOpenProductPopup(false)
//   }

//   // Modifier item — 2 ustunli grid, x yo'q
//   const ModifierBadge = ({ item }) => (
//     <div style={{
//       display: 'flex',
//       alignItems: 'center',
//       gap: 8,
//       padding: '6px 10px',
//       backgroundColor: '#f0faf6',
//       borderRadius: 10,
//       border: '1px solid #c8ece1',
//       width: '100%',
//       boxSizing: 'border-box',
//       overflow: 'hidden',
//     }}>
//       <Image
//         src={dynamicImageLink(item.dlvimg ? item.dlvimg : item.deliveryImage)}
//         alt={item.title}
//         width={28}
//         height={28}
//         objectFit="contain"
//         unoptimized
//       />
//       <Typography style={{ fontSize: 12, color: '#007855', fontWeight: 600, lineHeight: 1.3, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
//         {item.title}
//       </Typography>
//     </div>
//   )

//   // Oddiy itemlar (modifier emas)
//   const regularItems = cartItems.filter(i => i.type !== 'modifier')
//   // Modifier itemlar
//   const modifierItems = cartItems.filter(i => i.type === 'modifier')

//   return (
//     <div className={cls.root}>
//       <Drawer
//         anchor='right'
//         open={isCartOpen}
//         onClose={closeDrawer}
//         classes={{ paper: cls.drawerPaper }}
//         BackdropProps={{
//           style: {
//             backgroundColor: 'rgba(0, 0, 0, 0.4)',
//             backdropFilter: 'blur(8px)',
//             WebkitBackdropFilter: 'blur(8px)'
//           }
//         }}
//       >
//         <div className={cls.externalClose} onClick={closeDrawer}>
//           <IconButton className={cls.closeIconButton}>
//             <CloseIcon />
//           </IconButton>
//         </div>

//         {cartItems.length > 0 ? (
//           <div className={cls.container}>
//             <div className={cls.header}>
//               <Typography className={cls.title}>Buyurtmangiz</Typography>
//               <Typography className={cls.clearBtn} onClick={() => setIsOpenPopup(true)}>
//                 Tozalash
//               </Typography>
//             </div>

//             <div className={cls.scrollArea}>
//               {regularItems.map((item) => (
//                 <div key={item.id} className={cls.card}>
//                   <IconButton
//                     className={cls.cardDelete}
//                     onClick={() => { setSelectedItem(item); setIsOpenProductPopup(true) }}
//                   >
//                     <CloseIcon fontSize="small" />
//                   </IconButton>

//                   <div className={cls.cardMain} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
//                     {/* Yuqori qator: rasm + nom + tavsif */}
//                     <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, width: '100%' }}>
//                       <div className={cls.imageWrapper} style={{ flexShrink: 0 }}>
//                         <Image
//                           src={dynamicImageLink(item.dlvimg ? item.dlvimg : item.deliveryImage)}
//                           alt={item.title}
//                           width={80}
//                           height={80}
//                           objectFit="contain"
//                           unoptimized={true}
//                         />
//                       </div>
//                       <div style={{ flex: 1, minWidth: 0 }}>
//                         <Typography className={cls.itemTitle}>{item.title}</Typography>
//                         <Typography
//                           className={cls.itemDescription}
//                           sx={{
//                             fontSize: '13px',
//                             color: '#666',
//                             display: '-webkit-box',
//                             WebkitLineClamp: 2,
//                             WebkitBoxOrient: 'vertical',
//                             overflow: 'hidden',
//                             lineHeight: '1.4'
//                           }}
//                           dangerouslySetInnerHTML={{ __html: item.desc || item.description }}
//                         />
//                       </div>
//                     </div>

//                     {/* Modifierlar — faqat shu item ga tegishlilar */}
//                     {(() => {
//                       const myMods = modifierItems.filter(mod => mod.parentId === item.id)
//                       return myMods.length > 0 ? (
//                         <div style={{
//                           marginTop: 8,
//                           display: 'grid',
//                           gridTemplateColumns: '1fr 1fr',
//                           gap: 6,
//                           width: '100%',
//                         }}>
//                           {myMods.map(mod => (
//                             <ModifierBadge key={mod.id} item={mod} />
//                           ))}
//                         </div>
//                       ) : null
//                     })()}
//                   </div>

//                   <div className={cls.cardFooter}>
//                     <Typography className={cls.itemPrice}>
//                       {numberToPrice((item?.dprice ? item?.dprice?.slice(0, -3) : (item.price.deliveryPrice || item.price.salePrice)) * item.quantity)}
//                     </Typography>
//                     <div className={cls.counterWrapper}><Counter data={item} /></div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className={cls.footerActions}>
//               <div className={cls.totalRow}>
//                 <Typography className={cls.totalLabel}>To'plam:</Typography>
//                 <Typography className={cls.totalValue}>{numberToPrice(totalPrice)}</Typography>
//               </div>
//               <FullButton
//                 text="Buyurtma berish"
//                 onClick={() => {
//                   const { token } = nookies.get()
//                   if (token) {
//                     router.push('/checkout')
//                     closeDrawer()
//                   } else {
//                     setIsOpenLogin(true)
//                   }
//                 }}
//               />
//             </div>
//           </div>
//         ) : (
//           <EmptyBasket closeDrawer={closeDrawer} />
//         )}
//       </Drawer>

//       <ConfirmationPopup
//         open={isOpenPopup}
//         onClose={() => setIsOpenPopup(false)}
//         clearCart={() => {
//           dispatch(clearCartAction())
//           setIsOpenPopup(false)
//           closeDrawer()
//         }}
//       />

//       <DeletePopup
//         open={isOpenProductPopup}
//         onClose={() => setIsOpenProductPopup(false)}
//         clearProduct={removeItemFromCart}
//         selectedItem={selectedItem}
//       />

//       <Login
//         open={isOpenLogin}
//         onClose={() => setIsOpenLogin(false)}
//         setOpenLoginDialog={setIsOpenLogin}
//         data={authData}
//         setData={setAuthData}
//         isCheckCode={isCheckCode}
//         setIsCheckCode={setIsCheckCode}
//       />
//     </div>
//   )
// }

// export default Basket






import React, { useEffect, useState } from 'react'
import { Drawer, IconButton, Typography, Box } from '@mui/material'
import { useRouter } from 'next/router'
import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'
import nookies, { parseCookies } from 'nookies'
import Counter from '../Counter/Counter'
import cls from './Basket.module.scss'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { numberToPrice } from '../../utils/numberToPrice'
import { cartTotalPriceSelector } from '../../store/selectors/cartSelectors'
import { clearCartAction, removeFromCartAction } from '../../store/actions/cartActions/cartActions'
import { closeCartDrawer } from '../../store/actions/drawerActions/drawerActions'
import FullButton from '../FullButton/FullButton'
import ConfirmationPopup from '../ConfirmationPopup/ConfirmationPopup'
import EmptyBasket from './EmptyBasket'
import DeletePopup from '../ConfirmationPopup/DeleteConfirmationPopup'
import Login from '../Login/Login'
import dynamicImageLink from '../../utils/dynamicImageLink'

function Basket() {
  const { cartItems } = useSelector((state) => state.cart, shallowEqual)
  const totalPrice = useSelector((state) => cartTotalPriceSelector(state), shallowEqual)
  const { isCartOpen } = useSelector((state) => state.drawer, shallowEqual)
  const dispatch = useDispatch()
  const router = useRouter()
  const { locale } = router

  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const [isOpenProductPopup, setIsOpenProductPopup] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const [authData, setAuthData] = useState({ phone: '', fullName: '', sms: '' })
  const [isCheckCode, setIsCheckCode] = useState(false)

  const closeDrawer = () => dispatch(closeCartDrawer())

  const removeItemFromCart = (item) => {
    if (cartItems.length === 1) closeDrawer()
    dispatch(removeFromCartAction(item))
    setIsOpenProductPopup(false)
  }

  // Modifier item — 2 ustunli grid, x yo'q
  const ModifierBadge = ({ item }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <span style={{ color: '#007855', fontSize: 12, lineHeight: 1, flexShrink: 0 }}>•</span>
      <Typography style={{ fontSize: 12, color: '#555', fontWeight: 500, lineHeight: 1.3 }}>
        {item.title}
      </Typography>
    </div>
  )



  // Oddiy itemlar (modifier emas)
  const regularItems = cartItems.filter(i => i.type !== 'modifier')
  // Modifier itemlar
  const modifierItems = cartItems.filter(i => i.type === 'modifier')

  return (
    <div className={cls.root}>
      <Drawer
        anchor='right'
        open={isCartOpen}
        onClose={closeDrawer}
        classes={{ paper: cls.drawerPaper }}
        BackdropProps={{
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }
        }}
      >
        <div className={cls.externalClose} onClick={closeDrawer}>
          <IconButton className={cls.closeIconButton}>
            <CloseIcon />
          </IconButton>
        </div>


    
        {
          cartItems.length > 0 ? (
            <div className={cls.container}>
              <div className={cls.header}>
                <Typography className={cls.title}>Buyurtmangiz</Typography>
                <Typography className={cls.clearBtn} onClick={() => setIsOpenPopup(true)}>
                  Tozalash
                </Typography>
              </div>

              <div className={cls.scrollArea}>
                {regularItems.map((item) => (
                  <div key={item.id} className={cls.card}>
                    <IconButton
                      className={cls.cardDelete}
                      onClick={() => { setSelectedItem(item); setIsOpenProductPopup(true) }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>

                    <div className={cls.cardMain} style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                      {/* Yuqori qator: rasm + nom + tavsif */}
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, width: '100%' }}>
                        <div className={cls.imageWrapper} style={{ flexShrink: 0 }}>
                          <Image
                            src={dynamicImageLink(item.dlvimg ? item.dlvimg : item.deliveryImage)}
                            alt={item.title}
                            width={80}
                            height={80}
                            objectFit="contain"
                            unoptimized={true}
                          />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <Typography className={cls.itemTitle} style={{ color: '#007d43', fontWeight: 900, fontSize: 20, }}>{item.title}</Typography>
                          <Typography
                            className={cls.itemDescription}
                            sx={{
                              fontSize: '12px',
                              color: '#999',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              lineHeight: '1.4',
                              marginTop: '20px',
                            }}
                            dangerouslySetInnerHTML={{ __html: item.desc || item.description }}
                          />
                        </div>
                      </div>

                      {/* Modifierlar — faqat shu item ga tegishlilar */}
                      {(() => {
                        const myMods = modifierItems.filter(mod => mod.parentId === item.id)
                        return myMods.length > 0 ? (
                          <div style={{
                            marginTop: 6,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                          }}>
                            {myMods.map(mod => (
                              <ModifierBadge key={mod.id} item={mod} />
                            ))}
                          </div>
                        ) : null
                      })()}
                    </div>

                    <div className={cls.cardFooter}>
                      <Typography className={cls.itemPrice}>
                        {numberToPrice((item?.dprice ? item?.dprice?.slice(0, -3) : (item.price.deliveryPrice || item.price.salePrice)) * item.quantity)}
                      </Typography>
                      <div className={cls.counterWrapper}><Counter data={item} /></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={cls.footerActions}>
                <div className={cls.totalRow}>
                  <Typography className={cls.totalLabel}>To'plam:</Typography>
                  <Typography className={cls.totalValue}>{numberToPrice(totalPrice)}</Typography>
                </div>
                <FullButton
                  text="Buyurtma berish"
                  onClick={() => {
                    const { token } = nookies.get()
                    if (token) {
                      router.push('/checkout')
                      closeDrawer()
                    } else {
                      setIsOpenLogin(true)
                    }
                  }}
                />
              </div>
            </div>
          ) : (
            <EmptyBasket closeDrawer={closeDrawer} />
          )
        }
      </Drawer >

      <ConfirmationPopup
        open={isOpenPopup}
        onClose={() => setIsOpenPopup(false)}
        clearCart={() => {
          dispatch(clearCartAction())
          setIsOpenPopup(false)
          closeDrawer()
        }}
      />

      <DeletePopup
        open={isOpenProductPopup}
        onClose={() => setIsOpenProductPopup(false)}
        clearProduct={removeItemFromCart}
        selectedItem={selectedItem}
      />

      <Login
        open={isOpenLogin}
        onClose={() => setIsOpenLogin(false)}
        setOpenLoginDialog={setIsOpenLogin}
        data={authData}
        setData={setAuthData}
        isCheckCode={isCheckCode}
        setIsCheckCode={setIsCheckCode}
      />
    </div >
  )
}

export default Basket