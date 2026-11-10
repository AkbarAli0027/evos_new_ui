import React from 'react'
import { Typography, Box } from '@mui/material'
import cls from './HistoryInfo.module.scss'
import { menu } from '../../mock/menu'
import { useRouter } from 'next/router'
import strapiImageUrlMaker from '../../utils/strapiImageUrlMaker'
import strapiTranslater from '../../utils/strapiTranslater'

function HistoryInfo({ data }) {
  const router = useRouter()

  const handleRedirect = () => {
    router.push(`/about`)
  }
  const { locale } = useRouter()

  return (
    <>
      <Box mb={'30px'}>
        <div id='historyInfo'>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            mx='auto'
            width='100%'
          >
            {/* Image */}
            <Box className={cls.image}>
              <img
                src={data && strapiImageUrlMaker(data?.image)}
                alt='history image'
              />
            </Box>
            {/* Title */}
            <div className={cls.card}>
              <Typography variant={`h4`} fontSize={22} mt={3}>
                {strapiTranslater(data, 'title', locale)}
              </Typography>
              {/* Context */}
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
      {/* Button to back */}
      <a href='#history'>
        <Box className={cls.button}>
          <span onClick={() => handleRedirect()} className={cls.back}>
            {menu[locale].btnBack}
          </span>
        </Box>
      </a>
    </>
  )
}

export default HistoryInfo
