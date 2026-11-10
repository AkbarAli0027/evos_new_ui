// import { useEffect, useState } from 'react'
// import { Box, Typography, Dialog } from '@mui/material'
// import cls from './style.module.scss'
// import Input from '../Input/Input'
// import { getGeoCodeAddressList } from '../../utils/yandex.js'
// import { btnText, menu } from '../../mock/menu'
// import { useRouter } from 'next/router'
// import NumberInput from '../NumberInput/NumberInput'
// import MapDropDown from '../MapDropDown/MapDropDown'
// import Map from '../Map/Map.jsx'
// import { useFormik } from 'formik'
// import { setCookie } from 'nookies'
// import { useDispatch, useSelector } from 'react-redux'
// import { addAddress, setOpenAddress, setYandexKey } from '../../store/actions/addressActions/addressActions'
// import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
// import { requestV2 } from '../../utils/axios.js'
// import { toast } from 'react-toastify'
// import useDebounce from '../../utils/usedebounce.js'

// export default function AddressModal({ open }) {
//   const [data, setData] = useState({ lat: 41.311081, long: 69.240562 })
//   const [address, setAddress] = useState('')
//   const [addressList, setAddressList] = useState([])
//   const [confirmAddress, setConfirmAddress] = useState(false)
//   const [placemarkGeometry, setPlacemarkGeometry] = useState([])

//   const debouncedValue = useDebounce(address, 700)
//   const { locale, replace } = useRouter()
//   const dispatch = useDispatch()
//   const { yandexKey } = useSelector((state) => state.address)

//   useEffect(() => {
//     if (!open) {
//       setAddress('')
//       setData({ lat: 41.311081, long: 69.240562 })
//       setPlacemarkGeometry([])
//       setAddressList([])
//       setConfirmAddress(false)
//       formik.resetForm()
//     }
//   }, [open])

//   useEffect(() => {
//     if (open) {
//       let count = 0
//       async function getYandexKeys() {
//         try {
//           const response = await fetch('https://admin.evos.uz/api/yandex-keys')
//           const keyData = await response.json()
//           const keys = keyData?.data
//           async function checkKeys() {
//             if (!keys || count === keys.length) {
//               dispatch(setYandexKey(process.env.MAP_API_KEY))
//               return
//             }
//             const currentKey = keys[count]?.attributes?.key
//             const result = await fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&geocode=Tashkent&apikey=${currentKey}`)
//             if (result.ok) {
//               dispatch(setYandexKey(currentKey))
//             } else {
//               count++; checkKeys()
//             }
//           }
//           checkKeys()
//         } catch (e) {
//           dispatch(setYandexKey(process.env.MAP_API_KEY))
//         }
//       }
//       getYandexKeys()
//     }
//   }, [open])

//   const formik = useFormik({
//     initialValues: {
//       flatOrOffice: '', intercom: '', entrance: '', floor: '', address: '', comment: '',
//     },
//     onSubmit: async (values) => {
//       const coords = [data.lat, data.long].join(',')
//       try {
//         const nearby = await requestV2({
//           url: process.env.BASE_URL_V2 + '/service/branch-nearby',
//           method: 'POST',
//           data: { geo: coords },
//           headers: { token: process.env.TOKEN_V2 },
//         })
//         if (nearby?.data?.polygon?.[0]?.id) {
//           dispatch(addAddress({
//             address: address,
//             comment: values.comment,
//             entrance: values.entrance,
//             floor: values.floor,
//             geo: coords,
//             house: values.flatOrOffice,
//             code: values.intercom,
//           }))
//           setCookie({}, 'geoLocation', coords, { path: '/', maxAge: 30 * 24 * 60 * 60 })
//           dispatch(setOpenAddress())
//           toast.success('Manzil saqlandi')
//           setTimeout(() => replace('/'), 500)
//         } else {
//           toast.error('Bu hududga yetkazib berish mavjud emas')
//         }
//       } catch (err) {
//         toast.error('Xatolik yuz berdi')
//       }
//     },
//   })

//   useEffect(() => {
//     if (debouncedValue && !confirmAddress) {
//       getGeoCodeAddressList(debouncedValue, yandexKey).then((res) => {
//         if (res.status === 200) {
//           const list = res?.data?.response?.GeoObjectCollection?.featureMember?.map(item => ({
//             label: item?.GeoObject?.name,
//             value: item?.GeoObject?.Point?.pos,
//             description: item?.GeoObject?.description,
//             location: item?.GeoObject?.Point?.pos,
//           }))
//           setAddressList(list || [])
//         }
//       })
//     }
//   }, [debouncedValue, yandexKey])

//   return (
//     <Dialog
//       open={open}
//       onClose={() => dispatch(setOpenAddress())}
//       fullWidth
//       maxWidth="lg"
//       PaperProps={{
//         style: {
//           borderRadius: 20,
//           overflow: 'hidden',
//           margin: 16,
//           height: '90vh',
//           maxHeight: 700,
//         }
//       }}
//     >
//       {/* Yopish tugmasi */}
//       <button
//         type="button"
//         onClick={() => dispatch(setOpenAddress())}
//         style={{
//           position: 'absolute',
//           top: 14,
//           right: 14,
//           zIndex: 10,
//           background: '#f5f5f5',
//           border: 'none',
//           borderRadius: '50%',
//           width: 36,
//           height: 36,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           cursor: 'pointer',
//         }}
//       >
//         <CloseRoundedIcon style={{ fontSize: 20, color: '#555' }} />
//       </button>

//       <form onSubmit={formik.handleSubmit} style={{ height: '100%' }}>
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: '460px 1fr',
//           height: '100%',
//         }}>

//           {/* CHAP — Inputlar */}
//           <div style={{
//             padding: '32px 28px 24px',
//             height: '100%',
//             boxSizing: 'border-box',
//             overflowY: 'auto',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//             backgroundColor: '#fff',
//           }}>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
//               <Typography variant="h5" style={{ fontWeight: 700, fontSize: 20, color: '#111', marginBottom: 4 }}>
//                 {menu[locale].deliveryAddress}
//               </Typography>

