import React from 'react'
import cls from './Info.module.scss'
import { useRouter } from 'next/router'
import { Box, Typography, Grid, Container } from '@mui/material'
import InfoSlider from '../InfoSlider/InfoSlider'
import { menu } from '../../mock/menu'
import { useIsMobile } from '../../utils/useIsMobile'
import strapiImageUrlMaker from '../../utils/strapiImageUrlMaker'
import strapiTranslater from '../../utils/strapiTranslater'

function Info({ features }) {
  const [isMobile] = useIsMobile(900)
  const { locale } = useRouter()

  const featuresItems = features?.map((item) => (
    <Grid xs={12} md={6} lg={4} item key={item.id} className={cls.grid}>
      <Box className={cls.img}>
        <img src={item && strapiImageUrlMaker(item?.image)} alt={item.title} />
      </Box>
      <Box>
        <h2 className={cls.text}>{strapiTranslater(item, `title`, locale)}</h2>
        <div
          className={cls.description}
          dangerouslySetInnerHTML={{
            __html: strapiTranslater(item, `description`, locale),
          }}
        />
      </Box>
    </Grid>
  ))

  return (
    <>
      <Container>
        <Typography variant={`h1`} color={`black`} className={cls.title}>
          {menu[locale].aboutUs}
        </Typography>
      </Container>
      <Box className={cls.wrapper}>
        {isMobile ? (
          <InfoSlider features={features} />
        ) : (
          <Container>
            <Grid container className={cls.gridContainer} id='slide'>
              {featuresItems}
            </Grid>
          </Container>
        )}
      </Box>
    </>
  )
}

export default Info
