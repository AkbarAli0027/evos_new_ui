// // import React from 'react'
// // import { CircularProgress, Typography } from '@mui/material'
// // import CardWrapper from '../CardWrapper/CardWrapper'
// // import cls from './CheckoutInfo.module.scss'
// // import { Box } from '@mui/system'
// // import { shallowEqual, useSelector } from 'react-redux'
// // import { cartTotalPriceSelector } from '../../store/selectors/cartSelectors'
// // import { numberToPrice } from '../../utils/numberToPrice'
// // import { menu } from '../../mock/menu'
// // import { useRouter } from 'next/router'
// // import moment from 'moment'
// // import 'moment/locale/ru'

// // export default function CheckoutInfo({
// //   loading,
// //   deliveryPrice = 9000,
// //   time,
// //   promos,
// //   isConfirm,
// // }) {
// //   let sum = promos?.[0]?.order_sum?.[0]?.sum
// //   let discount = 1 - promos?.[0]?.order_sum?.[0]?.discount?.percent / 100

// //   let delevreyDis = deliveryPrice * discount

// //   const timeCrop = time?.split(':')
// //   const ours = parseInt(timeCrop?.[0])

// //   const totalPrice = useSelector(
// //     (state) => cartTotalPriceSelector(state),
// //     shallowEqual
// //   )

// //   let sumPrice = sum - totalPrice

// //   const { locale } = useRouter()

// //   moment.locale('ru')

// //   return (
// //     <div className={cls.root}>
// //       <CardWrapper>
// //         <Typography variant={`h1`} color={`black`}>
// //           {menu[locale].total}
// //         </Typography>
// //         <Box mt={4} pb={2} boxShadow='inset 0px -1px 0px rgba(0, 0, 0, 0.08);'>
// //           <Box
// //             display='flex'
// //             justifyContent='space-between'
// //             alignItems='center'
// //             mb={1}
// //           >
// //             <Typography>{menu[locale].priceOfOrder}</Typography>
// //             <Typography color='black'>{numberToPrice(totalPrice)}</Typography>
// //           </Box>
// //           <Box
// //             display='flex'
// //             justifyContent='space-between'
// //             alignItems='center'
// //             mb={1}
// //           >
// //             {/* <Typography>{menu[locale].deliveryTime}</Typography> */}
// //             <Typography>{menu[locale].deliveryTime}</Typography>
// //             <Typography color='black'>
// //               {ours > 0
// //                 ? `${ours} час ${parseInt(timeCrop?.[1])} мин.`
// //                 : `${parseInt(timeCrop?.[1])} мин.`}
// //             </Typography>
// //           </Box>

// //           <Box
// //             display='flex'
// //             justifyContent='space-between'
// //             alignItems='center'
// //           >
// //             <Typography>{menu[locale].priceOfDelivery}</Typography>
// //             <Typography color='black'>
// //               {numberToPrice(
// //                 promos?.length > 0
// //                   ? totalPrice < sum
// //                     ? deliveryPrice
// //                     : delevreyDis
// //                   : deliveryPrice
// //               )}
// //             </Typography>
// //           </Box>

// //           <Box
// //             display='flex'
// //             justifyContent='space-between'
// //             alignItems='center'
// //           ></Box>
// //         </Box>
// //         {promos?.length > 0 ? (
// //           totalPrice < sum ? (
// //             <Typography color='black'>
// //               Бесплатная доставка по г. Ташкент - от 130 00 сум! <br />{' '}
// //               Выбирайте вкусные блюда и напитки еще на {numberToPrice(sumPrice)}{' '}
// //               и мы доставим Ваш заказ бесплатно!
// //             </Typography>
// //           ) : (
// //             <Typography color='black'>
// //               {' '}
// //               Бесплатная доставка по г. Ташкент - от 130 00 сум!
// //             </Typography>
// //           )
// //         ) : (
// //           ''
// //         )}

