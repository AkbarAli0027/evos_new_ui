import React, { useState } from 'react'
import { Box, Typography, Grid } from '@mui/material'
import cls from './Profile.module.scss'
import { useRouter } from 'next/router'
import { menu } from '../../mock/menu'
import { profile, profile_uz } from '../../mock/info'
import strapiImageUrlMaker from '../../utils/strapiImageUrlMaker'
import strapiTranslater from '../../utils/strapiTranslater'

function Profile({ data, profiles }) {
  const router = useRouter()
  const { locale } = router
  const translatedData = locale === 'ru' ? profile : profile_uz
  const [productItem, setProductItem] = useState(null)

  const handleOpen = (event, item) => {
    event.preventDefault()
    setProductItem(item)
  }

  const handleClose = () => {
    setProductItem(null)
  }

  return (
    <>
      <Box>
        <Typography variant={`h1`} color={`black`} className={cls.title}>
          {menu[locale].profile}
        </Typography>
      </Box>

      <Box className={cls.wrapper}>
        <Grid container spacing={1} className={cls.grid}>
          {profiles?.map((item) => (
            <Grid md={12} lg={6} key={item.id} className={cls.gridItem}>
              <Box className={cls.img}>
                <img
                  src={item && strapiImageUrlMaker(item?.image)}
                  alt={item.title}
                />
              </Box>
              <Box>
                <h2 className={cls.text}>
                  {strapiTranslater(item, 'title', locale)}
                </h2>
                <p className={cls.description}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: strapiTranslater(item, 'description', locale),
                    }}
                  />
                </p>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Profile
