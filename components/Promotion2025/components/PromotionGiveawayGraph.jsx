import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { giveawayers } from '../utils/data'
import Image from 'next/image'
import SouthRoundedIcon from '@mui/icons-material/SouthRounded'
import { useRouter } from 'next/router'
import { promotion } from '../../../mock/promotion'

export default function PromotionGiveawayGraph() {
  const { locale } = useRouter()

  return (
    <Box px={'16px'}>
      <Container>
        <Box
          mb={'148px'}
          px={'57px'}
          sx={{
            '@media (max-width: 768px)': {
              pl: '30px',
              mb: '86px',
              px: '0px',
            },
            '@media (max-width: 560px)': {
              mb: '30px',
            },
          }}
        >
          <Box>
            <Typography
              fontSize={'80px'}
              lineHeight={'80px'}
              fontWeight={'900'}
              color={'#fff'}
              maxWidth={'1026px'}
              mb={'118px'}
              sx={{
                '@media (max-width: 1080px)': {
                  fontSize: '50px',
                  lineHeight: '50px',
                  maxWidth: '800px',
                  mb: '70px',
                },
                '@media (max-width: 768px)': {
                  fontSize: '34px',
                  lineHeight: '34px',
                  mb: '30px',
                },
                '@media (max-width: 560px)': {
                  fontSize: '25px',
                  lineHeight: '25px',
                  mb: '12px',
                },
              }}
            >
              {promotion[locale].giveawayGraph.title}
            </Typography>
            <Box
              display={'flex'}
              flexDirection={'column'}
              gap={'71px'}
              sx={{
                '@media (max-width: 1080px)': {
                  gap: '50px',
                },
                '@media (max-width: 768px)': {
                  gap: '36px',
                },
                '@media (max-width: 560px)': {
                  gap: '25px',
                },
              }}
            >
              {giveawayers.map((item, idx, arr) => (
                <Box
                  key={item.id}
                  display={'flex'}
                  gap={'25px'}
                  sx={{
                    '@media (max-width: 560px)': {
                      gap: '6px',
                    },
                  }}
                >
                  <Box
                    borderRadius={'42px'}
                    bgcolor={'#fff'}
                    height={item.imageHeight}
                    sx={{
                      minWidth: '287px',
                      '@media (max-width: 1080px)': {
                        width: '200px',
                        minWidth: '200px',
                        height: item.imageHeight - 87,
                      },
                      '@media (max-width: 768px)': {
                        width: '117px',
                        minWidth: '117px',
                        height: item.imageHeight - 174,
                      },
                      '@media (max-width: 560px)': {
                        borderRadius: '10px',
                        width: '70px',
                        minWidth: '70px',
                        height: 'fit-content',
                      },
                    }}
                  >
                    <Image
                      width={287}
                      height={item.imageHeight}
                      src={item.img}
                      alt='giveaway item'
                    />
                  </Box>
                  <Box
                    bgcolor={'#fff'}
                    borderRadius={'18px'}
                    p={'40px 40px 25px 40px'}
                    flexGrow={1}
                    display={'flex'}
                    justifyContent={'flex-start'}
                    flexDirection={'column'}
                    position={'relative'}
                    sx={{
                      '@media (max-width: 1080px)': {
                        // height: `${item.imageHeight - (item.isEvos ? 73 : 87)
                        //   }px`,
                        p: '24px 24px 15px 24px',
                        height: 'max-content',
                      },
                      '@media (max-width: 768px)': {
                        // height: `${item.imageHeight - (item.isEvos ? 142 : 170)
                        //   }px`,
                        height: 'fit-content',
                        borderRadius: '10px',
                      },
                      '@media (max-width: 560px)': {
                        p: '10px 11px 9px 11px',
                        borderRadius: '10px',
                        // height: `${item.isEvos ? 64 : 75}px`,
                        height: 'fit-content'
                      },
                    }}
                  >
                    <Box
                      bgcolor={item.primaryColor}
                      borderRadius={'42px'}
                      fontSize={'23px'}
                      fontWeight={900}
                      px={'36px'}
                      height={'50px'}
                      mb={'30px'}
                      fontFamily={'Inter'}
                      color={'#fff'}
                      width={'fit-content'}
                      py={'14px'}
                      sx={{
                        '@media (max-width: 1080px)': {
                          py: '6px',
                          fontSize: '14px',
                          height: '34px',
                          px: '20px',
                          mb: '12px',
                        },
                        '@media (max-width: 768px)': {
                          py: '2px',
                          fontSize: '10px',
                          height: '24px',
                          px: '16x',
                          mb: '8px',
                        },
                        '@media (max-width: 560px)': {
                          fontSize: '6px',
                          lineHeight: '9px',
                          height: '13px',
                          px: '9x',
                          mb: '5px',
                        },
                      }}
                    >
                      {item.date}
                    </Box>
                    {item.text && promotion[locale].giveawayGraph[item.text]
                      .split('###')
                      .map((childText) => (
                        <Typography
                          key={childText}
                          fontSize={'35px'}
                          lineHeight={'40px'}
                          fontWeight={900}
                          color={'#000'}
                          sx={{
                            '@media (max-width: 1080px)': {
                              fontSize: '20px',
                              lineHeight: '24px',
                            },
                            '@media (max-width: 768px)': {
                              fontSize: '14px',
                              lineHeight: '18px',
                            },
                            '@media (max-width: 560px)': {
                              fontSize: '12px',
                              lineHeight: '13px',
                              mb: '-2px',
                            },
                          }}
                        >
                          {childText}
                        </Typography>
                      ))}
                    {item.options && <Stack mt={{ xs: '8px', md: '12px', lg: '20px' }} >
                      <Typography display={'inline-block'} color={'#000'} fontWeight={500} fontSize={{ xs: '10px', md: '16px', lg: '22px' }} lineHeight={{ xs: '12px', md: '20px', lg: '40px' }} fontFamily={'Inter !important'}>{promotion[locale].giveawayGraph[item?.options?.gift]}</Typography>
                      <Typography display={'inline-block'} color={'#000'} fontWeight={500} fontSize={{ xs: '10px', md: '16px', lg: '22px' }} lineHeight={{ xs: '12px', md: '20px', lg: '40px' }} fontFamily={'Inter !important'}>{promotion[locale].giveawayGraph[item?.options?.smartphone]}</Typography>
                      <Typography display={'inline-block'} color={'#000'} fontWeight={500} fontSize={{ xs: '10px', md: '16px', lg: '22px' }} lineHeight={{ xs: '12px', md: '20px', lg: '40px' }} fontFamily={'Inter !important'}>{promotion[locale].giveawayGraph[item?.options?.promocode]}</Typography>
                      <Typography display={'inline-block'} color={'#000'} fontWeight={500} fontSize={{ xs: '10px', md: '16px', lg: '22px' }} lineHeight={{ xs: '12px', md: '20px', lg: '40px' }} fontFamily={'Inter !important'}>{promotion[locale].giveawayGraph[item?.options?.travel]}</Typography>
                      <Typography display={'inline-block'} color={'#000'} fontWeight={500} fontSize={{ xs: '10px', md: '16px', lg: '22px' }} lineHeight={{ xs: '12px', md: '20px', lg: '40px' }} fontFamily={'Inter !important'} dangerouslySetInnerHTML={{ __html: promotion[locale].giveawayGraph[item?.options?.surpriseText] }} />
                      <Typography display={'inline-block'} color={'#000'} fontWeight={500} fontSize={{ xs: '10px', md: '16px', lg: '22px' }} lineHeight={{ xs: '12px', md: '20px', lg: '40px' }} fontFamily={'Inter !important'} dangerouslySetInnerHTML={{ __html: promotion[locale].giveawayGraph[item?.options?.surpriseTextKIA] }} />
                    </Stack>}

                    {item.footer && (
                      <Stack
                        mt={'20px'}
                        flexDirection={{
                          xs: 'column',
                          md: 'row',
                          lg: 'row'
                        }}
                        gap={{
                          md: '2px',
                          lg: '35px'
                        }}

                        sx={{
                          '@media (max-width: 1080px)': {
                            mt: '12px',
                          },
                          '@media (max-width: 768px)': {
                            mt: '8px',
                          },
                          '@media (max-width: 560px)': {
                            mt: '5px',
                            // height: '14px',
                            gap: '2px',
                          },
                        }}
                      >
                        <Box display={'flex'} alignItems={'center'} width={{
                          xs: '100%',
                          md: '50%'
                        }}>
                          <Stack
                            alignItems={'center'}
                            justifyContent={'center'}
                            height={'fit-content'}
                            sx={{
                              mt: '6px',
                              position: 'relative',
                              '@media (max-width: 1300px)': {
                                width: '28px',
                                height: '12px',
                                mt: '0px',
                              },
                              '@media (max-width: 1080px)': {
                                width: '18px',
                              },
                              '@media (max-width: 768px)': {
                                width: '14px',
                                // mb: '4px',
                              },
                              '@media (max-width: 560px)': {
                                width: '12px',

                              },
                            }}
                          >
                            <Image
                              width={35}
                              height={38}
                              src='/images/svg/youtube.svg'
                              alt='youtube'
                            />
                          </Stack>

                          <Typography
                            fontSize={'23px'}
                            lineHeight={'32px'}
                            fontWeight={700}
                            color={'#000'}
                            mt={'2px'}
                            sx={{
                              ml: '10px',
                              mr: '4px',
                              '@media (max-width: 1300px)': {
                                fontSize: '18px',
                                lineHeight: '20px',
                                ml: '6px',
                              },
                              '@media (max-width: 1080px)': {
                                fontSize: '12px',
                                lineHeight: '20px',
                              },
                              '@media (max-width: 768px)': {
                                fontSize: '9px',
                                lineHeight: '20px',
                              },
                              '@media (max-width: 560px)': {
                                fontSize: '6px',
                                lineHeight: '8px',
                              },
                            }}
                          >
                            {item.footer.youtubeTime}
                          </Typography>
                          <Typography
                            fontSize={'23px'}
                            lineHeight={'32px'}
                            fontWeight={500}
                            color={'#000'}
                            mt={'2px'}
                            sx={{
                              '@media (max-width: 1300px)': {
                                fontSize: '18px',
                                lineHeight: '20px',
                              },
                              '@media (max-width: 1080px)': {
                                fontSize: '12px',
                                lineHeight: '20px',
                              },
                              '@media (max-width: 768px)': {
                                fontSize: '9px',
                                lineHeight: '20px',
                              },
                              '@media (max-width: 560px)': {
                                fontSize: '6px',
                                lineHeight: '8px',
                              },
                            }}
                          >
                            {` - ${promotion[locale].giveawayGraph.youtube}`}
                          </Typography>

                        </Box>
                        {item.footer?.hasTvEvent && (
                          <Box display={'flex'} alignItems={'center'}>
                            <Stack
                              alignItems={'center'}
                              // position={'relative'}
                              sx={{

                                '@media (max-width: 1300px)': {
                                  width: '32px',
                                  height: 'fit-content',
                                  mt: '4px',
                                },
                                '@media (max-width: 1080px)': {
                                  width: '28px',
                                  mt: '4px',
                                },
                                '@media (max-width: 1080px)': {
                                  width: '18px',
                                  mt: '4px',
                                },
                                '@media (max-width: 560px)': {
                                  width: '12px',
                                  mt: '0px',
                                },
                              }}
                            >
                              <Image
                                src={'/images/svg/my5.svg'}
                                width={40}
                                height={38}
                                alt='event'
                              />
                            </Stack>
                            <Typography
                              fontSize={'23px'}
                              lineHeight={'32px'}
                              fontWeight={700}
                              color={'#000'}
                              mt={'2px'}
                              sx={{
                                ml: '10px',
                                mr: '4px',
                                '@media (max-width: 1300px)': {
                                  fontSize: '18px',
                                  lineHeight: '20px',
                                  ml: '6px',
                                },
                                '@media (max-width: 1080px)': {
                                  fontSize: '12px',
                                  lineHeight: '20px',
                                },
                                '@media (max-width: 768px)': {
                                  fontSize: '9px',
                                  lineHeight: '20px',
                                },
                                '@media (max-width: 560px)': {
                                  fontSize: '6px',
                                  lineHeight: '8px',
                                },
                              }}
                            >
                              {item.footer.tvTime}
                            </Typography>
                            <Typography
                              fontSize={'23px'}
                              lineHeight={'32px'}
                              fontWeight={500}
                              color={'#000'}
                              mt={'2px'}
                              sx={{
                                '@media (max-width: 1300px)': {
                                  fontSize: '18px',
                                  lineHeight: '20px',
                                },
                                '@media (max-width: 1080px)': {
                                  fontSize: '12px',
                                  lineHeight: '20px',
                                },
                                '@media (max-width: 768px)': {
                                  fontSize: '9px',
                                  lineHeight: '20px',
                                },
                                '@media (max-width: 560px)': {
                                  fontSize: '6px',
                                  lineHeight: '8px',
                                },
                              }}
                            >
                              {` - ${promotion[locale].giveawayGraph.my5}`}
                            </Typography>
                          </Box>
                        )}
                      </Stack>
                    )}
                    {idx !== arr.length - 1 && (
                      <SouthRoundedIcon
                        htmlColor='#33E19D'
                        sx={{
                          position: 'absolute',
                          left: 'calc(50% - 18px)',
                          bottom: '-50px',
                          transform: 'scale(1.8)',
                          '@media (max-width: 1080px)': {
                            transform: 'scale(1)',
                            bottom: '-38px',
                          },
                          '@media (max-width: 768px)': {
                            transform: 'scale(0.8)',
                            bottom: '-31px',
                          },
                          '@media (max-width: 560px)': {
                            transform: 'scale(0.8)',
                            bottom: '-25px',
                          },
                        }}
                      />
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
