import React, { useState, forwardRef, useEffect } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import { useRouter } from 'next/router'
import { TickIcon } from './TickIcon'
import { Typography } from '@mui/material'
import { shallowEqual, useSelector } from 'react-redux'

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

export default function Notification() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { isOrderNotification } = useSelector(
    (state) => state.default,
    shallowEqual
  )


  useEffect(() => {
    if (router.query.success) {
      setOpen(true)
    }
  }, [router.query])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Snackbar
      open={isOrderNotification}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert severity='success' sx={{ width: '100%' }} icon={<TickIcon />}>
        <Typography variant='caption' color='white' fontSize={24}>
          Успешно
        </Typography>
        <Typography variant='subtitle1' fontSize={18} color='#ffffffB8'>
          Ваш заказ был успешно выполнен.
        </Typography>
      </Alert>
    </Snackbar>
  )
}
