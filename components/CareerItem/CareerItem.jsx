import React, { useRef } from 'react'
import { Box, Typography, Grid, ButtonBase } from '@mui/material'
import cls from './CareerItem.module.scss'
import { useRouter } from 'next/router'
import { menu } from '../../mock/menu'
import Slider from 'react-slick/lib/slider'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import strapiImageUrlMaker from '../../utils/strapiImageUrlMaker'
import strapiTranslater from '../../utils/strapiTranslater'

function CareerItem({ career_history }) {
  const router = useRouter()
  const sliderRef = useRef(null)
  const { locale } = router

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    adaptiveHeight: true,
  }
  return (
    <Box id='career' className={cls.wrapper}>
      <Box>
        <Typography variant={`h1`} color={`black`} className={cls.title}>
          {menu[locale].careerPath}
        </Typography>
      </Box>
      <Slider {...settings} ref={sliderRef}>
        {career_history.map((item) => (
          <Box className={cls.box}>
            <Grid
              key={item.id}
              style={{
                alignItems: 'center',
                columnGap: '68px',
                margin: '0',
              }}
              container
              spacing={1}
              className={cls.grid}
            >
              <Grid item xs={8} className={cls.desc}>
                <Box className={cls.card}>
                  <Typography variant='h2' className={cls.title}>
                    {strapiTranslater(item, 'title', locale)}
                  </Typography>
                  <Typography className={cls.description}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: strapiTranslater(item, 'history', locale),
                      }}
                    />
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} className={cls.imgGrid}>
                <Box className={cls.img}>
                  <img
                    src={career_history && strapiImageUrlMaker(item?.image)}
                    alt={item.title}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Slider>
      <div className={cls.arrowBtns}>
        <ButtonBase
          className={cls.prevBtn}
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ArrowBackIos />
        </ButtonBase>
        <ButtonBase
          className={cls.nextBtn}
          onClick={() => sliderRef.current.slickNext()}
        >
          <ArrowForwardIos />
        </ButtonBase>
      </div>
    </Box>
  )
}

export default CareerItem
