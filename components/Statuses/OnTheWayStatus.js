import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import {OnTheWay} from './StatusIcons'

function OnTheWayStatus({statusName = 'Курьер в пути'}) {
  return (
    <Box display='flex' p='12px' sx={{borderRadius: '30px', background: '#F6F8F9'}}>
        <OnTheWay />
        <Typography sx={{color: '#309B42', marginLeft: '13px'}}>{statusName}</Typography>
    </Box>
  )
}

export default OnTheWayStatus