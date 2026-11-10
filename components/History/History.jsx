import React, { useState } from 'react'
import { Box, Typography, Container } from '@mui/material'
import cls from './History.module.scss'
import { useRouter } from 'next/router'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { menu } from '../../mock/menu'
import strapiImageUrlMaker from '../../utils/strapiImageUrlMaker'
import strapiTranslater from '../../utils/strapiTranslater'

function History({ topics }) {
  const router = useRouter()
  const { locale } = router

  const handleRedirect = (id) => {
    router.push(`/about/${id}`)
  }

  const historyElems = topics.map((item) => {
    return (
      <Box key={item.id} className={cls.card}>
        <Typography className={cls.title}>
          {strapiTranslater(item, 'title', locale)}
        </Typography>
        <Typography className={cls.text}>
          {strapiTranslater(item, 'description', locale)}
        </Typography>
        <Box className={cls.image}>
          <img
            src={item && strapiImageUrlMaker(item?.image)}
            alt='history image'
          />
        </Box>
        <a onClick={() => handleRedirect(item?.slug)} className={cls.arrow}>
          {menu[locale].more} <ArrowForwardIcon />
        </a>
      </Box>
    )
  })

  return (
    <>
      <Box className={cls.wrapper}>
        <Container>
          <Box className={cls.cards} id='history'>
            {historyElems}
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default History