//               {/* Manzil inputi */}
//               <Box position="relative">
//                 <input
//                   className={cls.personalInput}
//                   name="address"
//                   placeholder={menu[locale].address}
//                   value={address}
//                   onChange={(e) => { setAddress(e.target.value); setConfirmAddress(false) }}
//                   required
//                   style={{ width: '100%', boxSizing: 'border-box', margin: 0 }}
//                 />
//                 {!confirmAddress && addressList.length > 0 && (
//                   <MapDropDown
//                     options={addressList}
//                     setAddressList={setAddressList}
//                     setAddress={setAddress}
//                     setData={setData}
//                     setPlacemarkGeometry={setPlacemarkGeometry}
//                     setConfirmAddress={setConfirmAddress}
//                   />
//                 )}
//               </Box>

//               {/* 2x2 grid inputlar */}
//               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
//                 <input
//                   className={cls.personalInput}
//                   name="flatOrOffice"
//                   placeholder={menu[locale].flatOrOffice}
//                   onChange={formik.handleChange}
//                   value={formik.values.flatOrOffice}
//                   style={{ margin: 0, boxSizing: 'border-box', width: '100%' }}
//                 />
//                 <input
//                   className={cls.personalInput}
//                   name="intercom"
//                   type="number"
//                   placeholder={menu[locale].intercom}
//                   onChange={formik.handleChange}
//                   value={formik.values.intercom}
//                   style={{ margin: 0, boxSizing: 'border-box', width: '100%' }}
//                 />
//                 <input
//                   className={cls.personalInput}
//                   name="entrance"
//                   type="number"
//                   placeholder={menu[locale].entrance}
//                   onChange={formik.handleChange}
//                   value={formik.values.entrance}
//                   style={{ margin: 0, boxSizing: 'border-box', width: '100%' }}
//                 />
//                 <input
//                   className={cls.personalInput}
//                   name="floor"
//                   type="number"
//                   placeholder={menu[locale].floor}
//                   onChange={formik.handleChange}
//                   value={formik.values.floor}
//                   style={{ margin: 0, boxSizing: 'border-box', width: '100%' }}
//                 />
//               </div>

//               {/* Izoh */}
//               <input
//                 className={cls.personalInput}
//                 name="comment"
//                 placeholder={menu[locale].comment}
//                 onChange={formik.handleChange}
//                 value={formik.values.comment}
//                 style={{ width: '100%', boxSizing: 'border-box', margin: 0 }}
//               />
//             </div>

//             {/* Saqlash tugmasi — har doim pastda */}
//             <button type="submit" className={cls.button} style={{ marginTop: 24 }}>
//               {btnText[locale].save}
//             </button>
//           </div>

//           {/* O'NG — Yandex xarita: to'liq balandlikni egallaydi */}
//           <div style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
//             {/* Yandex controls ni CSS bilan yashirish */}
//             <style>{`
//               .ymaps-hide-controls [class*="ymaps-2"][class*="-controls__toolbar"] { display: none !important; }
//               .ymaps-hide-controls [class*="ymaps-2"][class*="-searchbox"] { display: none !important; }
//               .ymaps-hide-controls [class*="ymaps-2"][class*="-float-button"] { display: none !important; }
//             `}</style>
//             <div
//               className="ymaps-hide-controls"
//               style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
//             >
//               <Map
//                 placemarkGeometry={placemarkGeometry}
//                 setPlacemarkGeometry={setPlacemarkGeometry}
//                 setAddress={setAddress}
//                 data={data}
//                 setData={setData}
//                 cls={cls}
//               />
//             </div>
//           </div>

//         </div>
//       </form>
//     </Dialog>
//   )
// }








// // import { useEffect, useState } from 'react'
// // import { Box, Typography, Dialog } from '@mui/material'
// // import cls from './style.module.scss'
// // import CardWrapper from '../CardWrapper/CardWrapper'
// // import Input from '../Input/Input'
// // import { getGeoCodeAddressList } from '../../utils/yandex.js'
// // import { btnText, menu } from '../../mock/menu'
// // import { useRouter } from 'next/router'
// // import NumberInput from '../NumberInput/NumberInput'
// // import MapDropDown from '../MapDropDown/MapDropDown'
// // import Map from '../Map/Map.jsx'
// // import { useFormik } from 'formik'
// // import { setCookie } from 'nookies'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { addAddress, setOpenAddress, setYandexKey } from '../../store/actions/addressActions/addressActions'
// // import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
// // import { requestV2 } from '../../utils/axios.js'
// // import { toast } from 'react-toastify'
// // import useDebounce from '../../utils/usedebounce.js'

// // export default function AddressModal({ open }) {
// //   const [data, setData] = useState({ lat: 41.311081, long: 69.240562 })
// //   const [address, setAddress] = useState('')
// //   const [addressList, setAddressList] = useState([])
// //   const [confirmAddress, setConfirmAddress] = useState(false)
// //   const [placemarkGeometry, setPlacemarkGeometry] = useState([])

// //   const debouncedValue = useDebounce(address, 700)
// //   const { locale, replace } = useRouter()
// //   const dispatch = useDispatch()
// //   const { yandexKey } = useSelector((state) => state.address)

// //   useEffect(() => {
// //     if (!open) {
// //       setAddress('')
// //       setData({ lat: 41.311081, long: 69.240562 })
// //       setPlacemarkGeometry([])
// //       setAddressList([])
// //       setConfirmAddress(false)
// //       formik.resetForm()
// //     }
// //   }, [open])

// //   useEffect(() => {
// //     if (open) {
// //       let count = 0
// //       async function getYandexKeys() {
// //         try {
// //           const response = await fetch('https://admin.evos.uz/api/yandex-keys')
// //           const keyData = await response.json()
// //           const keys = keyData?.data
// //           async function checkKeys() {
// //             if (!keys || count === keys.length) {
// //               dispatch(setYandexKey(process.env.MAP_API_KEY))
// //               return
// //             }
// //             const currentKey = keys[count]?.attributes?.key
// //             const result = await fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&geocode=Tashkent&apikey=${currentKey}`)
// //             if (result.ok) {
// //               dispatch(setYandexKey(currentKey))
// //             } else {
// //               count++; checkKeys()
// //             }
// //           }
// //           checkKeys()
// //         } catch (e) {
// //           dispatch(setYandexKey(process.env.MAP_API_KEY))
// //         }
// //       }
// //       getYandexKeys()
// //     }
// //   }, [open])

