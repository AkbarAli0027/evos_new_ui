import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { gallery } from '../../mock/gallery.js'
import { useRouter } from 'next/router'
import { btnText } from '../../mock/menu'
import strapiTranslater from '../../utils/strapiTranslater'
import cls from './Gallery.module.scss'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'
import { Container, Typography } from '@mui/material'
import { Next, Previous } from '../Icons.js'
import { useIsMobile } from '../../utils/useIsMobile.js'
import { Box } from '@mui/system'
import strapiImageUrlMaker from '../../utils/strapiImageUrlMaker.js'

export default function Gallery({ galleryItems }) {
  const router = useRouter()
  const { locale } = router
  const [isMd] = useIsMobile(767)
  const handleRedirect = (id) => {
    router.push(`/about/gallery/${id}`)
  }
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '" id="pagination">' +
        (index + 1) +
        '</span>'
      )
    },
  }
  const nextSlide = () => {
    const slider = document.querySelector('.swiper-pagination')
    slider.scrollLeft += 50
  }
  const prevSlide = () => {
    const slider = document.querySelector('.swiper-pagination')
    slider.scrollLeft -= 50
  }

  return (
    <div className={cls.wrapper} id='gallery'>
      <Container>
        <Typography
          variant={`h1`}
          color={`black`}
          className={cls.productTitle}
          marginBottom='80px'
        >
          Галерея
        </Typography>
        <Swiper
          slidesPerView={isMd ? 2 : 3}
          pagination={pagination}
          modules={[Pagination]}
          spaceBetween={10}
          className='mySwiper'
          centeredSlides={isMd}
          grabCursor={true}
        >
          {galleryItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={cls.mySwiper__card}>
                <img
                  src={galleryItems && strapiImageUrlMaker(item.image)}
                  alt={item.title}
                />
                <div className={cls.card__body}>
                  <h3 className={cls.card__title}>
                    {strapiTranslater(item, 'title', locale)}
                  </h3>
                </div>
                <div className={cls.buttons}>
                  <button
                    onClick={() => handleRedirect(item.slug)}
                    className={cls.buttons__more}
                  >
                    {btnText[locale].details}
                  </button>
                  <button className={cls.buttons__share}>
                    {btnText[locale].share}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {gallery.length > 4 || (
            <Box className={cls.arrows}>
              <span className='prevButton' onClick={prevSlide}>
                <Previous />
              </span>
              <span className='nextButton' onClick={nextSlide}>
                <Next />
              </span>
            </Box>
          )}
        </Swiper>
      </Container>
    </div>
  )
}
