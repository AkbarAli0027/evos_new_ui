import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import MyOrders from '../components/MyOrders.jsx/MyOrders'
import SEO from '../components/seo'


export default function OrderItems() {
  return (
    <>
    <SEO title='Товары для заказа' />
      <Box id='boxRoot' >
      <Container maxWidth='xl'>
         <MyOrders />
      </Container>
    </Box>
    </>
  )
}
