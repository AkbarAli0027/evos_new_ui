import React, { useRef } from 'react'
import { Box, Container, Grid } from '@mui/material'
import cls from './AboutDesc.module.scss'
import { menu } from '../../mock/menu'
import { useRouter } from 'next/router'
import { aboutInfo, aboutInfo_uz } from '../../mock/about'
import History from '../History/History'
import Review from '../ReviewNotification/Review'
import Feedback from '../Feedback/Feedback'
import Gallery from '../Gallery/Gallery'
import strapiTranslater from '../../utils/strapiTranslater'
import {
  BannerBekon,
  BannerCheeseBurger,
  BannerHotDog,
  BannerHumburger,
  BannerSalt,
  LogoText,
} from '../Icons'
import strapiImageUrlMaker from '../../utils/strapiImageUrlMaker'

function AboutDesc({ data, statistics, topics, galleryItems }) {

  const { locale } = useRouter()
  const sliderRef = useRef(null)
  const translatedData = locale === 'ru' ? aboutInfo : aboutInfo_uz

  return (
    <Box className={cls.wrapper} id='about'>
      <Box className={cls.banner} sx={{ position: 'relative' }}>
        {/* <Box
          sx={{
            maxWidth: '100%',
            display: 'grid',
            justifyItems: 'center',
          }}
        >
          <Box className={cls.logo}>
            <LogoText />
          </Box>
          <Box className={cls.icons}>
            <BannerSalt />
            <BannerHumburger />
            <BannerHotDog />
            <BannerCheeseBurger />
            <BannerBekon />
          </Box>
        </Box> */}
        <img src={data && strapiImageUrlMaker(data?.Banner)} alt='' />
      </Box>
      <Container>
        <Box className={cls.desc}>
          <h2 className={cls.title}>
            {strapiTranslater(data, 'title', locale)}
          </h2>
          <p className={cls.text}>
            {strapiTranslater(data, 'description', locale)}
          </p>
        </Box>
        <Grid container spacing={2} className={cls.grid}>
          {statistics.map((item) => (
            <Grid
              md={6}
              lg={4}
              key={item.id}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                columnGap: '24px',
                justifyContent: 'center',
                maxWidth: '270px',
              }}
            >
              <Box className={cls.infoImg}>
                <img
                  src={item && strapiImageUrlMaker(item?.image)}
                  alt={item?.title}
                />
              </Box>
              <Box>
                <p className={cls.infoTitle}>
                  {strapiTranslater(item, 'title', locale)}
                </p>
                <p className={cls.infoTxt}>
                  {strapiTranslater(item, 'description', locale)}
                </p>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <History topics={topics} />
      {galleryItems.length > 0 && <Gallery galleryItems={galleryItems} />}
      <Review />
      <Feedback />
    </Box>
  )
}

export default AboutDesc
