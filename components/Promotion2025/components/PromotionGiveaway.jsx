import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { promotion } from '../../../mock/promotion'
import { useRouter } from 'next/router'
import sanitizeHtml from '../../../utils/sanitizeHtml'

export default function PromotionGiveaway() {
  const { locale } = useRouter()
  return (
    <Box overflow='hidden' px={'16px'}>
      <Container>
        <Box
          position={'relative'}
          mb={'182px'}
          sx={{
            '@media (max-width: 1080px)': {
              mb: '130px',
            },
            '@media (max-width: 768px)': {
              mb: '86px',
            },
            '@media (max-width: 560px)': {
              mb: '30px',
            },
          }}
        >
          <Box
            pl={'52px'}
            mb={'30px'}
            sx={{
              '@media (max-width: 1330px)': {
                mb: '86px',
              },
              '@media (max-width: 768px)': {
                pl: '0px',
                mb: '16px',
              },
              '@media (max-width: 560px)': {},
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
                '@media (max-width: 1330px)': {
                  maxWidth: '500px',
                },
                '@media (max-width: 1080px)': {
                  fontSize: '50px',
                  lineHeight: '50px',
                },
                '@media (max-width: 900px)': {
                  maxWidth: '300px',
                },
                '@media (max-width: 768px)': {
                  fontSize: '34px',
                  lineHeight: '34px',
                  maxWidth: '150px',
                  mb: '18px',
                },
                '@media (max-width: 560px)': {
                  fontSize: '25px',
                  lineHeight: '25px',
                  maxWidth: '150px',
                  mb: '12px',
                },
              }}
            >
              {promotion[locale].giveaway.title}
            </Typography>
            <Typography
              fontSize={'20px'}
              lineHeight={'30px'}
              fontWeight={'500'}
              maxWidth={'664px'}
              color={'#fff'}
              sx={{
                '@media (max-width: 1330px)': {
                  maxWidth: '580px',
                },
                '@media (max-width: 1200px)': {
                  maxWidth: '400px',
                },
                '@media (max-width: 1080px)': {
                  fontSize: '16px',
                  lineHeight: '20px',
                  maxWidth: '300px',
                },
                '@media (max-width: 768px)': {
                  fontSize: '14px',
                  lineHeight: '18px',
                  maxWidth: '240px',
                },
                '@media (max-width: 560px)': {
                  fontSize: '8px',
                  lineHeight: '10px',
                  maxWidth: '150px',
                },
              }}
            >
              <p
                style={{
                  fontFamily: 'Inter'
                }}
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(promotion[locale].giveaway.text),
                }}
              />
            </Typography>
            <Button
              variant='contained'
              href='https://www.youtube.com/@evos-official'
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
                backgroundColor: '#E61E1E',
                display: 'flex',
                alignItems: 'center',
                gap: '22px',
                color: '#fff',
                textTransform: 'unset',
                mt: '20px',
                '&:hover': {
                  backgroundColor: '#E61E1E',
                },
                '@media (max-width: 1130px)': {
                  fontSize: '14px',
                  lineHeight: '18px',
                  px: '16px',
                  height: '34px',
                  gap: '12px',
                },
              }}
            >
              <Box
                sx={{
                  '@media (max-width: 1130px)': {
                    mt: '4px',
                    width: '18px',
                    color: 'white',
                  },
                }}
              >
                <Image
                  width={37}
                  height={30}
                  src={'/images/svg/youtube-white.svg'}
                  alt='send button'
                />
              </Box>
              {promotion[locale].giveaway.subscribe}
            </Button>
          </Box>
          <Box
            bgcolor='#fff'
            borderRadius={'34px'}
            pl='50px'
            maxWidth={'822px'}
            display={'flex'}
            alignItems={'center'}
            position={'relative'}
            minHeight={'192px'}
            sx={{
              '@media (max-width: 1330px)': {
                maxWidth: '100%',
              },
              '@media (max-width: 1080px)': {
                minHeight: 'fit-content',
                pl: '24px',
              },
              '@media (max-width: 768px)': {
                borderRadius: '13px',
              },
            }}
          >
            <Box
              py={'36px'}
              maxWidth={'544px'}
              sx={{
                '@media (max-width: 1330px)': {
                  maxWidth: 'calc(70%)',
                },
                '@media (max-width: 1080px)': {
                  py: '30px',
                },
                '@media (max-width: 768px)': {
                  py: '0px',
                },
                '@media (max-width: 560px)': {
                  py: '8px',
                },
              }}
            >
              <Typography
                fontSize={'20px'}
                lineHeight={'30px'}
                fontWeight={'500'}
                fontFamily={'Inter !important'}
                color={'#000'}
                sx={{
                  '@media (max-width: 1080px)': {
                    fontSize: '16px',
                    lineHeight: '20px',
                  },
                  '@media (max-width: 768px)': {
                    fontSize: '14px',
                    lineHeight: '18px',
                  },
                  '@media (max-width: 560px)': {
                    fontSize: '11px',
                    lineHeight: '14.5px',
                  },
                }}
              >
                {promotion[locale].giveaway.blockText}
              </Typography>
            </Box>
            <Box
              position={'absolute'}
              top={-25}
              right={20}
              sx={{
                '@media (max-width: 1080px)': {
                  width: '150px',
                  top: '-15px',
                },
                '@media (max-width: 768px)': {
                  position: 'static',
                  fontSize: '25px',
                  lineHeight: '25px',
                  maxWidth: '150px',
                  my: '-10px',
                },
              }}
            >
              <Image
                width={245}
                height={226}
                src={'/images/valuable-prizes.png'}
                alt='prizes'
              />
            </Box>
          </Box>
          <Box
            position={'absolute'}
            top={0}
            right={0}
            sx={{
              '@media (max-width: 1330px)': {
                top: '-50px',
                right: '80px',
              },
              '@media (max-width: 1080px)': {
                width: '300px',
                top: '-35px',
              },
              '@media (max-width: 768px)': {
                width: '230px',
                top: '0px',
                right: '30px',
              },
              '@media (max-width: 560px)': {
                width: '150px',
                top: '0px',
                right: '30px',
              },
            }}
          >
            <Image
              width={499}
              height={582}
              src={'/images/my5-channel.png'}
              alt='my5 tv channel'
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
