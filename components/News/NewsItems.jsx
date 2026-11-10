import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import cls from './NewsItems.module.scss'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'

const CustomBox = styled(Box)(({ theme }) => ({
  '& .MuiBox-root': {
    marginBottom: '16px',
    marginRight: '0',
    '&:lastChild': {
      marginRight: '0',
    },
    '&:hover': {
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.06)',
    },
  },
}))

const blogData = [
  {
    image: '/images/cookingSm.png',
    title: 'Однодневный рабочий процесс повара в EVOS',
    date: 'Опыт работы не менее 1-го года на аналогичной должности.Открытие Верховного суда; Tesla набирает рекордную прибыль; и другие новости через минуту.',
  },
  {
    image: '/images/cookingSm.png',
    title: 'Однодневный рабочий процесс повара в EVOS',
    date: 'Опыт работы не менее 1-го года на аналогичной должности.Открытие Верховного суда; Tesla набирает рекордную прибыль; и другие новости через минуту.',
  },
  {
    image: '/images/cookingSm.png',
    title: 'Однодневный рабочий процесс повара в EVOS',
    date: 'Опыт работы не менее 1-го года на аналогичной должности.Открытие Верховного суда; Tesla набирает рекордную прибыль; и другие новости через минуту.',
  },
  {
    image: '/images/cookingSm.png',
    title: 'Однодневный рабочий процесс повара в EVOS',
    date: 'Опыт работы не менее 1-го года на аналогичной должности.Открытие Верховного суда; Tesla набирает рекордную прибыль; и другие новости через минуту.',
  },
  {
    image: '/images/cookingSm.png',
    title: 'Однодневный рабочий процесс повара в EVOS',
    date: 'Опыт работы не менее 1-го года на аналогичной должности.Открытие Верховного суда; Tesla набирает рекордную прибыль; и другие новости через минуту.',
  },
  {
    image: '/images/cookingSm.png',
    title: 'Однодневный рабочий процесс повара в EVOS',
    date: 'Опыт работы не менее 1-го года на аналогичной должности.Открытие Верховного суда; Tesla набирает рекордную прибыль; и другие новости через минуту.',
  },
]

function NewsItems() {
  const router = useRouter()
  const handleRedirect = () => {
    router.push('./news-desc')
  }
  return (
    <>
      <Typography
        variant={`h1`}
        color={`black`}
        sx={{ marginBottom: '36px' }}
        className={cls.title}
      >
        Уведомления
      </Typography>
      <Box display='flex' marginTop='16px' flexWrap='wrap' columnGap='16px'>
        {blogData.map((item, index) => (
          <CustomBox key={index}>
            <Box
              display='flex'
              flexDirection='column'
              maxWidth='405px'
              sx={{ background: '#ffffff' }}
              className={cls.boxPadding}
            >
              <Image
                src={item.image}
                width={341}
                height={199}
                alt={item.title}
              />
              <Typography
                variant={`h13`}
                sx={{ marginBottom: '24px', marginTop: '24px' }}
              >
                {item.title}
              </Typography>
              <Typography variant={`h14`}>{item.date}</Typography>
              <button className={cls.btn} onClick={handleRedirect}>
                Подробнее
              </button>
            </Box>
          </CustomBox>
        ))}
      </Box>
    </>
  )
}

export default NewsItems
