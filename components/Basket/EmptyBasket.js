  import React from 'react'
  import { Box, Typography } from '@mui/material'
  import CloseIconEffect from '../CloseIcon/CloseIcon'
  import FullButton from '../FullButton/FullButton'
  import { LoupeIcon } from '../Icons'
  import { menu } from '../../mock/menu'
  import { useRouter } from 'next/router'

  export default function EmptyBasket({ closeDrawer }) {
    const { locale } = useRouter()

    return (
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        alignItems='center'
        width='100%'
        height='100%'
      >
        <CloseIconEffect
          onClick={closeDrawer}
          style={{
            marginTop: '0',
            marginRight: '0',
            marginLeft: '0',
            marginBottom: '12px',
          }}
        />
        <Box display='flex' flexDirection='column' alignItems='center'>
          <LoupeIcon />
          <Typography
            variant={`h23`}
            sx={{ marginTop: '40px', textAlign: 'center' }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: menu[locale].emptyBasket,
              }}
            />
          </Typography>
        </Box>    
          <FullButton text={menu[locale].addToBasket} onClick={closeDrawer} />
      </Box>
    )
  }
