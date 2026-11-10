import React, { useState } from 'react'
import { requestAxios, requestV2 } from '../../utils/axios'
import { toast } from 'react-toastify'
import { DialogContent, Typography, Box, DialogTitle } from '@mui/material'
import CloseIconEffect from '../CloseIcon/CloseIcon'
import ReactInputMask from 'react-input-mask'
import CircularProgress from '@mui/material/CircularProgress'
import { useRouter } from 'next/router'
import { menu } from '../../mock/menu'

import cls from './SignUp.module.scss'
import Link from 'next/link'
import ReCAPTCHA from 'react-google-recaptcha'

function SignUp(props) {
  const { open, onClose, setIsCheckCode, data, setData, setMessage } = props
  const router = useRouter()
  const { locale } = router
  const [isLoading, setIsLoading] = useState(false)
  const [isPolicyChecked, setIsPolicyChecked] = useState(false)
  const [isOffertChecked, setIsOffertChecked] = useState(false)
  const [isVerified, setIsVerified] = useState(true)
  const [errors, setErrors] = useState({ phone: '', fullname: '', sms: '' })
  const [errStaus, setErrStatus] = useState()
  const phoneNumber = data?.phone



  const getPhoneNumber = (e) => {
    e.preventDefault()
    if (data.phone.includes('_')) {
      setErrors({
        ...errors,
        phone: 'Пожалуйста, правильно введите номер телефона',
      })
    } else {
      setIsLoading(true)

      requestV2
        .post('/service/client-auth', {
          phone: phoneNumber,
          lang: locale,
        })
        .then((res) => {
          if (res?.code === 400) {
            setErrStatus(res?.message)
          } else {
            setIsCheckCode(true)
          }
          if (res?.data?.type === 'lastcode') {
            // toast.success(res.data.message)
            setMessage(res.data.message)
          }
          if (res?.data?.type === 'code') {
            // toast.success(res.data.message)
            setMessage(res.data.message)
          }
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  function handleOnChange(value) {
    setIsVerified(true)
  }

  return (
    <Box open={open}>
        <CloseIconEffect onClick={onClose}  />
      <DialogTitle className={cls.title}>
        <Typography variant={`h1`} sx={{ marginBottom: '6px' }}>
          {menu[locale].signIn}
        </Typography>
        <Typography
          textAlign='center'
          padding={'5px 4px 10px 4px'}
          color={`red`}
        >
          {errStaus ? errStaus : ``}
        </Typography>
      </DialogTitle>
      <form onSubmit={getPhoneNumber}>
        <DialogContent
          className={cls.dialogcontent}
          sx={{ padding: 0, marginBottom: '19px' }}
        >
          {/* <label htmlFor='fullName'>
            <Typography
              variant={`h4`}
              sx={{ paddingBottom: 2, color: '#5B6871' }}
            >
              {menu[locale].fullName}
            </Typography>
          </label>
          <ReactInputMask
            placeholder='Введите имя'
            disabled={false}
            value={data.fullname}
            onChange={(e) =>
              setData({ ...data, fullName: e.target.value.replace(/ /g, '') })
            }
            required
            style={{
              padding: '17px 0 17px 16px',
              marginBottom: '24px',
              width: '100%',
            }}
          ></ReactInputMask> */}
          <label htmlFor='phoneNumber'>
            <Typography
              variant={`h4`}
              sx={{ paddingBottom: 2, color: '#00704A' }}
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
              padding: '17px 0 17px 16px',
              marginBottom: '8px',
              width: '100%',
              borderColor: errors.phone ? 'tomato' : null,
            }}
          ></ReactInputMask>
          {/* <Typography>{menu[locale].codeWillSend}</Typography> */}
        </DialogContent>
        <Box marginBottom={2}>
          <ReCAPTCHA
            sitekey='6LdAGV0gAAAAAKkUj9KI6EnfNTVPsodiR9SZVu-J'
            onChange={handleOnChange}
          />
        </Box>
        <Box className={cls.policy}>
          <label className={cls.container}>

            {locale === 'uz' ? <Link href='/politics#offert-section-5'>
              <a target='__blank' value={isPolicyChecked} className={cls.link}>{menu[locale].agreeToProcessing}  &nbsp; </a>
            </Link> : menu[locale].agreeToProcessing}

            {locale !== 'uz' ? <Link href='/politics#offert-section-5'>
              <a target='__blank' value={isPolicyChecked} className={cls.link}>{menu[locale].ownInfo}</a>
            </Link> : menu[locale].ownInfo}
            <input
              className={cls.checkbox}
              checked={isPolicyChecked}
              onChange={() => setIsPolicyChecked((prev) => !prev)}
              type='checkbox'
            />
            <span className={cls.mark}></span>
          </label>
        </Box>
        <Box className={cls.offert}>
          <label className={cls.container}>
            {menu[locale].agreeWith}
            <Link href='/politics'>
              <a target='_blank' value={isPolicyChecked} className={cls.link}>
                {menu[locale].publicOffert}
              </a>
            </Link>
            <input
              className={cls.checkbox}
              checked={isOffertChecked}
              onChange={() => setIsOffertChecked((prev) => !prev)}
              type='checkbox'
            />
            <span className={cls.mark}></span>
          </label>
        </Box>
        <Box mb={2} display={'flex'} justifyContent={'space-between'}>
          <button
            disabled={!(isOffertChecked && isPolicyChecked && isVerified)}
            className={
              isOffertChecked && isPolicyChecked && isVerified
                ? 'btn'
                : 'disabledBtn'
            }
            type='submit'
          >
            {isLoading ? (
              <CircularProgress color='inherit' size={18} />
            ) : (
              `${menu[locale].login}`
            )}
          </button>
        </Box>
        {errors.phone && <div className={cls.error}>{errors.phone}</div>}
      </form>
    </Box>
  )
}

export default SignUp

