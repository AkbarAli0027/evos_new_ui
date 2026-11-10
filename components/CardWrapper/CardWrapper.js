import React from 'react'
import { Box } from '@mui/material'
import styles from './CardWrapper.module.scss'

export default function CardWrapper({ children, ...props }) {
  return (
    <Box className={styles.card} {...props}>
      {children}
    </Box>
  )
}
