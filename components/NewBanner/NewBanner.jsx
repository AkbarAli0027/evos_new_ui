import { Box, ButtonBase, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import cls from './NewBanner.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Collage from '../Collage/Collage'
import { inputText, menu } from '../../mock/menu'
import { useIsMobile } from '../../utils/useIsMobile'
import Slider from 'react-slick/lib/slider'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import { useRouter } from 'next/router'
import { Bekon, CheeseBurger, HotDog, Humburger, Salt } from '../Icons.js'
import SecondCollage from '../SecondCollage/SecondCollage'
import MobileCollage from '../MobileCollage/MobileCollage'
import strapiTranslater from '../../utils/strapiTranslater'
import Link from 'next/link'

function NewBanner({ bannerData, adress }) {
  const sliderRef = useRef(null)
  const { locale } = useRouter()
  const [isMobile] = useIsMobile(992)
  const router = useRouter();
  const [isAnimation, setAnimation] = useState(false)

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    adaptiveHeight: true,
    arrows: false,
  }

  useEffect(() => {
    const handleScroll = () => {

      var someDiv = document?.getElementById('slider-category')
      var distanceToTop = someDiv?.getBoundingClientRect()?.top
      if (isMobile) {
        if (distanceToTop < 30) {
          setAnimation(true)
        } else {
          setAnimation(false)
        }
      } else {
        if (distanceToTop < -72) {
          setAnimation(true)
        } else {
          setAnimation(false)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById('slider-category');
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth', // Ensures smooth scrolling
        block: 'start', // Aligns to the top of the target section
      });
    }
  };

  return (
    <Box className={cls.wrapper} id='newBanner'>
      <Container>
        <Slider {...settings} ref={sliderRef}>
          {bannerData?.data?.map((item, index) => (
            <Container key={index} className={cls.bannerContainer}>
              {item?.attributes?.single_banner === true ? (
                <Grid container className={cls.singleImageGrid}>
                  <Container className={cls.singleImageBanner}>
                    <div className={cls.bannerImage}>
                      {item?.attributes?.newSlug ? (
                        <Link href={`/news/${item?.attributes?.newSlug}`} passHref>
                          <img
                            src='../../images/singleBanner.png'
                            alt='banner'
                          />
                        </Link>
                      ) : (
                        <img src='../../images/singleBanner.png' alt='banner' />
                      )}
                    </div>
                  </Container>
                </Grid>
              ) : (
                <Grid container spacing={1} className={cls.grid}>
                  <Grid item md={6} lg={6}>
                    <Box className={cls.box}>
                      <Box>
                        {/* <Typography
                          style={{ color: `yellow`, fontSize: `16px` }}
                          variant={`h5`}
                          className={cls.title}
                        >
                          {adress?.adress} <br />
                          {adress?.title}
                        </Typography> */}

                        <Typography variant={`h2`} className={cls.title}>
                          {strapiTranslater(item?.attributes, 'title', locale)}
                        </Typography>
                        <Box className={cls.icons}>
                          <Salt />
                          <Humburger />
                          <HotDog />
                          <CheeseBurger />
                          <Bekon />
                        </Box>
                        <Typography className={cls.text}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: strapiTranslater(
                                item?.attributes,
                                'subtitle',
                                locale
                              ),
                            }}
                          />
                        </Typography>

                        {item?.attributes?.newSlug !== null ? (
                          <Link href={`/news/${item?.attributes?.newSlug}`} passHref>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: menu[locale].readNew,
                              }}
                              className={cls.readNews}
                            />
                          </Link>
                        ) : (
                          ''
                        )}
                      </Box>
                      <Box className={cls.btnGroup}>
                        <Box className={cls.btnBox}>
                          <Link href='#slider-category' className={cls.btn} passHref>
                            <a className={cls.btn}>
                              {menu[locale].ourMenu}
                            </a>
                          </Link>

                          <a
                            href='https://app.evos.uz/'
                            target='_blank'
                            rel='noreferrer'
                          >
                            <button className={cls.btn}>
                              {menu[locale].appEvos} <ArrowForwardIcon />
                            </button>
                          </a>
                          <Link href={`/composition`}>
                            <a>
                              <button className={cls.btn}>
                                {menu[locale].productContent}
                              </button>
                            </a>
                          </Link>
                          <Link href={`/partners/2`}>
                            <a>
                              <button className={cls.btn}>{inputText[locale].forPartner}</button>
                            </a>
                          </Link>
                          {/* <Link href={`/promotion`}>
                            <a>
                              <button className={cls.btn}>АКЦИЯ</button>
                            </a>
                          </Link> */}
                        </Box>
                        <Box className={cls.userBox}>
                          <Box className={cls.img}>
                            <img src='../../images/svg/user1.svg' alt='user' />
                            <img src='../../images/svg/user2.svg' alt='user' />
                            <img src='../../images/svg/user3.svg' alt='user' />
                          </Box>
                          <Typography>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: menu[locale].positiveReviews,
                              }}
                            />
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    sm={12}
                    md={6}
                    lg={6}
                    xs={12}
                    className={cls.collageGrid}
                  >
                    {isMobile ? (
                      <MobileCollage item={item} />
                    ) : (
                      <>
                        {item?.attributes?.title?.includes('Акция') ? (
                          <Link href={`/2024`}>
                            <a>
                              <SecondCollage item={item} />
                            </a>
                          </Link>
                        ) : (
                          <SecondCollage item={item} />
                        )}
                      </>
                      // <SecondCollage item={item} />
                    )}
                  </Grid>
                </Grid>
              )}
            </Container>
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
      </Container>
    </Box>
  )
}

export default NewBanner
