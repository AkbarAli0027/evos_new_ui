import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import cls from './MobileCollage.module.scss'

function MobileCollage({ item }) {
  return (
    <Box className={cls.imgWrapper}>
      {item?.attributes?.single_image_banner === true ? (
        <Grid className={cls.imgBox} id={cls.singleImg}>
          {item?.attributes?.newSlug ?
            <Link href={`/news/${item?.attributes?.newSlug}`}>
              <img
                src={
                  item?.attributes?.single_image?.data &&
                  'http://admin.evos.uz' +
                  item?.attributes?.single_image?.data?.[0]?.attributes?.url
                }
                alt='banner-img'
                className={cls.mobCollageLink1}



              />
            </Link> : (
              <img
                src={
                  item?.attributes?.single_image?.data &&
                  'http://admin.evos.uz' +
                  item?.attributes?.single_image?.data?.[0]?.attributes?.url
                }
                alt='banner-img'
                className={cls.mobCollage1}
              />
            )}
        </Grid>
      ) : (
        <Grid className={cls.imgWrapper}>
          {item?.attributes?.newSlug ? (
            <Link href={`/news/$${item?.attributes?.newSlug}`}>
              <Grid className={cls.imgBox}>
                <img
                  src={
                    item?.attributes?.mobile_images?.data &&
                    'http://admin.evos.uz' +
                    item?.attributes?.mobile_images?.data?.[0]?.attributes?.url
                  }
                  alt='banner-img'
                  className={cls.mobCollageLink1}
                />
                <img
                  src={
                    item?.attributes?.mobile_images?.data &&
                    'http://admin.evos.uz' +
                    item?.attributes?.mobile_images?.data?.[1]?.attributes?.url
                  }
                  alt='banner-img'
                  className={cls.mobCollageLink2}
                />
                <img
                  src={
                    item?.attributes?.mobile_images?.data &&
                    'http://admin.evos.uz' +
                    item?.attributes?.mobile_images?.data?.[2]?.attributes?.url
                  }
                  alt='banner-img'
                  className={cls.mobCollageLink3}
                />
                <img
                  src={
                    item?.attributes?.mobile_images?.data &&
                    'http://admin.evos.uz' +
                    item?.attributes?.mobile_images?.data?.[3]?.attributes?.url
                  }
                  alt='banner-img'
                  className={cls.mobCollageLink4}
                />
              </Grid>
            </Link>
          ) : (
            <Grid className={cls.imgBox}>
              <img
                src={
                  item?.attributes?.mobile_images?.data &&
                  'http://admin.evos.uz' +
                  item?.attributes?.mobile_images?.data?.[0]?.attributes?.url
                }
                alt='banner-img'
                className={cls.mobCollage1}
              />
              <img
                src={
                  item?.attributes?.mobile_images?.data &&
                  'http://admin.evos.uz' +
                  item?.attributes?.mobile_images?.data?.[1]?.attributes?.url
                }
                alt='banner-img'
                className={cls.mobCollage2}
              />
              <img
                src={
                  item?.attributes?.mobile_images?.data &&
                  'http://admin.evos.uz' +
                  item?.attributes?.mobile_images?.data?.[2]?.attributes?.url
                }
                alt='banner-img'
                className={cls.mobCollage3}
              />
              <img
                src={
                  item?.attributes?.mobile_images?.data &&
                  'http://admin.evos.uz' +
                  item?.attributes?.mobile_images?.data?.[3]?.attributes?.url
                }
                alt='banner-img'
                className={cls.mobCollage4}
              />
            </Grid>
          )}
        </Grid>
      )}
    </Box>
  )
}

export default MobileCollage
