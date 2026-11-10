// import { Box, Typography, IconButton } from '@mui/material'
// import Image from 'next/image'
// import { useMemo, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { btnText } from '../../mock/menu'
// import { useRouter } from 'next/router'
// import {
//   addToCartAction,
//   reduceCartItemQuantityAction,
//   removeFromCartAction,
// } from '../../store/actions/cartActions/cartActions'
// import { numberToPrice } from '../../utils/numberToPrice'
// import { MinusIcon, PlusIcon } from '../Icons'
// import dynamicImageLink from '../../utils/dynamicImageLink'

// export default function ProductModal({ item, cls, allProducts }) {
//   const dispatch = useDispatch()
//   const { locale } = useRouter()
//   const { cartItems } = useSelector((state) => state.cart)

//   const isSpecialCategory = useMemo(() => {
//     // modifier_groups mavjud bo'lsa — bu combo/set mahsulot
//     if (item?.modifier_groups?.length > 0) return true
//     const title = item?.title?.toLowerCase() || ''
//     const catName = item?.category_name?.toLowerCase() || ''
//     return (
//       title.includes('kombo') || title.includes('combo') ||
//       title.includes('set') || title.includes('juftlik') ||
//       catName.includes('combo') || catName.includes('kombo') ||
//       catName.includes('set') || catName.includes('juftlik')
//     )
//   }, [item])

//   // modifier_groups dan itemlarni olish + allProducts dan rasm qidirish
//   const comboModifiers = useMemo(() => {
//     if (!isSpecialCategory) return []
//     const items = item?.modifier_groups?.[0]?.items || []
//     const flatFoods = allProducts?.flatMap((cat) => cat.foods || []) || []

//     return items.map(mod => {
//       // allProducts dan shu nomli mahsulotni topib rasmini olamiz
//       const matched = flatFoods.find(f =>
//         f.title?.toLowerCase().trim() === mod.name?.toLowerCase().trim() ||
//         f.title?.toLowerCase().includes(mod.name?.toLowerCase().trim()) ||
//         mod.name?.toLowerCase().includes(f.title?.toLowerCase().trim())
//       )
//       return {
//         id: mod.itemId,
//         title: mod.name,
//         dlvimg: mod.buttonImageUrl || matched?.dlvimg || matched?.img || '',
//         dprice: '0000',
//         type: 'modifier',
//         price: { deliveryPrice: 0, salePrice: 0 },
//       }
//     })
//   }, [item, isSpecialCategory, allProducts])



//   const cartItem = cartItems?.find((data) => data.id === item?.id)

//   const handleAction = (e, action, product) => {
//     e.stopPropagation()
//     dispatch(action(product))
//   }

//   const recommendations = useMemo(() => {
//     if (!allProducts || isSpecialCategory) return []
//     return allProducts
//       ?.flatMap((cat) => cat.foods || [])
//       ?.filter((food) => food.id !== item.id)
//       ?.sort(() => 0.5 - Math.random())
//       ?.slice(0, 4)
//   }, [allProducts, item.id, isSpecialCategory])

//   if (!item) return null

//   const handleAddComboToCart = (e) => {
//     e.stopPropagation()
//     dispatch(addToCartAction(item))
//     comboModifiers.forEach(mod => dispatch(addToCartAction(mod)))
//   }

//   // Modifier kartochkasi
//   // — Tanlangan: + - counter ko'rinadi
//   // — Tanlanmagan: bo'sh radio doira ko'rinadi, bosib tanlash mumkin
//   const ModifierCard = ({ product }) => (
//     <Box
//       style={{
//         cursor: 'default',
//         userSelect: 'none',
//         pointerEvents: 'none',
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: '10px 14px',
//         borderRadius: 14,
//         border: '1.5px solid #c8ece1',
//         backgroundColor: '#f0faf6',
//         gap: 12,
//         minWidth: 0,
//       }}
//     >

//       <div style={{ width: 48, height: 48, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: 10, padding: 4 }}>
//         {product?.dlvimg ? (
//           <Image
//             loader={() => dynamicImageLink(product.dlvimg)}
//             src={dynamicImageLink(product.dlvimg)}
//             alt={product.title}
//             width={48}
//             height={48}
//             unoptimized
//             style={{ objectFit: 'contain' }}
//           />
//         ) : (
//           <span style={{ fontSize: 26 }}>🍽️</span>
//         )}
//       </div>
//       <Typography style={{
//         fontSize: 13,
//         fontWeight: 600,
//         textAlign: 'left',
//         color: '#007855',
//         lineHeight: 1.3,
//         margin: 0,
//         wordBreak: 'break-word',
//         flex: 1,
//       }}>
//         {product.title}
//       </Typography>
//     </Box>
//   )

//   return (
//     <Box className={cls.modalSplitLayout}>

