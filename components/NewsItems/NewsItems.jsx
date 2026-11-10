import React, { useRef, useState } from 'react'
import { Box, Typography, Grid, Container, ButtonBase } from '@mui/material'
import cls from './NewsItems.module.scss'
import { useRouter } from 'next/router'
import { menu } from '../../mock/menu'
import {
  evosNews,
  evosNews_uz,
  newsBanner,
  newsBanner_uz,
} from '../../mock/news'
import Slider from 'react-slick/lib/slider'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import strapiTranslater from '../../utils/strapiTranslater'
import strapiImageUrlMaker from '../../utils/strapiImageUrlMaker'
import { array } from 'prop-types'
function Advantage({ news }) {
  const router = useRouter()
  const sliderRef = useRef(null)
  const { locale } = router
  const translatedData = locale === 'ru' ? evosNews : evosNews_uz
  const translatedNewsBanner = locale === 'ru' ? newsBanner : newsBanner_uz
  const mainNews = news.find((item) => item?.is_main)

  const sliceIntoChunks = (array, chunkSize) => {
    const res = []
    for (let i = 0; i < array?.length; i += chunkSize) {
      const chunk = array?.slice(i, i + chunkSize)
      res.push(chunk)
    }
    return res
  }
  const formattedNews = sliceIntoChunks(
    news?.filter((item) => !item.is_main),
    4
  )



  const handleRedirect = (slug) => {
    router.push(`/news/${slug}`)
    // router.push('/2024')
  }

  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    adaptiveHeight: true,
  }

  return (
    <Box className={cls.wrapper} id='news'>
      <Typography
        variant={`h1`}
        color={`black`}
        marginBottom='36px'
        className={cls.title}
      >
        {menu[locale].news}
      </Typography>
      {/* <Grid container spacing={2} className={cls.grid} margin='0' justifyContent={'space-between'}>
        <Grid className={cls.item} item lg={6} md={12} sm={12}>
      
          <Box

            className={cls.box}
            key={mainNews?.id}
            onClick={() => {
              handleRedirect(mainNews?.slug)

            }}
          >
            <img
              src={strapiImageUrlMaker(
                strapiTranslater(mainNews, 'image', locale)
              )}
              alt='bannerImage'
            />
            <Box className={cls.desc}>
              <Typography variant='h2'>
                {strapiTranslater(mainNews, 'title', locale)}
              </Typography>
            </Box>
          </Box>
    
        </Grid>
        <Grid className={cls.row} item lg={12} md={12} sm={12} padding='0'>
          <Slider {...settings} ref={sliderRef}>
            {formattedNews?.map((news) => (
              <Grid
                key={news?.id}
                className={cls.rowGrid}
                container
                spacing={1}
              >
                {news
                  .filter((item) => !item.is_main)
                  ?.map((item) => (
                    <Grid
                      sm={6}
                      md={6}
                      lg={6}
                      className={cls.gridBox}
                      key={item.id}
                    >
                      <Box
                        className={cls.rowItem}
                        onClick={() => handleRedirect(item.slug)}
                      >
                        <Box className={cls.img}>
                          <img
                            src={strapiImageUrlMaker(
                              strapiTranslater(item, 'image', locale)
                            )}
                            alt={item?.title}
                          />
                        </Box>
                        <Box className={cls.boxDesc}>
                          <Typography variant='h4'>
                            {strapiTranslater(item, 'title', locale)}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
              </Grid>
            ))}
          </Slider>
        </Grid>
      </Grid> */}
      <Grid className={cls.row} item lg={12} md={12} sm={12} padding='0' >
        <Slider {...settings} ref={sliderRef}>

          <Grid
            key={news?.id}
            className={cls.rowGrid}
            container
            spacing={1}
            justifyContent={'space-between'}
          >
            {news
              ?.map((item) => (
                <Grid
                  sm={6}
                  md={6}
                  lg={6}
                  className={cls.gridBox}
                  key={item.id}
                >
                  <Box
                    className={cls.rowItem}
                    onClick={() => handleRedirect(item.slug)}
                  >
                    <Box className={cls.img}>
                      <img
                        src={strapiImageUrlMaker(
                          strapiTranslater(item, 'image', locale)
                        )}
                        alt={item?.title}
                      />
                    </Box>
                    <Box className={cls.boxDesc}>
                      <Typography variant='h4'>
                        {strapiTranslater(item, 'title', locale)}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
          </Grid>

        </Slider>
      </Grid>
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

export default Advantage