// //   const formik = useFormik({
// //     initialValues: {
// //       flatOrOffice: '', intercom: '', entrance: '', floor: '', address: '', comment: '',
// //     },
// //     onSubmit: async (values) => {
// //       const coords = [data.lat, data.long].join(',')
// //       try {
// //         const nearby = await requestV2({
// //           url: process.env.BASE_URL_V2 + '/service/branch-nearby',
// //           method: 'POST',
// //           data: { geo: coords },
// //           headers: { token: process.env.TOKEN_V2 },
// //         })
// //         if (nearby?.data?.polygon?.[0]?.id) {
// //           dispatch(addAddress({
// //             address: address,
// //             comment: values.comment,
// //             entrance: values.entrance,
// //             floor: values.floor,
// //             geo: coords,
// //             house: values.flatOrOffice,
// //             code: values.intercom,
// //           }))
// //           setCookie({}, 'geoLocation', coords, { path: '/', maxAge: 30 * 24 * 60 * 60 })
// //           dispatch(setOpenAddress())
// //           toast.success('Manzil saqlandi')
// //           setTimeout(() => replace('/'), 500)
// //         } else {
// //           toast.error('Bu hududga yetkazib berish mavjud emas')
// //         }
// //       } catch (err) {
// //         toast.error('Xatolik yuz berdi')
// //       }
// //     },
// //   })

// //   useEffect(() => {
// //     if (debouncedValue && !confirmAddress) {
// //       getGeoCodeAddressList(debouncedValue, yandexKey).then((res) => {
// //         if (res.status === 200) {
// //           const list = res?.data?.response?.GeoObjectCollection?.featureMember?.map(item => ({
// //             label: item?.GeoObject?.name,
// //             value: item?.GeoObject?.Point?.pos,
// //             description: item?.GeoObject?.description,
// //             location: item?.GeoObject?.Point?.pos,
// //           }))
// //           setAddressList(list || [])
// //         }
// //       })
// //     }
// //   }, [debouncedValue, yandexKey])

// //   return (
// //     <Dialog
// //       open={open}
// //       onClose={() => dispatch(setOpenAddress())}
// //       fullWidth
// //       maxWidth="lg"
// //       PaperProps={{
// //         style: {
// //           borderRadius: 20,
// //           overflow: 'hidden',
// //           margin: 16,
// //           height: 560,
// //         }
// //       }}
// //     >
// //       {/* Yopish tugmasi */}
// //       <button
// //         type="button"
// //         onClick={() => dispatch(setOpenAddress())}
// //         style={{
// //           position: 'absolute',
// //           top: 14,
// //           right: 14,
// //           zIndex: 10,
// //           background: '#f5f5f5',
// //           border: 'none',
// //           borderRadius: '50%',
// //           width: 36,
// //           height: 36,
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           cursor: 'pointer',
// //         }}
// //       >
// //         <CloseRoundedIcon style={{ fontSize: 20, color: '#555' }} />
// //       </button>

// //       <form onSubmit={formik.handleSubmit}>
// //         <div style={{
// //           display: 'grid',
// //           gridTemplateColumns: '520px 1fr',
// //           height: 560,
// //         }}>

// //           {/* CHAP — Inputlar */}
// //           <div className={cls.form_section} style={{ height: '100%', boxSizing: 'border-box', overflowY: 'auto' }}>
// //             <div>
// //               <Typography variant="h5" className={cls.title}>
// //                 {menu[locale].deliveryAddress}
// //               </Typography>

// //               {/* Manzil inputi — to'liq kenglikda */}
// //               <Box position="relative" mb={2}>
// //                 <input
// //                   className={cls.personalInput}
// //                   name="address"
// //                   placeholder={menu[locale].address}
// //                   value={address}
// //                   onChange={(e) => { setAddress(e.target.value); setConfirmAddress(false) }}
// //                   required
// //                   style={{ width: '100%', boxSizing: 'border-box' }}
// //                 />
// //                 {!confirmAddress && addressList.length > 0 && (
// //                   <MapDropDown
// //                     options={addressList}
// //                     setAddressList={setAddressList}
// //                     setAddress={setAddress}
// //                     setData={setData}
// //                     setPlacemarkGeometry={setPlacemarkGeometry}
// //                     setConfirmAddress={setConfirmAddress}
// //                   />
// //                 )}
// //               </Box>

// //               {/* 2x2 grid inputlar */}
// //               <div className={cls.adress_form}>
// //                 <input
// //                   className={cls.personalInput}
// //                   name="flatOrOffice"
// //                   placeholder={menu[locale].flatOrOffice}
// //                   onChange={formik.handleChange}
// //                   value={formik.values.flatOrOffice}
// //                 />
// //                 <input
// //                   className={cls.personalInput}
// //                   name="intercom"
// //                   type="number"
// //                   placeholder={menu[locale].intercom}
// //                   onChange={formik.handleChange}
// //                   value={formik.values.intercom}
// //                 />
// //                 <input
// //                   className={cls.personalInput}
// //                   name="entrance"
// //                   type="number"
// //                   placeholder={menu[locale].entrance}
// //                   onChange={formik.handleChange}
// //                   value={formik.values.entrance}
// //                 />
// //                 <input
// //                   className={cls.personalInput}
// //                   name="floor"
// //                   type="number"
// //                   placeholder={menu[locale].floor}
// //                   onChange={formik.handleChange}
// //                   value={formik.values.floor}
// //                 />
// //               </div>

// //               {/* Izoh */}
// //               <Box mt={2}>
// //                 <input
// //                   className={cls.personalInput}
// //                   name="comment"
// //                   placeholder={menu[locale].comment}
// //                   onChange={formik.handleChange}
// //                   value={formik.values.comment}
// //                   style={{ width: '100%', boxSizing: 'border-box' }}
// //                 />
// //               </Box>
// //             </div>

// //             {/* Saqlash tugmasi */}
// //             <button type="submit" className={cls.button}>
// //               {btnText[locale].save}
// //             </button>
// //           </div>

