import React, { useState } from 'react'
import cls from './SwiperMenu.module.scss'
import { Typography, Container, Box } from '@mui/material'
import { useIsMobile } from '../../utils/useIsMobile'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import { menu } from '../../mock/menu'

import 'swiper/css'
import 'swiper/css/navigation'

import SwiperMenuItem from '../SwiperMenuItem/SwiperMenuItem'
import ProductInfo from '../ProductInfo/ProductInfo'
import { useRouter } from 'next/router'

export default function SwiperMenu({ bestsellersData }) {
  const { locale } = useRouter()
  const [productItem, setProductItem] = useState(null)
  
  const [isXs] = useIsMobile(480)
  const [isSm] = useIsMobile(768)
  const [isMd] = useIsMobile(1024)

  // MODALNI OCHISH FUNKSIYASI (Sizda shu yetishmayotgan edi)
  const handleOpen = (item) => {
    setProductItem(item)
  }

  return (
    <>
      <div className={cls.swiperMenuContainer} id={'slider-category'}>
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            className={cls.productTitle}
            textAlign="center"
            sx={{ fontWeight: 800, color: '#000', mb: 4 }}
          >
            {menu[locale].swiperTitile}
          </Typography>

          <Box sx={{ position: 'relative' }}>
            <Swiper
              // slidesPerView'ga qoldiq berish yonidagilar yopishib qolmasligini ta'minlaydi
              slidesPerView={isXs ? 1.3 : isSm ? 2.3 : isMd ? 3.3 : 4}
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              spaceBetween={0} 
              className="mySwiper"
            >
              {bestsellersData?.map((item) => (
                <SwiperSlide key={item.id}>
                  <SwiperMenuItem 
                    item={item} 
                    cls={cls} 
                    handleOpen={handleOpen} 
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Container>
      </div>

      <ProductInfo
        open={Boolean(productItem)}
        handleClose={() => setProductItem(null)}
        data={productItem} 
      />
    </>
  )
}