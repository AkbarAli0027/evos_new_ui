// import React, { useState } from 'react'
// import { Container, Grid, Typography, Dialog } from '@mui/material'
// import cls from './Products.module.scss'
// import ProductInfo from '../ProductInfo/ProductInfo'
// import ProductItem from '../ProductItem/ProductItem'
// import { motion } from 'framer-motion'
// // Kerakli qo'shimcha komponentlar
// import CloseIconEffect from '../CloseIcon/CloseIcon'
// import ProductModal from './ProductModal'

// function Product({ products }) {
//   const [productItem, setProductItem] = useState(null)
//   // Modal uchun state
//   const [productModalItem, setProductModalItem] = useState(null)

//   const handleClose = () => {
//     setProductItem(null)
//   }

//   // Modalni yopish funksiyasi
//   const handleCloseModal = () => {
//     setProductModalItem(null)
//   }

//   return (
//     <motion.div exit={{ opacity: 0 }}>
//       <div className={cls.root} id='productRoot'>
//         <Container className={cls.productConatiener} maxWidth='xl'>
//           {products?.map((product) => (
//             <section
//               key={product?.id}
//               className={cls.product}
//               id={product?.title}
//             >
//               <Typography
//                 variant={`h1`}
//                 color={`black`}
//                 className={cls.productTitle}
//               >
//                 {product?.title}
//               </Typography>
//               <Grid container className={cls.productSection}>
//                 {product?.foods
//                   ?.filter(
//                     (data) =>
//                       data?.title !== 'Детский сок Dena, 0,2л мультифрукт ' &&
//                       data?.title !== 'Детский сок Dena, 0,2л вишня' &&
//                       data?.title !== 'Детский сок Dena, 0,2л яблоко'
//                   )
//                   .map((item) => (
//                     <Grid
//                       sx={{
//                         '@media (max-width: 1294px)': {
//                           padding: '8px',
//                         },
//                       }}
//                       className={cls.productItem}
//                       item
//                       xl={3}
//                       xs={6}
//                       md={3}
//                       key={item.id}
//                     >
//                       {/* setProductModalItem ni ProductItem ga uzatamiz */}
//                       <ProductItem
//                         item={item}
//                         cls={cls}
//                         setProductModalItem={setProductModalItem}
//                       />
//                     </Grid>
//                   ))}
//               </Grid>
//             </section>
//           ))}
//         </Container>

//         {/* Eski ProductInfo (agar kerak bo'lsa) */}
//         {!!productItem && (
//           <ProductInfo
//             open={!!productItem}
//             onClose={handleClose}
//             data={productItem}
//           />
//         )}

//         {/* YANGI QO'SHILGAN MODAL QISMI */}
//         {/* YANGI QO'SHILGAN MODAL QISMI */}
//         {!!productModalItem && (
//           <Dialog
//             open={Boolean(productModalItem)}
//             onClose={() => setProductModalItem(null)}
//             className={cls.dialogCustom}
//           >
//             {/* X tugmasi endi dialog ichidagi wrapper ichiga tushadi yoki o'zi alohida turadi */}
//             <div className={cls.closeButtonInside} onClick={() => setProductModalItem(null)}>
//               <CloseIconEffect />
//             </div>

//             <ProductModal item={productModalItem} cls={cls} />
//           </Dialog>
//         )}
//       </div>
//     </motion.div>
//   )
// }

// export default Product






















// import React, { useState } from 'react'
// import { Container, Grid, Typography, Dialog } from '@mui/material'
// import cls from './Products.module.scss'
// import ProductInfo from '../ProductInfo/ProductInfo'
// import ProductItem from '../ProductItem/ProductItem'
// import { motion } from 'framer-motion'
// import CloseIconEffect from '../CloseIcon/CloseIcon'
// import ProductModal from './ProductModal'

// function Product({ products }) {
//   const [productItem, setProductItem] = useState(null)
//   const [productModalItem, setProductModalItem] = useState(null)

//   const handleClose = () => {
//     setProductItem(null)
//   }

