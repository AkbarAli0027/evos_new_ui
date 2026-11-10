import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import CardWrapper from '../CardWrapper/CardWrapper'
import cls from './VacancyDesc.module.scss'
import VacancyRequestForm from '../VacancyRequestDialog/VacancyRequestForm'
import { menu } from '../../mock/menu.js'
import { useRouter } from 'next/router'
import strapiTranslater from '../../utils/strapiTranslater'
import { btnText } from '../../mock/menu'

function VacancyDesc({ data }) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { locale } = router

  const handleRedirect = () => {
    router.push(`/vacancy`)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Typography variant={`h1`} color={`black`} className={cls.title}>
        {strapiTranslater(data, 'title', locale)}
      </Typography>
      <Box className={cls.wrapper} mb={'30px'}>
        <CardWrapper>
          <div
            className={cls.detail}
            dangerouslySetInnerHTML={{
              __html: strapiTranslater(data, 'detail', locale),
            }}
          />
        </CardWrapper>
      </Box>
      <VacancyRequestForm onClose={handleClose} open={open} />
      <a>
        <Box className={cls.button}>
          <span onClick={() => handleRedirect()} className={cls.back}>
            {menu[locale].btnBack}
          </span>
        </Box>
      </a>
    </>
  )
}

export default VacancyDesc
