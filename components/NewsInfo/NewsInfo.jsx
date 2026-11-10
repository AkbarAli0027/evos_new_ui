import React from 'react'
import { Typography, Box } from '@mui/material'
import cls from './NewsInfo.module.scss'
import { useRouter } from 'next/router'
import strapiTranslater from '../../utils/strapiTranslater'
import strapiImageUrlMaker from '../../utils/strapiImageUrlMaker'



function NewsInfo({ data }) {
  const router = useRouter()
  const { locale } = router
  const data2 = data?.images?.data;
  // console.log('data2', `${process.env.BASE_URL_STRAPI_IMAGE}${data2[0]?.attributes?.url}`);
  return (
    <>
      <div id='newsInfo'>
        <Box className={cls.newsBox}>
          <Box className={cls.image}>
            <img
              src={strapiImageUrlMaker(strapiTranslater(data, 'image', locale))}
              alt='history image'
            />
          </Box>
          <div className={cls.card}>
            <Typography variant={`h4`} fontSize={22} className={cls.title}>
              {strapiTranslater(data, 'title', locale)}
            </Typography>
            <Typography
              variant={`body1`}
              fontSize={15}
              mt='20px'
              className={cls.text}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: strapiTranslater(data, 'context', locale),
                }}
              />
            </Typography>
          </div>
        </Box>
      </div>
      <div className={cls.newsBox_images}>
        {data?.images !== undefined ? 
        data2?.map(image => (
          <div key={image?.id} className={cls.newsBox_images_item}>
          <img
                src={`${process.env.BASE_URL_STRAPI_IMAGE}${image?.attributes?.url}`}
                alt='image'
            />
          </div>
         )) : (
          ''
         )
        }
        
        
        {/* <div className={cls.newsBox_images_item}>
        <img
              src={`${process.env.BASE_URL_STRAPI_IMAGE}${data2[1]?.attributes?.url}`}
              alt='history image'
            />
        </div>
        <div className={cls.newsBox_images_item}>
        <img
              src={`${process.env.BASE_URL_STRAPI_IMAGE}${data2[2]?.attributes?.url}`}
              alt='history image'
            />
        </div>
        <div className={cls.newsBox_images_item}>
        <img
              src={`${process.env.BASE_URL_STRAPI_IMAGE}${data2[3]?.attributes?.url}`}
              alt='history image'
            />
        </div> */}
      </div>
      <button className={cls.button} onClick={() => router.push('/news')}>
        Все новости
      </button>
    </>
  )
}

export default NewsInfo
