
import React, { useState } from 'react'
import { Dialog, Box } from '@mui/material'
import SignUp from '../SignUp/SignUp'
import CheckCode from '../CheckCode/CheckCode'

// Login.jsx ichida taxminan 14-qator
function Login(props) {
  const {
    open,
    onClose,
    setOpenLoginDialog,
    isCheckCode,
    setIsCheckCode,
    // Agar data kelmasa, bo'sh obyekt sifatida qabul qilamiz
    data = { phone: '', fullName: '', sms: '' },
    setData,
  } = props

  // ... qolgan kodlar

  const [message, setMessage] = useState('')

  return (
    <Dialog
      open={open}
      onClose={onClose}
      id="loginDialog"
      BackdropProps={{
        style: { backgroundColor: 'rgba(0,0,0,0.8)' },
      }}
      PaperProps={{
        sx: {
          borderRadius: '20px', // yumaloq burchak
          border: '2px solid #129900', // modal border
          width: '400px',
          // maxWidth: '430px',
          height: '520px',
          overflow: 'hidden',
        },
      }}
    >
      <Box
        sx={{
          margin: 4,
          '@media (max-width: 800px)': {
            margin: 2,
          },
        }}
      >
        {isCheckCode ? (
          <CheckCode
            onClose={onClose}
            setOpenLoginDialog={setOpenLoginDialog}
            data={data}
            setData={setData}
            message={message}
          />
        ) : (
          <SignUp
            onClose={onClose}
            setIsCheckCode={setIsCheckCode}
            data={data}
            setData={setData}
            setMessage={setMessage}
          />
        )}
      </Box>
    </Dialog>
  )
}

export default Login