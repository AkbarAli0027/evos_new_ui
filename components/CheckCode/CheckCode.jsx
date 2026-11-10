import React, { useState } from 'react'
import { requestAxios, requestV2 } from '../../utils/axios'
import VerificationInput from 'react-verification-input'
import { setCookie } from 'nookies'
import { toast } from 'react-toastify'
import {
  DialogActions,
  DialogContent,
  Typography,
  Box,
  DialogTitle,
} from '@mui/material'
import CloseIconEffect from '../CloseIcon/CloseIcon'
import CircularProgress from '@mui/material/CircularProgress'
import { useRouter } from 'next/router'
import { menu } from '../../mock/menu'
import { makeStyles } from '@mui/styles'
import cls from './CheckCode.module.scss'
import Countdown from 'react-countdown'

const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: '0',
  },
}))

function CheckCode(props) {
  const { onClose, setOpenLoginDialog, data, setData, message } = props
  const router = useRouter()
  const { locale } = router
  const [isLogin, setLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [timer, setTimer] = useState(Date.now() + 59 * 1000)
  const [err, setErr] = useState()

  const sms = data.sms
  const phoneNumber = data.phone.split('+')[1]

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      // Render a complete state
      setIsDisabled(false)
      return ''
    } else {
      // Render a countdown
      return <span style={{ color: 'tomato' }}>{seconds ? seconds : '59'}</span>
    }
  }
  const getPhoneNumber = () => {
    setIsLoading(true)
    requestAxios
      .get(`/client/${phoneNumber}`)
      .then((res) => {
        if (!res.errorMessage) {
          setLogin(true)
          setCookie({}, 'client_id', res.client.id, {
            path: '/',
            maxAge: 30 * 24 * 60 * 60,
          })
          setCookie({}, 'client_phone_number', res.client.phoneNumber, {
            path: '/',
            maxAge: 30 * 24 * 60 * 60,
          })
          router.push('/orders')
          //window.location.reload()
          setOpenLoginDialog(false)
        } else {
          toast.error(`${menu[locale].notFound}`)
          setOpenLoginDialog(true)
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (sms.length !== 4) {
      setError('Пожалуйста, правильно введите код из sms')
    } else {
      setIsLoading(true)
      requestV2
        .post('/service/client-auth', {
          phone: phoneNumber,
          code: sms,
        })
        .then((res) => {
          if (res.code === 400) {
            setErr(res?.message)
          } else {
            setCookie({}, 'token', res.data, {
              path: '/',
              maxAge: 30 * 24 * 60 * 60,
            })
            setOpenLoginDialog(false)
            window.location.reload()
          }
        })
        .catch(() => {
          setError('Пожалуйста, правильно введите код из sms')
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  const reSendSms = () => {
    setIsLoading(true)
    setTimer(Date.now() + 59 * 1000)
    requestAxios
      .post('/client/sendsms', {
        phoneNumber,
      })
      .then((res) => setIsDisabled(true))
      .finally(() => setIsLoading(false))
  }

  return (
    <Box sx={{ paddingTop: 0 }}>
      <DialogTitle className={cls.title}>
        <CloseIconEffect onClick={onClose} />
        <Typography
          variant={`h1`}
          sx={{
            fontWeight: '700',
            fontSize: '30px',
            lineHeight: '30px',
            marginBottom: '0px',
          }}
        >
          {menu[locale].typeCodeMessage}
        </Typography>
        <Typography padding={'20px 4px 0'} color={`red`}>
          {/* Не пришло sms? Запросить повторно можно через{' '}
              <Countdown date={timer} renderer={renderer} /> */}
          {err ? err : ``}
        </Typography>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent
          sx={{
            padding: 0,
            paddingBottom: 2,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <VerificationInput
            removeDefaultStyles
            autoFocus
            value={data.sms}
            validChars='0-9'
            length={4}
            onChange={(e) =>
              setData({
                ...data,
                sms: e.replace(/ /g, ''),
              })
            }
            classNames={{
              container: 'container',
              character: error ? 'characterError' : 'character',
              characterInactive: 'character--inactive',
              characterSelected: 'character--selected',
            }}
          />
        </DialogContent>
        {error && (
          <Typography color={'tomato'} textAlign='center'>
            {error}
          </Typography>
        )}

        <button className='confirm-btn' type='submit'>
          {isLoading ? (
            <CircularProgress color='inherit' size={18} />
          ) : (
            `${menu[locale].confirm}`
          )}
        </button>

        {/* <button
          disabled={isDisabled}
          onClick={reSendSms}
          className={isDisabled ? 'disabledBtn' : 'btn'}
          type='button'
        >

          wefwe
          {isLoading ? (
            <CircularProgress color='inherit' size={18} />
          ) : (
            `${menu[locale].sendCodeAgain}`
          )}
        </button> */}
        <Typography
          textAlign={'center'}
          fontWeight={500}
          padding={'10px 5px 0'}
        >
          {message}
        </Typography>
        {/* {isDisabled ? (
          locale === 'uz' ? (
            <Typography textAlign={'center'} padding={'30px 55px 0'}>
              SMS qabul qilinmadimi?{' '}
              <Countdown date={timer} renderer={renderer} /> dan keyin qayta
              so`rashingiz mumkin
            </Typography>
          ) : (
            <>
         

            
            </>
          )
        ) : null} */}
      </form>
    </Box>
  )
}

export default CheckCode
