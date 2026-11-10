import React from 'react'
import { Box, Typography } from '@mui/material'
import CardWrapper from '../CardWrapper/CardWrapper'
import cls from './BranchDesc.module.scss'
import { YMaps, Map, ZoomControl, Placemark } from 'react-yandex-maps'
import { menu } from '../../mock/menu'
import { useRouter } from 'next/router'
import { formatWorkingHours } from '../../utils/formatWorkingHours'

function BranchDesc({ branchItem }) {
  const getLocation = branchItem[0]?.data?.location?.split(',')

  const { locale } = useRouter()

  return (
    <div>
      <Typography
        variant={`h1`}
        color={`black`}
        className={cls.title}
        id='branchDescription'
      >
        {
          branchItem[0]?.data?.details?.find(
            (item) => item?.language === locale
          )?.title
        }
      </Typography>
      <Box display='flex' className={cls.verticalMargin}>
        <Box className={cls.maxWidthBox}>
          <CardWrapper>
            <Box display='flex' flexDirection='column' mt={3} mb={2}>
              <Box mb={3} mt={-3} className={cls.mobileTitle}>
                <Typography variant='h1'>
                  {branchItem[0]?.data?.title}
                </Typography>
              </Box>
              <div className={cls.branchBox}>
                <Box
                  display='flex'
                  flexWrap='nowrap'
                  justifyContent='space-between'
                  sx={{ '@media (max-width: 576px)': { display: 'block' } }}
                  alignItems='center'
                  marginBottom='16px'
                >
                  <Box>
                    <Typography variant={`h11`} sx={{ marginRight: '32px' }}>
                      {menu[locale].address}
                    </Typography>
                  </Box>
                  <Typography
                    variant={`h3`}
                    sx={{
                      width: '50%',
                      textAlign: 'right',
                      '@media (max-width: 576px)': {
                        width: '100%',
                        textAlign: 'left',
                      },
                    }}
                  >
                    {branchItem[0]?.data?.adress}
                  </Typography>
                </Box>
                <Box
                  display='flex'
                  flexWrap='nowrap'
                  justifyContent='space-between'
                  sx={{ '@media (max-width: 576px)': { display: 'block' } }}
                  alignItems='center'
                  marginBottom='16px'
                >
                  <Box>
                    <Typography
                      variant={`h11`}
                      sx={{
                        marginRight: '32px',
                        '@media (max-width: 576px)': {
                          lineHeight: '18px',
                          fontSize: '16px',
                        },
                      }}
                    >
                      {menu[locale].workingHours}
                    </Typography>
                  </Box>
                  <Typography
                    variant={`h3`}
                    sx={{
                      width: '50%',
                      textAlign: 'right',
                      '@media (max-width: 576px)': {
                        width: '100%',
                        textAlign: 'end',
                        lineHeight: '18px',
                        fontSize: '16px',
                        width: 'auto',
                      },
                    }}
                  >
                    {formatWorkingHours(
                      branchItem[0]?.data?.details[1]?.work_time_from,
                      branchItem[0]?.data?.details[1]?.work_time_to
                    )}
                  </Typography>
                </Box>
              </div>
              <Box marginBottom='20px'>
                <YMaps>
                  <Map
                    width='100%'
                    style={{ height: '300px' }}
                    defaultState={{
                      center: [
                        parseFloat(getLocation && getLocation[0]),
                        parseFloat(getLocation && getLocation[1]),
                      ],
                      zoom: 15,
                    }}
                  >
                    <Placemark
                      key={branchItem[0]?.data?.id}
                      properties={{
                        iconContent: `${branchItem[0]?.data?.title}`,
                      }}
                      options={{
                        preset: 'islands#blackStretchyIcon',
                      }}
                      geometry={[
                        parseFloat(getLocation && getLocation[0]),
                        parseFloat(getLocation && getLocation[1]),
                      ]}
                    />
                    <ZoomControl
                      options={{
                        size: 'auto',
                        zoomDuration: 500,
                      }}
                    />
                  </Map>
                </YMaps>
              </Box>
            </Box>
          </CardWrapper>
        </Box>
      </Box>
    </div>
  )
}

export default BranchDesc
