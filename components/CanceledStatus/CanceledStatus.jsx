import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { CanceledIcon } from '../Icons'

function SuccessStatus() {
  return (
    <Box display='flex' p='12px' sx={{borderRadius: '30px', background: '#F6F8F9'}}>
        <CanceledIcon />
        <Typography sx={{color: '#F2271C', marginLeft: '13px'}}>Отменен</Typography>
    </Box>
  )
}

export default SuccessStatus