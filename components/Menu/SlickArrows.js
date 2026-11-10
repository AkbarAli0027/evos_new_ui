import React from 'react'
import { Box } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

export function ArrowRight(props) {
  const { className, style, onClick, styles } = props
  return (
    <div className={`${className} ${styles || ''}`}>
      <Box
        component={ArrowForwardIosIcon}
        style={{ ...style }}
        onClick={onClick}
      />
    </div>
  )
}

export function ArrowLeft(props) {
  const { className, style, onClick, styles } = props
  return (
    <div className={`${className} ${styles || ''}`}>
      <Box
        component={ArrowBackIosIcon}
        style={{ ...style }}
        onClick={onClick}
      />
    </div>
  )
}
