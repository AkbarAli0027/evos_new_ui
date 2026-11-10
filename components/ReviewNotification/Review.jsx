import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import cls from './Review.module.scss'
import { btnText, menu } from '../../mock/menu'
import { useRouter } from 'next/router'
import { aboutInfo } from '../../mock/about'
import Image from 'next/image'
import notification from '../../public/images/svg/notification.svg'
function Review() {
  const { locale } = useRouter()
  return (
    <Box className={cls.wrapper}>
      <Container>
        <Box className={cls.review}>
          <div className={cls.content}>
            <div className={cls.img}>
              <Image src={notification} alt='notification' />
            </div>
            <p className={cls.rewiev__text}>{menu[locale].review}</p>
            <div className='form'>
              <Box className={cls.inputGroup}>
                <input
                  className={cls.input}
                  type='text'
                  placeholder='Your Email'
                />
                <button className={cls.button}>{btnText[locale].send}</button>
              </Box>
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  )
}

export default Review