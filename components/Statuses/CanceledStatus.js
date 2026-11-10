import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import {Rejected} from './StatusIcons'

function CanceledStatus({statusName = 'Отменен'}) {
  return (
    <Box display='flex' p='12px' sx={{borderRadius: '30px', background: '#F6F8F9'}}>
        <Rejected />
        <Typography sx={{color: '#F2271C', marginLeft: '13px', whiteSpace: 'nowrap'}}>{statusName}</Typography>
    </Box>
  )
}

export default CanceledStatus