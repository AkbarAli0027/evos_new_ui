// import { Box, IconButton, Typography } from '@mui/material'
// import Image from 'next/image'
// import { useRouter } from 'next/router'
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { btnText } from '../../mock/menu'
// import {
//   addToCartAction,
//   reduceCartItemQuantityAction,
//   removeFromCartAction,
// } from '../../store/actions/cartActions/cartActions'
// import { addToCartWithAnimation } from '../../utils/addToCartWithAnimation'
// import { numberToPrice } from '../../utils/numberToPrice'
// import { MinusIcon, PlusIcon } from '../Icons'
// import { setOpenAddress } from '../../store/actions/addressActions/addressActions'
// import dynamicImageLink from '../../utils/dynamicImageLink'

// export default function ProductItem({ item, cls, setProductModalItem }) {
//   const dispatch = useDispatch()
//   const { cartItems } = useSelector((state) => state.cart)
//   const cartItem = cartItems && cartItems.find((data) => data.id === item.id)
//   const { currentAddress } = useSelector((state) => state.address)
//   const { locale } = useRouter()

//   // SIZ BERGAN FONT FAMILY
//   const openSansFont = '"Open Sans", sans-serif';

//   const addToCart = (event) => {
//     event.stopPropagation()
//     if (currentAddress) {
//       addToCartWithAnimation(event, item, dispatch, addToCartAction)
//     } else {
//       dispatch(setOpenAddress())
//     }
//   }

//   const handleSubtract = (event) => {
//     event.stopPropagation()
//     if (cartItem.quantity !== 1) {
//       dispatch(reduceCartItemQuantityAction(item))
//     } else {
//       dispatch(removeFromCartAction(item))
//     }
//   }

//   const handleAdd = (event) => {
//     event.stopPropagation()
//     dispatch(addToCartAction(item))
//   }

//   const handleItemClick = () => {
//     if (setProductModalItem) {
//       setProductModalItem(item)
//     }
//   }

//   return (
//     <div
//       className={`${cls.productCard} cart-item`}
//       onClick={handleItemClick}
//       style={{
//         position: 'relative',
//         display: 'flex',
//         flexDirection: 'column',
//         cursor: 'pointer',
//         height: '100%',
//         backgroundColor: '#fff',
//         borderRadius: '16px',
//         overflow: 'hidden',
//         border: 'none',
//         fontFamily: openSansFont,
//         transition: 'all 0.3s ease',
//       }}
//     >
//       <div
//         id={item.id}
//         style={{
//           position: 'absolute',
//           top: '20%',
//           left: '50%',
//           width: '1px',
//           height: '1px',
//           opacity: 0,
//           pointerEvents: 'none'
//         }}
//       />

//       <Box sx={{ position: 'relative', width: '100%', paddingTop: '80%', backgroundColor: '#fff' }}>
//         <Image
//           loader={() => dynamicImageLink(item.dlvimg)}
//           src={dynamicImageLink(item.dlvimg)}
//           alt={item.title}
//           layout="fill"
//           objectFit="contain"
//           unoptimized
//         />
//       </Box>

//       <div
//         className={cls.productBody}
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           flexGrow: 1,
//           padding: '16px 14px',
//           backgroundColor: '#fff',
//         }}
//       >
//         <div className={cls.productTexts} style={{ marginBottom: '12px' }}>
//           {/* TAOM NOMI - KATTALASHTIRILGAN VA QORALIGI OSHIRILGAN */}
//           <Typography
//             variant="h3"
//             sx={{
//               fontWeight: 800, // Eng qalin holati
//               fontSize: '20px', // Kattalashtirildi
//               color: '#000',
//               lineHeight: '1.2',
//               marginBottom: '6px',
//               fontFamily: openSansFont,
//               // Ikki qatordan oshsa nuqta qo'yish
//               display: '-webkit-box',
//               WebkitLineClamp: 2,
//               WebkitBoxOrient: 'vertical',
//               overflow: 'hidden'
//             }}
//           >
//             {item.title}
//           </Typography>

//           <Box height={38} overflow="hidden">
//             <Typography
//               variant="body2"
//               sx={{ 
//                 fontSize: '13px', 
//                 color: '#666', 
//                 fontFamily: openSansFont,
//                 lineHeight: '1.4',
//                 fontWeight: 400
//               }}
//               dangerouslySetInnerHTML={{ __html: item.desc }}
//             />
//           </Box>
//         </div>