// //         <Box
// //           display='flex'
// //           justifyContent='space-between'
// //           alignItems='center'
// //           mt={2}
// //         >
// //           <Typography variant='caption' color='black'>
// //             {menu[locale].totalPrice}
// //           </Typography>
// //           <Typography variant='caption' color='primary'>
// //             {numberToPrice(
// //               promos?.length > 0
// //                 ? totalPrice + (totalPrice < sum ? +deliveryPrice : delevreyDis)
// //                 : +deliveryPrice + totalPrice
// //             )}
// //           </Typography>
// //         </Box>

// //         {isConfirm && (
// //           <Box mt={4}>
// //             <button disabled={!isConfirm} type='submit' className={cls.button}>
// //               {loading ? (
// //                 <CircularProgress color='inherit' size={18} />
// //               ) : (
// //                 menu[locale].accept
// //               )}
// //             </button>
// //           </Box>
// //         )}
// //       </CardWrapper>
// //     </div>
// //   )
// // }












// import React from 'react'
// import { CircularProgress, Typography } from '@mui/material'
// import { Box } from '@mui/system'
// import { shallowEqual, useSelector } from 'react-redux'
// import { cartTotalPriceSelector } from '../../store/selectors/cartSelectors'
// import { numberToPrice } from '../../utils/numberToPrice'
// import { menu } from '../../mock/menu'
// import { useRouter } from 'next/router'

// export default function CheckoutInfo({
//   loading,
//   deliveryPrice = 9000,
//   time,
//   promos,
//   isConfirm,
// }) {
//   let sum = promos?.[0]?.order_sum?.[0]?.sum
//   let discount = 1 - promos?.[0]?.order_sum?.[0]?.discount?.percent / 100
//   let delevreyDis = deliveryPrice * discount

//   const timeCrop = time?.split(':')
//   const ours = parseInt(timeCrop?.[0])

//   const totalPrice = useSelector(
//     (state) => cartTotalPriceSelector(state),
//     shallowEqual
//   )

//   let sumPrice = sum - totalPrice
//   const { locale } = useRouter()

//   const finalDelivery = promos?.length > 0
//     ? totalPrice < sum ? +deliveryPrice : delevreyDis
//     : +deliveryPrice

//   const finalTotal = totalPrice + finalDelivery

//   return (
//     <div style={{
//       backgroundColor: '#fff',
//       borderRadius: 16,
//       padding: '24px 20px',
//       boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
//       position: 'sticky',
//       top: 20,
//     }}>
//       {/* Sarlavha */}
//       <Typography style={{
//         fontSize: 20,
//         fontWeight: 700,
//         color: '#111',
//         marginBottom: 20,
//       }}>
//         {menu[locale].total || 'Итого:'}
//       </Typography>

//       {/* Qatorlar */}
//       <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>

//         {/* Buyurtma narxi */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Typography style={{ fontSize: 14, color: '#555' }}>
//             {menu[locale].priceOfOrder || 'Стоимость заказа'}
//           </Typography>
//           <Typography style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>
//             {numberToPrice(totalPrice)}
//           </Typography>
//         </div>

//         {/* Yetkazib berish narxi */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Typography style={{ fontSize: 14, color: '#555' }}>
//             {menu[locale].priceOfDelivery || 'Стоимость доставки'}
//           </Typography>
//           <Typography style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>
//             {numberToPrice(finalDelivery)}
//           </Typography>
//         </div>

//         {/* Vaqt */}
//         {time && (
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <Typography style={{ fontSize: 14, color: '#555' }}>
//               {menu[locale].deliveryTime || 'Время доставки'}
//             </Typography>
//             <Typography style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>
//               {ours > 0
//                 ? `${ours} час ${parseInt(timeCrop?.[1])} мин.`
//                 : `${parseInt(timeCrop?.[1])} мин.`}
//             </Typography>
//           </div>
//         )}
//       </div>

//       {/* Divider */}
//       <div style={{ height: 1, backgroundColor: '#f0f0f0', margin: '16px 0' }} />

//       {/* Promo xabar */}
//       {promos?.length > 0 && (
//         <Typography style={{ fontSize: 12, color: '#007855', marginBottom: 12, lineHeight: 1.4 }}>
//           {totalPrice < sum
//             ? `Бесплатная доставка от ${numberToPrice(sum)}! Ещё ${numberToPrice(sumPrice)} до бесплатной доставки.`
//             : 'Бесплатная доставка по г. Ташкент от 130 000 сум!'}
//         </Typography>
//       )}