// //           {/* O'NG — Yandex xarita: to'liq joy egallaydi */}
// //           <div style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
// //             <div style={{ width: '100%', height: '100%' }} className={cls.map}>
// //               <Map
// //                 placemarkGeometry={placemarkGeometry}
// //                 setPlacemarkGeometry={setPlacemarkGeometry}
// //                 setAddress={setAddress}
// //                 data={data}
// //                 setData={setData}
// //                 cls={cls}
// //               />
// //             </div>
// //           </div>

// //         </div>
// //       </form>
// //     </Dialog>
// //   )
// // }














// // import { useEffect, useState } from 'react'
// // import { Box, Typography, Dialog } from '@mui/material'
// // import cls from './style.module.scss'
// // import CardWrapper from '../CardWrapper/CardWrapper'
// // import Input from '../Input/Input'
// // import { getGeoCodeAddressList } from '../../utils/yandex.js'
// // import { btnText, menu } from '../../mock/menu'
// // import { useRouter } from 'next/router'
// // import NumberInput from '../NumberInput/NumberInput'
// // import MapDropDown from '../MapDropDown/MapDropDown'
// // import Map from '../Map/Map.jsx'
// // import { useFormik } from 'formik'
// // import { setCookie } from 'nookies'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { addAddress, setOpenAddress, setYandexKey } from '../../store/actions/addressActions/addressActions'
// // import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
// // import { requestV2 } from '../../utils/axios.js'
// // import { toast } from 'react-toastify'
// // import useDebounce from '../../utils/usedebounce.js'

// // export default function AddressModal({ open }) {
// //   const [data, setData] = useState({ lat: 41.311081, long: 69.240562 })
// //   const [address, setAddress] = useState('')
// //   const [addressList, setAddressList] = useState([])
// //   const [confirmAddress, setConfirmAddress] = useState(false)
// //   const [placemarkGeometry, setPlacemarkGeometry] = useState([])

// //   const debouncedValue = useDebounce(address, 700)
// //   const { locale, replace } = useRouter()
// //   const dispatch = useDispatch()
// //   const { yandexKey } = useSelector((state) => state.address)

// //   useEffect(() => {
// //     if (!open) {
// //       setAddress('')
// //       setData({ lat: 41.311081, long: 69.240562 })
// //       setPlacemarkGeometry([])
// //       setAddressList([])
// //       setConfirmAddress(false)
// //       formik.resetForm()
// //     }
// //   }, [open])

// //   useEffect(() => {
// //     if (open) {
// //       let count = 0
// //       async function getYandexKeys() {
// //         try {
// //           const response = await fetch('https://admin.evos.uz/api/yandex-keys')
// //           const keyData = await response.json()
// //           const keys = keyData?.data
// //           async function checkKeys() {
// //             if (!keys || count === keys.length) {
// //               dispatch(setYandexKey(process.env.MAP_API_KEY))
// //               return
// //             }
// //             const currentKey = keys[count]?.attributes?.key
// //             const result = await fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&geocode=Tashkent&apikey=${currentKey}`)
// //             if (result.ok) {
// //               dispatch(setYandexKey(currentKey))
// //             } else {
// //               count++; checkKeys()
// //             }
// //           }
// //           checkKeys()
// //         } catch (e) {
// //           dispatch(setYandexKey(process.env.MAP_API_KEY))
// //         }
// //       }
// //       getYandexKeys()
// //     }
// //   }, [open])

// //   const formik = useFormik({
// //     initialValues: {
// //       flatOrOffice: '', intercom: '', entrance: '', floor: '', address: '', comment: '',
// //     },
// //     onSubmit: async (values) => {
// //       const coords = [data.lat, data.long].join(',')
// //       try {
// //         const nearby = await requestV2({
// //           url: process.env.BASE_URL_V2 + '/service/branch-nearby',
// //           method: 'POST',
// //           data: { geo: coords },
// //           headers: { token: process.env.TOKEN_V2 },
// //         })
// //         if (nearby?.data?.polygon?.[0]?.id) {
// //           dispatch(addAddress({
// //             address: address,
// //             comment: values.comment,
// //             entrance: values.entrance,
// //             floor: values.floor,
// //             geo: coords,
// //             house: values.flatOrOffice,
// //             code: values.intercom,
// //           }))
// //           setCookie({}, 'geoLocation', coords, { path: '/', maxAge: 30 * 24 * 60 * 60 })
// //           dispatch(setOpenAddress())
// //           toast.success('Manzil saqlandi')
// //           setTimeout(() => replace('/'), 500)
// //         } else {
// //           toast.error('Bu hududga yetkazib berish mavjud emas')
// //         }
// //       } catch (err) {
// //         toast.error('Xatolik yuz berdi')
// //       }
// //     },
// //   })

// //   useEffect(() => {
// //     if (debouncedValue && !confirmAddress) {
// //       getGeoCodeAddressList(debouncedValue, yandexKey).then((res) => {
// //         if (res.status === 200) {
// //           const list = res?.data?.response?.GeoObjectCollection?.featureMember?.map(item => ({
// //             label: item?.GeoObject?.name,
// //             value: item?.GeoObject?.Point?.pos,
// //             description: item?.GeoObject?.description,
// //             location: item?.GeoObject?.Point?.pos,
// //           }))
// //           setAddressList(list || [])
// //         }
// //       })
// //     }
// //   }, [debouncedValue, yandexKey])

// //   return (
// //     <Dialog
// //       open={open}
// //       onClose={() => dispatch(setOpenAddress())}
// //       fullWidth
// //       maxWidth="lg"
// //       PaperProps={{
// //         style: {
// //           borderRadius: 20,
// //           overflow: 'hidden',
// //           margin: 16,
// //           height: '90vh',
// //           maxHeight: 700,
// //         }
// //       }}
// //     >
// //       {/* Yopish tugmasi */}
// //       <button
// //         type="button"
// //         onClick={() => dispatch(setOpenAddress())}
// //         style={{
// //           position: 'absolute',
// //           top: 14,
// //           right: 14,
// //           zIndex: 10,
// //           background: '#f5f5f5',
// //           border: 'none',
// //           borderRadius: '50%',
// //           width: 36,
// //           height: 36,
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           cursor: 'pointer',
// //         }}
// //       >
// //         <CloseRoundedIcon style={{ fontSize: 20, color: '#555' }} />
// //       </button>

