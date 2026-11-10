import React from 'react'
import { Box, Container } from '@mui/material'
import NewsItems from '../components/News/NewsItems'

export default function Notifications() {
  return (
    <Box id='boxRoot'>
      <Container maxWidth='xl'>
        <Box display='flex' my={0}>
          <Box width='100%'>
            <NewsItems />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
