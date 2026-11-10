import React from 'react'
import { Box, Container } from '@mui/material'
import cls from './About.module.scss'
import strapiImageUrlMaker from '../../utils/strapiImageUrlMaker'
import strapiTranslater from '../../utils/strapiTranslater'
import { useRouter } from 'next/router'
import { PlayMarketIcon, AppleStoreIconMobile } from '../../components/Icons.js'
import Image from 'next/image'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({})

function About({ instructions }) {
  const { locale } = useRouter()
  // !Image URLs
  const phoneImageUrl = instructions && strapiImageUrlMaker(instructions?.image)
  const qrImageUrl = instructions && strapiImageUrlMaker(instructions?.qr_image)

  const classes = useStyles()

  return (
    <Box className={cls.wrapper}>
      <Container>
        <Box className={cls.grid}>
          <Box className={cls.img}>
            <img src={phoneImageUrl} alt='iphone' />
          </Box>
          <Box className={cls.info}>
            <h2 className={cls.text}>
              {strapiTranslater({ ...instructions }, `title`, locale)}
              <p>
                <span>
                  {strapiTranslater(instructions, `sub_title`, locale)}
                </span>
              </p>
            </h2>
            <p className={cls.description}>
              {strapiTranslater(instructions, `description`, locale)}
            </p>
          </Box>
          <Box className={cls.qr}>
            <div className={cls.qr_content}>
              <div className={cls.qr_codes}>
                <a
                  href='https://apps.apple.com/us/app/evos-uz/id1595897228'
                  target='_blank'
                  rel='noreferrer'
                  className={''}
                >
                  <AppleStoreIconMobile className={cls.appleStore} />
                </a>
                <img src='/images/evos_qr-code_iphone.svg' alt='qr code for AppleStores' />
              </div>
              <div className={cls.qr_codes}>
                <a
                  href='https://play.google.com/store/apps/details?id=uz.makfood.service.evos&hl=ru&gl=US'
                  target='_blank'
                  rel='noreferrer'
                  className={''}
                >
                  <PlayMarketIcon className={cls.appleStore} />
                </a>
                <img src='/images/evos_qr-code_android.svg' alt='qr code for PlayMarket' />
              </div>
            </div>
          </Box>
          {instructions?.steps.map((item) => (
            <Box className={cls.card} key={item.id}>
              <span className={cls.span}>
                <img
                  src={instructions && strapiImageUrlMaker(item?.image)}
                  alt={item.title}
                />
              </span>
              <h2 className={cls.title}>
                {strapiTranslater(item, `title`, locale)}
              </h2>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default About