//       {/* CHAP — Rasm */}
//       <Box className={cls.modalLeftSticky}>
//         <Image
//           loader={() => dynamicImageLink(item?.dlvimg)}
//           src={dynamicImageLink(item?.dlvimg)}
//           alt={item?.title}
//           width={400}
//           height={350}
//           unoptimized
//         />
//       </Box>

//       {/* O'NG — Scroll kontent */}
//       <Box className={cls.modalRightScroll}>

//         <Typography className={cls.modalTitle} variant="h4">{item?.title}</Typography>
//         <Typography className={cls.modalDescription} dangerouslySetInnerHTML={{ __html: item?.desc }} />

//         {/* Narx va tugma */}
//         <Box className={cls.modalFooter}>
//           <Typography className={cls.modalPriceGreen}>
//             {item?.dprice ? numberToPrice(item.dprice.slice(0, -3)) : ''}
//           </Typography>

//           {isSpecialCategory ? (
//             cartItem ? (
//               <div className={cls.productCounter}>
//                 <IconButton onClick={(e) =>
//                   cartItem.quantity === 1
//                     ? handleAction(e, removeFromCartAction, item)
//                     : handleAction(e, reduceCartItemQuantityAction, item)
//                 }>
//                   <MinusIcon />
//                 </IconButton>
//                 <span>{cartItem.quantity}</span>
//                 <IconButton onClick={(e) => handleAction(e, addToCartAction, item)}>
//                   <PlusIcon />
//                 </IconButton>
//               </div>
//             ) : (
//               <button className={cls.productButton} onClick={handleAddComboToCart}>
//                 {btnText[locale]?.addToCart || 'Savatga'}
//               </button>
//             )
//           ) : (
//             cartItem ? (
//               <div className={cls.productCounter}>
//                 <IconButton onClick={(e) =>
//                   cartItem.quantity === 1
//                     ? handleAction(e, removeFromCartAction, item)
//                     : handleAction(e, reduceCartItemQuantityAction, item)
//                 }>
//                   <MinusIcon />
//                 </IconButton>
//                 <span>{cartItem.quantity}</span>
//                 <IconButton onClick={(e) => handleAction(e, addToCartAction, item)}>
//                   <PlusIcon />
//                 </IconButton>
//               </div>
//             ) : (
//               <button className={cls.productButton} onClick={(e) => handleAction(e, addToCartAction, item)}>
//                 {btnText[locale]?.addToCart}
//               </button>
//             )
//           )}
//         </Box>

//         {/* MODIFIKATORLAR — modifier_groups dan */}
//         {isSpecialCategory && comboModifiers.length > 0 && (
//           <Box className={cls.modifiersContainer}>
//             <Box className={cls.modSection}>
//               <Typography className={cls.modHeading} style={{ marginBottom: 10 }}>Qo'shimchalar</Typography>
//               <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
//                 {comboModifiers.map(mod => (
//                   <ModifierCard
//                     key={mod.id}
//                     product={mod}
//                   />
//                 ))}
//               </Box>
//             </Box>
//           </Box>
//         )}

//         {/* TAVSIYALAR */}
//         {!isSpecialCategory && (
//           <Box className={cls.recomSection}>
//             <Typography variant="h6" className={cls.recomHeading}>Sizga tavsiya etamiz</Typography>
//             <Box className={cls.recomGrid}>
//               {recommendations.map((recom) => {
//                 const inCart = cartItems?.find((c) => c.id === recom.id)
//                 return (
//                   <Box key={recom.id} className={cls.recomCard}>
//                     <Box className={cls.recomImgBox}>
//                       <Image
//                         loader={() => dynamicImageLink(recom?.dlvimg)}
//                         src={dynamicImageLink(recom?.dlvimg)}
//                         alt={recom.title} width={100} height={85} unoptimized
//                       />
//                     </Box>
//                     <Typography className={cls.recomTitle}>{recom.title}</Typography>
//                     <Typography className={cls.recomCardPrice}>
//                       {recom?.dprice ? numberToPrice(recom.dprice.slice(0, -3)) : ''}
//                     </Typography>
//                     {inCart ? (
//                       <div className={cls.recomCounterOutline}>
//                         <IconButton size="small" onClick={(e) =>
//                           inCart.quantity === 1
//                             ? handleAction(e, removeFromCartAction, recom)
//                             : handleAction(e, reduceCartItemQuantityAction, recom)
//                         }>
//                           <MinusIcon />
//                         </IconButton>
//                         <span>{inCart.quantity}</span>
//                         <IconButton size="small" onClick={(e) => handleAction(e, addToCartAction, recom)}>
//                           <PlusIcon />
//                         </IconButton>
//                       </div>
//                     ) : (
//                       <button className={cls.recomAddBtn} onClick={(e) => handleAction(e, addToCartAction, recom)}>
//                         + Qo'shish
//                       </button>
//                     )}
//                   </Box>
//                 )
//               })}
//             </Box>
//           </Box>
//         )}

//       </Box>
//     </Box>
//   )
// }
































