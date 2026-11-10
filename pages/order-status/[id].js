import React from 'react'
import { Box, Container } from '@mui/material'
import SEO from '../../components/seo'
import StatusCheck from '../../components/StatusCheck/StatusCheck'
import { fetchMultipleUrls } from '../../utils/fetchMultipleUrls'

export default function OrderStatus({ orderItem }) {
  return (
    <>
      <SEO title='Статус заказа' />
      <Box id='boxRoot'>
        <Container maxWidth='xl'>
          <StatusCheck orderItem={orderItem} />
        </Container>
      </Box>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const { query } = ctx

  const [orderItem] = await fetchMultipleUrls(['/order/6257088'])

  return {
    props: {
      orderItem,
    },
  }
}
