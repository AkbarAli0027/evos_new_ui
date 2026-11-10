// import { Box, IconButton, Typography } from '@mui/material'
// import Image from 'next/image'
// import { useRouter } from 'next/router'
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { btnText } from '../../mock/menu'
// import { addToCartAction, reduceCartItemQuantityAction, removeFromCartAction } from '../../store/actions/cartActions/cartActions'
// import { addToCartWithAnimation } from '../../utils/addToCartWithAnimation'
// import { numberToPrice } from '../../utils/numberToPrice'
// import { MinusIcon, PlusIcon } from '../Icons'
// import { setOpenAddress } from '../../store/actions/addressActions/addressActions'
// import dynamicImageLink from '../../utils/dynamicImageLink'

// export default function SwiperMenuItem({ item, cls, handleOpen }) {
//   const dispatch = useDispatch()
//   const { cartItems } = useSelector((state) => state.cart)
//   const { currentAddress } = useSelector((state) => state.address)
//   const { locale } = useRouter()
//   const cartItem = cartItems?.find((i) => i.id === item.id)

//   const onAddClick = (e) => {
//     e.stopPropagation() // Modal ochilib ketishini to'xtatadi
//     currentAddress ? addToCartWithAnimation(e, item, dispatch, addToCartAction) : dispatch(setOpenAddress())
//   }

//   return (
//     <div className={cls.productCard} onClick={() => handleOpen(item)}>
//       <Box sx={{ width: '100%', pt: '80%', position: 'relative', bgcolor: '#fff' }}>
//         <Image
//           loader={() => dynamicImageLink(item.dlvimg)}
//           src={dynamicImageLink(item.dlvimg)}
//           alt={item.title}
//           layout="fill"
//           objectFit="contain"
//           unoptimized
//         />
//       </Box>

//       <Box sx={{ p: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
//         <Typography sx={{ fontWeight: 700, fontSize: '18px', height: '50px', mb: 1, color: '#000' }}>
//           {item.title}
//         </Typography>

//         <Typography sx={{ fontSize: '13px', color: '#757575', height: '35px', mb: 2, overflow: 'hidden' }}>
//           {item.desc}
//         </Typography>

//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 'auto' }}>
//           <Typography className={cls.productPrice}>
//             {numberToPrice(item?.dprice)}
//           </Typography>

//           <Box>
//             {cartItem ? (
//               <div className={cls.productCounter}>
//                 <IconButton size="small" onClick={(e) => { e.stopPropagation(); cartItem.quantity > 1 ? dispatch(reduceCartItemQuantityAction(item)) : dispatch(removeFromCartAction(item)) }}>
//                   <MinusIcon style={{ color: '#007855' }} />
//                 </IconButton>
//                 <Typography sx={{ px: 1, fontWeight: 700, color: '#007855' }}>{cartItem.quantity}</Typography>
//                 <IconButton size="small" onClick={(e) => { e.stopPropagation(); dispatch(addToCartAction(item)) }}>
//                   <PlusIcon style={{ color: '#007855' }} />
//                 </IconButton>
//               </div>
//             ) : (
              
//               <button className={cls.productButton} onClick={onAddClick}>
//                 <Typography variant="h4" sx={{ fontSize: '12px' }}>{btnText[locale].addToCart}</Typography>
//               </button>
//             )}
//           </Box>
//         </Box>
//       </Box>
//     </div>
//   )
// }



import { Box, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { btnText } from '../../mock/menu'
import { addToCartAction, reduceCartItemQuantityAction, removeFromCartAction } from '../../store/actions/cartActions/cartActions'
import { addToCartWithAnimation } from '../../utils/addToCartWithAnimation'
import { numberToPrice } from '../../utils/numberToPrice'
import { MinusIcon, PlusIcon } from '../Icons'
import { setOpenAddress } from '../../store/actions/addressActions/addressActions'
import dynamicImageLink from '../../utils/dynamicImageLink'

export default function SwiperMenuItem({ item, cls, handleOpen }) {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)
  const { currentAddress } = useSelector((state) => state.address)
  const { locale } = useRouter()
  const cartItem = cartItems?.find((i) => i.id === item.id)

  const onAddClick = (e) => {
    e.stopPropagation() // Modal ochilib ketishini to'xtatadi
    currentAddress ? addToCartWithAnimation(e, item, dispatch, addToCartAction) : dispatch(setOpenAddress())
  }

  return (
    <div className={cls.productCard} onClick={() => handleOpen(item)}>
      {/* Rasm qismi */}
      <Box sx={{ width: '100%', pt: '80%', position: 'relative', bgcolor: '#fff' }}>
        <Image
          loader={() => dynamicImageLink(item.dlvimg)}
          src={dynamicImageLink(item.dlvimg)}
          alt={item.title}
          layout="fill"
          objectFit="contain"
          unoptimized
        />
      </Box>

      {/* Ma'lumotlar bloki */}
      <Box sx={{ p: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        
        {/* Taom nomi - height olib tashlandi, line-clamp qo'shildi */}
        <Typography sx={{ 
          fontWeight: 800, 
          fontSize: '18px', 
          mb: '4px', // Tavsif bilan orani yaqinlashtirish
          color: '#000',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          lineHeight: '1.2'
        }}>
          {item.title}
        </Typography>

        {/* Taom tavsifi (Informatsiya) - Teparoq ko'tarildi */}
        <Typography sx={{ 
          fontSize: '12px', 
          color: '#757575', 
          minHeight: '36px', // Bo'sh bo'lganda ham joy egallab turishi uchun
          mb: 2, 
          display: '-webkit-box',
          WebkitLineClamp: 3, 
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          lineHeight: '1.3'
        }}>
          {item.desc}
        </Typography>

        {/* Narx va Tugma qatori */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          mt: 'auto', // Har doim eng pastda turishini ta'minlaydi
          gap: '8px' 
        }}>
          {/* Narx va so'm har doim bir qatorda */}
          <Typography sx={{ 
             fontWeight: 800, 
             fontSize: '18px', 
             color: 'rgb(7, 120, 85)',
             whiteSpace: 'nowrap' // Sinib tushishini oldini oladi
          }}>
            {numberToPrice(item?.dprice)}
          </Typography>

          <Box sx={{ flexShrink: 0 }}>
            {cartItem ? (
              <div className={cls.productCounter}>
                <IconButton size="small" onClick={(e) => { e.stopPropagation(); cartItem.quantity > 1 ? dispatch(reduceCartItemQuantityAction(item)) : dispatch(removeFromCartAction(item)) }}>
                  <MinusIcon style={{ color: '#007855' }} />
                </IconButton>
                <Typography sx={{ px: 1, fontWeight: 700, color: '#007855' }}>{cartItem.quantity}</Typography>
                <IconButton size="small" onClick={(e) => { e.stopPropagation(); dispatch(addToCartAction(item)) }}>
                  <PlusIcon style={{ color: '#007855' }} />
                </IconButton>
              </div>
            ) : (
              <button className={cls.productButton} onClick={onAddClick}>
                <Typography component="span" sx={{ fontSize: '12px', fontWeight: 700 }}>
                  {btnText[locale].addToCart}
                </Typography>
              </button>
            )}
          </Box>
        </Box>
      </Box>
    </div>
  )
}