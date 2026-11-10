import { Box } from '@mui/material'
import cls from './SecondCollage.module.scss'
import strapiTranslater from '../../utils/strapiTranslater'
import strapiImageUrlMaker from '../../utils/strapiImageUrlMaker'
import Link from 'next/link'

function SecondCollage({ item }) {
  return (
    <Box className={cls.imgWrapper}>
      {item?.attributes?.single_image_banner === true ? (
        <Box className={cls.imgBox}>
          {item?.attributes?.newSlug ? (
            <Link href={`/news/${item?.attributes?.newSlug}`}>
            <img
              className={cls.img_link}
              src={
                item?.attributes?.single_image?.data &&
                'http://admin.evos.uz' +
                  item?.attributes?.single_image?.data?.[0]?.attributes?.url
              }
              alt='banner-img112'
            />
            </Link>
          ) : (
            <img
              className={cls.img_1}
              src={
                item?.attributes?.single_image?.data &&
                'http://admin.evos.uz' +
                  item?.attributes?.single_image?.data?.[0]?.attributes?.url
              }
              alt='banner-img112'
            />
          )}
        </Box>
      ) : (
        item?.attributes?.newSlug ? (
          <Link href={`/news/${item?.attributes?.newSlug}`}>
          <Box className={cls.imgBox} >
            <img
              className={cls.img_link}
              src={
                item?.attributes?.images?.data &&
                'http://admin.evos.uz' +
                  item?.attributes?.images?.data?.[0]?.attributes?.url
              }
              alt='banner-img11'
            />
            <img
              className={cls.img_link3}
              src={
                item?.attributes?.images?.data &&
                'http://admin.evos.uz' +
                  item?.attributes?.images?.data?.[1]?.attributes?.url
              }
              alt='banner-img'
            />
          </Box>
          <Box className={cls.imgBox}>
            <img
              className={cls.img_link2}
              src={
                item?.attributes?.images?.data &&
                'http://admin.evos.uz' +
                  item?.attributes?.images?.data?.[2]?.attributes?.url
              }
              alt='banner-img'
            />
            <img
              className={cls.img_link4}
              src={
                item?.attributes?.images?.data &&
                'http://admin.evos.uz' +
                  item?.attributes?.images?.data?.[3]?.attributes?.url
              }
              alt='banner-img'
            />
          </Box>
        </Link>
        ) : (
         <>
           <Box className={cls.imgBox} >
            <img
              className={cls.img_1}
              src={
                item?.attributes?.images?.data &&
                'http://admin.evos.uz' +
                  item?.attributes?.images?.data?.[0]?.attributes?.url
              }
              alt='banner-img11'
            />
            <img
              className={cls.img_3}
              src={
                item?.attributes?.images?.data &&
                'http://admin.evos.uz' +
                  item?.attributes?.images?.data?.[1]?.attributes?.url
              }
              alt='banner-img'
            />
          </Box>
          <Box className={cls.imgBox}>
            <img
              className={cls.img_2}
              src={
                item?.attributes?.images?.data &&
                'http://admin.evos.uz' +
                  item?.attributes?.images?.data?.[2]?.attributes?.url
              }
              alt='banner-img'
            />
            <img
              className={cls.img_4}
              src={
                item?.attributes?.images?.data &&
                'http://admin.evos.uz' +
                  item?.attributes?.images?.data?.[3]?.attributes?.url
              }
              alt='banner-img'
            />
          </Box>
         </>
        )
      )}
    </Box>
  )
}

export default SecondCollage