// import { Box, Typography, IconButton } from '@mui/material'
// import Image from 'next/image'
// import { useMemo, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { btnText } from '../../mock/menu'
// import { useRouter } from 'next/router'
// import {
//   addToCartAction,
//   reduceCartItemQuantityAction,
//   removeFromCartAction,
// } from '../../store/actions/cartActions/cartActions'
// import { numberToPrice } from '../../utils/numberToPrice'
// import { MinusIcon, PlusIcon } from '../Icons'
// import dynamicImageLink from '../../utils/dynamicImageLink'

// export default function ProductModal({ item, cls, allProducts }) {
//   const dispatch = useDispatch()
//   const { locale } = useRouter()
//   const { cartItems } = useSelector((state) => state.cart)

//   const isSpecialCategory = useMemo(() => {
//     // modifier_groups mavjud bo'lsa — bu combo/set mahsulot
//     if (item?.modifier_groups?.length > 0) return true
//     const title = item?.title?.toLowerCase() || ''
//     const catName = item?.category_name?.toLowerCase() || ''
//     return (
//       title.includes('kombo') || title.includes('combo') ||
//       title.includes('set') || title.includes('juftlik') ||
//       catName.includes('combo') || catName.includes('kombo') ||
//       catName.includes('set') || catName.includes('juftlik')
//     )
//   }, [item])

//   // modifier_groups dan itemlarni olish + allProducts dan rasm qidirish
//   const comboModifiers = useMemo(() => {
//     if (!isSpecialCategory) return []
//     const items = item?.modifier_groups?.[0]?.items || []
//     const flatFoods = allProducts?.flatMap((cat) => cat.foods || []) || []

//     return items.map(mod => {
//       // allProducts dan shu nomli mahsulotni topib rasmini olamiz
//       const matched = flatFoods.find(f =>
//         f.title?.toLowerCase().trim() === mod.name?.toLowerCase().trim() ||
//         f.title?.toLowerCase().includes(mod.name?.toLowerCase().trim()) ||
//         mod.name?.toLowerCase().includes(f.title?.toLowerCase().trim())
//       )
//       return {
//         id: mod.itemId,
//         title: mod.name,
//         dlvimg: mod.buttonImageUrl || matched?.dlvimg || matched?.img || '',
//         dprice: '0000',
//         type: 'modifier',
//         price: { deliveryPrice: 0, salePrice: 0 },
//       }
//     })
//   }, [item, isSpecialCategory, allProducts])



//   const cartItem = cartItems?.find((data) => data.id === item?.id)

//   const handleAction = (e, action, product) => {
//     e.stopPropagation()
//     dispatch(action(product))
//   }

//   const recommendations = useMemo(() => {
//     if (!allProducts || isSpecialCategory) return []
//     return allProducts
//       ?.flatMap((cat) => cat.foods || [])
//       ?.filter((food) => food.id !== item.id)
//       ?.sort(() => 0.5 - Math.random())
//       ?.slice(0, 4)
//   }, [allProducts, item.id, isSpecialCategory])

//   if (!item) return null

//   const handleAddComboToCart = (e) => {
//     e.stopPropagation()
//     dispatch(addToCartAction(item))
//     comboModifiers.forEach(mod => dispatch(addToCartAction(mod)))
//   }

//   // Modifier kartochkasi
//   // — Tanlangan: + - counter ko'rinadi
//   // — Tanlanmagan: bo'sh radio doira ko'rinadi, bosib tanlash mumkin
//   const ModifierCard = ({ product }) => (
//     <Box
//       style={{
//         cursor: 'default',
//         userSelect: 'none',
//         pointerEvents: 'none',
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: '10px 14px',
//         borderRadius: 14,
//         border: '1.5px solid #007855',
//         backgroundColor: '#f0faf6',
//         gap: 12,
//         minWidth: 0,
//         position: 'relative',
//       }}
//     >
//       {/* Galochka — yuqori o'ng burchak */}
//       <div style={{
//         position: 'absolute',
//         top: 6,
//         right: 6,
//         width: 18,
//         height: 18,
//         borderRadius: '50%',
//         backgroundColor: '#007855',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexShrink: 0,
//       }}>
//         <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
//           <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </div>

//       <div style={{ width: 48, height: 48, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: 10, padding: 4 }}>
//         {product?.dlvimg ? (
//           <Image
//             loader={() => dynamicImageLink(product.dlvimg)}
//             src={dynamicImageLink(product.dlvimg)}
//             alt={product.title}
//             width={48}
//             height={48}
//             unoptimized
//             style={{ objectFit: 'contain' }}
//           />
//         ) : (
//           <span style={{ fontSize: 26 }}>🍽️</span>
//         )}
//       </div>
//       <Typography style={{
//         fontSize: 13,
//         fontWeight: 600,
//         textAlign: 'left',
//         color: '#007855',
//         lineHeight: 1.3,
//         margin: 0,
//         wordBreak: 'break-word',
//         flex: 1,
//       }}>
//         {product.title}
//       </Typography>
//     </Box>
//   )

