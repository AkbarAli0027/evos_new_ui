import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { SuccessIcon } from '../Icons'

function SuccessStatus() {
  return (
    <Box display='flex' p='12px' sx={{borderRadius: '30px', background: '#F6F8F9'}}>
        <SuccessIcon />
        <Typography sx={{color: '#309B42', marginLeft: '13px'}}>Доставлен</Typography>
    </Box>
  )
}

export default SuccessStatus