import React, { useRef, useState } from 'react'
import { Box, Typography, Grid, Container } from '@mui/material'
import cls from './Feedback.module.scss'
import { useRouter } from 'next/router'
import { menu } from '../../mock/menu'
import { feedback } from '../../mock/feedback'
import Slider from 'react-slick/lib/slider'
import ArrowButton from '../ArrowButton/ArrowButton'
import CustomAccordion from '../Accordion/Accordion'

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth])
  return size
}

function Feedback() {
  const router = useRouter()
  const sliderRef = useRef(null)
  const { locale } = router
  const [windowWidth] = useWindowSize()
  //   const translatedData = locale === 'ru' ? careerItem : careerItem_uz

  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: false,
    // speed: 2000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    adaptiveHeight: true,
  }

  // console.log('feedback', feedback)
  return (
    <Container>
      <Grid container spacing={2} className={cls.clientGrid} id='client'>
        <Grid md={12} lg={5} sm={12} xs={12} className={cls.clientCard}>
          <Box position='relative'>
            <Typography variant='h2'>2 000 +</Typography>
            <p
              dangerouslySetInnerHTML={{
                __html: menu[locale].feedback,
              }}
            />
            <Box className={cls.img}>
              <img src='../../images/svg/user1.svg' alt='user' />
              <img src='../../images/svg/user2.svg' alt='user' />
              <img src='../../images/svg/user3.svg' alt='user' />
            </Box>
          </Box>
        </Grid>
        <Grid md={12} lg={7} sm={12} xs={12} style={{ width: '100%' }}>
          <Box className={cls.sliderBox}>
            <Box className={cls.arrow}>
              <img src='../../images/svg/quotes.svg' alt='test' />
              {windowWidth > 800 && (
                <ArrowButton display='flex' sliderRef={sliderRef} />
              )}
            </Box>
            <Slider {...settings} ref={sliderRef}>
              {feedback.map((item) => (
                <Box key={item.id} className={cls.content}>
                  <Typography variant='h2'>{item?.text}</Typography>
                  <Typography variant='h3'>{item?.info}</Typography>
                  <Typography>{item?.socialNetwork}</Typography>
                </Box>
              ))}
            </Slider>
            {windowWidth < 800 && (
              <ArrowButton display='flex' justify='end' sliderRef={sliderRef} />
            )}
          </Box>
        </Grid>
      </Grid>
      <CustomAccordion />
    </Container>
  )
}

export default Feedback