//       {/* Jami */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
//         <Typography style={{ fontSize: 16, fontWeight: 700, color: '#111' }}>
//           {menu[locale].totalPrice || 'Общая сумма:'}
//         </Typography>
//         <Typography style={{ fontSize: 20, fontWeight: 800, color: '#007855' }}>
//           {numberToPrice(finalTotal)}
//         </Typography>
//       </div>

//       {/* Tasdiqlash tugmasi */}
//       {isConfirm && (
//         <button
//           disabled={!isConfirm || loading}
//           type="submit"
//           style={{
//             width: '100%',
//             padding: '15px 0',
//             borderRadius: 12,
//             border: 'none',
//             backgroundColor: isConfirm ? '#007855' : '#ccc',
//             color: '#fff',
//             fontWeight: 700,
//             fontSize: 15,
//             cursor: isConfirm ? 'pointer' : 'not-allowed',
//             transition: 'background 0.2s',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             gap: 8,
//           }}
//         >
//           {loading
//             ? <CircularProgress color="inherit" size={18} />
//             : (menu[locale].accept || 'Подтвердить')}
//         </button>
//       )}
//     </div>
//   )
// }



// import React from 'react'
// import { CircularProgress, Typography } from '@mui/material'
// import { Box } from '@mui/system'
// import { shallowEqual, useSelector } from 'react-redux'
// import { cartTotalPriceSelector } from '../../store/selectors/cartSelectors'
// import { numberToPrice } from '../../utils/numberToPrice'
// import { menu } from '../../mock/menu'
// import { useRouter } from 'next/router'

// export default function CheckoutInfo({
//   loading,
//   deliveryPrice = 9000,
//   time,
//   promos,
//   isConfirm,
// }) {
//   let sum = promos?.[0]?.order_sum?.[0]?.sum
//   let discount = 1 - promos?.[0]?.order_sum?.[0]?.discount?.percent / 100
//   let delevreyDis = deliveryPrice * discount

//   const timeCrop = time?.split(':')
//   const ours = parseInt(timeCrop?.[0])

//   const totalPrice = useSelector(
//     (state) => cartTotalPriceSelector(state),
//     shallowEqual
//   )

//   let sumPrice = sum - totalPrice
//   const { locale } = useRouter()

//   const finalDelivery = promos?.length > 0
//     ? totalPrice < sum ? +deliveryPrice : delevreyDis
//     : +deliveryPrice

//   const finalTotal = totalPrice + finalDelivery

//   return (
//     <div style={{
//       backgroundColor: '#fff',
//       borderRadius: 16,
//       padding: '24px 20px',
//       boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
//       position: 'sticky',
//       top: 20,
//     }}>
//       {/* Sarlavha */}
//       <Typography style={{
//         fontSize: 20,
//         fontWeight: 700,
//         color: '#111',
//         marginBottom: 20,
//       }}>
//         {menu[locale].total || 'Итого:'}
//       </Typography>

//       {/* Qatorlar */}
//       <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>

//         {/* Buyurtma narxi */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Typography style={{ fontSize: 14, color: '#555' }}>
//             {menu[locale].priceOfOrder || 'Стоимость заказа'}
//           </Typography>
//           <Typography style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>
//             {numberToPrice(totalPrice)}
//           </Typography>
//         </div>

//         {/* Yetkazib berish narxi */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Typography style={{ fontSize: 14, color: '#555' }}>
//             {menu[locale].priceOfDelivery || 'Стоимость доставки'}
//           </Typography>
//           <Typography style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>
//             {numberToPrice(finalDelivery)}
//           </Typography>
//         </div>

//         {/* Vaqt */}
//         {time && (
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <Typography style={{ fontSize: 14, color: '#555' }}>
//               {menu[locale].deliveryTime || 'Время доставки'}
//             </Typography>
//             <Typography style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>
//               {ours > 0
//                 ? `${ours} час ${parseInt(timeCrop?.[1])} мин.`
//                 : `${parseInt(timeCrop?.[1])} мин.`}
//             </Typography>
//           </div>
//         )}
//       </div>

