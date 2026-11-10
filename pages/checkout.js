// import React, { useEffect, useState } from 'react'
// import { Box, Container, IconButton, Typography } from '@mui/material'
// import { useFormik } from 'formik'
// import { useRouter } from 'next/router'
// import OrderProducts from '../components/OrderProducts/OrderProducts'
// import DeliveryType from '../components/DeliveryType/DeliveryType'
// import PaymentType from '../components/PaymentType/PaymentType'
// import DeliveryAddress from '../components/DeliveryAddress/DeliveryAddress'
// import PersonalData from '../components/PersonalData/PersonalData'
// import CheckoutInfo from '../components/CheckoutInfo/CheckoutInfo'
// import { useDispatch, useSelector } from 'react-redux'
// import { cartTotalPriceSelector } from '../store/selectors/cartSelectors'
// import { requestAxios, requestV2 } from '../utils/axios'
// import SEO from '../components/seo'
// import { fetchMultipleUrls } from '../utils/fetchMultipleUrls'

// import {
//   generatePaymentUniqueId,
//   generateUniqueId,
// } from '../utils/generateUniqueId'
// import { getPaymentSystemId } from '../utils/getPaymentSystemId'
// import { toggleOrderNotification } from '../store/actions/defaultActions/defaultActions'
// import { menu } from '.././mock/menu'

// import { toast } from 'react-toastify'
// import { clearCartAction } from '../store/actions/cartActions/cartActions'
// import nookies, { parseCookies } from 'nookies'
// import { motion } from 'framer-motion'
// import { Dialog } from '@mui/material'
// import moment from 'moment'
// import Input from '../components/Input/Input'
// import CardWrapper from '../components/CardWrapper/CardWrapper'
// import { PencilEdit } from '../components/Icons'
// import { EditOutlined } from '@mui/icons-material'
// import CheckoutAdresModal from '../components/CheckoutAdresModal/CheckoutAdresModal'

// // paymentSystemId: 1 cash
// // paymentSystemId: 2 click
// // paymentSystemId: 4 payme

// export default function Checkout({ getMenu, isConfirm }) {
//   const cookies = parseCookies()

//   // console.log('isConfirm', isConfirm)

//   const [orderBtn, setOrderBtn] = useState(false)
//   const [openDialog, setOpenDialog] = useState(false)
//   const { cartItems } = useSelector((state) => state.cart)

//   const totalPrice = useSelector((state) => cartTotalPriceSelector(state))
//   const [loading, setLoading] = useState(false)
//   const [client, setClient] = useState({})
//   const [promos, setPromos] = useState(null)
//   const { locale, push } = useRouter()
//   const dispatch = useDispatch()

//   const { addresses, currentAddress } = useSelector((state) => state.address)

//   const products = cartItems.map((item) => ({
//     name: item.title,
//     id: item.id.toString(),
//     price: item?.dprice,
//     brand: item?.brand ?? 'Evos',
//     category: item?.category ?? 'Food',
//     variant: '',
//     quantity: item?.quantity,
//     coupon: '',
//   }))

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       phone: '',
//       flatOrOffice: '',
//       intercom: '',
//       entrance: '',
//       floor: '',
//       deliveryType: 'deliver',
//       paymentType: 1,
//       address: '',
//       customerAddress: '',
//       branchId: 0,
//       geoLocation: '',
//       deliveryDetails: null,
//       comment: '',
//     },

//     onSubmit: (values) => {
//       setLoading(true)
//       orderCreate(values)
//     },
//     validateOnBlur: false,
//     validateOnChange: false,
//   })

//   const getClientInfo = (e) => {
//     requestV2
//       .get('/service/client-info')
//       .then((res) => {
//         setClient(res.data)
//         formik.setFieldValue('name', res.data.title)
//         formik.setFieldValue('phone', '+' + res.data.phone_number)
//       })
//       .catch((err) => console.log(err))
//   }

//   const bracId = () => {
//     let getLongLat = cookies?.geoLocation

