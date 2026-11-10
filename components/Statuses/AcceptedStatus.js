import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import {Accepted} from './StatusIcons'

function AcceptedStatus({statusName = 'Филиал принял'}) {
  return (
    <Box display='flex' flexWrap='nowrap' p='12px' sx={{borderRadius: '30px !important', background: '#F6F8F9'}}>
        <Accepted />
        <Typography sx={{color: '#309B42', marginLeft: '13px', whiteSpace: 'nowrap'}}>{statusName}</Typography>
    </Box>
  )
}

export default AcceptedStatus