//       {/* Divider */}
//       <div style={{ height: 1, backgroundColor: '#f0f0f0', margin: '16px 0' }} />

//       {/* Promo xabar */}
//       {promos?.length > 0 && (
//         <Typography style={{ fontSize: 12, color: '#007855', marginBottom: 12, lineHeight: 1.4 }}>
//           {totalPrice < sum
//             ? `Бесплатная доставка от ${numberToPrice(sum)}! Ещё ${numberToPrice(sumPrice)} до бесплатной доставки.`
//             : 'Бесплатная доставка по г. Ташкент от 130 000 сум!'}
//         </Typography>
//       )}

//       {/* Jami */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
//         <Typography style={{ fontSize: 16, fontWeight: 700, color: '#111' }}>
//           {menu[locale].totalPrice || 'Общая сумма:'}
//         </Typography>
//         <Typography style={{ fontSize: 20, fontWeight: 800, color: '#007855' }}>
//           {numberToPrice(finalTotal)}
//         </Typography>
//       </div>

//       {/* Tasdiqlash tugmasi */}
//       {isConfirm && (
//         <button
//           disabled={!isConfirm || loading}
//           type="submit"
//           style={{
//             width: '100%',
//             padding: '15px 0',
//             borderRadius: 12,
//             border: 'none',
//             backgroundColor: isConfirm ? '#007855' : '#ccc',
//             color: '#fff',
//             fontWeight: 700,
//             fontSize: 15,
//             cursor: isConfirm ? 'pointer' : 'not-allowed',
//             transition: 'background 0.2s',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             gap: 8,
//           }}
//         >
//           {loading
//             ? <CircularProgress color="inherit" size={18} />
//             : (menu[locale].accept || 'Подтвердить')}
//         </button>
//       )}
//     </div>
//   )
// }















// YENGILANGAN YIRTILGAN CHEK
import React from 'react'
import { CircularProgress, Typography } from '@mui/material'
import { shallowEqual, useSelector } from 'react-redux'
import { cartTotalPriceSelector } from '../../store/selectors/cartSelectors'
import { numberToPrice } from '../../utils/numberToPrice'
import { menu } from '../../mock/menu'
import { useRouter } from 'next/router'

