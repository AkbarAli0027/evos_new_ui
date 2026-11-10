import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { promotion } from '../../../mock/promotion'
import { useRouter } from 'next/router'
import styles from './styles.module.scss'

const images = [
  { src: 'turkiston-development-logo.png' },
  { src: 'darkhan-residense-logo.png' },
  { src: 'kia-logo.png' },
  { src: 'idea-logo.png' },
  { src: 'honor-logo.png' },
  { src: 'uzum-market.webp', styles: styles.image },
  { src: 'uzum-tezkor.png', styles: styles.image },
  { src: 'yandexGo.png' },
  { src: 'pepsi-logo.png' },
  { src: 'uchar-logo.png' },
  { src: 'skillbox-logo.png' },
  { src: 'dena-logo.png' },
  { src: 'megogo-logo.png' },
  { src: 'glowen-logo.png' },
  { src: 'allplay-logo.png' },
  { src: 'mf-logo.png' },
  { src: 'chekhov-logo.png' },
  { src: 'terra-pro-logo.png' },
  { src: 'seoul-logo.png' },
  { src: 'chortoq-logo.png' },
];


export default function PromotionPartners() {
  const { locale } = useRouter()

  return (
    <Box px={'16px'}>
      <Container>
        <Box
          mb={'193px'}
          px={'57px'}
          sx={{
            '@media (max-width: 768px)': {
              mb: '86px',
              px: '0',
            },
            '@media (max-width: 560px)': {
              mb: '40px',
            },
          }}
        >
          <Typography
            fontSize={'80px'}
            lineHeight={'80px'}
            fontWeight={'900'}
            color={'#fff'}
            maxWidth={'1026px'}
            mb={'38px'}
            sx={{
              '@media (max-width: 1080px)': {
                fontSize: '50px',
                lineHeight: '50px',
                mb: '28px',
              },
              '@media (max-width: 768px)': {
                fontSize: '34px',
                lineHeight: '34px',
                mb: '18px',
              },
              '@media (max-width: 768px)': {
                fontSize: '25px',
                lineHeight: '25px',
                mb: '20px',
              },
            }}
          >
            {promotion[locale].partners.title}
          </Typography>
          <Box
            display={'grid'}
            gridTemplateColumns={'repeat(4, 1fr)'}
            rowGap={'29px'}
            columnGap={'21px'}
            sx={{
              '@media (max-width: 768px)': {
                rowGap: '16px',
                columnGap: '14px',
              },
              '@media (max-width: 768px)': {
                rowGap: '7px',
                columnGap: '5px',
              },
            }}
          >
            {images.map((el) => (
              <Box
                key={el.src}
                bgcolor={'#fff'}
                borderRadius={'28px'}
                maxHeight={'150px'}
                position={'relative'}
                display={'flex'}
                justifyContent={'center'}
                sx={{
                  '@media (max-width: 768px)': {
                    borderRadius: '8px',
                  },
                }}
              >
                <Image
                  width={220}
                  height={150}
                  src={`/images/${el.src}`}
                  alt='partner'
                  objectFit='contain'
                  className={el?.styles ? el.styles : ''}

                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