//     if (!getLongLat) {
//       getLongLat = '41.320077,69.282501'
//     }

//     requestV2({
//       url: process.env.BASE_URL_V2 + '/service/branch-nearby',
//       method: 'POST',
//       data: {
//         geo: getLongLat,
//       },
//       headers: {
//         token: process.env.TOKEN_V2,
//       },
//     }).then((res) => {
//       if (res?.status == `success`) {
//         requestV2({
//           url: process.env.BASE_URL_V2 + '/service/branch-info',
//           method: 'POST',
//           data: {
//             id: res?.data?.polygon?.[0]?.id,
//           },
//           headers: {
//             token: cookies?.token || process.env.TOKEN_V2,
//           },
//         })
//           .then((res) => {
//             setPromos(res?.data?.promos)
//           })
//           .catch((err) => {
//             console.log(err)
//           })
//       }

//       formik.setFieldValue('branchId', res?.data?.polygon?.[0]?.id)
//     })
//   }

//   useEffect(() => {
//     getClientInfo()
//     bracId()
//   }, [])

//   function orderCreate(values) {
//     const phoneNumber = values.phone.split(' ').join('').substring(1)
//     const uniqueID = generateUniqueId(phoneNumber)
//     const data = {
//       lang: locale,
//       branch_id: values.branchId,
//       address_id: currentAddress.id,
//       positions: cartItems.map((item) => ({
//         id: item.id,
//         qty: item.quantity,
//       })),
//       comment: values.comment,
//       payment: [
//         {
//           type: values.paymentType,
//         },
//       ],
//     }

//     requestV2({
//       url: process.env.BASE_URL_V2 + '/service/new-order',
//       method: `POST`,
//       data,
//       headers: {
//         token: cookies?.token || process.env.TOKEN_V2,
//       },
//     })
//       .then((res) => {
//         if (res?.code === 400) {
//           toast.error(res?.message)
//         } else {
//           setOrderBtn(true)

//           if (res.errorMessage) {
//             toast.error('Произошла ошибка, попробуйте позже')
//             return
//           }
//           // Window push layer
//           window.dataLayer.push({
//             ecommerce: {
//               purchase: {
//                 actionField: {
//                   id: uniqueID,
//                   affiliation: 'Online Store',
//                   revenue: totalPrice,
//                   tax: '',
//                   shipping: values.deliveryDetails?.deliveryPrice,
//                   coupon: '',
//                 },
//                 products: products,
//               },
//             },
//           })
//           //
//           dispatch(toggleOrderNotification())
//           dispatch(clearCartAction())
//           push('/orders')
//         }
//       })
//       .catch((err) => {
//         console.error(err)
//         toast.error('Произошла ошибка, попробуйте позже')
//       })
//       .finally(() => {
//         setLoading(false)
//         setOrderBtn(false)
//       })
//   }

//   const dialogOpen = () => {
//     setOpenDialog(true)
//   }

//   const closeDialog = () => {
//     setOpenDialog(false)
//   }

//   const hancleClose = () => {
//     setOrderBtn(false)
//     push('/')
//   }
//   return (
//     <motion.div
//       exit={{ opacity: 0 }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.3 }}
//     >
//       <SEO title={menu[locale].setOrder} />
//       <Box id='boxRoot'>
//         <Container maxWidth='xl'>
//           <Typography variant={`h1`} color={`black`} className='title'>
//             {menu[locale].setOrder}
//           </Typography>
//           <form onSubmit={formik.handleSubmit} className='checkoutFlex'>
//             <Box id='boxFullWidthBig' mr={2}>
//               <PersonalData formik={formik} client={client} />
//               <OrderProducts />

//               <CardWrapper mt={2}>
//                 <Typography mb={2} variant={`h1`} color={`black`}>
//                   {menu[locale].deliveryAddress}
//                 </Typography>
//                 <Box display='flex' alignItems='center'>
//                   <Input value={currentAddress?.address} />
//                   <IconButton
//                     sx={{
//                       borderRadius: '8px',
//                       marginLeft: '10px',
//                       background: '#f6f8f9',
//                       padding: '16px',
//                     }}
//                     onClick={dialogOpen}
//                   >
//                     <EditOutlined />
//                   </IconButton>
//                 </Box>
//               </CardWrapper>