export default function CheckoutInfo({
  loading,
  deliveryPrice = 9000,
  time,
  promos,
  isConfirm,
}) {
  let sum = promos?.[0]?.order_sum?.[0]?.sum
  let discount = 1 - promos?.[0]?.order_sum?.[0]?.discount?.percent / 100
  let delevreyDis = deliveryPrice * discount

  const timeCrop = time?.split(':')
  const ours = parseInt(timeCrop?.[0])

  const totalPrice = useSelector(
    (state) => cartTotalPriceSelector(state),
    shallowEqual
  )

  let sumPrice = sum - totalPrice
  const { locale } = useRouter()

  const finalDelivery = promos?.length > 0
    ? totalPrice < sum ? +deliveryPrice : delevreyDis
    : +deliveryPrice

  const finalTotal = totalPrice + finalDelivery

  const rows = [
    { label: menu[locale].priceOfOrder || 'Buyurtma narxi', value: numberToPrice(totalPrice) },
    { label: menu[locale].priceOfDelivery || 'Yetkazish narxi', value: numberToPrice(finalDelivery) },
    ...(time ? [{ label: menu[locale].deliveryTime || 'Vaqt', value: ours > 0 ? `${ours} soat ${parseInt(timeCrop?.[1])} daq.` : `${parseInt(timeCrop?.[1])} daq.` }] : []),
  ]

  return (
    <div style={{ fontFamily: '"Open Sans", sans-serif', maxWidth: 360 }}>

      {/* Asosiy karta */}
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '20px 20px 0 0',
        border: '0.5px solid #e0e0e0',
        boxShadow: '0 8px 32px rgba(0,120,85,0.10), 0 2px 8px rgba(0,0,0,0.07)',
        padding: '28px 24px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Yuqori yashil chiziq */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 4,
          backgroundColor: '#007855',
          borderRadius: '20px 20px 0 0',
        }} />

        {/* Sarlavha */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <div style={{
            width: 28, height: 28,
            background: '#e8f5f0',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 5h12M2 8h8M2 11h5" stroke="#007855" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <Typography style={{ fontSize: 18, fontWeight: 600, color: '#111', margin: 0 }}>
            {menu[locale].total || "To'plam"}
          </Typography>
        </div>

        {/* Yetkazish vaqti badge */}
        {time && (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            background: '#e8f5f0',
            color: '#005c3e',
            fontSize: 11,
            fontWeight: 600,
            padding: '3px 10px',
            borderRadius: 20,
            marginBottom: 16,
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="#007855" strokeWidth="1.2" />
              <path d="M6 3.5v3l2 1.5" stroke="#007855" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            {ours > 0 ? `${ours} soat ${parseInt(timeCrop?.[1])} daqiqada yetkaziladi` : `${parseInt(timeCrop?.[1])} daqiqada yetkaziladi`}
          </div>
        )}

        {/* Qatorlar */}
        {rows.map((row, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '9px 0',
            borderBottom: i < rows.length - 1 ? '0.5px solid #f0f0f0' : 'none',
          }}>
            <span style={{ fontSize: 13, color: '#777' }}>{row.label}</span>
            <span style={{ fontSize: 13, color: '#111', fontWeight: 500 }}>{row.value}</span>
          </div>
        ))}

        {/* Promo */}
        {promos?.length > 0 && (
          <p style={{ fontSize: 12, color: '#007855', margin: '10px 0 0', lineHeight: 1.4 }}>
            {totalPrice < sum
              ? `Bepul yetkazish ${numberToPrice(sum)} dan! Yana ${numberToPrice(sumPrice)} qo'shing.`
              : "Toshkent bo'yicha bepul yetkazish!"}
          </p>
        )}

        {/* Divider */}
        <div style={{ height: '0.5px', background: '#e8e8e8', margin: '16px 0' }} />

        {/* Jami */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>
            {menu[locale].totalPrice || 'Umumiy narx'}
          </span>
          <span style={{ fontSize: 24, fontWeight: 700, color: '#007855', letterSpacing: '-0.5px' }}>
            {numberToPrice(finalTotal)}
          </span>
        </div>

        {/* Tasdiqlash tugmasi */}
        {isConfirm && (
          <button
            disabled={!isConfirm || loading}
            type="submit"
            style={{
              width: '100%',
              padding: '15px 0',
              borderRadius: 14,
              border: 'none',
              backgroundColor: isConfirm ? '#007855' : '#ccc',
              color: '#fff',
              fontWeight: 600,
              fontSize: 15,
              cursor: isConfirm ? 'pointer' : 'not-allowed',
              letterSpacing: '0.3px',
              boxShadow: isConfirm ? '0 4px 16px rgba(0,120,85,0.28)' : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
          >
            {loading
              ? <CircularProgress color="inherit" size={18} />
              : (menu[locale].accept || 'Tasdiqlash')}
          </button>
        )}
      </div>

      {/* Yirtilgan tagi — SVG uchburchaklar */}
      <div style={{ lineHeight: 0, overflow: 'hidden', marginTop: -1 }}>
        <svg
          width="100%"
          viewBox="0 0 360 22"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', filter: 'drop-shadow(0 6px 16px rgba(0,120,85,0.08))' }}
        >
          <polygon points="0,0 12,22 24,0 36,22 48,0 60,22 72,0 84,22 96,0 108,22 120,0 132,22 144,0 156,22 168,0 180,22 192,0 204,22 216,0 228,22 240,0 252,22 264,0 276,22 288,0 300,22 312,0 324,22 336,0 348,22 360,0" fill="#fff" />
          <polyline
            points="0,0 12,22 24,0 36,22 48,0 60,22 72,0 84,22 96,0 108,22 120,0 132,22 144,0 156,22 168,0 180,22 192,0 204,22 216,0 228,22 240,0 252,22 264,0 276,22 288,0 300,22 312,0 324,22 336,0 348,22 360,0"
            stroke="#e0e0e0" strokeWidth="0.5" fill="none"
          />
          <line x1="0" y1="0" x2="0" y2="22" stroke="#e0e0e0" strokeWidth="0.5" />
          <line x1="360" y1="0" x2="360" y2="22" stroke="#e0e0e0" strokeWidth="0.5" />
        </svg>
      </div>

    </div>
  )
}















// YENG UI KO'RINISH 



// import React from 'react'
// import { CircularProgress, Typography } from '@mui/material'
// import { shallowEqual, useSelector } from 'react-redux'
// import { cartTotalPriceSelector } from '../../store/selectors/cartSelectors'
// import { numberToPrice } from '../../utils/numberToPrice'
// import { menu } from '../../mock/menu'
// import { useRouter } from 'next/router'

// export default function CheckoutInfo({
//   loading,
//   deliveryPrice = 9000,
//   time,
//   promos,
//   isConfirm,
// }) {
//   let sum = promos?.[0]?.order_sum?.[0]?.sum
//   let discount = 1 - promos?.[0]?.order_sum?.[0]?.discount?.percent / 100
//   let delevreyDis = deliveryPrice * discount

//   const timeCrop = time?.split(':')
//   const ours = parseInt(timeCrop?.[0])

//   const totalPrice = useSelector(
//     (state) => cartTotalPriceSelector(state),
//     shallowEqual
//   )

//   let sumPrice = sum - totalPrice
//   const { locale } = useRouter()

//   const finalDelivery = promos?.length > 0
//     ? totalPrice < sum ? +deliveryPrice : delevreyDis
//     : +deliveryPrice

//   const finalTotal = totalPrice + finalDelivery

//   const rows = [
//     { label: menu[locale].priceOfOrder || 'Buyurtma narxi', value: numberToPrice(totalPrice) },
//     { label: menu[locale].priceOfDelivery || 'Yetkazish narxi', value: numberToPrice(finalDelivery) },
//     ...(time ? [{ label: menu[locale].deliveryTime || 'Vaqt', value: ours > 0 ? `${ours} soat ${parseInt(timeCrop?.[1])} daq.` : `${parseInt(timeCrop?.[1])} daq.` }] : []),
//   ]

//   return (
//     <div style={{ fontFamily: '"Open Sans", sans-serif', maxWidth: 360 }}>

//       {/* Asosiy karta */}
//       <div style={{
//         backgroundColor: '#fff',
//         borderRadius: '20px 20px 0 0',
//         border: '0.5px solid #e0e0e0',
//         boxShadow: '0 8px 32px rgba(0,120,85,0.10), 0 2px 8px rgba(0,0,0,0.07)',
//         padding: '28px 24px 24px',
//         position: 'relative',
//         overflow: 'hidden',
//       }}>

//         {/* Yuqori yashil chiziq */}
//         <div style={{
//           position: 'absolute',
//           top: 0, left: 0, right: 0,
//           height: 4,
//           backgroundColor: '#007855',
//           borderRadius: '20px 20px 0 0',
//         }} />

//         {/* Sarlavha */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
//           <div style={{
//             width: 28, height: 28,
//             background: '#e8f5f0',
//             borderRadius: 8,
//             display: 'flex', alignItems: 'center', justifyContent: 'center',
//             flexShrink: 0,
//           }}>
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//               <path d="M2 5h12M2 8h8M2 11h5" stroke="#007855" strokeWidth="1.5" strokeLinecap="round" />
//             </svg>
//           </div>
//           <Typography style={{ fontSize: 18, fontWeight: 600, color: '#111', margin: 0 }}>
//             {menu[locale].total || "To'plam"}
//           </Typography>
//         </div>

//         {/* Yetkazish vaqti badge */}
//         {time && (
//           <div style={{
//             display: 'inline-flex', alignItems: 'center', gap: 4,
//             background: '#e8f5f0',
//             color: '#005c3e',
//             fontSize: 11,
//             fontWeight: 600,
//             padding: '3px 10px',
//             borderRadius: 20,
//             marginBottom: 16,
//           }}>
//             <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//               <circle cx="6" cy="6" r="5" stroke="#007855" strokeWidth="1.2" />
//               <path d="M6 3.5v3l2 1.5" stroke="#007855" strokeWidth="1.2" strokeLinecap="round" />
//             </svg>
//             {ours > 0 ? `${ours} soat ${parseInt(timeCrop?.[1])} daqiqada yetkaziladi` : `${parseInt(timeCrop?.[1])} daqiqada yetkaziladi`}
//           </div>
//         )}

//         {/* Qatorlar */}
//         {rows.map((row, i) => (
//           <div key={i} style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             padding: '9px 0',
//             borderBottom: i < rows.length - 1 ? '0.5px solid #f0f0f0' : 'none',
//           }}>
//             <span style={{ fontSize: 13, color: '#777' }}>{row.label}</span>
//             <span style={{ fontSize: 13, color: '#111', fontWeight: 500 }}>{row.value}</span>
//           </div>
//         ))}

//         {/* Promo */}
//         {promos?.length > 0 && (
//           <p style={{ fontSize: 12, color: '#007855', margin: '10px 0 0', lineHeight: 1.4 }}>
//             {totalPrice < sum
//               ? `Bepul yetkazish ${numberToPrice(sum)} dan! Yana ${numberToPrice(sumPrice)} qo'shing.`
//               : "Toshkent bo'yicha bepul yetkazish!"}
//           </p>
//         )}

//         {/* Divider */}
//         <div style={{ height: '0.5px', background: '#e8e8e8', margin: '16px 0' }} />

//         {/* Jami */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
//           <span style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>
//             {menu[locale].totalPrice || 'Umumiy narx'}
//           </span>
//           <span style={{ fontSize: 24, fontWeight: 700, color: '#007855', letterSpacing: '-0.5px' }}>
//             {numberToPrice(finalTotal)}
//           </span>
//         </div>

//         {/* Tasdiqlash tugmasi */}
//         {isConfirm && (
//           <button
//             disabled={!isConfirm || loading}
//             type="submit"
//             style={{
//               width: '100%',
//               padding: '15px 0',
//               borderRadius: 14,
//               border: 'none',
//               backgroundColor: isConfirm ? '#007855' : '#ccc',
//               color: '#fff',
//               fontWeight: 600,
//               fontSize: 15,
//               cursor: isConfirm ? 'pointer' : 'not-allowed',
//               letterSpacing: '0.3px',
//               boxShadow: isConfirm ? '0 4px 16px rgba(0,120,85,0.28)' : 'none',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               transition: 'transform 0.15s, box-shadow 0.15s',
//             }}
//           >
//             {loading
//               ? <CircularProgress color="inherit" size={18} />
//               : (menu[locale].accept || 'Tasdiqlash')}
//           </button>
//         )}
//       </div>

//       {/* Yirtilgan tagi — SVG uchburchaklar */}
//       <div style={{ lineHeight: 0, overflow: 'hidden', marginTop: -1 }}>
//         <svg
//           width="100%"
//           viewBox="0 0 360 22"
//           preserveAspectRatio="none"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{ display: 'block', filter: 'drop-shadow(0 6px 16px rgba(0,120,85,0.08))' }}
//         >
//           <polygon points="0,0 12,22 24,0 36,22 48,0 60,22 72,0 84,22 96,0 108,22 120,0 132,22 144,0 156,22 168,0 180,22 192,0 204,22 216,0 228,22 240,0 252,22 264,0 276,22 288,0 300,22 312,0 324,22 336,0 348,22 360,0" fill="#fff" />
//           <polyline
//             points="0,0 12,22 24,0 36,22 48,0 60,22 72,0 84,22 96,0 108,22 120,0 132,22 144,0 156,22 168,0 180,22 192,0 204,22 216,0 228,22 240,0 252,22 264,0 276,22 288,0 300,22 312,0 324,22 336,0 348,22 360,0"
//             stroke="#e0e0e0" strokeWidth="0.5" fill="none"
//           />
//           <line x1="0" y1="0" x2="0" y2="22" stroke="#e0e0e0" strokeWidth="0.5" />
//           <line x1="360" y1="0" x2="360" y2="22" stroke="#e0e0e0" strokeWidth="0.5" />
//         </svg>
//       </div>

//     </div>
//   )
// }