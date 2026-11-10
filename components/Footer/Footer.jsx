import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container, Box, Stack, Typography } from '@mui/material'
import { parseCookies } from 'nookies'
import { useIsMobile } from '../../utils/useIsMobile'
import Login from '../Login/Login'
import {
  EvosLogo,
  AppleStoreIcon,
  PlayMarketIcon,
  AppleStoreIconMobile,
  PlayMarketIconMobile,
  TelegramIcon,
  FacebookIcon,
  InstagramIcon,
} from '../Icons'
import cls from './Footer.module.scss'
import { menu } from '../../mock/menu'

function Footer() {
  const { pathname, locale, push } = useRouter()

  const [openLogin, setOpenDialog] = useState(false)
  const cookies = parseCookies()
  const [isMobile] = useIsMobile()

  const isUserLogged = () => {
    if (cookies.client_id) {
      push('/orders')
    } else {
      setOpenDialog(true)
    }
  }

  const handleCloseLogin = () => {
    setOpenDialog(false)
  }

  return (
    <div className={cls.root}>
      <Container maxWidth='xl'>
        <div className={cls.footerBox}>
          <ul className={cls.footerList}>
            <li className={cls.logo}>
              <Link href='/'>
                <a>
                  <EvosLogo />
                </a>
              </Link>
            </li>
            <Box className={cls.hideReverse}>
              <Box display='flex' sx={{ marginTop: '10px' }}>
                <li className={cls.listItem} style={{ marginRight: '16px' }}>
                  <a
                    href='https://apps.apple.com/us/app/evos-uz/id1595897228'
                    target='_blank'
                    rel='noreferrer'
                    className={''}
                  >
                    <AppleStoreIconMobile className={cls.appleStore} />
                  </a>
                </li>
                <li className={cls.listItem}>
                  <a
                    href='https://play.google.com/store/apps/details?id=uz.makfood.service.evos&hl=ru&gl=US'
                    target='_blank'
                    rel='noreferrer'
                    className={cls.listLinkIcon}
                  >
                    <PlayMarketIconMobile className={cls.appleStore} />
                  </a>
                </li>
              </Box>
            </Box>
          </ul>
          <ul className={cls.footerNav}>
            <li className={`${cls.listItem} ${cls.listLink}`}>
              <Link href='/'>
                <a className={`${pathname === '/' ? cls.activeLink : ''}`}>
                  {menu[locale].main}
                </a>
              </Link>
            </li>
            <li className={`${cls.listItem} ${cls.listLink}`}>
              <Link href='/branches' className={cls.listLink}>
                <a
                  className={` ${pathname.includes('/branches') ? cls.activeLink : ''
                    }`}
                >
                  {menu[locale].branches}
                </a>
              </Link>
            </li>
            <li className={`${cls.listItem} ${cls.listLink}`}>
              <Link href='/vacancy'>
                <a
                  className={`${pathname.includes('/vacancy') ? cls.activeLink : ''
                    }`}
                >
                  {menu[locale].vacancies}
                </a>
              </Link>
            </li>
            <li className={`${cls.listItem} ${cls.listLink}`}>
              <Link href='/table-service'>
                <a
                  className={`${pathname.includes('/table-service') ? cls.activeLink : ''
                    }`}
                >
                  Table Service
                </a>
              </Link>
            </li>
            <li className={`${cls.listItem} ${cls.listLink}`}>
              <Link href='/news'>
                <a
                  className={`${pathname.includes('/news') ? cls.activeLink : ''
                    }`}
                >
                  {menu[locale].news}
                </a>
              </Link>
            </li>
            {/* <li className={`${cls.listItem} ${cls.listLink}`}>
              <Box onClick={isUserLogged} sx={{ cursor: 'pointer' }}>
                <a
                  className={`${pathname === '/orders' ? cls.activeLink : ''}`}
                >
                  {menu[locale].orders}
                </a>
              </Box>
            </li> */}
            <li className={`${cls.listItem} ${cls.listLink}`}>
              <Link href='/about'>
                <a className={`${pathname === '/about' ? cls.activeLink : ''}`}>
                  {menu[locale].abouts}
                </a>
              </Link>
            </li>
            <li className={`${cls.listItem} ${cls.listLink}`}>
              <Link href='/contacts'>
                <a
                  className={`${pathname === '/contacts' ? cls.activeLink : ''
                    }`}
                >
                  {menu[locale].contacts}
                </a>
              </Link>
            </li>

          </ul>
          <ul className={cls.kidsMenu}>
            <li className={cls.kidsWrapper}>
              <Link href={'/kids'}>
                <a className={cls.kids}>kids</a>
              </Link>

            </li>
            <li className={`${cls.content} ${pathname.includes('/kids/playgrounds') ? cls.content__red : ''
              }`}>
              <Link href='/kids/playgrounds/'>
                <a

                >
                  {menu[locale].playground}
                </a>
              </Link>
            </li>
            <li className={`${cls.content} ${pathname.includes('/kids/aquagrim') ? cls.content__green : ''
              }`}>
              <Link href='/kids/aquagrim/'>
                <a>{menu[locale].aquagrim}</a>
              </Link>
            </li>
            <li className={`${cls.content} ${pathname.includes('/kids/events') ? cls.content__yellow : ''
              }`}>
              <Link href='/kids/events/'>
                <a

                >
                  {menu[locale].events}

                </a>
              </Link>
            </li>
          </ul>
          <ul className={`${cls.footerList} ${cls.hideIcons}`}>
            <Box display='flex'>
              <li className={cls.listItem}>
                <a
                  href='https://apps.apple.com/us/app/evos-uz/id1595897228'
                  target='_blank'
                  rel='noreferrer'
                  className={cls.listLinkIcon}
                >
                  <AppleStoreIcon
                    width={168}
                    height={56}
                    className={cls.appleStore}
                  />
                </a>
              </li>
              <li className={cls.listItem}>
                <a
                  href='https://play.google.com/store/apps/details?id=uz.makfood.service.evos&hl=ru&gl=US'
                  target='_blank'
                  rel='noreferrer'
                  className={cls.listLinkIcon}
                >
                  <PlayMarketIcon
                    width={168}
                    height={56}
                    className={cls.appleStore}
                  />
                </a>
              </li>
            </Box>
          </ul>
        </div>
        <div className={cls.socialBox}>
          <p className={cls.text}>
            © Evos 2006 - {new Date().getFullYear()} All rights reserved
          </p>
          <ul className={cls.footerList}>
            <li className={cls.listItem}>
              <a
                href='https://www.instagram.com/evosuzbekistan/'
                target='_blank'
                rel='noreferrer'
                className={`${cls.listLinkIcon} ${cls.instagram}`}
              >
                <InstagramIcon />
              </a>
            </li>
            <li className={cls.listItem}>
              <a
                href='https://www.facebook.com/evosuzbekistan/'
                target='_blank'
                rel='noreferrer'
                className={`${cls.listLinkIcon} ${cls.facebook}`}
              >
                <FacebookIcon />
              </a>
            </li>
            <li className={cls.listItem}>
              <a
                href='https://t.me/evosdeliverybot'
                target='_blank'
                rel='noreferrer'
                className={`${cls.listLinkIcon} ${cls.telegram}`}
              >
                <TelegramIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className={cls.offert}>
          {/* <div>
            <Link href='#'>
              <a target='_blank' className={cls.link}>
                {menu[locale].footerPrivacyPolicy}
              </a>
            </Link>
          </div> */}
          <Stack flexDirection={'row'} columnGap={'20px'}>
            <Link href='/politics'>
              <a target='_blank' className={cls.link}>
                {menu[locale].footerPublicOffert}
              </a>
            </Link>
            {/* <a href='/certificates.pdf' download className={cls.link}>
              {menu[locale].certificates}</a> */}

          </Stack>
        </div>
      </Container>
      <Login
        open={openLogin}
        onClose={handleCloseLogin}
        setOpenLoginDialog={setOpenDialog}
      />
    </div>
  )
}

export default Footer