//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             marginTop: 'auto',
//             gap: '8px',
//           }}
//         >
//           {/* NARX - HAM SHU FONTDA */}
//           <Typography 
//             variant="h2" 
//             sx={{ 
//               fontSize: '18px', 
//               fontWeight: 800, 
//               color: 'rgb(7, 120, 85)',
//               fontFamily: openSansFont 
//             }}
//           >
//             {numberToPrice(item.dprice.slice(0, -3))}
//           </Typography>

//           {cartItem ? (
//             <div
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 height: '42px',
//                 border: '2px solid #007855',
//                 borderRadius: '25px',
//                 padding: '0 6px',
//                 backgroundColor: '#fff'
//               }}
//             >
//               <IconButton onClick={handleSubtract} size="small" sx={{ color: '#007855' }}>
//                 <MinusIcon />
//               </IconButton>
//               <Typography 
//                 sx={{ 
//                   fontSize: '16px', 
//                   fontWeight: 700, 
//                   color: '#007855', 
//                   px: 1,
//                   fontFamily: openSansFont 
//                 }}
//               >
//                 {cartItem.quantity}
//               </Typography>
//               <IconButton onClick={handleAdd} size="small" sx={{ color: '#007855' }}>
//                 <PlusIcon />
//               </IconButton>
//             </div>
//           ) : (
//             <button
//               className={cls.productButton}
//               onClick={addToCart}
//               style={{
//                 padding: '10px 18px',
//                 borderRadius: '25px',
//                 border: '2px solid #007855',
//                 backgroundColor: '#fff',
//                 color: '#007855',
//                 fontWeight: 700,
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 transition: 'all 0.2s ease',
//                 fontFamily: openSansFont,
//               }}
//             >
//               {btnText[locale]?.addToCart}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

















// import { Box, IconButton, Typography } from '@mui/material'
// import Image from 'next/image'
// import { useRouter } from 'next/router'
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { btnText } from '../../mock/menu'
// import {
//   addToCartAction,
//   reduceCartItemQuantityAction,
//   removeFromCartAction,
// } from '../../store/actions/cartActions/cartActions'
// import { addToCartWithAnimation } from '../../utils/addToCartWithAnimation'
// import { numberToPrice } from '../../utils/numberToPrice'
// import { MinusIcon, PlusIcon } from '../Icons'
// import { setOpenAddress } from '../../store/actions/addressActions/addressActions'
// import dynamicImageLink from '../../utils/dynamicImageLink'

// export default function ProductItem({ item, cls, setProductModalItem }) {
//   const dispatch = useDispatch()
//   const { cartItems } = useSelector((state) => state.cart)
//   const cartItem = cartItems && cartItems.find((data) => data.id === item.id)
//   const { currentAddress } = useSelector((state) => state.address)
//   const { locale } = useRouter()

//   const openSansFont = '"Open Sans", sans-serif'

//   // Combo/Set ekanligini tekshirish
//   const isSpecialCategory = Boolean(item?.modifier_groups?.length > 0) || (() => {
//     const title = item?.title?.toLowerCase() || ''
//     const catName = item?.category_name?.toLowerCase() || ''
//     return (
//       title.includes('kombo') || title.includes('combo') ||
//       title.includes('set') || title.includes('juftlik') ||
//       catName.includes('combo') || catName.includes('kombo') ||
//       catName.includes('set') || catName.includes('juftlik')
//     )
//   })()

//   const addToCart = (event) => {
//     event.stopPropagation()
//     if (!currentAddress) {
//       dispatch(setOpenAddress())
//       return
//     }
//     // Combo/Set bo'lsa — modalni och, savatga qo'shma (modal ichidan qo'shiladi)
//     if (isSpecialCategory) {
//       setProductModalItem(item)
//       return
//     }
//     addToCartWithAnimation(event, item, dispatch, addToCartAction)
//   }

//   const handleSubtract = (event) => {
//     event.stopPropagation()
//     if (cartItem.quantity !== 1) {
//       dispatch(reduceCartItemQuantityAction(item))
//     } else {
//       dispatch(removeFromCartAction(item))
//     }
//   }

//   const handleAdd = (event) => {
//     event.stopPropagation()
//     dispatch(addToCartAction(item))
//   }

//   const handleItemClick = () => {
//     if (setProductModalItem) {
//       setProductModalItem(item)
//     }
//   }