//   return (
//     <motion.div exit={{ opacity: 0 }}>
//       <div className={cls.root} id='productRoot'>
//         <Container className={cls.productConatiener} maxWidth='xl'>
//           {products?.map((product) => (
//             <section key={product?.id} className={cls.product} id={product?.title}>
//               <Typography variant={`h1`} color={`black`} className={cls.productTitle}>
//                 {product?.title}
//               </Typography>
//               <Grid container className={cls.productSection}>
//                 {product?.foods
//                   ?.filter((data) => 
//                     !data?.title.includes('Детский сок Dena')
//                   )
//                   .map((item) => (
//                     <Grid
//                       sx={{ '@media (max-width: 1294px)': { padding: '8px' } }}
//                       className={cls.productItem}
//                       item xl={3} xs={6} md={3}
//                       key={item.id}
//                     >
//                       <ProductItem
//                         item={item}
//                         cls={cls}
//                         setProductModalItem={setProductModalItem}
//                       />
//                     </Grid>
//                   ))}
//               </Grid>
//             </section>
//           ))}
//         </Container>

//         {/* ASOSIY MODAL */}
//         {!!productModalItem && (
//           <Dialog
//             open={Boolean(productModalItem)}
//             onClose={() => setProductModalItem(null)}
//             className={cls.dialogCustom}
//             scroll="body"
//           >
//             <div className={cls.closeButtonInside} onClick={() => setProductModalItem(null)}>
//               <CloseIconEffect />
//             </div>

//             {/* Modalga hamma mahsulotlarni uzatamiz (tavsiyalar uchun) */}
//             <ProductModal 
//               item={productModalItem} 
//               cls={cls} 
//               allProducts={products} 
//             />
//           </Dialog>
//         )}

//         {/* Eski ProductInfo (zaxira uchun) */}
//         {!!productItem && (
//           <ProductInfo
//             open={!!productItem}
//             onClose={handleClose}
//             data={productItem}
//           />
//         )}
//       </div>
//     </motion.div>
//   )
// }

// export default Product
























import React, { useState } from 'react'
import { Container, Grid, Typography, Dialog } from '@mui/material'
import cls from './Products.module.scss'
import ProductInfo from '../ProductInfo/ProductInfo'
import ProductItem from '../ProductItem/ProductItem'
import { motion } from 'framer-motion'
import CloseIconEffect from '../CloseIcon/CloseIcon'
import ProductModal from './ProductModal'

function Product({ products }) {
  const [productItem, setProductItem] = useState(null)
  const [productModalItem, setProductModalItem] = useState(null)

  const handleClose = () => {
    setProductItem(null)
  }

  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className={cls.root} id='productRoot'>
        <Container className={cls.productContainer} maxWidth='xl'>
          {products?.map((product) => (
            <section
              key={product?.id}
              className={cls.product}
              id={product?.title}
            >
              <Typography
                variant='h2'
                className={cls.productTitle}
              >
                {product?.title}
              </Typography>

              <Grid container className={cls.productSection}>
                {product?.foods
                  ?.filter((data) =>
                    !data?.title.includes('Детский сок Dena')
                  )
                  .map((item) => (
                    <Grid
                      className={cls.productItem}
                      item
                      xl={3}
                      xs={6}
                      md={3}
                      key={item.id}
                    >
                      <ProductItem
                        item={item}
                        cls={cls}
                        setProductModalItem={setProductModalItem}
                      />
                    </Grid>
                  ))}
              </Grid>
            </section>
          ))}
        </Container>

        {/* ASOSIY MODAL */}
        {!!productModalItem && (
          <Dialog
            open={Boolean(productModalItem)}
            onClose={() => setProductModalItem(null)}
            className={cls.dialogCustom}
            scroll='body'
          >
            <div
              className={cls.closeButtonInside}
              onClick={() => setProductModalItem(null)}
            >
              <CloseIconEffect />
            </div>

            <ProductModal
              item={productModalItem}
              cls={cls}
              allProducts={products}
            />
          </Dialog>
        )}

        {/* Eski ProductInfo (zaxira) */}
        {!!productItem && (
          <ProductInfo
            open={!!productItem}
            onClose={handleClose}
            data={productItem}
          />
        )}
      </div>
    </motion.div>
  )
}

export default Product