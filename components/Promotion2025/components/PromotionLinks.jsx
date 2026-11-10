import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { promotion } from '../../../mock/promotion'
import { useRouter } from "next/router";

export default function PromotionLinks() {
    const { locale } = useRouter()
    return (
        <Container sx={{

            '@media (min-width: 769px)': {
                mb: '140px'
            },
            '@media (max-width: 768px)': {
                mb: '40px',
                p: '0 24px',
            },
        }}>
            <Stack sx={{
                background: 'linear-gradient(to right, #51E5CD 0%, #96FFCE 100%)',
                borderRadius: '33.75px',
                margin: '0 auto',
                width: '100%',
                '@media (min-width: 769px)': {
                    padding: '48px 0',

                },
                '@media (max-width: 768px)': {
                    padding: '18px 0',

                },


            }}>
                <Box width={'90%'} sx={{
                    margin: '0 auto'
                }}>
                    <Typography sx={{
                        fontWeight: '700',
                        color: '#000',
                        '@media (min-width: 769px)': {
                            fontSize: '56px',
                            lineHeight: '80px',
                            maxWidth: '100%',
                            mb: '40px',
                        },
                        '@media (max-width: 768px)': {
                            fontSize: '25px',
                            lineHeight: '24px',
                            maxWidth: '100%',
                            mb: '20px',
                        },
                    }}>{promotion[locale].links.title}</Typography>
                    <Grid container rowGap={1}>
                        <Grid item xs={6} md={6} lg={3} justifyContent={'center'} display={'flex'}> <a href='https://apps.apple.com/us/app/evos-uz/id1595897228' target='_blank' rel="noopener noreferrer">
                            <Box sx={{
                                '@media (min-width: 769px)': {
                                    width: '272px',
                                    height: '88px',
                                },
                                '@media (max-width: 768px)': {
                                    width: '131px',
                                    height: '42px',
                                },
                                cursor: 'pointer'
                            }}>
                                <img src="/images/apple.webp" alt="apple store" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }} />
                            </Box>
                        </a></Grid>
                        <Grid item xs={6} md={6} lg={3} justifyContent={'center'} display={'flex'}> <a href='https://play.google.com/store/apps/details?id=uz.makfood.service.evos' target='_blank' rel="noopener noreferrer">
                            <Box sx={{
                                '@media (min-width: 769px)': {
                                    width: '272px',
                                    height: '88px',
                                },
                                '@media (max-width: 768px)': {
                                    width: '131px',
                                    height: '42px',
                                },
                                cursor: 'pointer'
                            }}>
                                <img src="/images/google.webp" alt="google store" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }} />
                            </Box>
                        </a></Grid>
                        <Grid item xs={6} md={6} lg={3} justifyContent={'center'} display={'flex'}> <a href='https://t.me/evosdeliverybot' target='_blank' rel="noopener noreferrer">
                            <Box sx={{
                                '@media (min-width: 769px)': {
                                    width: '272px',
                                    height: '88px',
                                },
                                '@media (max-width: 768px)': {
                                    width: '131px',
                                    height: '42px',
                                },
                                cursor: 'pointer'
                            }}>
                                <img src="/images/telegram.webp" alt="telegram" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }} />
                            </Box>
                        </a></Grid>
                        <Grid item xs={6} md={6} lg={3} justifyContent={'center'} display={'flex'}>
                            <a href='https://evos.uz' target='_blank' rel="noopener noreferrer">
                                <Box sx={{
                                    '@media (min-width: 769px)': {
                                        width: '272px',
                                        height: '88px',
                                    },
                                    '@media (max-width: 768px)': {
                                        width: '131px',
                                        height: '42px',
                                    },
                                    cursor: 'pointer'
                                }}>
                                    <img src="/images/website.webp" alt="website" style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }} />
                                </Box>
                            </a></Grid>
                    </Grid>
                    {/* <Stack gap={1} alignItems={'center'} flexDirection={'row'} sx={{
                        '@media (min-width: 769px)': {
                            justifyContent: 'space-around'
                        },
                        '@media (max-width: 768px)': {
                            justifyContent: 'center'
                        },
                    }} flexWrap={{
                        xs: 'wrap',
                        lg: 'nowrap'
                    }}>
                        <a href='https://apps.apple.com/us/app/evos-uz/id1595897228' target='_blank' rel="noopener noreferrer">
                            <Box sx={{
                                '@media (min-width: 769px)': {
                                    width: '272px',
                                    height: '88px',
                                },
                                '@media (max-width: 768px)': {
                                    width: '131px',
                                    height: '42px',
                                },
                                cursor: 'pointer'
                            }}>
                                <img src="/images/apple.webp" alt="apple store" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }} />
                            </Box>
                        </a>
                        <a href='https://play.google.com/store/apps/details?id=uz.makfood.service.evos' target='_blank' rel="noopener noreferrer">
                            <Box sx={{
                                '@media (min-width: 769px)': {
                                    width: '272px',
                                    height: '88px',
                                },
                                '@media (max-width: 768px)': {
                                    width: '131px',
                                    height: '42px',
                                },
                                cursor: 'pointer'
                            }}>
                                <img src="/images/google.webp" alt="google store" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }} />
                            </Box>
                        </a>
                        <a href='https://t.me/evosdeliverybot' target='_blank' rel="noopener noreferrer">
                            <Box sx={{
                                '@media (min-width: 769px)': {
                                    width: '272px',
                                    height: '88px',
                                },
                                '@media (max-width: 768px)': {
                                    width: '131px',
                                    height: '42px',
                                },
                                cursor: 'pointer'
                            }}>
                                <img src="/images/telegram.webp" alt="telegram" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }} />
                            </Box>
                        </a>
                        <a href='https://evos.uz' target='_blank' rel="noopener noreferrer">
                            <Box sx={{
                                '@media (min-width: 769px)': {
                                    width: '272px',
                                    height: '88px',
                                },
                                '@media (max-width: 768px)': {
                                    width: '131px',
                                    height: '42px',
                                },
                                cursor: 'pointer'
                            }}>
                                <img src="/images/website.webp" alt="website" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }} />
                            </Box>
                        </a>
                    </Stack> */}
                </Box>
            </Stack>
        </Container>
    )
}