// //       <form onSubmit={formik.handleSubmit} style={{ height: '100%' }}>
// //         <div style={{
// //           display: 'grid',
// //           gridTemplateColumns: '460px 1fr',
// //           height: '100%',
// //           minHeight: 0,
// //         }}>

// //           {/* CHAP — Inputlar */}
// //           <div style={{
// //             padding: '32px 28px 28px',
// //             display: 'flex',
// //             flexDirection: 'column',
// //             justifyContent: 'space-between',
// //             height: '100%',
// //             boxSizing: 'border-box',
// //             overflowY: 'auto',
// //             backgroundColor: '#fff',
// //           }}>
// //             <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
// //               <Typography variant="h5" style={{ fontWeight: 700, fontSize: 20, color: '#111', marginBottom: 4 }}>
// //                 {menu[locale].deliveryAddress}
// //               </Typography>

// //               {/* Manzil inputi */}
// //               <Box position="relative">
// //                 <input
// //                   className={cls.personalInput}
// //                   name="address"
// //                   placeholder={menu[locale].address}
// //                   value={address}
// //                   onChange={(e) => { setAddress(e.target.value); setConfirmAddress(false) }}
// //                   required
// //                   style={{ width: '100%', boxSizing: 'border-box', margin: 0 }}
// //                 />
// //                 {!confirmAddress && addressList.length > 0 && (
// //                   <MapDropDown
// //                     options={addressList}
// //                     setAddressList={setAddressList}
// //                     setAddress={setAddress}
// //                     setData={setData}
// //                     setPlacemarkGeometry={setPlacemarkGeometry}
// //                     setConfirmAddress={setConfirmAddress}
// //                   />
// //                 )}
// //               </Box>

// //               {/* 2x2 grid inputlar */}
// //               <div style={{
// //                 display: 'grid',
// //                 gridTemplateColumns: '1fr 1fr',
// //                 gap: 12,
// //               }}>
// //                 <input
// //                   className={cls.personalInput}
// //                   name="flatOrOffice"
// //                   placeholder={menu[locale].flatOrOffice}
// //                   onChange={formik.handleChange}
// //                   value={formik.values.flatOrOffice}
// //                   style={{ margin: 0, boxSizing: 'border-box', width: '100%' }}
// //                 />
// //                 <input
// //                   className={cls.personalInput}
// //                   name="intercom"
// //                   type="number"
// //                   placeholder={menu[locale].intercom}
// //                   onChange={formik.handleChange}
// //                   value={formik.values.intercom}
// //                   style={{ margin: 0, boxSizing: 'border-box', width: '100%' }}
// //                 />
// //                 <input
// //                   className={cls.personalInput}
// //                   name="entrance"
// //                   type="number"
// //                   placeholder={menu[locale].entrance}
// //                   onChange={formik.handleChange}
// //                   value={formik.values.entrance}
// //                   style={{ margin: 0, boxSizing: 'border-box', width: '100%' }}
// //                 />
// //                 <input
// //                   className={cls.personalInput}
// //                   name="floor"
// //                   type="number"
// //                   placeholder={menu[locale].floor}
// //                   onChange={formik.handleChange}
// //                   value={formik.values.floor}
// //                   style={{ margin: 0, boxSizing: 'border-box', width: '100%' }}
// //                 />
// //               </div>

// //               {/* Izoh */}
// //               <input
// //                 className={cls.personalInput}
// //                 name="comment"
// //                 placeholder={menu[locale].comment}
// //                 onChange={formik.handleChange}
// //                 value={formik.values.comment}
// //                 style={{ width: '100%', boxSizing: 'border-box', margin: 0 }}
// //               />
// //             </div>

// //             {/* Saqlash tugmasi — har doim pastda */}
// //             <button
// //               type="submit"
// //               className={cls.button}
// //               style={{ marginTop: 24, marginBottom: 0 }}
// //             >
// //               {btnText[locale].save}
// //             </button>
// //           </div>

// //           {/* O'NG — Yandex xarita */}
// //           <div style={{ position: 'relative', height: '100%', overflow: 'hidden', minHeight: 0 }}>
// //             <style>{`
// //               .map-full [class*="ymaps"] { height: 100% !important; }
// //               .map-full [class*="ymaps-2"][class*="-controls"] { display: none !important; }
// //               .map-full [class*="ymaps-2"][class*="-searchbox"] { display: none !important; }
// //               .map-full button[class*="ymaps"] { display: none !important; }
// //             `}</style>
// //             <div className="map-full" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
// //               <Map
// //                 placemarkGeometry={placemarkGeometry}
// //                 setPlacemarkGeometry={setPlacemarkGeometry}
// //                 setAddress={setAddress}
// //                 data={data}
// //                 setData={setData}
// //                 cls={cls}
// //               />
// //             </div>
// //           </div>

// //         </div>
// //       </form>
// //     </Dialog>
// //   )
// // }


  




// import { useEffect, useState } from 'react'
// import { Box, Typography, Dialog } from '@mui/material'
// import cls from './style.module.scss'
// import Input from '../Input/Input'
// import { getGeoCodeAddressList } from '../../utils/yandex.js'
// import { btnText, menu } from '../../mock/menu'
// import { useRouter } from 'next/router'
// import NumberInput from '../NumberInput/NumberInput'
// import MapDropDown from '../MapDropDown/MapDropDown'
// import Map from '../Map/Map.jsx'
// import { useFormik } from 'formik'
// import { setCookie } from 'nookies'
// import { useDispatch, useSelector } from 'react-redux'
// import { addAddress, setOpenAddress, setYandexKey } from '../../store/actions/addressActions/addressActions'
// import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
// import { requestV2 } from '../../utils/axios.js'
// import { toast } from 'react-toastify'
// import useDebounce from '../../utils/usedebounce.js'

// export default function AddressModal({ open }) {
//   const [data, setData] = useState({ lat: 41.311081, long: 69.240562 })
//   const [address, setAddress] = useState('')
//   const [addressList, setAddressList] = useState([])
//   const [confirmAddress, setConfirmAddress] = useState(false)
//   const [placemarkGeometry, setPlacemarkGeometry] = useState([])

