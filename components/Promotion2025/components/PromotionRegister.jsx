import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { promotion } from '../../../mock/promotion'
import { useRouter } from 'next/router'
import Link from 'next/link'
import DOMPurify from 'dompurify'

export default function PromotionRegister() {
  const { locale } = useRouter()
  const sanitizedHTML = (htmlContent) => DOMPurify.sanitize(htmlContent)

  return (
    <Box
      overflow={'hidden'}
      px={'16px'}
      mt={'92px'}
      sx={{
        '@media (max-width: 768px)': {
          mt: '80px',
        },
        '@media (max-width: 560px)': {
          mt: '18px',
        },
      }}
    >
      <Container>
        <Box
          bgcolor='#fff'
          borderRadius={'34px'}
          pl='95px'
          mb={'26px'}
          display={'flex'}
          position={'relative'}
          sx={{
            '@media (max-width: 1320px)': {
              pl: '48px',
            },
            '@media (max-width: 900px)': {
              flexDirection: 'column',
              pl: '24px',
            },
            '@media (max-width: 560px)': {
              borderRadius: '8px',
              pl: '20px',
              mb: '14px',
            },
          }}
        >
          <Box
            pt='63px'
            pb={'66px'}
            maxWidth={'640px'}
            sx={{
              '@media (max-width: 1320px)': {
                maxWidth: '500px',
              },
              '@media (max-width: 1130px)': {
                maxWidth: '380px',
                pt: '36px',
                pb: '38px',
              },
              '@media (max-width: 900px)': {
                maxWidth: '100%',
                pb: '0',
                pr: '24px',
              },
              '@media (max-width: 560px)': {
                pt: '20px',
                pr: '20px',
              },
            }}
          >
            <Typography
              mb='7px'
              fontSize={'28px'}
              lineHeight={'40px'}
              fontWeight={'700'}
              color={'#000'}
              sx={{
                '@media (max-width: 1130px)': {
                  fontSize: '20px',
                  lineHeight: '30px',
                },
                '@media (max-width: 560px)': {
                  fontSize: '13px',
                  lineHeight: '17px',
                  mb: '10px',
                },
              }}
            >
              {promotion[locale].register.block1Title}
            </Typography>

            <Typography
              fontSize={'20px'}
              lineHeight={'30px'}
              fontWeight={'500'}
              color={'#000'}
              mb={'24px'}
              sx={{
                '@media (max-width: 1130px)': {
                  fontSize: '14px',
                  lineHeight: '20px',
                  mb: '16px',
                },
                '@media (max-width: 560px)': {
                  fontSize: '8px',
                  lineHeight: '10px',
                },
              }}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: sanitizedHTML(promotion[locale].register.block1Text),
                }}
              />
            </Typography>

            <Button
              variant='contained'
              href='https://t.me/evospromo_bot'
              target='_blank'
              sx={{
                width: 'fit-content',
                borderRadius: '36px',
                boxShadow: '0px 7.5px 30px 0px #00000040',
                px: '26px',
                height: '60px',
                fontSize: '25px',
                lineHeight: '26px',
                fontWeight: '700',
                backgroundColor: '#0088CC',
                display: 'flex',
                alignItems: 'center',
                gap: '22px',
                color: '#fff',
                textTransform: 'unset',
                '&:hover': {
                  backgroundColor: '#0088CC',
                },
                '@media (max-width: 1130px)': {
                  fontSize: '14px',
                  lineHeight: '18px',
                  px: '16px',
                  height: '34px',
                  gap: '12px',
                },
                '@media (max-width: 900px)': {
                  mx: 'auto',
                },
              }}
            >
              <Box
                sx={{
                  '@media (max-width: 1130px)': {
                    mt: '4px',
                    width: '18px',
                  },
                }}
              >
                <Image
                  width={37}
                  height={30}
                  src={'/images/svg/telegram.svg'}
                  alt='send button'
                />
              </Box>
              {promotion[locale].register.register}
            </Button>
          </Box>
          <Box
            position={'absolute'}
            right={0}
            top={40}
            sx={{
              '@media (max-width: 1130px)': {
                width: '450px',
                right: '0',
              },
              '@media (max-width: 900px)': {
                position: 'static',
                mx: 'auto',
                mt: '-20px',
                mb: '-40px',
              },
              '@media (max-width: 560px)': {
                position: 'static',
                mx: 'auto',
                mt: '0px',
                mb: '-20px',
                width: '230px',
              },
            }}
          >
            <Image
              width={572}
              height={538}
              src={'/images/promocode-1.webp'}
              alt='promocode'
            />
          </Box>
        </Box>
        <Box
          bgcolor='#E3E3E3'
          borderRadius={'34px'}
          pl='95px'
          mb={'71px'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'flex-end'}
          gap={'91px'}
          position={'relative'}
          sx={{
            '@media (max-width: 1320px)': {
              pl: '48px',
            },
            '@media (max-width: 900px)': {
              flexDirection: 'column-reverse',
              pl: '24px',
              gap: '0',
              mb: '86px',
            },
            '@media (max-width: 560px)': {
              borderRadius: '8px',
              pl: '20px',
              mb: '24px',
            },
          }}
        >
          <Box
            position={'absolute'}
            left={50}
            top={20}
            sx={{
              '@media (max-width: 1320px)': {
                left: '-50px',


              },
              '@media (max-width: 1130px)': {
                width: '340px',
                top: '5px',
                left: '-20px',
              },
              '@media (max-width: 900px)': {
                position: 'static',
                mb: '-60px',

              },
              '@media (max-width: 560px)': {
                width: '280px',
                ml: '-20px',
                mt: '5px',
              },
            }}
          >
            <Image
              width={501}
              height={400}
              src={'/images/promocode-2.webp'}
              alt='promocode'
            />
          </Box>
          <Box
            pt='63px'
            pb={'66px'}
            maxWidth={'687px'}
            pr={'50px'}
            sx={{
              '@media (max-width: 1320px)': {
                maxWidth: '600px',
              },
              '@media (max-width: 1130px)': {
                maxWidth: '450px',
                pt: '45px',
                pb: '48px',
              },
              '@media (max-width: 900px)': {
                maxWidth: '100%',
                pb: '0',
              },
              '@media (max-width: 560px)': {
                pt: '20px',
                pb: '0px',
                pr: '20px',
              },
            }}
          >
            <Typography
              mb='36px'
              fontSize={'20px'}
              lineHeight={'30px'}
              fontWeight={'500'}
              color={'#000'}
              fontFamily={"Inter !important∆"}
              sx={{
                '@media (max-width: 1130px)': {
                  fontSize: '14px',
                  lineHeight: '20px',
                  mb: '16px',
                },
                '@media (max-width: 560px)': {
                  fontSize: '8px',
                  lineHeight: '10px',
                },
              }}
            >
              {promotion[locale].register.block2Text}
            </Typography>
            <Box
              sx={{
                '@media (max-width: 1130px)': {
                  textAlign: 'center',
                },
              }}
            >
              <Link href={`/${locale}/branches`} passHref>
                <Button
                  variant='contained'
                  sx={{
                    width: 'fit-content',
                    borderRadius: '36px',
                    boxShadow: '0px 7.5px 30px 0px #00000040',
                    px: '31px',
                    height: '60px',
                    fontSize: '25px',
                    lineHeight: '31px',
                    fontWeight: '700',
                    textTransform: 'unset',
                    backgroundColor: '#fff',
                    color: '#000',
                    '&:hover': {
                      backgroundColor: '#fff',
                    },
                    '@media (max-width: 1130px)': {
                      fontSize: '14px',
                      lineHeight: '18px',
                      px: '16px',
                      height: '34px',
                    },
                  }}
                >
                  {promotion[locale].register.restaurantList}
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
