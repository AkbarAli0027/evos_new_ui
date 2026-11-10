import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import styles from '../styles.module.scss'
import { promotion } from '../../../mock/promotion'
import { useRouter } from 'next/router'
import '../styles.module.scss'

export default function PromotionBanner() {
  const { locale } = useRouter()

  return (
    <Box className={styles.banner} overflow='hidden' px={'16px'}>
      <Container>
        <Box position={'relative'}>
          <Stack
            display={'flex'}
            flexDirection={'row'}
            alignItems='center'
            justifyContent='flex-end'
            sx={{
              '@media (max-width: 560px)': {
                flexDirection: 'column-reverse',
              },
            }}
          >
            <Box
              position='absolute'
              top='23px'
              left='calc(50% - 151px)'
              sx={{
                '@media (max-width: 768px)': {
                  width: '150px',
                  left: 'calc(50% - 75px)',
                  top: '50px',
                },
                '@media (max-width: 560px)': {
                  width: '120px',
                  left: 'calc(50% - 60px)',
                  top: '45px',
                },
              }}
            >
              <Image
                src='/images/evos-promotion.png'
                alt='evos-promotion'
                width={302}
                height={133}
              />
            </Box>
            <LanguageSwitcher />
          </Stack>
          <Box
            bgcolor='#E61E1E'
            padding='27px 34px'
            borderRadius='18px'
            width='fit-content'
            margin='122px auto 0'
            sx={{
              '@media (max-width: 1070px)': {
                mt: '90px',
              },
              '@media (max-width: 768px)': {
                mt: '90px',
                px: '18px 20px',
              },
              '@media (max-width: 560px)': {
                mt: '70px',
                p: '8px 10px',
                borderRadius: '10px',
              },
            }}
          >
            <Typography
              fontSize='121px'
              lineHeight='94px'
              fontWeight='900'
              color='#fff'
              sx={{
                '@media (max-width: 1070px)': {
                  fontSize: '80px',
                  lineHeight: '60px',
                },
                '@media (max-width: 768px)': {
                  fontSize: '56px',
                  lineHeight: '30px',
                },
                '@media (max-width: 560px)': {
                  fontSize: '36px',
                  lineHeight: '28px',
                },
              }}
            >
              1 000 000
            </Typography>
          </Box>
          <Typography
            fontSize='98px'
            lineHeight='102px'
            fontWeight='900'
            color='#fff'
            textAlign='center'
            mb={'56px'}
            sx={{
              '@media (max-width: 1070px)': {
                fontSize: '56px',
                lineHeight: '60px',
              },
              '@media (max-width: 768px)': {
                fontSize: '44px',
                lineHeight: '48px',
              },
              '@media (max-width: 560px)': {
                fontSize: '18px',
                lineHeight: '19px',
                mb: '10px',
              },
            }}
          >
            {promotion[locale].banner.prizes}
          </Typography>
          <Box
            textAlign={'center'}
            sx={{
              '@media (max-width: 1070px)': {
                width: '500px',
                mx: 'auto',
              },
              '@media (max-width: 560px)': {
                width: '300px',
                mx: 'auto',
              },
            }}
          >
            <Image
              src={'/images/promotion-banner.png'}
              width={866}
              height={414}
              alt='banner prizes'
            />
          </Box>
          <Box
            position={'absolute'}
            left={'-80px'}
            top={'115px'}
            sx={{
              '@media (max-width: 1070px)': {
                width: '230px',
                left: '-50px',
              },
              '@media (max-width: 560px)': {
                width: '100px',
                left: '-20px',
                top: '80px',
              },
            }}
          >
            <Image
              src={'/images/banner-snowman.png'}
              width={360}
              height={360}
              alt='banner snowman'
            />
          </Box>
          <Box
            position={'absolute'}
            right={'-80px'}
            top={'115px'}
            sx={{
              '@media (max-width: 1070px)': {
                width: '230px',
                right: '-50px',
              },
              '@media (max-width: 560px)': {
                width: '100px',
                right: '-20px',
                top: '80px',
              },
            }}
          >
            <Image
              src={'/images/banner-sleigh.png'}
              width={330}
              height={330}
              alt='banner snowman'
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
