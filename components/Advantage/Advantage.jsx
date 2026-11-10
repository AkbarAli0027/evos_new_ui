import React from 'react'
import { Box, Typography, Grid, Container } from '@mui/material'
import cls from './Advantage.module.scss'
import { useRouter } from 'next/router'
import { menu } from '../../mock/menu'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import strapiImageUrlMaker from '../../utils/strapiImageUrlMaker'
import strapiTranslater from '../../utils/strapiTranslater'

function Advantage({ advantage_items }) {
  const router = useRouter()
  const { locale } = router

  const handleRedirect = (id) => {
    router.push(`/vacancy/advantage/${id}`)
  }

  return (
    <Box className={cls.wrapper}>
      <Container>
        <Grid id='advantage' container spacing={1} className={cls.grid}>
          <Grid item lg={5} md={12} className={cls.desc}>
            <Box>
              <Typography variant='h2' className={cls.title}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: menu[locale].advantage,
                  }}
                />
              </Typography>
              <Typography className={cls.text}>
                {menu[locale].advantageDesc}
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={7} md={12}>
            <Grid container spacing={1} className={cls.boxGrid}>
              {advantage_items?.map((item) => (
                <Grid md={12} lg={6} className={cls.box} key={item.id}>
                  <Box className={cls.img}>
                    <img
                      src={item && strapiImageUrlMaker(item?.image)}
                      alt={item.title}
                    />
                  </Box>
                  <Box className={cls.body}>
                    <Typography variant='h4' className={cls.title}>
                      {strapiTranslater(item, 'title', locale)}
                    </Typography>
                    <div
                      onClick={() => handleRedirect(item?.slug)}
                      className={cls.more}
                    >
                      {menu[locale].more} <ArrowForwardIcon />
                    </div>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Advantage