//   return (
//     <Box className={cls.modalSplitLayout}>

//       {/* CHAP — Rasm */}
//       <Box className={cls.modalLeftSticky}>
//         <Image
//           loader={() => dynamicImageLink(item?.dlvimg)}
//           src={dynamicImageLink(item?.dlvimg)}
//           alt={item?.title}
//           width={400}
//           height={350}
//           unoptimized
//         />
//       </Box>

//       {/* O'NG — Scroll kontent */}
//       <Box className={cls.modalRightScroll}>

//         <Typography className={cls.modalTitle} variant="h4">{item?.title}</Typography>
//         <Typography className={cls.modalDescription} dangerouslySetInnerHTML={{ __html: item?.desc }} />

//         {/* Narx va tugma */}
//         <Box className={cls.modalFooter}>
//           <Typography className={cls.modalPriceGreen}>
//             {item?.dprice ? numberToPrice(item.dprice.slice(0, -3)) : ''}
//           </Typography>

//           {isSpecialCategory ? (
//             cartItem ? (
//               <div className={cls.productCounter}>
//                 <IconButton onClick={(e) =>
//                   cartItem.quantity === 1
//                     ? handleAction(e, removeFromCartAction, item)
//                     : handleAction(e, reduceCartItemQuantityAction, item)
//                 }>
//                   <MinusIcon />
//                 </IconButton>
//                 <span>{cartItem.quantity}</span>
//                 <IconButton onClick={(e) => handleAction(e, addToCartAction, item)}>
//                   <PlusIcon />
//                 </IconButton>
//               </div>
//             ) : (
//               <button className={cls.productButton} onClick={handleAddComboToCart}>
//                 {btnText[locale]?.addToCart || 'Savatga'}
//               </button>
//             )
//           ) : (
//             cartItem ? (
//               <div className={cls.productCounter}>
//                 <IconButton onClick={(e) =>
//                   cartItem.quantity === 1
//                     ? handleAction(e, removeFromCartAction, item)
//                     : handleAction(e, reduceCartItemQuantityAction, item)
//                 }>
//                   <MinusIcon />
//                 </IconButton>
//                 <span>{cartItem.quantity}</span>
//                 <IconButton onClick={(e) => handleAction(e, addToCartAction, item)}>
//                   <PlusIcon />
//                 </IconButton>
//               </div>
//             ) : (
//               <button className={cls.productButton} onClick={(e) => handleAction(e, addToCartAction, item)}>
//                 {btnText[locale]?.addToCart}
//               </button>
//             )
//           )}
//         </Box>

//         {/* MODIFIKATORLAR — modifier_groups dan */}
//         {isSpecialCategory && comboModifiers.length > 0 && (
//           <Box className={cls.modifiersContainer}>
//             <Box className={cls.modSection}>
//               <Typography className={cls.modHeading} style={{ marginBottom: 10 }}>Qo'shimchalar</Typography>
//               <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
//                 {comboModifiers.map(mod => (
//                   <ModifierCard
//                     key={mod.id}
//                     product={mod}
//                   />
//                 ))}
//               </Box>
//             </Box>
//           </Box>
//         )}

//         {/* TAVSIYALAR */}
//         {!isSpecialCategory && (
//           <Box className={cls.recomSection}>
//             <Typography variant="h6" className={cls.recomHeading}>Sizga tavsiya etamiz</Typography>
//             <Box className={cls.recomGrid}>
//               {recommendations.map((recom) => {
//                 const inCart = cartItems?.find((c) => c.id === recom.id)
//                 return (
//                   <Box key={recom.id} className={cls.recomCard}>
//                     <Box className={cls.recomImgBox}>
//                       <Image
//                         loader={() => dynamicImageLink(recom?.dlvimg)}
//                         src={dynamicImageLink(recom?.dlvimg)}
//                         alt={recom.title} width={100} height={85} unoptimized
//                       />
//                     </Box>
//                     <Typography className={cls.recomTitle}>{recom.title}</Typography>
//                     <Typography className={cls.recomCardPrice}>
//                       {recom?.dprice ? numberToPrice(recom.dprice.slice(0, -3)) : ''}
//                     </Typography>
//                     {inCart ? (
//                       <div className={cls.recomCounterOutline}>
//                         <IconButton size="small" onClick={(e) =>
//                           inCart.quantity === 1
//                             ? handleAction(e, removeFromCartAction, recom)
//                             : handleAction(e, reduceCartItemQuantityAction, recom)
//                         }>
//                           <MinusIcon />
//                         </IconButton>
//                         <span>{inCart.quantity}</span>
//                         <IconButton size="small" onClick={(e) => handleAction(e, addToCartAction, recom)}>
//                           <PlusIcon />
//                         </IconButton>
//                       </div>
//                     ) : (
//                       <button className={cls.recomAddBtn} onClick={(e) => handleAction(e, addToCartAction, recom)}>
//                         + Qo'shish
//                       </button>
//                     )}
//                   </Box>
//                 )
//               })}
//             </Box>
//           </Box>
//         )}

