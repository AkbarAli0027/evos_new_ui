import React, { useEffect, useState } from 'react'
import { requestAxios } from '../../utils/axios'
import { parseCookies, setCookie } from 'nookies'
import { toast } from 'react-toastify'
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  Box,
  DialogTitle,
} from '@mui/material'
import CloseIconEffect from '../CloseIcon/CloseIcon'
import ReactInputMask from 'react-input-mask'
import CircularProgress from '@mui/material/CircularProgress'
import { useRouter } from 'next/router'
import { menu, btnText } from '../../mock/menu'
import { makeStyles } from '@mui/styles'
import cls from './SignIn.module.scss'

const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: '0',
  },
}))

function SignIn(props) {
  const { onClose, setOpenLoginDialog, setIsRegistration, data, setData } =
    props
  const router = useRouter()
  const { locale } = router
  const [isLogin, setLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const phoneNumber = data.phone.split('+')[1]
  const classes = useStyles(props)

  const onRegistrationClick = () => {
    setIsRegistration(true)
    setData({ phone: '', fullName: '', sms: '' })
  }

  const getPhoneNumber = (e) => {
    e.preventDefault()
    setIsLoading(true)

    requestAxios
      .get(`/client/${phoneNumber}`)
      .then((res) => {
        if (!res.errorMessage) {
          setLogin(true)
          setCookie({}, 'client_id', res.client.id, {
            path: '/',
          })
          setCookie({}, 'client_phone_number', res.client.phoneNumber, {
            path: '/',
          })
          router.push('/orders')
          window.location.reload()
          setOpenLoginDialog(false)
        } else {
          toast.error(`${menu[locale].notFound}`)
          console.log('error')
          setOpenLoginDialog(true)
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <Box sx={{ paddingTop: 0 }}>
      <DialogTitle className={cls.title}>
        <CloseIconEffect onClick={onClose} />
        <Typography variant={`h1`} sx={{ paddingBottom: 5 }}>
          {menu[locale].signIn}
        </Typography>
      </DialogTitle>
      <form onSubmit={getPhoneNumber}>
        <DialogContent sx={{ padding: 0, paddingBottom: 5 }}>
          <label htmlFor='phoneNumber'>
            <Typography
              variant={`h4`}
              sx={{ paddingBottom: 2, color: '#5B6871' }}
            >
              {menu[locale].phoneNumber}
            </Typography>
          </label>
          <ReactInputMask
            mask='+\9\98 99 999 99 99'
            placeholder={menu[locale].enterPhNum}
            disabled={false}
            value={data.phone}
            onChange={(e) =>
              setData({ ...data, phone: e.target.value.replace(/ /g, '') })
            }
            required
            style={{
              paddingTop: '17px',
              paddingBottom: '17px',
              paddingLeft: '16px',
              marginBottom: '0',
              width: '100%',
            }}
          ></ReactInputMask>
        </DialogContent>
        <DialogActions
          sx={{ padding: 0, display: 'flex', flexDirection: 'column' }}
        >
          <button className='btn' type='submit'>
            {isLoading ? (
              <CircularProgress color='inherit' size={18} />
            ) : (
              btnText[locale].login
            )}
          </button>
        </DialogActions>
      </form>
      <Typography paddingTop={'30px'} textAlign={'center'}>
        У вас нет аккаунта?{' '}
        <span
          style={{ color: 'tomato', cursor: 'pointer' }}
          onClick={onRegistrationClick}
        >
          Регистрация
        </span>
      </Typography>
    </Box>
  )
}
// TEST KOD TEPADA ORGINAL KOD OCHIB KETI

export default SignIn