//               <PaymentType
//                 formik={formik}
//                 paymentsData={getMenu?.data?.payments}
//               />
//             </Box>
//             <Box id='boxFullWidthSml'>
//               <CheckoutInfo
//                 isConfirm={isConfirm.data?.attributes?.is_confirm}
//                 deliveryPrice={getMenu?.data?.delivery?.delivery_price}
//                 promos={promos && promos}
//                 time={getMenu?.data?.delivery?.delivery_time}
//                 loading={loading}
//               />
//             </Box>
//           </form>
//         </Container>
//       </Box>
//       <CheckoutAdresModal openDialog={openDialog} closeDialog={closeDialog} />
//       <Dialog open={orderBtn} id='checkout'>
//         <div className='dialog_success'>
//           <h2>{menu[locale].order_success}</h2>
//           <button onClick={() => hancleClose()}>
//             {menu[locale].home_button}
//           </button>
//         </div>
//       </Dialog>
//     </motion.div>
//   )
// }

// export async function getServerSideProps(ctx) {
//   const cookies = nookies.get(ctx)

//   let getLongLat = cookies.geoLocation

//   if (!getLongLat) {
//     getLongLat = '41.320077,69.282501'
//   }

//   const response = await fetch(process.env.BASE_URL_STRAPI + '/checkout')
//   const data = await response.json()

//   const nearby = await requestV2({
//     url: process.env.BASE_URL_V2 + '/service/branch-nearby',
//     method: 'POST',
//     data: {
//       geo: getLongLat,
//     },
//     headers: {
//       token: process.env.TOKEN_V2,
//     },
//   })

//   const locationId = nearby?.data?.polygon?.[0]?.id

//   const body = [
//     // process.env.MENU_API_URL,
//     {
//       endpoint: process.env.BASE_URL_V2 + '/service/get-menu',
//       method: 'POST',
//       body: {
//         branch_id: locationId,
//         lang: ctx.locale,
//       },
//       version: 2,
//     },
//   ]

//   const [getMenu] = await fetchMultipleUrls(body, cookies)

//   //const urls = [`/order/client/${cookies.client_id}`]
//   // const [orders] = await fetchMultipleUrls([
//   //   `/order/client/${cookies.client_id}`,
//   // ])

//   //const successOrders = orders?.orders?.filter((el) => el.lastStatusId === 5)

//   return {
//     props: {
//       //addresses: successOrders?.length >= 3 ? successOrders?.slice(0, 3) : [],

//       getMenu,

//       //successOrders: successOrders || null,
//       isConfirm: data,
//     },
//   }
// }

















// // import React, { useEffect, useState } from 'react'
// // import { Box, Container, IconButton, Typography } from '@mui/material'
// // import { useFormik } from 'formik'
// // import { useRouter } from 'next/router'
// // import OrderProducts from '../components/OrderProducts/OrderProducts'
// // import DeliveryType from '../components/DeliveryType/DeliveryType'
// // import PaymentType from '../components/PaymentType/PaymentType'
// // import DeliveryAddress from '../components/DeliveryAddress/DeliveryAddress'
// // import PersonalData from '../components/PersonalData/PersonalData'
// // import CheckoutInfo from '../components/CheckoutInfo/CheckoutInfo'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { cartTotalPriceSelector } from '../store/selectors/cartSelectors'
// // import { requestAxios, requestV2 } from '../utils/axios'
// // import SEO from '../components/seo'
// // import { fetchMultipleUrls } from '../utils/fetchMultipleUrls'
// // import { generatePaymentUniqueId, generateUniqueId } from '../utils/generateUniqueId'
// // import { getPaymentSystemId } from '../utils/getPaymentSystemId'
// // import { toggleOrderNotification } from '../store/actions/defaultActions/defaultActions'
// // import { menu } from '.././mock/menu'
// // import { toast } from 'react-toastify'
// // import { clearCartAction } from '../store/actions/cartActions/cartActions'
// // import nookies, { parseCookies } from 'nookies'
// // import { motion } from 'framer-motion'
// // import { Dialog } from '@mui/material'
// // import moment from 'moment'
// // import Input from '../components/Input/Input'
// // import CardWrapper from '../components/CardWrapper/CardWrapper'
// // import { PencilEdit } from '../components/Icons'
// // import { EditOutlined } from '@mui/icons-material'
// // import CheckoutAdresModal from '../components/CheckoutAdresModal/CheckoutAdresModal'

