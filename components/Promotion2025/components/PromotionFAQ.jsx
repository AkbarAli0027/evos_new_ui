import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AddRounded, RemoveRounded } from '@mui/icons-material'
import { AnimatePresence, motion } from 'framer-motion'
import { faqHeader, faqRu, faqUz } from '../utils/faqs'
import sanitizeHtml from '../../../utils/sanitizeHtml'
import { useRouter } from 'next/router'


export default function PromotionFAQ() {
  const [activeIds, setActiveIds] = useState([])
  const { locale } = useRouter()

  const faqs = locale === 'uz' ? faqUz : faqRu

  return (
    <Box px={'16px'}>
      <Container>
        <Box
          padding={'60px 90px 55px 66px'}
          bgcolor={'#fff'}
          borderRadius={'40px'}
          mb={'113px'}
          sx={{
            '@media (max-width: 768px)': { padding: '30px 45px 27px 33px' },
            '@media (max-width: 560px)': {
              padding: '14px 20px 13px 20px',
              borderRadius: '8px',
              mb: '17px',
            },
          }}
        >
          <Typography
            fontSize={'60px'}
            lineHeight={'65px'}
            fontWeight={'900'}
            color={'#000'}
            fontFamily={'Inter !important'}
            mb={'30px'}
            sx={{
              '@media (max-width: 768px)': {
                fontSize: '34px',
                lineHeight: '44px',
                mb: '12px',
              },
              '@media (max-width: 768px)': {
                fontSize: '13px',
                lineHeight: '15px',
                mb: '7px',
              },
            }}
          >
            {/* {promotion[locale].faq.title} */}
            {faqHeader[locale].header}
          </Typography>
          <Typography
            fontSize={'20px'}
            lineHeight={'30px'}
            fontWeight={'500'}
            color={'#000'}
            mb={'30px'}
            sx={{
              whiteSpace: 'pre-wrap',
              '@media (max-width: 768px)': {
                fontSize: '14px',
                lineHeight: '20px',
                mb: '14px',
              },
              '@media (max-width: 560px)': {
                fontSize: '8px',
                lineHeight: '10px',
                mb: '7px',
              },
            }}
          >
            {/* {promotion[locale].faq.text} */}
            <p
              style={{ fontWeight: '500', fontFamily: "Inter" }}
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(faqHeader[locale].description),
              }}
            ></p>
          </Typography>
          <Box
            height={'1px'}
            bgcolor={'#CFCFCF'}
            mb={'30px'}
            sx={{

              '@media (max-width: 768px)': {
                mb: '14px',
              },
              '@media (max-width: 560px)': {
                mb: '7px',
              },
            }}
          />
          {faqs.map((item, idx) => (
            <Box
              key={item.id}
              sx={{
                mb: {
                  xs: '12px',
                  lg: faqRu.length - 1 === idx ? 0 : '32px'
                }
              }}
            >
              <Box
                onClick={() =>
                  setActiveIds((p) =>
                    p.includes(item.id)
                      ? p.filter((i) => i !== item.id)
                      : [...p, item.id]
                  )
                }
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                sx={{
                  cursor: 'pointer',
                }}
              >
                <Typography
                  fontSize={'20px'}
                  lineHeight={'46px'}
                  fontWeight={'700'}
                  color={'#000'}
                  sx={{
                    userSelect: 'none',
                    mb: '-20px',
                    '@media (max-width: 768px)': {
                      fontSize: '14px',
                      lineHeight: '28px',
                    },
                    '@media (max-width: 560px)': {
                      fontSize: '8px',
                      lineHeight: '10px',
                    },
                  }}
                >
                  {item.question}
                </Typography>
                {activeIds.includes(item.id) ? (
                  <RemoveRounded
                    htmlColor='#000'
                    fontSize='large'
                    sx={{
                      '@media (max-width: 768px)': {
                        fontSize: 'medium',
                      },
                    }}
                  />
                ) : (
                  <AddRounded
                    htmlColor='#000'
                    fontSize='large'
                    sx={{
                      '@media (max-width: 768px)': {
                        fontSize: 'medium',
                      },
                    }}
                  />
                )}
              </Box>
              <AnimatePresence>
                {activeIds.includes(item.id) && (
                  <motion.div
                    id='accordion-content'
                    initial='collapsed'
                    animate='open'
                    exit='collapsed'
                    variants={{
                      open: {
                        opacity: 1,
                        height: 'auto',
                      },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      variants={{
                        collapsed: { scale: 0.95 },
                        open: { scale: 1 },
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Box
                        fontSize={'20px'}
                        lineHeight={'28px'}
                        color={'#000'}
                        sx={{
                          userSelect: 'none',
                          '@media (max-width: 768px)': {
                            fontSize: '14px',
                            lineHeight: '20px',
                          },
                          '@media (max-width: 560px)': {
                            fontSize: '8px',
                            lineHeight: '10px',
                          },
                        }}
                        fontWeight={400}
                      >
                        <div
                          style={{ whiteSpace: 'pre-wrap', fontWeight: 500, fontFamily: 'Inter' }}
                          dangerouslySetInnerHTML={{
                            __html: sanitizeHtml(item.answer),
                          }}
                        ></div>
                      </Box>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