//   const debouncedValue = useDebounce(address, 700)
//   const { locale, replace } = useRouter()
//   const dispatch = useDispatch()
//   const { yandexKey } = useSelector((state) => state.address)

//   useEffect(() => {
//     if (!open) {
//       setAddress('')
//       setData({ lat: 41.311081, long: 69.240562 })
//       setPlacemarkGeometry([])
//       setAddressList([])
//       setConfirmAddress(false)
//       formik.resetForm()
//     }
//   }, [open])

//   useEffect(() => {
//     if (open) {
//       let count = 0
//       async function getYandexKeys() {
//         try {
//           const response = await fetch('https://admin.evos.uz/api/yandex-keys')
//           const keyData = await response.json()
//           const keys = keyData?.data
//           async function checkKeys() {
//             if (!keys || count === keys.length) {
//               dispatch(setYandexKey(process.env.MAP_API_KEY))
//               return
//             }
//             const currentKey = keys[count]?.attributes?.key
//             const result = await fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&geocode=Tashkent&apikey=${currentKey}`)
//             if (result.ok) {
//               dispatch(setYandexKey(currentKey))
//             } else {
//               count++; checkKeys()
//             }
//           }
//           checkKeys()
//         } catch (e) {
//           dispatch(setYandexKey(process.env.MAP_API_KEY))
//         }
//       }
//       getYandexKeys()
//     }
//   }, [open])

//   const formik = useFormik({
//     initialValues: {
//       flatOrOffice: '', intercom: '', entrance: '', floor: '', address: '', comment: '',
//     },
//     onSubmit: async (values) => {
//       const coords = [data.lat, data.long].join(',')
//       try {
//         const nearby = await requestV2({
//           url: process.env.BASE_URL_V2 + '/service/branch-nearby',
//           method: 'POST',
//           data: { geo: coords },
//           headers: { token: process.env.TOKEN_V2 },
//         })
//         if (nearby?.data?.polygon?.[0]?.id) {
//           dispatch(addAddress({
//             address: address,
//             comment: values.comment,
//             entrance: values.entrance,
//             floor: values.floor,
//             geo: coords,
//             house: values.flatOrOffice,
//             code: values.intercom,
//           }))
//           setCookie({}, 'geoLocation', coords, { path: '/', maxAge: 30 * 24 * 60 * 60 })
//           dispatch(setOpenAddress())
//           toast.success('Manzil saqlandi')
//           setTimeout(() => replace('/'), 500)
//         } else {
//           toast.error('Bu hududga yetkazib berish mavjud emas')
//         }
//       } catch (err) {
//         toast.error('Xatolik yuz berdi')
//       }
//     },
//   })

//   useEffect(() => {
//     if (debouncedValue && !confirmAddress) {
//       getGeoCodeAddressList(debouncedValue, yandexKey).then((res) => {
//         if (res.status === 200) {
//           const list = res?.data?.response?.GeoObjectCollection?.featureMember?.map(item => ({
//             label: item?.GeoObject?.name,
//             value: item?.GeoObject?.Point?.pos,
//             description: item?.GeoObject?.description,
//             location: item?.GeoObject?.Point?.pos,
//           }))
//           setAddressList(list || [])
//         }
//       })
//     }
//   }, [debouncedValue, yandexKey])

//   return (
//     <Dialog
//       open={open}
//       onClose={() => dispatch(setOpenAddress())}
//       fullWidth
//       maxWidth="lg"
//       PaperProps={{
//         style: {
//           borderRadius: 20,
//           overflow: 'hidden',
//           margin: 'clamp(0px, 2vw, 16px)',
//           height: '95vh',
//           maxHeight: 700,
//           width: '100%',
//         }
//       }}
//     >
//       {/* Yopish tugmasi */}
//       <button
//         type="button"
//         onClick={() => dispatch(setOpenAddress())}
//         style={{
//           position: 'absolute',
//           top: 14,
//           right: 14,
//           zIndex: 10,
//           background: '#f5f5f5',
//           border: 'none',
//           borderRadius: '50%',
//           width: 36,
//           height: 36,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           cursor: 'pointer',
//         }}
//       >
//         <CloseRoundedIcon style={{ fontSize: 20, color: '#555' }} />
//       </button>

//       <form onSubmit={formik.handleSubmit} style={{ height: '100%' }}>
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'min(460px, 100%) 1fr',
//           height: '100%',
//         }}>

//           {/* CHAP — Inputlar */}
//           <div style={{
//             padding: 'clamp(16px, 4vw, 32px) clamp(16px, 4vw, 28px) 24px',
//             height: '100%',
//             boxSizing: 'border-box',
//             overflowY: 'auto',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//             backgroundColor: '#fff',
//           }}>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
//               <Typography variant="h5" style={{ fontWeight: 700, fontSize: 20, color: '#111', marginBottom: 4 }}>
//                 {menu[locale].deliveryAddress}
//               </Typography>

//               {/* Manzil inputi */}
//               <Box position="relative">
//                 <input
//                   className={cls.personalInput}
//                   name="address"
//                   placeholder={menu[locale].address}
//                   value={address}
//                   onChange={(e) => { setAddress(e.target.value); setConfirmAddress(false) }}
//                   required
//                   style={{ width: '100%', boxSizing: 'border-box', margin: 0 }}
//                 />
//                 {!confirmAddress && addressList.length > 0 && (
//                   <MapDropDown
//                     options={addressList}
//                     setAddressList={setAddressList}
//                     setAddress={setAddress}
//                     setData={setData}
//                     setPlacemarkGeometry={setPlacemarkGeometry}
//                     setConfirmAddress={setConfirmAddress}
//                   />
//                 )}
//               </Box>

