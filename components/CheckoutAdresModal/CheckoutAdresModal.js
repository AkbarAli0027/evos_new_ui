import { Box, Dialog, Typography } from '@mui/material'
import React from 'react'
import cls from './CheckoutAdresModal.module.scss'
import { clearCartAction } from '../../store/actions/cartActions/cartActions'
import { useDispatch } from 'react-redux'
import { setOpenAddress } from '../../store/actions/addressActions/addressActions'
import { useRouter } from 'next/router'
import { menu } from '../../mock/menu'

const CheckoutAdresModal = ({ openDialog, closeDialog }) => {
  const { push, locale } = useRouter()

  const dispatch = useDispatch()

  const openAdress = () => {
    closeDialog()
    dispatch(clearCartAction())
    dispatch(setOpenAddress())
    push('/')
  }

  return (
    <Dialog open={openDialog} onClose={closeDialog}>
      <div className={cls.dialogWrap}>
        <Typography mb='10px' variant='h1'>
          {menu[locale].checkoutAdresModalTitle}
        </Typography>
        <p className={cls.desc}>{menu[locale].checkoutAdresModalDesc}</p>
        <Box display='flex' sx={{ marginTop: '30px' }}>
          <button className={cls.btn} onClick={closeDialog}>
            {menu[locale].checkoutAdresModalBtn1}
          </button>
          <button className={cls.btnPrimary} onClick={openAdress} >
            {menu[locale].checkoutAdresModalBtn2}
          </button>
        </Box>
      </div>
    </Dialog>
  )
}

export default CheckoutAdresModal