//   return (
//     <div
//       className={`${cls.productCard} cart-item`}
//       onClick={handleItemClick}
//       style={{
//         position: 'relative',
//         display: 'flex',
//         flexDirection: 'column',
//         cursor: 'pointer',
//         height: '100%',
//         backgroundColor: '#fff',
//         borderRadius: '16px',
//         overflow: 'hidden',
//         border: 'none',
//         fontFamily: openSansFont,
//         transition: 'all 0.3s ease',
//       }}
//     >
//       <div
//         id={item.id}
//         style={{
//           position: 'absolute',
//           top: '20%',
//           left: '50%',
//           width: '1px',
//           height: '1px',
//           opacity: 0,
//           pointerEvents: 'none'
//         }}
//       />

//       <Box sx={{ position: 'relative', width: '100%', paddingTop: '80%', backgroundColor: '#fff' }}>
//         <Image
//           loader={() => dynamicImageLink(item.dlvimg)}
//           src={dynamicImageLink(item.dlvimg)}
//           alt={item.title}
//           layout="fill"
//           objectFit="contain"
//           unoptimized
//         />
//       </Box>

//       <div
//         className={cls.productBody}
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           flexGrow: 1,
//           padding: '16px 14px',
//           backgroundColor: '#fff',
//         }}
//       >
//         <div className={cls.productTexts} style={{ marginBottom: '12px' }}>
//           <Typography
//             variant="h3"
//             sx={{
//               fontWeight: 800,
//               fontSize: '20px',
//               color: '#000',
//               lineHeight: '1.2',
//               marginBottom: '6px',
//               fontFamily: openSansFont,
//               display: '-webkit-box',
//               WebkitLineClamp: 2,
//               WebkitBoxOrient: 'vertical',
//               overflow: 'hidden'
//             }}
//           >
//             {item.title}
//           </Typography>

//           <Box height={38} overflow="hidden">
//             <Typography
//               variant="body2"
//               sx={{
//                 fontSize: '13px',
//                 color: '#666',
//                 fontFamily: openSansFont,
//                 lineHeight: '1.4',
//                 fontWeight: 400
//               }}
//               dangerouslySetInnerHTML={{ __html: item.desc }}
//             />
//           </Box>
//         </div>

//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             marginTop: 'auto',
//             gap: '8px',
//           }}
//         >
//           <Typography
//             variant="h2"
//             sx={{
//               fontSize: '18px',
//               fontWeight: 800,
//               color: 'rgb(7, 120, 85)',
//               fontFamily: openSansFont
//             }}
//           >
//             {numberToPrice(item.dprice.slice(0, -3))}
//           </Typography>

//           {cartItem ? (
//             // Savatda bor — + - counter
//             <div
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 height: '42px',
//                 border: '2px solid #007855',
//                 borderRadius: '25px',
//                 padding: '0 6px',
//                 backgroundColor: '#fff'
//               }}
//             >
//               <IconButton onClick={handleSubtract} size="small" sx={{ color: '#007855' }}>
//                 <MinusIcon />
//               </IconButton>
//               <Typography
//                 sx={{
//                   fontSize: '16px',
//                   fontWeight: 700,
//                   color: '#007855',
//                   px: 1,
//                   fontFamily: openSansFont
//                 }}
//               >
//                 {cartItem.quantity}
//               </Typography>
//               <IconButton onClick={handleAdd} size="small" sx={{ color: '#007855' }}>
//                 <PlusIcon />
//               </IconButton>
//             </div>
//           ) : (
//             <button
//               className={cls.productButton}
//               onClick={addToCart}
//               style={{
//                 padding: '10px 18px',
//                 borderRadius: '25px',
//                 border: '2px solid #007855',
//                 backgroundColor: '#fff',
//                 color: '#007855',
//                 fontWeight: 700,
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 transition: 'all 0.2s ease',
//                 fontFamily: openSansFont,
//               }}
//             >
//               {btnText[locale]?.addToCart}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }



















