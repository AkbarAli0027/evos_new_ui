import React from 'react'
import { Box, Container } from '@mui/material'
import MyOrders from '../../components/MyOrders.jsx/MyOrders'
import SEO from '../../components/seo'
import { fetchMultipleUrls } from '../../utils/fetchMultipleUrls'
import nookies from 'nookies'

export default function OrderItems({ orderItem }) {

  return (
    <>
      <SEO title='Товары для заказа' />
      <Box id='boxRoot'>
        <Container maxWidth='xl'>
          <MyOrders orderItem={orderItem?.data} />
        </Container>
      </Box>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const cookie = nookies.get(ctx)

  const [orderItem] = await fetchMultipleUrls(
    [
      {
        version: 2,
        endpoint: '/service/order-card',
        method: 'POST',
        body: {
          id: +ctx?.query?.id,
        },
      },
    ],
    cookie
  )
  // console.log('orderItem',orderItem);
  // console.log('ctx========================>',ctx?.query);
  return {
    props: {
      orderItem,
    },
  }
}