//               {/* 2x2 grid inputlar */}
//               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
//                 <input
//                   className={cls.personalInput}
//                   name="flatOrOffice"
//                   placeholder={menu[locale].flatOrOffice}
//                   onChange={formik.handleChange}
//                   value={formik.values.flatOrOffice}
//                   style={{ margin: 0, boxSizing: 'border-box', width: '100%' }}
//                 />
//                 <input
//                   className={cls.personalInput}
//                   name="intercom"
//                   type="number"
//                   placeholder={menu[locale].intercom}
//                   onChange={formik.handleChange}
//                   value={formik.values.intercom}
//                   style={{ margin: 0, boxSizing: 'border-box', width: '100%' }}
//                 />
//                 <input
//                   className={cls.personalInput}
//                   name="entrance"
//                   type="number"
//                   placeholder={menu[locale].entrance}
//                   onChange={formik.handleChange}
//                   value={formik.values.entrance}
//                   style={{ margin: 0, boxSizing: 'border-box', width: '100%' }}
//                 />
//                 <input
//                   className={cls.personalInput}
//                   name="floor"
//                   type="number"
//                   placeholder={menu[locale].floor}
//                   onChange={formik.handleChange}
//                   value={formik.values.floor}
//                   style={{ margin: 0, boxSizing: 'border-box', width: '100%' }}
//                 />
//               </div>

//               {/* Izoh */}
//               <input
//                 className={cls.personalInput}
//                 name="comment"
//                 placeholder={menu[locale].comment}
//                 onChange={formik.handleChange}
//                 value={formik.values.comment}
//                 style={{ width: '100%', boxSizing: 'border-box', margin: 0 }}
//               />
//             </div>

//             {/* Saqlash tugmasi — har doim pastda */}
//             <button type="submit" className={cls.button} style={{ marginTop: 24 }}>
//               {btnText[locale].save}
//             </button>
//           </div>

//           {/* O'NG — Yandex xarita: to'liq balandlikni egallaydi, mobilda yashiq */}
//           <div style={{ position: 'relative', height: '100%', overflow: 'hidden' }}
//             className="address-map-col">
//             <style>{`
//               @media (max-width: 600px) { .address-map-col { display: none !important; } }
//             `}</style>
//             {/* Yandex controls ni CSS bilan yashirish */}
//             <style>{`
//               .ymaps-hide-controls [class*="ymaps-2"][class*="-controls__toolbar"] { display: none !important; }
//               .ymaps-hide-controls [class*="ymaps-2"][class*="-searchbox"] { display: none !important; }
//               .ymaps-hide-controls [class*="ymaps-2"][class*="-float-button"] { display: none !important; }
//             `}</style>
//             <div
//               className="ymaps-hide-controls"
//               style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
//             >
//               <Map
//                 placemarkGeometry={placemarkGeometry}
//                 setPlacemarkGeometry={setPlacemarkGeometry}
//                 setAddress={setAddress}
//                 data={data}
//                 setData={setData}
//                 cls={cls}
//               />
//             </div>
//           </div>

//         </div>
//       </form>
//     </Dialog>
//   )
// }




















import { useEffect, useState } from 'react'
import { Box, Typography, Dialog } from '@mui/material'
import cls from './style.module.scss'
import { getGeoCodeAddressList } from '../../utils/yandex.js'
import { btnText, menu } from '../../mock/menu'
import { useRouter } from 'next/router'
import MapDropDown from '../MapDropDown/MapDropDown'
import Map from '../Map/Map.jsx'
import { useFormik } from 'formik'
import { setCookie } from 'nookies'
import { useDispatch, useSelector } from 'react-redux'
import { addAddress, setOpenAddress, setYandexKey } from '../../store/actions/addressActions/addressActions'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { requestV2 } from '../../utils/axios.js'
import { toast } from 'react-toastify'
import useDebounce from '../../utils/usedebounce.js'

