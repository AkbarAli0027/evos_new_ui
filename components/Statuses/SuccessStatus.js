import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import {Delivered} from './StatusIcons'

function SuccessStatus({statusName = 'Доставлен'}) {
  return (
    <Box display='flex' p='12px' sx={{borderRadius: '30px', background: '#F6F8F9'}}>
        <Delivered />
        <Typography sx={{color: '#309B42', marginLeft: '13px'}}>{statusName}</Typography>
    </Box>
  )
}

export default SuccessStatus

