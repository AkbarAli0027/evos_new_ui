import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { Ready } from './StatusIcons'

function ReadyStatus({statusName = 'Приготовлено'}) {
  return (
    <Box display='flex' p='12px' sx={{borderRadius: '30px', background: '#F6F8F9'}}>
        <Ready />
        <Typography sx={{color: '#309B42', marginLeft: '13px'}}>{statusName}</Typography>
    </Box>
  )
}

export default ReadyStatus