//       </Box>
//     </Box>
//   )
// }























// import { Box, Typography, IconButton } from '@mui/material'
// import Image from 'next/image'
// import { useMemo, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { btnText } from '../../mock/menu'
// import { useRouter } from 'next/router'
// import {
//   addToCartAction,
//   reduceCartItemQuantityAction,
//   removeFromCartAction,
// } from '../../store/actions/cartActions/cartActions'
// import { numberToPrice } from '../../utils/numberToPrice'
// import { MinusIcon, PlusIcon } from '../Icons'
// import dynamicImageLink from '../../utils/dynamicImageLink'

// export default function ProductModal({ item, cls, allProducts }) {
//   const dispatch = useDispatch()
//   const { locale } = useRouter()
//   const { cartItems } = useSelector((state) => state.cart)

//   const isSpecialCategory = useMemo(() => {
//     // modifier_groups mavjud bo'lsa — bu combo/set mahsulot
//     if (item?.modifier_groups?.length > 0) return true
//     const title = item?.title?.toLowerCase() || ''
//     const catName = item?.category_name?.toLowerCase() || ''
//     return (
//       title.includes('kombo') || title.includes('combo') ||a
//       title.includes('set') || title.includes('juftlik') ||
//       catName.includes('combo') || catName.includes('kombo') ||
//       catName.includes('set') || catName.includes('juftlik')
//     )
//   }, [item])

//   // modifier_groups dan itemlarni olish + allProducts dan rasm qidirish
//   const comboModifiers = useMemo(() => {
//     if (!isSpecialCategory) return []
//     const items = item?.modifier_groups?.[0]?.items || []
//     const flatFoods = allProducts?.flatMap((cat) => cat.foods || []) || []

//     return items.map(mod => {
//       // allProducts dan shu nomli mahsulotni topib rasmini olamiz
//       const matched = flatFoods.find(f =>
//         f.title?.toLowerCase().trim() === mod.name?.toLowerCase().trim() ||
//         f.title?.toLowerCase().includes(mod.name?.toLowerCase().trim()) ||
//         mod.name?.toLowerCase().includes(f.title?.toLowerCase().trim())
//       )
//       return {
//         id: mod.itemId,
//         title: mod.name,
//         dlvimg: mod.buttonImageUrl || matched?.dlvimg || matched?.img || '',
//         dprice: '0000',
//         type: 'modifier',
//         price: { deliveryPrice: 0, salePrice: 0 },
//       }
//     })
//   }, [item, isSpecialCategory, allProducts])



//   const cartItem = cartItems?.find((data) => data.id === item?.id)

//   const handleAction = (e, action, product) => {
//     e.stopPropagation()
//     dispatch(action(product))
//   }

//   const recommendations = useMemo(() => {
//     if (!allProducts || isSpecialCategory) return []
//     return allProducts
//       ?.flatMap((cat) => cat.foods || [])
//       ?.filter((food) => food.id !== item.id)
//       ?.sort(() => 0.5 - Math.random())
//       ?.slice(0, 4)
//   }, [allProducts, item.id, isSpecialCategory])

//   if (!item) return null

//   const handleAddComboToCart = (e) => {
//     e.stopPropagation()
//     dispatch(addToCartAction(item))
//     // parentId — qaysi asosiy mahsulotga tegishli ekanini belgilaymiz
//     comboModifiers.forEach(mod => dispatch(addToCartAction({ ...mod, parentId: item.id })))
//   }


//   // BETA TEST KOD
//   const handleAdd = (e) => {
//     e.stopPropagation()
//     dispatch(addToCartAction(item))
//     comboModifiers.forEach(mod => dispatch(addToCartAction({ ...mod, parentId: item.id})))
//   }

//   // Modifier kartochkasi
//   // — Tanlangan: + - counter ko'rinadi
//   // — Tanlanmagan: bo'sh radio doira ko'rinadi, bosib tanlash mumkin
//   const ModifierCard = ({ product }) => (
//     <Box
//       style={{
//         cursor: 'default',
//         userSelect: 'none',
//         pointerEvents: 'none',
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: '10px 14px',
//         borderRadius: 14,
//         border: '1.5px solid #007855',
//         backgroundColor: '#f0faf6',
//         gap: 12,
//         minWidth: 0,
//         position: 'relative',
//       }}
//     >
//       {/* Galochka — yuqori o'ng burchak */}
//       <div style={{
//         position: 'absolute',
//         top: 6,
//         right: 6,
//         width: 18,
//         height: 18,
//         borderRadius: '50%',
//         backgroundColor: '#007855',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexShrink: 0,
//       }}>
//         <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
//           <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       </div>