// // export default function Checkout({ getMenu, isConfirm }) {
// //   const cookies = parseCookies()

// //   const [orderBtn, setOrderBtn] = useState(false)
// //   const [openDialog, setOpenDialog] = useState(false)
// //   const { cartItems } = useSelector((state) => state.cart)
// //   const totalPrice = useSelector((state) => cartTotalPriceSelector(state))
// //   const [loading, setLoading] = useState(false)
// //   const [client, setClient] = useState({})
// //   const [promos, setPromos] = useState(null)
// //   const { locale, push } = useRouter()
// //   const dispatch = useDispatch()
// //   const { addresses, currentAddress } = useSelector((state) => state.address)

// //   const products = cartItems.map((item) => ({
// //     name: item.title,
// //     id: item.id.toString(),
// //     price: item?.dprice,
// //     brand: item?.brand ?? 'Evos',
// //     category: item?.category ?? 'Food',
// //     variant: '',
// //     quantity: item?.quantity,
// //     coupon: '',
// //   }))

// //   const formik = useFormik({
// //     initialValues: {
// //       name: '',
// //       phone: '',
// //       flatOrOffice: '',
// //       intercom: '',
// //       entrance: '',
// //       floor: '',
// //       deliveryType: 'deliver',
// //       paymentType: 1,
// //       address: '',
// //       customerAddress: '',
// //       branchId: 0,
// //       geoLocation: '',
// //       deliveryDetails: null,
// //       comment: '',
// //     },
// //     onSubmit: (values) => {
// //       setLoading(true)
// //       orderCreate(values)
// //     },
// //     validateOnBlur: false,
// //     validateOnChange: false,
// //   })

// //   const getClientInfo = () => {
// //     requestV2
// //       .get('/service/client-info')
// //       .then((res) => {
// //         setClient(res.data)
// //         formik.setFieldValue('name', res.data.title)
// //         formik.setFieldValue('phone', '+' + res.data.phone_number)
// //       })
// //       .catch((err) => console.log(err))
// //   }

// //   const bracId = () => {
// //     let getLongLat = cookies?.geoLocation
// //     if (!getLongLat) getLongLat = '41.320077,69.282501'

// //     requestV2({
// //       url: process.env.BASE_URL_V2 + '/service/branch-nearby',
// //       method: 'POST',
// //       data: { geo: getLongLat },
// //       headers: { token: process.env.TOKEN_V2 },
// //     }).then((res) => {
// //       if (res?.status == 'success') {
// //         requestV2({
// //           url: process.env.BASE_URL_V2 + '/service/branch-info',
// //           method: 'POST',
// //           data: { id: res?.data?.polygon?.[0]?.id },
// //           headers: { token: cookies?.token || process.env.TOKEN_V2 },
// //         })
// //           .then((res) => setPromos(res?.data?.promos))
// //           .catch((err) => console.log(err))
// //       }
// //       formik.setFieldValue('branchId', res?.data?.polygon?.[0]?.id)
// //     })
// //   }

// //   useEffect(() => {
// //     getClientInfo()
// //     bracId()
// //   }, [])