export default function AddressModal({ open }) {
  const [data, setData] = useState({ lat: 41.311081, long: 69.240562 })
  const [address, setAddress] = useState('')
  const [addressList, setAddressList] = useState([])
  const [confirmAddress, setConfirmAddress] = useState(false)
  const [placemarkGeometry, setPlacemarkGeometry] = useState([])

  const debouncedValue = useDebounce(address, 700)
  const { locale, replace } = useRouter()
  const dispatch = useDispatch()
  const { yandexKey } = useSelector((state) => state.address)

  useEffect(() => {
    if (!open) {
      setAddress('')
      setData({ lat: 41.311081, long: 69.240562 })
      setPlacemarkGeometry([])
      setAddressList([])
      setConfirmAddress(false)
      formik.resetForm()
    }
  }, [open])

  useEffect(() => {
    if (open) {
      let count = 0
      async function getYandexKeys() {
        try {
          const response = await fetch('https://admin.evos.uz/api/yandex-keys')
          const keyData = await response.json()
          const keys = keyData?.data
          async function checkKeys() {
            if (!keys || count === keys.length) {
              dispatch(setYandexKey(process.env.MAP_API_KEY))
              return
            }
            const currentKey = keys[count]?.attributes?.key
            const result = await fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&geocode=Tashkent&apikey=${currentKey}`)
            if (result.ok) {
              dispatch(setYandexKey(currentKey))
            } else {
              count++; checkKeys()
            }
          }
          checkKeys()
        } catch (e) {
          dispatch(setYandexKey(process.env.MAP_API_KEY))
        }
      }
      getYandexKeys()
    }
  }, [open])

  const formik = useFormik({
    initialValues: {
      flatOrOffice: '', intercom: '', entrance: '', floor: '', address: '', comment: '',
    },
    onSubmit: async (values) => {
      const coords = [data.lat, data.long].join(',')
      try {
        const nearby = await requestV2({
          url: process.env.BASE_URL_V2 + '/service/branch-nearby',
          method: 'POST',
          data: { geo: coords },
          headers: { token: process.env.TOKEN_V2 },
        })
        if (nearby?.data?.polygon?.[0]?.id) {
          dispatch(addAddress({
            address: address,
            comment: values.comment,
            entrance: values.entrance,
            floor: values.floor,
            geo: coords,
            house: values.flatOrOffice,
            code: values.intercom,
          }))
          setCookie({}, 'geoLocation', coords, { path: '/', maxAge: 30 * 24 * 60 * 60 })
          dispatch(setOpenAddress())
          toast.success('Manzil saqlandi')
          setTimeout(() => replace('/'), 500)
        } else {
          toast.error('Bu hududga yetkazib berish mavjud emas')
        }
      } catch (err) {
        toast.error('Xatolik yuz berdi')
      }
    },
  })

  useEffect(() => {
    if (debouncedValue && !confirmAddress) {
      getGeoCodeAddressList(debouncedValue, yandexKey).then((res) => {
        if (res.status === 200) {
          const list = res?.data?.response?.GeoObjectCollection?.featureMember?.map(item => ({
            label: item?.GeoObject?.name,
            value: item?.GeoObject?.Point?.pos,
            description: item?.GeoObject?.description,
            location: item?.GeoObject?.Point?.pos,
          }))
          setAddressList(list || [])
        }
      })
    }
  }, [debouncedValue, yandexKey])

  const handleClose = () => dispatch(setOpenAddress())

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="lg"
      PaperProps={{
        style: {
          borderRadius: 20,
          // ✅ overflow: visible — header tashqariga chiqmasin
          overflow: 'visible',
          margin: 'clamp(0px, 2vw, 16px)',
          maxHeight: 'calc(95vh)',
          width: '100%',
          // ✅ flex column — header + content ajralsin
          display: 'flex',
          flexDirection: 'column',
        }
      }}
      // ✅ overflow: visible bo'lsa ham backdrop ishlashi uchun
      sx={{
        '& .MuiDialog-container': {
          alignItems: 'center',
        },
        '& .MuiPaper-root': {
          overflow: 'visible !important',
        }
      }}
    >
      {/* ✅ HEADER — sarlavha + X tugmasi, DOIM YUQORIDA */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 20px',
        borderBottom: '1px solid #f0f0f0',
        backgroundColor: '#fff',
        borderRadius: '20px 20px 0 0',
        // ✅ flexShrink: 0 — content uzaysa ham header o'lchami o'zgarmaydi
        flexShrink: 0,
      }}>
        <Typography style={{
          fontWeight: 700,
          fontSize: 17,
          color: '#111',
          fontFamily: '"Open Sans", sans-serif',
        }}>
          {menu[locale]?.deliveryAddress || 'Yetkazib berish manzili'}
        </Typography>

        {/* ✅ X TUGMASI */}
        <button
          type="button"
          onClick={handleClose}
          style={{
            background: '#f0f0f0',
            border: 'none',
            borderRadius: '50%',
            width: 36,
            height: 36,
            minWidth: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#ddd'}
          onMouseLeave={e => e.currentTarget.style.background = '#f0f0f0'}
        >
          <CloseRoundedIcon style={{ fontSize: 20, color: '#444' }} />
        </button>
      </div>

      {/* ✅ CONTENT — scroll bo'ladi, header emas */}
      <div style={{ flex: 1, overflow: 'hidden', minHeight: 0, height: 'clamp(300px, 70vh, 640px)' }}>
        <form onSubmit={formik.handleSubmit} style={{ height: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'min(460px, 100%) 1fr',
            height: '100%',
          }}>

            {/* CHAP — Inputlar */}
            <div style={{
              padding: 'clamp(16px, 4vw, 28px) clamp(16px, 4vw, 28px) 20px',
              height: '100%',
              boxSizing: 'border-box',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              borderRadius: '0 0 0 20px',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

                <Box position="relative">
                  <input
                    className={cls.personalInput}
                    name="address"
                    placeholder={menu[locale].address}
                    value={address}
                    onChange={(e) => { setAddress(e.target.value); setConfirmAddress(false) }}
                    required
                    style={{ width: '100%', boxSizing: 'border-box', margin: 0 }}
                  />
                  {!confirmAddress && addressList.length > 0 && (
                    <MapDropDown
                      options={addressList}
                      setAddressList={setAddressList}
                      setAddress={setAddress}
                      setData={setData}
                      setPlacemarkGeometry={setPlacemarkGeometry}
                      setConfirmAddress={setConfirmAddress}
                    />
                  )}
                </Box>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <input
                    className={cls.personalInput}
                    name="flatOrOffice"
                    placeholder={menu[locale].flatOrOffice}
                    onChange={formik.handleChange}
                    value={formik.values.flatOrOffice}
                    style={{ margin: 0, boxSizing: 'border-box', width: '100%' }}
                  />
                  <input
                    className={cls.personalInput}
                    name="intercom"
                    type="number"
                    placeholder={menu[locale].intercom}
                    onChange={formik.handleChange}
                    value={formik.values.intercom}
                    style={{ margin: 0, boxSizing: 'border-box', width: '100%' }}
                  />
                  <input
                    className={cls.personalInput}
                    name="entrance"
                    type="number"
                    placeholder={menu[locale].entrance}
                    onChange={formik.handleChange}
                    value={formik.values.entrance}
                    style={{ margin: 0, boxSizing: 'border-box', width: '100%' }}
                  />
                  <input
                    className={cls.personalInput}
                    name="floor"
                    type="number"
                    placeholder={menu[locale].floor}
                    onChange={formik.handleChange}
                    value={formik.values.floor}
                    style={{ margin: 0, boxSizing: 'border-box', width: '100%' }}
                  />
                </div>

                <input
                  className={cls.personalInput}
                  name="comment"
                  placeholder={menu[locale].comment}
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                  style={{ width: '100%', boxSizing: 'border-box', margin: 0 }}
                />
              </div>

              <button type="submit" className={cls.button} style={{ marginTop: 24 }}>
                {btnText[locale].save}
              </button>
            </div>

            {/* O'NG — Xarita */}
            <div
              style={{ position: 'relative', height: '100%', overflow: 'hidden', borderRadius: '0 0 20px 0' }}
              className="address-map-col"
            >
              <style>{`
                @media (max-width: 600px) { .address-map-col { display: none !important; } }
                .ymaps-hide-controls [class*="ymaps-2"][class*="-controls__toolbar"] { display: none !important; }
                .ymaps-hide-controls [class*="ymaps-2"][class*="-searchbox"] { display: none !important; }
                .ymaps-hide-controls [class*="ymaps-2"][class*="-float-button"] { display: none !important; }
              `}</style>
              <div
                className="ymaps-hide-controls"
                style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
              >
                <Map
                  placemarkGeometry={placemarkGeometry}
                  setPlacemarkGeometry={setPlacemarkGeometry}
                  setAddress={setAddress}
                  data={data}
                  setData={setData}
                  cls={cls}
                />
              </div>
            </div>

          </div>
        </form>
      </div>
    </Dialog>
  )
}