//       <div style={{ width: 48, height: 48, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: 10, padding: 4 }}>
//         {product?.dlvimg ? (
//           <Image
//             loader={() => dynamicImageLink(product.dlvimg)}
//             src={dynamicImageLink(product.dlvimg)}
//             alt={product.title}
//             width={48}
//             height={48}
//             unoptimized
//             style={{ objectFit: 'contain' }}
//           />
//         ) : (
//           <span style={{ fontSize: 26 }}>🍽️</span>
//         )}
//       </div>
//       <Typography style={{
//         fontSize: 13,
//         fontWeight: 600,
//         textAlign: 'left',
//         color: '#007855',
//         lineHeight: 1.3,
//         margin: 0,
//         wordBreak: 'break-word',
//         flex: 1,
//       }}>
//         {product.title}
//       </Typography>
//     </Box>
//   )

//   return (
//     <Box className={cls.modalSplitLayout}>

//       {/* CHAP — Rasm */}
//       <Box className={cls.modalLeftSticky}>
//         <Image
//           loader={() => dynamicImageLink(item?.dlvimg)}
//           src={dynamicImageLink(item?.dlvimg)}
//           alt={item?.title}
//           width={400}
//           height={350}
//           unoptimized
//         />
//       </Box>

//       {/* O'NG — Scroll kontent */}
//       <Box className={cls.modalRightScroll}>

//         <Typography className={cls.modalTitle} variant="h4">{item?.title}</Typography>
//         <Typography className={cls.modalDescription} dangerouslySetInnerHTML={{ __html: item?.desc }} />

//         {/* Narx va tugma */}
//         <Box className={cls.modalFooter}>
//           <Typography className={cls.modalPriceGreen}>
//             {item?.dprice ? numberToPrice(item.dprice.slice(0, -3)) : ''}
//           </Typography>

//           {isSpecialCategory ? (
//             cartItem ? (
//               <div className={cls.productCounter}>
//                 <IconButton onClick={(e) =>
//                   cartItem.quantity === 1
//                     ? handleAction(e, removeFromCartAction, item)
//                     : handleAction(e, reduceCartItemQuantityAction, item)
//                 }>
//                   <MinusIcon />
//                 </IconButton>
//                 <span>{cartItem.quantity}</span>
//                 <IconButton onClick={(e) => handleAction(e, addToCartAction, item)}>
//                   <PlusIcon />
//                 </IconButton>
//               </div>
//             ) : (
//               <button className={cls.productButton} onClick={handleAddComboToCart}>
//                 {btnText[locale]?.addToCart || 'Savatga'}
//               </button>
//             )
//           ) : (
//             cartItem ? (
//               <div className={cls.productCounter}>
//                 <IconButton onClick={(e) =>
//                   cartItem.quantity === 1
//                     ? handleAction(e, removeFromCartAction, item)
//                     : handleAction(e, reduceCartItemQuantityAction, item)
//                 }>
//                   <MinusIcon />
//                 </IconButton>
//                 <span>{cartItem.quantity}</span>
//                 <IconButton onClick={(e) => handleAction(e, addToCartAction, item)}>
//                   <PlusIcon />
//                 </IconButton>
//               </div>
//             ) : (
//               <button className={cls.productButton} onClick={(e) => handleAction(e, addToCartAction, item)}>
//                 {btnText[locale]?.addToCart}
//               </button>
//             )
//           )}
//         </Box>

//         {/* MODIFIKATORLAR — modifier_groups dan */}
//         {isSpecialCategory && comboModifiers.length > 0 && (
//           <Box className={cls.modifiersContainer}>
//             <Box className={cls.modSection}>
//               <Typography className={cls.modHeading} style={{ marginBottom: 10 }}>Qo'shimchalar</Typography>
//               <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
//                 {comboModifiers.map(mod => (
//                   <ModifierCard
//                     key={mod.id}
//                     product={mod}
//                   />
//                 ))}
//               </Box>
//             </Box>
//           </Box>
//         )}

//         {/* TAVSIYALAR */}
//         {!isSpecialCategory && (
//           <Box className={cls.recomSection}>
//             <Typography variant="h6" className={cls.recomHeading}>Sizga tavsiya etamiz</Typography>
//             <Box className={cls.recomGrid}>
//               {recommendations.map((recom) => {
//                 const inCart = cartItems?.find((c) => c.id === recom.id)
//                 return (
//                   <Box key={recom.id} className={cls.recomCard}>
//                     <Box className={cls.recomImgBox}>
//                       <Image
//                         loader={() => dynamicImageLink(recom?.dlvimg)}
//                         src={dynamicImageLink(recom?.dlvimg)}
//                         alt={recom.title} width={100} height={85} unoptimized
//                       />
//                     </Box>
//                     <Typography className={cls.recomTitle}>{recom.title}</Typography>
//                     <Typography className={cls.recomCardPrice}>
//                       {recom?.dprice ? numberToPrice(recom.dprice.slice(0, -3)) : ''}
//                     </Typography>
//                     {inCart ? (
//                       <div className={cls.recomCounterOutline}>
//                         <IconButton size="small" onClick={(e) =>
//                           inCart.quantity === 1
//                             ? handleAction(e, removeFromCartAction, recom)
//                             : handleAction(e, reduceCartItemQuantityAction, recom)
//                         }>
//                           <MinusIcon />
//                         </IconButton>
//                         <span>{inCart.quantity}</span>
//                         <IconButton size="small" onClick={(e) => handleAction(e, addToCartAction, recom)}>
//                           <PlusIcon />
//                         </IconButton>
//                       </div>
//                     ) : (
//                       <button className={cls.recomAddBtn} onClick={(e) => handleAction(e, addToCartAction, recom)}>
//                         + Qo'shish
//                       </button>
//                     )}
//                   </Box>
//                 )
//               })}
//             </Box>
//           </Box>
//         )}