// //   function orderCreate(values) {
// //     const phoneNumber = values.phone.split(' ').join('').substring(1)
// //     const uniqueID = generateUniqueId(phoneNumber)
// //     const data = {
// //       lang: locale,
// //       branch_id: values.branchId,
// //       address_id: currentAddress.id,
// //       positions: cartItems.map((item) => ({
// //         id: item.id,
// //         qty: item.quantity,
// //       })),
// //       comment: values.comment,
// //       payment: [{ type: values.paymentType }],
// //     }

// //     requestV2({
// //       url: process.env.BASE_URL_V2 + '/service/new-order',
// //       method: 'POST',
// //       data,
// //       headers: { token: cookies?.token || process.env.TOKEN_V2 },
// //     })
// //       .then((res) => {
// //         if (res?.code === 400) {
// //           toast.error(res?.message)
// //         } else {
// //           setOrderBtn(true)
// //           if (res.errorMessage) {
// //             toast.error('Произошла ошибка, попробуйте позже')
// //             return
// //           }
// //           window.dataLayer.push({
// //             ecommerce: {
// //               purchase: {
// //                 actionField: {
// //                   id: uniqueID,
// //                   affiliation: 'Online Store',
// //                   revenue: totalPrice,
// //                   tax: '',
// //                   shipping: values.deliveryDetails?.deliveryPrice,
// //                   coupon: '',
// //                 },
// //                 products,
// //               },
// //             },
// //           })
// //           dispatch(toggleOrderNotification())
// //           dispatch(clearCartAction())
// //           push('/orders')
// //         }
// //       })
// //       .catch((err) => {
// //         console.error(err)
// //         toast.error('Произошла ошибка, попробуйте позже')
// //       })
// //       .finally(() => {
// //         setLoading(false)
// //         setOrderBtn(false)
// //       })
// //   }

// //   return (
// //     <motion.div
// //       exit={{ opacity: 0 }}
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ delay: 0.3 }}
// //     >
// //       <SEO title={menu[locale].setOrder} />

// //       <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
// //         <Container maxWidth="lg">

// //           {/* Sarlavha */}
// //           <Typography
// //             variant="h1"
// //             sx={{ fontWeight: 700, fontSize: 28, color: '#111', mb: 3 }}
// //           >
// //             {menu[locale].setOrder}
// //           </Typography>


// //           <form onSubmit={formik.handleSubmit}>
// //             <Box sx={{
// //               display: 'grid',
// //               gridTemplateColumns: { xs: '1fr', md: '1fr 340px' },
// //               gap: 3,
// //               alignItems: 'start',
// //             }}>

// //               {/* CHAP — asosiy kontent */}
// //               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

// //                 {/* Shaxsiy ma'lumotlar */}
// //                 <Box sx={{
// //                   backgroundColor: '#fff',
// //                   borderRadius: 3,
// //                   p: 3,
// //                   boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
// //                 }}>
// //                   <PersonalData formik={formik} client={client} />
// //                 </Box>

// //                 {/* Yetkazib berish manzili */}
// //                 <Box sx={{
// //                   backgroundColor: '#fff',
// //                   borderRadius: 3,
// //                   p: 3,
// //                   boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
// //                 }}>
// //                   <Typography sx={{ fontWeight: 700, fontSize: 20, color: '#111', mb: 2 }}>
// //                     {menu[locale].deliveryAddress}
// //                   </Typography>
// //                   <Box display="flex" alignItems="center" gap={1}>
// //                     <Input value={currentAddress?.address} style={{ flex: 1 }} />
// //                     <IconButton
// //                       onClick={() => setOpenDialog(true)}
// //                       sx={{
// //                         borderRadius: '10px',
// //                         background: '#f6f8f9',
// //                         padding: '14px',
// //                         flexShrink: 0,
// //                       }}
// //                     >
// //                       <EditOutlined />
// //                     </IconButton>
// //                   </Box>
// //                 </Box>

// //                 {/* Buyurtma mahsulotlari */}
// //                 <Box sx={{
// //                   backgroundColor: '#fff',
// //                   borderRadius: 3,
// //                   p: 3,
// //                   boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
// //                 }}>
// //                   <OrderProducts />
// //                 </Box>



