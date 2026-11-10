import React from 'react'
import { fetchMultipleUrls } from '../utils/fetchMultipleUrls'
import { useRouter } from 'next/router'
import { Box, Container, Typography, Divider, Grid } from '@mui/material'
import CardWrapper from '../components/CardWrapper/CardWrapper'
import SEO from '../components/seo'
import cls from '../styles/Contacts.module.css'
import { info, info_uz } from '../mock/contacts'
import { menu } from '../mock/menu'
import { YMaps, Map, ZoomControl, GeoObject } from 'react-yandex-maps'
import { motion } from 'framer-motion'
import { metaData } from '../mock/metaData'
import strapiTranslater from '../utils/strapiTranslater'

const mapState = {
  center: [41.31, 69.31],
  zoom: 10,
}
export default function Contacts({ contacts, branches }) {
  const { locale } = useRouter()
  const translatedInfoData = locale === 'ru' ? info : info_uz

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <SEO title={metaData[locale]?.contact?.title} />
      <Box id='boxRoot'>
        <Container maxWidth='xl'>
          <Grid container spacing={2} className={cls.grid}>
            <Grid md={12} lg={6}>
              <CardWrapper borderRadius='4px'>
                <Box
                  display='flex'
                  justifyContent='space-between'
                  flexDirection='column'
                >
                  <Typography
                    variant={`h1`}
                    color={`black`}
                    marginBottom='20px'
                  >
                    {menu[locale].contacts}
                  </Typography>
                  <Box className={cls.callCenter}>
                    <Typography color={`black`}>Call-центр</Typography>
                    <Typography
                      variant={`h20`}
                      sx={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <a className='phoneNumbers' href='tel:+998712031212'>
                        +998 71-203-12-12
                      </a>
                      <a className='phoneNumbers' href='tel:+998712035555'>
                        +998 71-203-55-55
                      </a>
                    </Typography>
                  </Box>
                  <Box className={cls.deliveryCall}>
                    <Typography color={`black`}>
                      {menu[locale].deliveryNumber}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      {contacts?.map((elem) => (
                        <Box key={elem.id} className={cls.regionNumbers}>
                          <span>
                            {strapiTranslater(elem, 'location', locale)}
                          </span>
                          <a
                            className='phoneNumbers'
                            href={`tel:+998${elem?.number?.replaceAll(
                              '-',
                              ''
                            )}`}
                          >
                            +998 {elem?.number}
                          </a>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Divider />
                  {translatedInfoData.map((item) => (
                    <Box className={cls.deliveryCall} key={item.id} mt='10px'>
                      <Typography color={`black`}>{item.title}</Typography>
                      <Typography
                        variant={`h20`}
                        sx={{ display: 'flex', flexDirection: 'column' }}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.info,
                          }}
                        />
                      </Typography>
                    </Box>
                  ))}
                  <Typography variant={`h19`} sx={{ marginTop: '30px' }}>
                    {menu[locale].bot}
                    <a
                      style={{ color: '#309B42' }}
                      href='https://t.me/evosdeliverybot'
                      target='_blank'
                      rel='noreferrer'
                    >
                      https://t.me/evosdeliverybot
                    </a>
                    .
                  </Typography>
                </Box>
              </CardWrapper>
            </Grid>
            <Grid md={12} lg={6} width='inherit'>
              <Box
                sx={{
                  background: '#fff',
                  padding: '32px',
                  height: '100%',
                  width: '100%',
                  '@media (max-width: 992px)': { height: '48vh' },
                }}
              >
                <YMaps>
                  <Map
                    width='100%'
                    height='100%'
                    state={mapState}
                    instanceRef={(ref) => {
                      ref && ref.behaviors.disable('scrollZoom')
                    }}
                  >
                    {branches?.data?.map((branch, i) => (
                      <GeoObject
                        key={branch.id}
                        options={{
                          iconLayout: 'default#image',
                          iconImageHref: '/images/svg/location_pin.svg',
                          imageIconSize: [96, 96],
                        }}
                        geometry={{
                          type: 'Point',
                          coordinates: [
                            parseFloat(branch?.location?.split(',')[0]),
                            parseFloat(branch?.location?.split(',')[1]),
                          ],
                        }}
                        properties={{ hintContent: branch.title }}
                        modules={['geoObject.addon.hint']}
                      />
                    ))}
                    <ZoomControl
                      options={{
                        size: 'auto',
                        zoomDuration: 500,
                      }}
                    />
                  </Map>
                </YMaps>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  )
}

export async function getServerSideProps({ locale }) {
  const response = await fetch(
    process.env.BASE_URL_STRAPI + `/contacts-page?populate=contacts`
  )
  const data = await response.json()

  const [branches] = await fetchMultipleUrls([
    {
      version: 2,
      endpoint: '/service/branch-list',
    },
  ])

  return {
    props: {
      branches,
      contacts: data?.data?.attributes?.contacts,
    },
  }
}
