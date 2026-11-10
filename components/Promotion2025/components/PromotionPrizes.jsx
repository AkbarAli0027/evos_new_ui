import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { promotion } from '../../../mock/promotion'

export default function PromotionPrizes() {
  const { locale } = useRouter()

  return (
    <Box px={'16px'}>
      <Container>
        <Box
          mb={'148px'}
          px={'57px'}
          sx={{
            '@media (max-width: 1080px)': {
              mb: '86px',
            },
            '@media (max-width: 768px)': {
              px: '0',
              mb: '37px',
            },
          }}
        >
          <Typography
            fontSize={'60px'}
            lineHeight={'60px'}
            fontWeight={'900'}
            color={'#fff'}
            maxWidth={'1026px'}
            mb={'80px'}
            sx={{
              '@media (max-width: 1080px)': {
                fontSize: '34px',
                lineHeight: '34px',
                mb: '40px',
              },
              '@media (max-width: 768px)': {
                fontSize: '20px',
                lineHeight: '24px',
                mb: '16px',
              },
            }}
          >
            {promotion[locale].prizes.title}
          </Typography>
          <Box
            display={'flex'}
            gap='27px'
            sx={{
              '@media (max-width: 560px)': {
                gap: '6px',
              },
            }}
          >
            <Box
              bgcolor={'#fff'}
              pl={'49px'}
              borderRadius={'56px'}
              width={'55%'}
              position={'relative'}
              display={'flex'}
              alignItems={'center'}
              sx={{
                '@media (max-width: 1320px)': {
                  pl: '30px',
                },
                '@media (max-width: 560px)': {
                  borderRadius: '10px',
                  pl: '12px',
                },
              }}
            >
              <Box
                maxWidth={'260px'}
                pt={'52px'}
                pb={'48px'}
                sx={{
                  '@media (max-width: 1180px)': {
                    pt: '26px',
                    pb: '24px',
                  },
                  '@media (max-width: 560px)': {
                    pt: '13px',
                    pb: '9px',
                  },
                }}
              >
                <Typography
                  fontSize={'50px'}
                  lineHeight={'48px'}
                  fontWeight={'900'}
                  color={'#000'}
                  mb={'12.5px'}
                  sx={{
                    '@media (max-width: 1180px)': {
                      fontSize: '36px',
                      lineHeight: '36px',
                    },
                    '@media (max-width: 930px)': {
                      fontSize: '24px',
                      lineHeight: '24px',
                    },
                    '@media (max-width: 560px)': {
                      fontSize: '13px',
                      lineHeight: '12px',
                      mb: '3px',
                    },
                  }}
                >
                  700 000
                </Typography>
                <Typography
                  fontSize={'25px'}
                  lineHeight={'25px'}
                  fontFamily={"Inter !important"}
                  fontWeight={'500'}
                  color={'#000'}
                  sx={{
                    '@media (max-width: 1180px)': {
                      fontSize: '18px',
                      lineHeight: '24px',
                    },
                    '@media (max-width: 930px)': {
                      fontSize: '14px',
                      lineHeight: '14px',
                      maxWidth: '130px',
                    },
                    '@media (max-width: 560px)': {
                      fontSize: '6px',
                      lineHeight: '7px',
                      maxWidth: '80px',
                    },
                  }}
                >
                  {promotion[locale].prizes.block1Text}
                </Typography>
              </Box>
              <Box
                position={'absolute'}
                top={'14px'}
                right={'27px'}
                sx={{
                  '@media (max-width: 1320px)': {
                    right: '-15px',
                  },
                  '@media (max-width: 1180px)': {
                    width: '200px',
                    right: '0px',
                    top: '20px',
                  },
                  '@media (max-width: 930px)': {
                    width: '150px',
                    right: '0px',
                    top: '20px',
                  },
                  '@media (max-width: 560px)': {
                    width: '80px',
                    right: '-5px',
                    top: '5px',
                  },
                }}
              >
                <Image
                  src='/images/giveaway-prizes.png'
                  width={372}
                  height={208}
                  alt='prizes'
                />
              </Box>
            </Box>
            <Box
              bgcolor={'#fff'}
              pl={'49px'}
              borderRadius={'56px'}
              width={'45%'}
              position={'relative'}
              display={'flex'}
              alignItems={'center'}
              sx={{
                '@media (max-width: 1320px)': {
                  pl: '30px',
                },
                '@media (max-width: 560px)': {
                  borderRadius: '10px',
                  pl: '12px',
                },
              }}
            >
              <Box
                maxWidth={'260px'}
                pt={'52px'}
                pb={'48px'}
                sx={{
                  '@media (max-width: 1180px)': {
                    pt: '26px',
                    pb: '24px',
                  },
                  '@media (max-width: 560px)': {
                    pt: '13px',
                    pb: '9px',
                  },
                }}
              >
                <Typography
                  fontSize={'50px'}
                  lineHeight={'48px'}
                  fontWeight={'900'}
                  color={'#000'}
                  mb={'12.5px'}
                  sx={{
                    '@media (max-width: 1180px)': {
                      fontSize: '36px',
                      lineHeight: '36px',
                    },
                    '@media (max-width: 930px)': {
                      fontSize: '24px',
                      lineHeight: '24px',
                    },
                    '@media (max-width: 560px)': {
                      fontSize: '13px',
                      lineHeight: '12px',
                      mb: '3px',
                    },
                  }}
                >
                  300 000
                </Typography>
                <Typography
                  fontSize={'25px'}
                  lineHeight={'25px'}
                  fontWeight={'500'}
                  color={'#000'}
                  sx={{
                    '@media (max-width: 1180px)': {
                      fontSize: '18px',
                      lineHeight: '24px',
                      maxWidth: '180px',
                    },
                    '@media (max-width: 930px)': {
                      fontSize: '14px',
                      lineHeight: '14px',
                    },
                    '@media (max-width: 560px)': {
                      fontSize: '6px',
                      lineHeight: '7px',
                      maxWidth: '80px',
                    },
                  }}
                >
                  {promotion[locale].prizes.block2Text}
                </Typography>
              </Box>
              <Box
                position={'absolute'}
                top={'0px'}
                right={'36px'}
                sx={{
                  '@media (max-width: 1320px)': {
                    right: '0',
                  },
                  '@media (max-width: 1180px)': {
                    scale: '0.7',
                    right: '-20px',
                    top: '-30px',
                  },
                  '@media (max-width: 930px)': {
                    width: '100px',
                    right: '10px',
                    top: '10px',
                  },
                  '@media (max-width: 560px)': {
                    width: '70px',
                    right: '-5px',
                    top: '-10px',
                  },
                }}
              >
                <Image
                  src='/images/giveaway-evos.png'
                  width={215}
                  height={206}
                  alt='prizes'
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
