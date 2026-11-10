import React from 'react'
import BannerImg from '../../public/images/banner.jpg'
import Slider from 'react-slick'
// import BannerImg1 from '../../public/images/banner1.png'
import BannerImg3 from '../../public/images/banner3.svg'
import BannerImg2 from '../../public/images/banner1.png'
import cls from './Banner.module.scss'

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    adaptiveHeight: true,
  }
  return (
    <div className={cls.root} id='banner'>
      <Slider {...settings}>
        <div className={cls.imageWrapper}>
          <img
            src={BannerImg.src}
            alt='Picture of the author'
            className={cls.bannerImage}
          />
        </div>
        <div className={cls.imageWrapper}>
          <img
            src={BannerImg2.src}
            className={cls.bannerImage}
            alt='Picture of the author'
          />
        </div>
        <div className={cls.imageWrapper}>
          <img
            src={BannerImg3.src}
            className={cls.bannerImage}
            alt='Picture of the author'
          />
        </div>
      </Slider>
    </div>
  )
}

export default Banner
