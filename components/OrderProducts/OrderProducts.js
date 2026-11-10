// import { IconButton, Typography } from '@mui/material'
// import { Box } from '@mui/system'
// import Image from 'next/image'
// import React from 'react'
// import { shallowEqual, useSelector } from 'react-redux'
// import { numberToPrice } from '../../utils/numberToPrice'
// import CardWrapper from '../CardWrapper/CardWrapper'
// import Counter from '../Counter/Counter'
// import { TrashIcon } from '../Icons'
// import cls from './OrderProducts.module.scss'
// import { menu } from '../../mock/menu'
// import { makePublicRouterInstance, useRouter } from 'next/router'
// import dynamicImageLink from '../../utils/dynamicImageLink'

// export default function OrderProducts() {
//   const { locale } = useRouter()
//   const { cartItems } = useSelector((state) => state.cart, shallowEqual)

//   // console.log('cartItems======>', cartItems)
//   return (
//     <CardWrapper mt={2} id='orderProducts'>
//       <Box display='flex' justifyContent='space-between'>
//         <Typography variant={`h1`} color={`black`}>
//           {menu[locale].yourOrder}
//         </Typography>
//         {/* <IconButton onClick={() => console.log('click')}>
//           <TrashIcon />
//         </IconButton> */}
//       </Box>
//       <Box mt={4}>
//         {cartItems.map((item) => (
//           <div key={item.id} className={cls.orderItem}>
//             <div className={cls.itemInfo}>
//               <Box
//               // position='relative'
//               // width={96}
//               // height={96}
//               // bgcolor='secondary.main'
//               >
//                 <Image
//                   loader={() => {
//                     dynamicImageLink(
//                       item.dlvimg ? item.dlvimg : item.deliveryImage
//                     )
//                   }}
//                   src={dynamicImageLink(
//                     item.dlvimg ? item.dlvimg : item.deliveryImage
//                   )}
//                   alt={item.title}
//                   width={96}
//                   height={96}
//                   unoptimized={true}
//                 />
//               </Box>

//               <div className={cls.itemName}>
//                 <Typography variant='h4' sx={{ marginBottom: 1 }}>
//                   {item.title}
//                 </Typography>
//                 <Typography
//                   variant='body4'
//                   sx={{ maxWidth: '178px', height: 40, overflow: 'hidden' }}
//                   className={cls.itemDescription}
//                 >
//                   {item.description}
//                 </Typography>
//               </div>
//             </div>
//             <div className={cls.priceInfo}>
//               <div style={{ textAlign: 'right' }}>
//                 <Typography
//                   variant={`h8`}
//                   sx={{ whiteSpace: 'nowrap', color: '#077855' }}
//                 >
//                   {numberToPrice(
//                     (item?.dprice
//                       ? item?.dprice?.slice(0, -3)
//                       : item.price.deliveryPrice
//                       ? item.price.deliveryPrice
//                       : item.price.salePrice) * item.quantity
//                   )}
//                 </Typography>
//                 <Counter data={item} />
//               </div>
//             </div>

//           </div>
//         ))}
//       </Box>
//     </CardWrapper>
//   )
// }





import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { numberToPrice } from '../../utils/numberToPrice'
import CardWrapper from '../CardWrapper/CardWrapper'
import Counter from '../Counter/Counter'
import cls from './OrderProducts.module.scss'
import { menu } from '../../mock/menu'
import { useRouter } from 'next/router'
import dynamicImageLink from '../../utils/dynamicImageLink'

export default function OrderProducts() {
  const { locale } = useRouter()
  const { cartItems } = useSelector((state) => state.cart, shallowEqual)

  // Faqat oddiy mahsulotlar (modifier emas)
  const regularItems = cartItems.filter(i => i.type !== 'modifier')

  // Modifier larni parentId bo'yicha map
  const modifierMap = {}
  cartItems
    .filter(i => i.type === 'modifier')
    .forEach(mod => {
      if (!modifierMap[mod.parentId]) modifierMap[mod.parentId] = []
      modifierMap[mod.parentId].push(mod)
    })

  return (
    <CardWrapper mt={2} id='orderProducts'>
      <Box display='flex' justifyContent='space-between'>
        <Typography variant='h1' color='black'>
          {menu[locale].yourOrder}
        </Typography>
      </Box>
      <Box mt={4}>
        {regularItems.map((item) => (
          <div key={item.id} className={cls.orderItem}>

            <div className={cls.itemInfo}>
              <Box>
                <Image
                  loader={() => dynamicImageLink(item.dlvimg ? item.dlvimg : item.deliveryImage)}
                  src={dynamicImageLink(item.dlvimg ? item.dlvimg : item.deliveryImage)}
                  alt={item.title}
                  width={96}
                  height={96}
                  unoptimized={true}
                />
              </Box>

              <div className={cls.itemName}>
                <Typography style={{ fontSize: 18, fontWeight: 800, color: '#309B42', marginBottom: 8, lineHeight: 1.2 }}>
                  {item.title}
                </Typography>

                {/* Modifier lar — 2 ustunli grid */}
                {(modifierMap[item.id] || []).length > 0 && (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4px 16px',
                    marginTop: 4,
                  }}>
                    {modifierMap[item.id].map(mod => (
                      <div key={mod.id} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <span style={{ color: '#309B42', fontSize: 10, flexShrink: 0 }}>●</span>
                        <Typography style={{ fontSize: 12, color: '#666', fontWeight: 500, lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {mod.title}
                        </Typography>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className={cls.priceInfo}>
              <div style={{ textAlign: 'right' }}>
                <Typography
                  variant='h8'
                  sx={{ whiteSpace: 'nowrap', color: '#077855' }}
                >
                  {numberToPrice(
                    (item?.dprice
                      ? item?.dprice?.slice(0, -3)
                      : item.price.deliveryPrice
                        ? item.price.deliveryPrice
                        : item.price.salePrice) * item.quantity
                  )}
                </Typography>
                <Counter data={item} />
              </div>
            </div>

          </div>
        ))}
      </Box>
    </CardWrapper>
  )
}