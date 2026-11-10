import React, { useState } from 'react'
import { Dialog, Typography, Button, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import cls from './AdvantageInfo.module.scss'
import { useIsMobile } from '../../utils/useIsMobile'
import { menu } from '../../mock/menu'
import { useRouter } from 'next/router'
import CloseIconEffect from '../CloseIcon/CloseIcon'
import strapiTranslater from '../../utils/strapiTranslater.js'

const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: '4px !important',
    maxWidth: '1248px',
  },
  card: {
    width: '100%',
  },
}))

function AdvantageInfo({ data }) {
  const classes = useStyles()
  const router = useRouter()
  const { locale } = router

  const handleRedirect = () => {
    router.push(`/vacancy`)
  }
  return (
    <>
      <Box mb={'30px'}>
        <div id='advantageInfo'>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            mx='auto'
            width='100%'
          >
            <div className={cls.card}>
              <Typography variant={`h4`} fontSize={22} mt={3}>
                {strapiTranslater(data, 'title', locale)}
              </Typography>
              <Typography variant={`body1`} fontSize={15} mt='20px'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: strapiTranslater(data, 'context', locale),
                  }}
                />
              </Typography>
            </div>
          </Box>
        </div>
      </Box>
      <a href='#advantage'>
        <Box className={cls.button}>
          <span onClick={() => handleRedirect()} className={cls.back}>
            {menu[locale].btnBack}
          </span>
        </Box>
      </a>
    </>
  )
}

export default AdvantageInfo
