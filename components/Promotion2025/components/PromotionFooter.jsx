import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function PromotionFooter() {
  return (
    <Box px={'16px'}>
      <Container>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          pb={'41px'}
        >
          <Box
            sx={{
              '@media (max-width: 560px)': {
                width: '100px',
                ml: '-10px',
              },
            }}
          >
            <Image
              src='/images/evos-promotion.png'
              alt='evos-promotion'
              width={151}
              height={66}
            />
          </Box>
          <Typography
            fontSize={'23px'}
            lineHeight={'33px'}
            fontWeight={'400'}
            color={'#fff'}
            sx={{
              '@media (max-width: 560px)': {
                fontSize: '8px',
                lineHeight: '8px',
              },
            }}
          >
            ©Evos 2006 - 2024 All rights reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