//       </Box>
//     </Box>
//   )
// }
























import { Box, Typography, IconButton } from '@mui/material'
import Image from 'next/image'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { btnText } from '../../mock/menu'
import { useRouter } from 'next/router'
import {
  addToCartAction,
  reduceCartItemQuantityAction,
  removeFromCartAction,
} from '../../store/actions/cartActions/cartActions'
import { numberToPrice } from '../../utils/numberToPrice'
import { MinusIcon, PlusIcon } from '../Icons'
import dynamicImageLink from '../../utils/dynamicImageLink'

export default function ProductModal({ item, cls, allProducts }) {
  const dispatch = useDispatch()
  const { locale } = useRouter()
  const { cartItems } = useSelector((state) => state.cart)

  const isSpecialCategory = useMemo(() => {
    if (item?.modifier_groups?.length > 0) return true
    const title = item?.title?.toLowerCase() || ''
    const catName = item?.category_name?.toLowerCase() || ''
    return (
      title.includes('kombo') ||
      title.includes('combo') ||
      title.includes('set') ||
      title.includes('juftlik') ||
      catName.includes('combo') ||
      catName.includes('kombo') ||
      catName.includes('set') ||
      catName.includes('juftlik')
    )
  }, [item])

  const comboModifiers = useMemo(() => {
    if (!isSpecialCategory) return []
    const items = item?.modifier_groups?.[0]?.items || []
    const flatFoods = allProducts?.flatMap((cat) => cat.foods || []) || []

    return items.map((mod) => {
      const matched = flatFoods.find(
        (f) =>
          f.title?.toLowerCase().trim() === mod.name?.toLowerCase().trim() ||
          f.title?.toLowerCase().includes(mod.name?.toLowerCase().trim()) ||
          mod.name?.toLowerCase().includes(f.title?.toLowerCase().trim())
      )
      return {
        id: mod.itemId,
        title: mod.name,
        dlvimg: mod.buttonImageUrl || matched?.dlvimg || matched?.img || '',
        dprice: '0000',
        type: 'modifier',
        price: { deliveryPrice: 0, salePrice: 0 },
      }
    })
  }, [item, isSpecialCategory, allProducts])

  const cartItem = cartItems?.find((data) => data.id === item?.id)

  const handleAction = (e, action, product) => {
    e.stopPropagation()
    dispatch(action(product))
  }

  const recommendations = useMemo(() => {
    if (!allProducts || isSpecialCategory) return []
    return allProducts
      ?.flatMap((cat) => cat.foods || [])
      ?.filter((food) => food.id !== item.id)
      ?.sort(() => 0.5 - Math.random())
      ?.slice(0, 4)
  }, [allProducts, item.id, isSpecialCategory])

  if (!item) return null

  const handleAddComboToCart = (e) => {
    e.stopPropagation()
    dispatch(addToCartAction(item))
    comboModifiers.forEach((mod) =>
      dispatch(addToCartAction({ ...mod, parentId: item.id }))
    )
  }

  const ModifierCard = ({ product }) => (
    <Box
      style={{
        cursor: 'default',
        userSelect: 'none',
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '10px 14px',
        borderRadius: 14,
        border: '1.5px solid #007855',
        backgroundColor: '#f0faf6',
        gap: 12,
        minWidth: 0,
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 6,
          right: 6,
          width: 18,
          height: 18,
          borderRadius: '50%',
          backgroundColor: '#007855',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path
            d="M1 4L3.5 6.5L9 1"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div
        style={{
          width: 48,
          height: 48,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          borderRadius: 10,
          padding: 4,
        }}
      >
        {product?.dlvimg ? (
          <Image
            loader={() => dynamicImageLink(product.dlvimg)}
            src={dynamicImageLink(product.dlvimg)}
            alt={product.title}
            width={48}
            height={48}
            unoptimized
            style={{ objectFit: 'contain' }}
          />
        ) : (
          <span style={{ fontSize: 26 }}>🍽️</span>
        )}
      </div>

      <Typography
        style={{
          fontSize: 13,
          fontWeight: 600,
          textAlign: 'left',
          color: '#007855',
          lineHeight: 1.3,
          margin: 0,
          wordBreak: 'break-word',
          flex: 1,
        }}
      >
        {product.title}
      </Typography>
    </Box>
  )

  return (
    <Box className={cls.modalSplitLayout}>

      {/* CHAP — Rasm */}
      <Box className={cls.modalLeftSticky}>
        <Image
          loader={() => dynamicImageLink(item?.dlvimg)}
          src={dynamicImageLink(item?.dlvimg)}
          alt={item?.title}
          width={400}
          height={350}
          unoptimized
        />
      </Box>

      {/* O'NG — Scroll kontent */}
      <Box className={cls.modalRightScroll}>

        <Typography className={cls.modalTitle} variant="h4">
          {item?.title}
        </Typography>

        <Typography
          className={cls.modalDescription}
          dangerouslySetInnerHTML={{ __html: item?.desc }}
        />

        {/* Narx va tugma */}
        <Box className={cls.modalFooter}>
          <Typography className={cls.modalPriceGreen}>
            {item?.dprice ? numberToPrice(item.dprice.slice(0, -3)) : ''}
          </Typography>

          {isSpecialCategory ? (
            cartItem ? (
              <div className={cls.productCounter}>
                <IconButton
                  onClick={(e) =>
                    cartItem.quantity === 1
                      ? handleAction(e, removeFromCartAction, item)
                      : handleAction(e, reduceCartItemQuantityAction, item)
                  }
                >
                  <MinusIcon />
                </IconButton>
                <span>{cartItem.quantity}</span>
                <IconButton onClick={(e) => handleAction(e, addToCartAction, item)}>
                  <PlusIcon />
                </IconButton>
              </div>
            ) : (
              <button className={cls.productButton} onClick={handleAddComboToCart}>
                {btnText[locale]?.addToCart || 'Savatga'}
              </button>
            )
          ) : cartItem ? (
            <div className={cls.productCounter}>
              <IconButton
                onClick={(e) =>
                  cartItem.quantity === 1
                    ? handleAction(e, removeFromCartAction, item)
                    : handleAction(e, reduceCartItemQuantityAction, item)
                }
              >
                <MinusIcon />
              </IconButton>
              <span>{cartItem.quantity}</span>
              <IconButton onClick={(e) => handleAction(e, addToCartAction, item)}>
                <PlusIcon />
              </IconButton>
            </div>
          ) : (
            <button
              className={cls.productButton}
              onClick={(e) => handleAction(e, addToCartAction, item)}
            >
              {btnText[locale]?.addToCart}
            </button>
          )}
        </Box>

        {/* MODIFIKATORLAR */}
        {isSpecialCategory && comboModifiers.length > 0 && (
          <Box className={cls.modifiersContainer}>
            <Box className={cls.modSection}>
              <Typography className={cls.modHeading} style={{ marginBottom: 10 }}>
                Qo'shimchalar
              </Typography>
              <Box
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 10,
                }}
              >
                {comboModifiers.map((mod) => (
                  <ModifierCard key={mod.id} product={mod} />
                ))}
              </Box>
            </Box>
          </Box>
        )}

        {/* TAVSIYALAR */}
        {!isSpecialCategory && (
          <Box className={cls.recomSection}>
            <Typography variant="h6" className={cls.recomHeading}>
              Sizga tavsiya etamiz
            </Typography>
            <Box className={cls.recomGrid}>
              {recommendations.map((recom) => {
                const inCart = cartItems?.find((c) => c.id === recom.id)
                return (
                  <Box key={recom.id} className={cls.recomCard}>
                    <Box className={cls.recomImgBox}>
                      <Image
                        loader={() => dynamicImageLink(recom?.dlvimg)}
                        src={dynamicImageLink(recom?.dlvimg)}
                        alt={recom.title}
                        width={100}
                        height={85}
                        unoptimized
                      />
                    </Box>
                    <Typography className={cls.recomTitle}>
                      {recom.title}
                    </Typography>
                    <Typography className={cls.recomCardPrice}>
                      {recom?.dprice ? numberToPrice(recom.dprice.slice(0, -3)) : ''}
                    </Typography>
                    {inCart ? (
                      <div className={cls.recomCounterOutline}>
                        <IconButton
                          size="small"
                          onClick={(e) =>
                            inCart.quantity === 1
                              ? handleAction(e, removeFromCartAction, recom)
                              : handleAction(e, reduceCartItemQuantityAction, recom)
                          }
                        >
                          <MinusIcon />
                        </IconButton>
                        <span>{inCart.quantity}</span>
                        <IconButton
                          size="small"
                          onClick={(e) => handleAction(e, addToCartAction, recom)}
                        >
                          <PlusIcon />
                        </IconButton>
                      </div>
                    ) : (
                      <button
                        className={cls.recomAddBtn}
                        onClick={(e) => handleAction(e, addToCartAction, recom)}
                      >
                        + Qo'shish
                      </button>
                    )}
                  </Box>
                )
              })}
            </Box>
          </Box>
        )}

      </Box>
    </Box>
  )
}