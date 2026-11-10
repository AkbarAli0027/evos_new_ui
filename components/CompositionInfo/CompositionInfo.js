import cls from './Composition.module.scss'
import { menu } from '../../mock/menu'
import { useRouter } from 'next/router'
import { Box, Grid, Typography } from '@mui/material'

export default function CompositionInfo({ data }) {
  const { locale } = useRouter()
  return (
    <Box>
      <Typography variant='h1' sx={{ color: '#309b42', textAlign: 'center' }}>
        {menu[locale].composition}
      </Typography>
      {data
        ?.sort((a, b) => a.id - b.id)
        ?.map((item) => (
          <Box className={cls.ItemWrap} key={item.id}>
            <div className={cls.line}>
              <img
                className={cls.img}
                src={`${process.env.BASE_URL_STRAPI_IMAGE}${item?.attributes?.image?.data?.attributes?.url}`}
                alt={item.attributes.name_uz}
              />
            </div>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <div className={cls.itemUzWrap}>
                  <Typography className={cls.itemWrapTitle}>
                    {item.attributes.name_uz}
                  </Typography>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.attributes.description_uz,
                    }}
                    className={cls.itemList}
                  ></div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={cls.itemUzWrap}>
                  <Typography className={cls.itemWrapTitle}>
                    {item.attributes.name_ru}
                  </Typography>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.attributes.description_ru,
                    }}
                    className={cls.itemList}
                  ></div>
                </div>
              </Grid>
            </Grid>
          </Box>
        ))}
    </Box>
  )
}
