import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import cls from './PhoneNumber.module.scss'
import { btnText, menu } from '../../mock/menu'
import emailjs from 'emailjs-com'
import { useRouter } from 'next/router'
import { aboutInfo } from '../../mock/about'
import Image from 'next/image'
import notification from '../../public/images/svg/notification.svg'
import InputMask from 'react-input-mask'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

function PhoneNumber() {
  const { locale } = useRouter()

  // const sendEmail = (e) => {
  //   e.preventDefault()
  //   emailjs
  //     .sendForm(
  //       'service_qqkde1o',
  //       'template_9dme36p',
  //       e.target,
  //       '97-_8L8FBxhDLidHg'
  //     )
  //     .then((res) => {
  //       console.log(res)
  //       toast.success('Отправлено!')
  //       // dispatch(toggleOrderNotification())
  //       window.location.reload()
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       toast.error('Ошибка')
  //     })
  // }
  return (
    <Box className={cls.wrapper} id='phoneInput'>
      <Box className={cls.review}>
        <div className={cls.content}>
          <div className={cls.img}>
            <Image src={notification} alt='notification' />
          </div>
          <div className={cls.rewiev__text}>
            <div
              dangerouslySetInnerHTML={{
                __html: menu[locale].phoneInput,
              }}
            />
          </div>
          <form className='form'>
            <Box className={cls.inputGroup}>
              <input
                name='name'
                className={cls.inputName}
                type='text'
                placeholder='Введите имя'
              />
              <InputMask
                className={cls.input}
                name='phone'
                placeholder='Введите номер телефона'
                mask='+\9\98 99 999 99 99'
                maskChar={null}
              />
              <button className={cls.button} disabled>
                {btnText[locale].send}
              </button>
            </Box>
          </form>
        </div>
      </Box>
    </Box>
  )
}

export default PhoneNumber