// //                 {/* To'lov turi */}
// //                 <Box sx={{
// //                   backgroundColor: '#fff',
// //                   borderRadius: 3,
// //                   p: 3,
// //                   boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
// //                 }}>
// //                   <PaymentType
// //                     formik={formik}
// //                     paymentsData={getMenu?.data?.payments}
// //                   />
// //                 </Box>

// //               </Box>

// //               {/* O'NG — narx paneli */}
// //               <Box sx={{ position: 'sticky', top: 20 }}>
// //                 <CheckoutInfo
// //                   isConfirm={isConfirm.data?.attributes?.is_confirm}
// //                   deliveryPrice={getMenu?.data?.delivery?.delivery_price}
// //                   promos={promos && promos}
// //                   time={getMenu?.data?.delivery?.delivery_time}
// //                   loading={loading}
// //                 />
// //               </Box>

// //             </Box>
// //           </form>


// //         </Container>
// //       </Box>

// //       <CheckoutAdresModal openDialog={openDialog} closeDialog={() => setOpenDialog(false)} />

// //       <Dialog open={orderBtn} id="checkout">
// //         <div className="dialog_success">
// //           <h2>{menu[locale].order_success}</h2>
// //           <button onClick={() => { setOrderBtn(false); push('/') }}>
// //             {menu[locale].home_button}
// //           </button>
// //         </div>
// //       </Dialog>
// //     </motion.div>
// //   )
// // }

// // export async function getServerSideProps(ctx) {
// //   const cookies = nookies.get(ctx)
// //   let getLongLat = cookies.geoLocation
// //   if (!getLongLat) getLongLat = '41.320077,69.282501'

// //   const response = await fetch(process.env.BASE_URL_STRAPI + '/checkout')
// //   const data = await response.json()

// //   const nearby = await requestV2({
// //     url: process.env.BASE_URL_V2 + '/service/branch-nearby',
// //     method: 'POST',
// //     data: { geo: getLongLat },
// //     headers: { token: process.env.TOKEN_V2 },
// //   })

// //   const locationId = nearby?.data?.polygon?.[0]?.id

// //   const body = [
// //     {
// //       endpoint: process.env.BASE_URL_V2 + '/service/get-menu',
// //       method: 'POST',
// //       body: { branch_id: locationId, lang: ctx.locale },
// //       version: 2,
// //     },
// //   ]

// //   const [getMenu] = await fetchMultipleUrls(body, cookies)

// //   return {
// //     props: {
// //       getMenu,
// //       isConfirm: data,
// //     },
// //   }
// // }















