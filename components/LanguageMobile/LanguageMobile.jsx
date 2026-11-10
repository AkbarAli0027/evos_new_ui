import React from 'react'
import { useRouter } from 'next/router'
import { Dialog, Typography, Box } from '@mui/material'
import cls from './LanguageMob.module.scss'
import Link from 'next/link'
import { makeStyles } from '@mui/styles'
import { menu } from '../../mock/menu'

const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: '0',
    width: '100%',
  },
}))

export default function LanguageMobile({ open, onClose }) {
  const { locale } = useRouter()
  const classes = useStyles()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ paper: classes.paper, container: classes.container }}
      BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.8)' } }}
    >
      <Box display='flex' alignItems='center' className={cls.lang}>
        <div
          className={cls.wrapper}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Box
            className={cls.langList}
            sx={{
              margin: 4,
              width: '100%',
              '@media (max-width: 800px)': {
                margin: 2,
              },
            }}
          >
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              marginBottom='16px'
            >
              <Typography variant={`h6`}>{menu[locale].chooseLang}</Typography>
            </Box>
            <Link href='/' locale='uz'>
              <a className={cls.listItem}>
                <Box
                  display='flex'
                  marginBottom='16px'
                  className={cls.bgLang}
                  onClick={onClose}
                >
                  <img src='/images/svg/uz.svg' alt='uzbek' />
                  <Typography
                    variant={`h4`}
                    sx={{ marginLeft: 2, textAlign: 'left' }}
                  >
                    O’zbekcha
                  </Typography>
                </Box>
              </a>
            </Link>
            <Link href='/' locale='ru'>
              <a className={cls.listItem}>
                <Box
                  display='flex'
                  marginBottom='16px'
                  className={cls.bgLang}
                  onClick={onClose}
                >
                  <img src='/images/svg/ru.svg' alt='russian' />
                  <Typography
                    variant={`h4`}
                    sx={{ marginLeft: 2, textAlign: 'left' }}
                  >
                    Русский
                  </Typography>
                </Box>
              </a>
            </Link>
            <Link href='/' locale='en'>
              <a className={cls.listItem}>
                <Box
                  display='flex'
                  marginBottom='16px'
                  className={cls.bgLang}
                  onClick={onClose}
                >
                   <img src='/images/svg/en.svg' alt='english' />
                  <Typography
                    variant={`h4`}
                    sx={{ marginLeft: 2, textAlign: 'left' }}
                  >
                    English
                  </Typography>
                </Box>
              </a>
            </Link>
          </Box>
        </div>
      </Box>
    </Dialog>
  )
}
