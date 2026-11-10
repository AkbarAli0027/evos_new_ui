import React, { useRef } from 'react'
import { Box, Typography, Grid, ButtonBase } from '@mui/material'
import cls from './MobileCareerItem.module.scss'
import { useRouter } from 'next/router'
import { menu } from '../../mock/menu'
import Slider from 'react-slick/lib/slider'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import strapiImageUrlMaker from '../../utils/strapiImageUrlMaker'
import strapiTranslater from '../../utils/strapiTranslater'

function MobileCareerItem({ career_history }) {
  const router = useRouter()
  const sliderRef = useRef(null)
  const { locale } = router

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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

      <Box className={cls.box}>
        <Slider {...settings} ref={sliderRef}>
          {career_history.map((item) => (
            <Grid md={12} lg={12} key={item.id} container className={cls.grid}>
              <Grid item xs={12} className={cls.desc}>
                <Box className={cls.img}>
                  <img
                    src={career_history && strapiImageUrlMaker(item.image)}
                    alt={item.title}
                  />
                </Box>
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
            </Grid>
          ))}
        </Slider>
      </Box>
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

export default MobileCareerItem
