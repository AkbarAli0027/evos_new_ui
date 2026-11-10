import React, { useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material'
import OrderMain from '../../components/OrderMainPage/OrderMain'
import SEO from '../../components/seo'
import { fetchMultipleUrls } from '../../utils/fetchMultipleUrls'
import nookies, { parseCookies } from 'nookies'
import { requestV2 } from '../../utils/axios'

export default function Orders({ orders }) {
  // console.log('orers', cookie)

  //   useEffect(() => {
  //     requestV2({
  //       url: process.env.BASE_URL_V2 + '/service/client-orders',
  //       method: 'GET',
  //       headers: {
  //         token: cookie?.token || process.env.TOKEN_V2,
  //       }})
  //  }, []);

  return (
    <>
      <SEO title='Заказы' />
      <Box id='boxRoot'>
        <Container maxWidth='xl'>
          <OrderMain list={orders?.data} />
        </Container>
      </Box>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx)

  const [orders] = await fetchMultipleUrls(
    [
      {
        version: 2,
        endpoint: '/service/client-orders',
        method: 'GET',
      },
    ],
    cookies
  )

  return {
    props: {
      orders,
      // cookie,
    },
  }
}
