// import React, { useEffect, useState } from 'react'
// import { Typography, Box } from '@mui/material'
// import CardWrapper from '../CardWrapper/CardWrapper'
// import { CashIcon } from '../Icons'
// import cls from './PaymentType.module.scss'
// import { menu } from '../../mock/menu'
// import { useRouter } from 'next/router'

// export default function PaymentType({ paymentsData, formik }) {
//   const { locale } = useRouter()

//   // paymentsData[1].img = `/images/click.png`
//   // paymentsData[2].img = `/images/payme.png`

//   return (
//     <CardWrapper mt={2}>
//       <Box display='flex' justifyContent='space-between'>
//         <Typography variant={`h1`} color={`black`}>
//           {menu[locale].typeOfPayment}
//         </Typography>
//       </Box>
//       <Box className={cls.inputWrapper}>
//         {/* {paymentsData.map((item, index) => (
//           <>
//             <div key={index} className={cls.radioCard}>
//               <input
//                 type='radio'
//                 name='paymentType'
//                 value={item?.id}
//                 id={item?.id}
//                 onChange={formik.handleChange}
//                 defaultChecked={item?.default}
//               />
//               <label htmlFor={item.id}>
//                 <span className={cls.cardIcon}>
//                   {item.hasOwnProperty('img') ? (
//                     <img src={item?.img} alt={item?.title} />
//                   ) : (
//                     <CashIcon />
//                   )}
//                 </span>
//                 <span className={cls.cardTitle}>{item?.title}</span>
//                 <span className={cls.radio} />
//               </label>
//             </div>
//           </>
//         ))} */}

//         {Object.values(paymentsData).map((item, index) => (
//           <div key={item.id} className={cls.radioCard}>
//             <input
//               type='radio'
//               name='paymentType'
//               value={item?.id}
//               id={item?.id}
//               onChange={formik.handleChange}
//               defaultChecked={item?.default}
//             />
//             <label htmlFor={item.id}>
//               <span className={cls.cardIcon}>
//                 {item.hasOwnProperty('img') ? (
//                   <img src={item?.img} alt={item?.title} />
//                 ) : (
//                   <CashIcon />
//                 )}
//               </span>
//               <span className={cls.cardTitle}>{item?.title}</span>
//               <span className={cls.radio} />
//             </label>
//           </div>
//         ))}

//         {/* {payments?.payme === true || payments === undefined ? (         
//       <div className={cls.radioCard}>
//           <input
//             type='radio'
//             name='paymentType'
//             value='payme'
//             id='payme'
//             onChange={formik.handleChange}
//           />
//           <label htmlFor='payme'>
//             <span className={cls.cardIcon}>
//               <img src='/images/payme.png' alt='Payme' />
//             </span>
//             <span className={cls.cardTitle}>Payme</span>
//             <span className={cls.radio} />
//           </label>
//         </div>
//       ): (
//         ''
//       )
//         }


//        { payments?.click === true || payments === undefined ? ( 
//         <div className={cls.radioCard}>
//         <input
//           type='radio'
//           name='paymentType'
//           value='click'
//           id='click'
//           onChange={formik.handleChange}
//         />
//         <label htmlFor='click'>
//           <span className={cls.cardIcon}>
//             <img src='/images/click.png' alt='Click' />
//           </span>
//           <span className={cls.cardTitle}>Click</span>
//           <span className={cls.radio} />
//         </label>
//       </div>
//        ) : ''
//        } */}
//         {/* <div className={cls.radioCard}>
//           <input
//             type='radio'
//             name='paymentType'
//             value='apelsin'
//             id='apelsin'
//             onChange={formik.handleChange}
//             disabled={true}
//           />
//           <label htmlFor='apelsin'>
//             <span className={cls.cardIcon}>
//               <img src='/images/apelsin.png' alt='Click' />
//             </span>
//             <span className={cls.cardTitle}>Apelsin</span>
//             <span className={cls.radio} />
//           </label>
//         </div> */}
//       </Box>
//     </CardWrapper>
//   )
// }













// import React from 'react'
// import { Typography } from '@mui/material'
// import { CashIcon } from '../Icons'
// import { menu } from '../../mock/menu'
// import { useRouter } from 'next/router'

// const PAYMENT_META = {
//   payme: { img: '/new_UI/images/payme.png', desc: 'Online to\'lov', badge: null },
//   click: { img: '/images/click.png', desc: 'Online to\'lov', badge: null },
//   cash: { img: null, desc: 'Yetkazib berishda', badge: 'Eng mashhur' },
//   'evos-delivery': { img: null, desc: 'Bonus hisobidan', badge: null },
// }

