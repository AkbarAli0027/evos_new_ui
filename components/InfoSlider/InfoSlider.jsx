import React from 'react'
import { useRouter } from 'next/router'
import { info, info_uz } from '../../mock/info'
import cls from './InfoSlider.module.scss'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import strapiTranslater from '../../utils/strapiTranslater'
import strapiImageUrlMaker from '../../utils/strapiImageUrlMaker'

export default function InfoSlider({ features }) {
  const { locale } = useRouter()

  const SwiperButtons = ({ children }) => {
    const swiper = useSwiper()
    return (
      <div className='swiperButtons'>
        <button
          onClick={() => swiper.slidePrev()}
          className='swiper-button-prev'
        ></button>
        <button
          onClick={() => swiper.slideNext()}
          className='swiper-button-next'
        ></button>
      </div>
    )
  }
  const translatedData = locale === 'ru' ? info : info_uz
  return (
    <>
      <Swiper spaceBetween={10} className='infoSwiper'>
        {features?.map((item) => (
          <SwiperSlide>
            <img src={strapiImageUrlMaker(item?.image)} alt={item.title} />
            <h2 className={cls.text}>
              {strapiTranslater(item, `title`, locale)}
            </h2>
            <div
              className={cls.description}
              dangerouslySetInnerHTML={{
                __html: strapiTranslater(item, `description`, locale),
              }}
            />
          </SwiperSlide>
        ))}
        <SwiperButtons />
      </Swiper>
    </>
  )
}