import React, { useEffect, useState } from 'react'
import { Box, Container, IconButton, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import OrderProducts from '../components/OrderProducts/OrderProducts'
import DeliveryType from '../components/DeliveryType/DeliveryType'
import PaymentType from '../components/PaymentType/PaymentType'
import DeliveryAddress from '../components/DeliveryAddress/DeliveryAddress'
import PersonalData from '../components/PersonalData/PersonalData'
import CheckoutInfo from '../components/CheckoutInfo/CheckoutInfo'
import { useDispatch, useSelector } from 'react-redux'
import { cartTotalPriceSelector } from '../store/selectors/cartSelectors'
import { requestAxios, requestV2 } from '../utils/axios'
import SEO from '../components/seo'
import { fetchMultipleUrls } from '../utils/fetchMultipleUrls'
import { generatePaymentUniqueId, generateUniqueId } from '../utils/generateUniqueId'
import { getPaymentSystemId } from '../utils/getPaymentSystemId'
import { toggleOrderNotification } from '../store/actions/defaultActions/defaultActions'
import { menu } from '.././mock/menu'
import { toast } from 'react-toastify'
import { clearCartAction } from '../store/actions/cartActions/cartActions'
import nookies, { parseCookies } from 'nookies'
import { motion } from 'framer-motion'
import { Dialog } from '@mui/material'
import moment from 'moment'
import Input from '../components/Input/Input'
import CardWrapper from '../components/CardWrapper/CardWrapper'
import { PencilEdit } from '../components/Icons'
import { EditOutlined } from '@mui/icons-material'
import CheckoutAdresModal from '../components/CheckoutAdresModal/CheckoutAdresModal'

export default function Checkout({ getMenu, isConfirm }) {
  const cookies = parseCookies()

  const [orderBtn, setOrderBtn] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const { cartItems } = useSelector((state) => state.cart)
  const totalPrice = useSelector((state) => cartTotalPriceSelector(state))
  const [loading, setLoading] = useState(false)
  const [client, setClient] = useState({})
  const [promos, setPromos] = useState(null)
  const { locale, push } = useRouter()
  const dispatch = useDispatch()
  const { addresses, currentAddress } = useSelector((state) => state.address)

  const products = cartItems.map((item) => ({
    name: item.title,
    id: item.id.toString(),
    price: item?.dprice,
    brand: item?.brand ?? 'Evos',
    category: item?.category ?? 'Food',
    variant: '',
    quantity: item?.quantity,
    coupon: '',
  }))

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      flatOrOffice: '',
      intercom: '',
      entrance: '',
      floor: '',
      deliveryType: 'deliver',
      paymentType: 1,
      address: '',
      customerAddress: '',
      branchId: 0,
      geoLocation: '',
      deliveryDetails: null,
      comment: '',
    },
    onSubmit: (values) => {
      setLoading(true)
      orderCreate(values)
    },
    validateOnBlur: false,
    validateOnChange: false,
  })

  const getClientInfo = () => {
    requestV2
      .get('/service/client-info')
      .then((res) => {
        setClient(res.data)
        formik.setFieldValue('name', res.data.title)
        formik.setFieldValue('phone', '+' + res.data.phone_number)
      })
      .catch((err) => console.log(err))
  }

  const bracId = () => {
    let getLongLat = cookies?.geoLocation
    if (!getLongLat) getLongLat = '41.320077,69.282501'

    requestV2({
      url: process.env.BASE_URL_V2 + '/service/branch-nearby',
      method: 'POST',
      data: { geo: getLongLat },
      headers: { token: process.env.TOKEN_V2 },
    }).then((res) => {
      if (res?.status == 'success') {
        requestV2({
          url: process.env.BASE_URL_V2 + '/service/branch-info',
          method: 'POST',
          data: { id: res?.data?.polygon?.[0]?.id },
          headers: { token: cookies?.token || process.env.TOKEN_V2 },
        })
          .then((res) => setPromos(res?.data?.promos))
          .catch((err) => console.log(err))
      }
      formik.setFieldValue('branchId', res?.data?.polygon?.[0]?.id)
    })
  }

  useEffect(() => {
    getClientInfo()
    bracId()
  }, [])

  function orderCreate(values) {
    const phoneNumber = values.phone.split(' ').join('').substring(1)
    const uniqueID = generateUniqueId(phoneNumber)
    const data = {
      lang: locale,
      branch_id: values.branchId,
      address_id: currentAddress.id,
      positions: cartItems.map((item) => ({
        id: item.id,
        qty: item.quantity,
      })),
      comment: values.comment,
      payment: [{ type: values.paymentType }],
    }

    requestV2({
      url: process.env.BASE_URL_V2 + '/service/new-order',
      method: 'POST',
      data,
      headers: { token: cookies?.token || process.env.TOKEN_V2 },
    })
      .then((res) => {
        if (res?.code === 400) {
          toast.error(res?.message)
        } else {
          setOrderBtn(true)
          if (res.errorMessage) {
            toast.error('Произошла ошибка, попробуйте позже')
            return
          }
          window.dataLayer.push({
            ecommerce: {
              purchase: {
                actionField: {
                  id: uniqueID,
                  affiliation: 'Online Store',
                  revenue: totalPrice,
                  tax: '',
                  shipping: values.deliveryDetails?.deliveryPrice,
                  coupon: '',
                },
                products,
              },
            },
          })
          dispatch(toggleOrderNotification())
          dispatch(clearCartAction())
          push('/orders')
        }
      })
      .catch((err) => {
        console.error(err)
        toast.error('Произошла ошибка, попробуйте позже')
      })
      .finally(() => {
        setLoading(false)
        setOrderBtn(false)
      })
  }

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <SEO title={menu[locale].setOrder} />

      <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="lg">

          {/* Sarlavha */}
          <Typography
            variant="h1"
            sx={{ fontWeight: 700, fontSize: 28, color: '#111', mb: 3 }}
          >
            {menu[locale].setOrder}
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 340px' },
              gap: 3,
              alignItems: 'start',
            }}>

              {/* CHAP — asosiy kontent */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

                {/* Shaxsiy ma'lumotlar */}
                <Box sx={{
                  backgroundColor: '#fff',
                  borderRadius: 3,
                  p: 3,
                  boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
                }}>
                  <PersonalData formik={formik} client={client} />
                </Box>

                {/* Buyurtma mahsulotlari */}
                <Box sx={{
                  backgroundColor: '#fff',
                  borderRadius: 3,
                  p: 3,
                  boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
                }}>
                  <OrderProducts />
                </Box>

                {/* Yetkazib berish manzili */}
                <Box sx={{
                  backgroundColor: '#fff',
                  borderRadius: 3,
                  p: 3,
                  boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
                }}>
                  <Typography sx={{ fontWeight: 700, fontSize: 20, color: '#111', mb: 2 }}>
                    {menu[locale].deliveryAddress}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Input value={currentAddress?.address} style={{ flex: 1 }} />
                    <IconButton
                      onClick={() => setOpenDialog(true)}
                      sx={{
                        borderRadius: '10px',
                        background: '#f6f8f9',
                        padding: '14px',
                        flexShrink: 0,
                      }}
                    >
                      <EditOutlined />
                    </IconButton>
                  </Box>
                </Box>

                {/* To'lov turi */}
                <Box sx={{
                  backgroundColor: '#fff',
                  borderRadius: 3,
                  p: 3,
                  boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
                }}>
                  <PaymentType
                    formik={formik}
                    paymentsData={getMenu?.data?.payments}
                  />
                </Box>

              </Box>

              {/* O'NG — narx paneli */}
              <Box sx={{ position: 'sticky', top: 24, alignSelf: 'start' }}>
                <CheckoutInfo
                  isConfirm={isConfirm.data?.attributes?.is_confirm}
                  deliveryPrice={getMenu?.data?.delivery?.delivery_price}
                  promos={promos && promos}
                  time={getMenu?.data?.delivery?.delivery_time}
                  loading={loading}
                />
              </Box>

            </Box>
          </form>
        </Container>
      </Box>

      <CheckoutAdresModal openDialog={openDialog} closeDialog={() => setOpenDialog(false)} />

      <Dialog open={orderBtn} id="checkout">
        <div className="dialog_success">
          <h2>{menu[locale].order_success}</h2>
          <button onClick={() => { setOrderBtn(false); push('/') }}>
            {menu[locale].home_button}
          </button>
        </div>
      </Dialog>
    </motion.div>
  )
}

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx)
  let getLongLat = cookies.geoLocation
  if (!getLongLat) getLongLat = '41.320077,69.282501'

  const response = await fetch(process.env.BASE_URL_STRAPI + '/checkout')
  const data = await response.json()

  const nearby = await requestV2({
    url: process.env.BASE_URL_V2 + '/service/branch-nearby',
    method: 'POST',
    data: { geo: getLongLat },
    headers: { token: process.env.TOKEN_V2 },
  })

  const locationId = nearby?.data?.polygon?.[0]?.id

  const body = [
    {
      endpoint: process.env.BASE_URL_V2 + '/service/get-menu',
      method: 'POST',
      body: { branch_id: locationId, lang: ctx.locale },
      version: 2,
    },
  ]

  const [getMenu] = await fetchMultipleUrls(body, cookies)

  return {
    props: {
      getMenu,
      isConfirm: data,
    },
  }
}