// const getMeta = (item) => {
//   const key = (item?.title || item?.name || '').toLowerCase().replace(/\s+/g, '-')
//   return PAYMENT_META[key] || PAYMENT_META[item?.slug] || {}
// }

// export default function PaymentType({ paymentsData, formik }) {
//   const { locale } = useRouter()
//   const selected = formik.values.paymentType

//   return (
//     <div>
//       <Typography style={{ fontSize: 20, fontWeight: 700, color: '#111', marginBottom: 20 }}>
//         {menu[locale].typeOfPayment}
//       </Typography>

//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: '1fr 1fr',
//         gap: 12,
//       }}>
//         {Object.values(paymentsData).map((item) => {
//           const meta = getMeta(item)
//           const isSelected = String(selected) === String(item?.id)

//           return (
//             <label
//               key={item.id}
//               htmlFor={String(item.id)}
//               style={{
//                 position: 'relative',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: 10,
//                 padding: '16px',
//                 borderRadius: 16,
//                 border: isSelected ? '1.5px solid #007855' : '1.5px solid #e8e8e8',
//                 backgroundColor: isSelected ? '#f0faf6' : '#fff',
//                 boxShadow: isSelected
//                   ? '0 6px 24px rgba(0,120,85,0.14)'
//                   : '0 2px 8px rgba(0,0,0,0.05)',
//                 cursor: 'pointer',
//                 transition: 'all 0.2s ease',
//               }}
//             >
//               <input
//                 type="radio"
//                 name="paymentType"
//                 id={String(item.id)}
//                 value={item?.id}
//                 onChange={formik.handleChange}
//                 defaultChecked={item?.default}
//                 style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
//               />

//               {/* Radio doira */}
//               <div style={{
//                 position: 'absolute',
//                 top: 14, right: 14,
//                 width: 18, height: 18,
//                 borderRadius: '50%',
//                 border: isSelected ? '1.5px solid #007855' : '1.5px solid #ccc',
//                 backgroundColor: isSelected ? '#007855' : 'transparent',
//                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                 transition: 'all 0.2s',
//               }}>
//                 {isSelected && (
//                   <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#fff' }} />
//                 )}
//               </div>

//               {/* Logo */}
//               <div style={{
//                 width: 52, height: 36,
//                 background: isSelected ? '#fff' : '#f5f5f5',
//                 borderRadius: 10,
//                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                 transition: 'background 0.2s',
//               }}>
//                 {item.hasOwnProperty('img') && item.img ? (
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     style={{ width: 40, height: 24, objectFit: 'contain' }}
//                   />
//                 ) : meta.img ? (
//                   <img
//                     src={meta.img}
//                     alt={item.title}
//                     style={{ width: 40, height: 24, objectFit: 'contain' }}
//                   />
//                 ) : (
//                   <div style={{ color: '#007855', display: 'flex' }}>
//                     <CashIcon />
//                   </div>
//                 )}
//               </div>

//               {/* Nom */}
//               <div style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>
//                 {item?.title}
//               </div>

//               {/* Tavsif */}
//               {meta.desc && (
//                 <div style={{ fontSize: 11, color: '#888', marginTop: -6 }}>
//                   {meta.desc}
//                 </div>
//               )}

//               {/* Badge */}
//               {meta.badge && (
//                 <span style={{
//                   display: 'inline-block',
//                   fontSize: 10,
//                   fontWeight: 600,
//                   padding: '2px 8px',
//                   borderRadius: 20,
//                   background: '#e8f5f0',
//                   color: '#005c3e',
//                   width: 'fit-content',
//                 }}>
//                   {meta.badge}
//                 </span>
//               )}
//             </label>
//           )
//         })}
//       </div>

//       <style jsx>{`
//         label:hover {
//           border-color: #007855 !important;
//           box-shadow: 0 6px 20px rgba(0,120,85,0.10) !important;
//           transform: translateY(-2px);
//         }
//         @media (max-width: 600px) {
//           .payment-grid { grid-template-columns: 1fr !important; }
//         }
//       `}</style>
//     </div>
//   )
// }




import React from 'react'
import { Typography } from '@mui/material'
import { CashIcon } from '../Icons'
import { menu } from '../../mock/menu'
import { useRouter } from 'next/router'

// Har doim ko'rinadigan to'lov usullari (API dan kelmasa ham)
const STATIC_PAYMENTS = [
  { id: 4, title: 'Payme', img: '/images/payme.png', desc: "Online to'lov", badge: null },
  { id: 2, title: 'Click', img: '/images/click.png', desc: "Online to'lov", badge: null },
]

