import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function LanguageSwitcher() {
  const { locale, asPath } = useRouter()

  const langs = [
    {
      label: 'UZ',
      locale: 'uz',
    },
    {
      label: 'RU',
      locale: 'ru',
    },

    {
      label: 'EN',
      locale: 'en',
    },
  ]

  return (
    <Stack
      gap={1}
      flexDirection='row'
      mt='54px'
      sx={{
        '@media (max-width: 560px)': {
          mt: '17px',
        },
      }}
    >
      {langs.map((el) => (
        <Stack
          key={el.locale}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{
            borderRadius: '16px',
            background: locale === el.locale ? '#96FFCE' : 'white',
            width: '44px',
            height: '40px',

            '@media (max-width: 560px)': {
              width: '22px',
              height: '20px',
              borderRadius: '4px',
            },
          }}
        >
          <Link href={asPath} locale={el.locale} passHref>
            <Typography
              component={'a'}
              color={locale === el.locale ? 'var(--primary-green)' : '#000'}
              fontSize={'16px'}
              lineHeight={'25px'}
              fontWeight={700}
              sx={{
                '@media (max-width: 560px)': {
                  fontSize: '8px',
                  lineHeight: '12px',
                },
              }}
            >
              {el.label}
            </Typography>
          </Link>
        </Stack>
      ))}
    </Stack>
  )
}
