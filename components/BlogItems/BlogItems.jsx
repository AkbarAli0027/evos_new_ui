import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import cls from './BlogItems.module.scss'
import { useRouter } from 'next/router'
import { menu, btnText } from '../../mock/menu'

function BlogItems({ data }) {
  const router = useRouter()
  const { locale } = useRouter()
  const handleRedirect = (id = 0) => {
    router.push(`/news/${id}`)
  }
  return (
    <Box>
      <Typography
        variant={`h1`}
        color={`black`}
        marginBottom='36px'
        className={cls.title}
      >
        {menu[locale].news}
      </Typography>
      <Box
        mb={2}
        sx={{ background: '#ffffff' }}
        className={`${cls.paddingBox} ${cls.firstChild}`}
        onClick={() => handleRedirect()}
        borderRadius='4px'
      >
        <Image
          src={data[0].image}
          alt={data[0].title}
          width={670}
          height={390}
          objectFit='cover'
        />
        <Box
          display='flex'
          flexDirection='column'
          alignItems='flex-start'
          justifyContent='center'
          className={cls.textBox}
        >
          <Box
            display='flex'
            alignItems='flex-start'
            justifyContent='center'
            flexGrow='1'
            className={cls.innerTextBox}
          >
            <Typography variant={`h18`} className={cls.dateText}>
              {data[0].date}
            </Typography>
            <Typography className={cls.cardTitle}>{data[0].title}</Typography>
            <Typography
              variant={`h19`}
              sx={{ marginTop: '40px' }}
              className={cls.description}
            >
              {data[0].description}
            </Typography>
          </Box>
          <button className={cls.btn} onClick={() => handleRedirect()}>
            {btnText[locale].details}
          </button>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid key={index} item xs={12} md={6} lg={4}>
            <Box
              display='flex'
              flexDirection='column'
              className={`${cls.paddingBox} ${cls.maxWidthBox}`}
              sx={{ background: '#ffffff' }}
              onClick={() => handleRedirect(item.id)}
              borderRadius='4px'
            >
              <Image
                src={item.image}
                width={341}
                height={199}
                alt={item.title}
                objectFit='cover'
              />
              <Typography className={cls.descriptionTitle}>
                {item.title}
              </Typography>
              <Typography variant={`h14`}>{item.date}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default BlogItems