export default function PaymentType({ paymentsData, formik }) {
  const { locale } = useRouter()
  const selected = formik.values.paymentType

  // API dan kelgan + static birlashtirish (takrorlanmasin)
  const apiItems = paymentsData ? Object.values(paymentsData) : []
  const apiIds = new Set(apiItems.map(i => String(i.id)))
  const staticItems = STATIC_PAYMENTS.filter(s => !apiIds.has(String(s.id)))
  const allItems = [...STATIC_PAYMENTS.filter(s => apiIds.has(String(s.id)) || !apiIds.has(String(s.id))).slice(0, 2), ...apiItems.filter(i => !STATIC_PAYMENTS.find(s => String(s.id) === String(i.id)))]

  // Aslida: static 2ta (payme, click) + API dan kelganlari
  const payments = [
    ...STATIC_PAYMENTS,
    ...apiItems.filter(i => !STATIC_PAYMENTS.find(s => String(s.id) === String(i.id)))
  ]

  const getDesc = (item) => {
    const t = (item?.title || '').toLowerCase()
    if (t.includes('наличн') || t.includes('naqd') || t.includes('cash')) return 'Yetkazib berishda'
    if (t.includes('evos')) return 'Bonus hisobidan'
    if (t.includes('payme')) return "Online to'lov"
    if (t.includes('click')) return "Online to'lov"
    return ''
  }

  const getBadge = (item) => {
    const t = (item?.title || '').toLowerCase()
    if (t.includes('наличн') || t.includes('naqd') || t.includes('cash')) return "Eng mashhur"
    return null
  }

  const cardStyle = (isSelected) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: '16px',
    borderRadius: 16,
    border: isSelected ? '1.5px solid #007855' : '1.5px solid #e8e8e8',
    backgroundColor: isSelected ? '#f0faf6' : '#fff',
    boxShadow: isSelected
      ? '0 6px 24px rgba(0,120,85,0.14)'
      : '0 2px 8px rgba(0,0,0,0.05)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  })

  return (
    <div>
      <Typography style={{ fontSize: 20, fontWeight: 700, color: '#111', marginBottom: 20 }}>
        {menu[locale].typeOfPayment}
      </Typography>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: 12,
      }}>
        {payments.map((item) => {
          const isSelected = String(selected) === String(item?.id)
          const desc = getDesc(item)
          const badge = getBadge(item)
          const hasImg = !!item.img

          return (
            <label
              key={item.id}
              htmlFor={`pay-${item.id}`}
              style={cardStyle(isSelected)}
              onMouseEnter={e => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = '#007855'
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,120,85,0.10)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }
              }}
              onMouseLeave={e => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = '#e8e8e8'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }
              }}
            >
              <input
                type="radio"
                name="paymentType"
                id={`pay-${item.id}`}
                value={item?.id}
                onChange={formik.handleChange}
                defaultChecked={item?.default}
                style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
              />

              {/* Radio doira */}
              <div style={{
                position: 'absolute',
                top: 14, right: 14,
                width: 18, height: 18,
                borderRadius: '50%',
                border: isSelected ? '1.5px solid #007855' : '1.5px solid #ccc',
                backgroundColor: isSelected ? '#007855' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
              }}>
                {isSelected && (
                  <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#fff' }} />
                )}
              </div>

              {/* Logo */}
              <div style={{
                width: 52, height: 36,
                background: isSelected ? '#fff' : '#f5f5f5',
                borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s',
              }}>
                {hasImg ? (
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: 40, height: 24, objectFit: 'contain' }}
                  />
                ) : (
                  <div style={{ color: '#007855', display: 'flex' }}>
                    <CashIcon />
                  </div>
                )}
              </div>

              {/* Nom */}
              <div style={{ fontSize: 14, fontWeight: 600, color: '#111', paddingRight: 24 }}>
                {item?.title}
              </div>

              {/* Tavsif */}
              {desc && (
                <div style={{ fontSize: 11, color: '#888', marginTop: -6 }}>
                  {desc}
                </div>
              )}

              {/* Badge */}
              {badge && (
                <span style={{
                  display: 'inline-block',
                  fontSize: 10,
                  fontWeight: 600,
                  padding: '2px 8px',
                  borderRadius: 20,
                  background: '#e8f5f0',
                  color: '#005c3e',
                  width: 'fit-content',
                }}>
                  {badge}
                </span>
              )}
            </label>
          )
        })}
      </div>
    </div>
  )
}