import { Box, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { btnText } from '../../mock/menu'
import {
  addToCartAction,
  reduceCartItemQuantityAction,
  removeFromCartAction,
} from '../../store/actions/cartActions/cartActions'
import { addToCartWithAnimation } from '../../utils/addToCartWithAnimation'
import { numberToPrice } from '../../utils/numberToPrice'
import { MinusIcon, PlusIcon } from '../Icons'
import { setOpenAddress } from '../../store/actions/addressActions/addressActions'
import dynamicImageLink from '../../utils/dynamicImageLink'

export default function ProductItem({ item, cls, setProductModalItem }) {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)
  const cartItem = cartItems && cartItems.find((data) => data.id === item.id)
  const { currentAddress } = useSelector((state) => state.address)
  const { locale } = useRouter()

  const openSansFont = '"Open Sans", sans-serif'

  // Combo/Set ekanligini tekshirish
  const isSpecialCategory = Boolean(item?.modifier_groups?.length > 0) || (() => {
    const title = item?.title?.toLowerCase() || ''
    const catName = item?.category_name?.toLowerCase() || ''
    return (
      title.includes('kombo') || title.includes('combo') ||
      title.includes('set') || title.includes('juftlik') ||
      catName.includes('combo') || catName.includes('kombo') ||
      catName.includes('set') || catName.includes('juftlik')
    )
  })()

  const addToCart = (event) => {
    event.stopPropagation()
    if (!currentAddress) {
      dispatch(setOpenAddress())
      return
    }
    // Combo/Set bo'lsa — modalni och, savatga qo'shma (modal ichidan qo'shiladi)
    if (isSpecialCategory) {
      setProductModalItem(item)
      return
    }
    addToCartWithAnimation(event, item, dispatch, addToCartAction)
  }

  const handleSubtract = (event) => {
    event.stopPropagation()
    if (cartItem.quantity !== 1) {
      dispatch(reduceCartItemQuantityAction(item))
    } else {
      dispatch(removeFromCartAction(item))
    }
  }

  const handleAdd = (event) => {
    event.stopPropagation()
    dispatch(addToCartAction(item))
  }

  const handleItemClick = () => {
    if (setProductModalItem) {
      setProductModalItem(item)
    }
  }

  return (
    <div
      className={`${cls.productCard} cart-item`}
      onClick={handleItemClick}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: '16px',
        overflow: 'hidden',
        border: 'none',
        fontFamily: openSansFont,
        transition: 'all 0.3s ease',
      }}
    >
      <div
        id={item.id}
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          width: '1px',
          height: '1px',
          opacity: 0,
          pointerEvents: 'none'
        }}
      />

      <Box sx={{ position: 'relative', width: '100%', paddingTop: '80%', backgroundColor: '#fff' }}>
        <Image
          loader={() => dynamicImageLink(item.dlvimg)}
          src={dynamicImageLink(item.dlvimg)}
          alt={item.title}
          layout="fill"
          objectFit="contain"
          unoptimized
        />
      </Box>

      <div
        className={cls.productBody}
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          padding: '16px 14px',
          backgroundColor: '#fff',
        }}
      >
        <div className={cls.productTexts} style={{ marginBottom: '12px' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '13px', sm: '16px', md: '20px' },
              color: '#000',
              lineHeight: '1.2',
              marginBottom: { xs: '3px', md: '6px' },
              fontFamily: openSansFont,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {item.title}
          </Typography>

          <Box height={38} overflow="hidden">
            <Typography
              variant="body2"
              sx={{
                fontSize: '13px',
                color: '#666',
                fontFamily: openSansFont,
                lineHeight: '1.4',
                fontWeight: 400
              }}
              dangerouslySetInnerHTML={{ __html: item.desc }}
            />
          </Box>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 'auto',
            gap: '8px',
          }}
        >
           <Typography
             variant="h2"
             sx={{
               fontSize: { xs: '13px', sm: '15px', md: '18px' },
               fontWeight: 800,
               color: 'rgb(7, 120, 85)',
               fontFamily: openSansFont,
               lineHeight: 1.1,
             }}
           >
             {numberToPrice(item.dprice.slice(0, -3))}
           </Typography>

          {cartItem ? (
            // Savatda bor — + - counter
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                height: 'clamp(32px, 8vw, 42px)',
                border: '2px solid #007855',
                borderRadius: '25px',
                padding: '0 2px',
                backgroundColor: '#fff'
              }}
            >
              <IconButton onClick={handleSubtract} size="small" sx={{ color: '#007855' }}>
                <MinusIcon />
              </IconButton>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#007855',
                  px: 1,
                  fontFamily: openSansFont
                }}
              >
                {cartItem.quantity}
              </Typography>
              <IconButton onClick={handleAdd} size="small" sx={{ color: '#007855' }}>
                <PlusIcon />
              </IconButton>
            </div>
          ) : (
            <button
              className={cls.productButton}
              onClick={addToCart}
              style={{
                padding: '6px 10px',
                borderRadius: '20px',
                border: '2px solid #007855',
                backgroundColor: '#fff',
                color: '#007855',
                fontWeight: 700,
                cursor: 'pointer',
                fontSize: 'clamp(11px, 2.5vw, 14px)',
                transition: 'all 0.2s ease',
                fontFamily: openSansFont,
                whiteSpace: 'nowrap',
              }}
            >
              {btnText[locale]?.addToCart}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}