import React, { useState } from 'react'
import { Drawer, Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { Globus, FastFood, Logout, EvosLogo, ClearIcon } from '../Icons'
import { parseCookies } from 'nookies'
import Login from '../Login/Login'
import { menu } from '../../mock/menu'
import LanguageMobile from '../LanguageMobile/LanguageMobile'
import nookies, { destroyCookie } from 'nookies'
import Link from 'next/link'
import CardMembershipIcon from '@mui/icons-material/CardMembership'
import {
  ArticleOutlined,
  CallOutlined,
  FeedOutlined,
  HomeOutlined,
  PersonAddOutlined,
  StoreOutlined,
  TableBar,
} from '@mui/icons-material'
import cls from './RightMenu.module.scss'

const CustomBox = styled(Box)(({ theme }) => ({
  '& .MuiBox-root': {
    cursor: 'pointer',
    paddingTop: '6px',
    position: 'relative',
    zIndex: '23345',
    paddingBottom: '6px',
    paddingLeft: '8px',
    marign: '16px',
    '&:hover': {
      background: '#F6F8F9',
    },
  },
}))

const list = [
  {
    name: 'main',
    href: '/',
    icon: <HomeOutlined />,
  },
  {
    name: 'branches',
    href: '/branches',
    icon: <StoreOutlined />,
  },
  {
    name: 'vacancies',
    href: '/vacancy',
    icon: <PersonAddOutlined />,
  },
  {
    name: 'news',
    href: '/news',
    icon: <ArticleOutlined />,
  },
  {
    name: 'certificates',
    href: '/about/gallery/gallery-item/#gallery',
    icon: <CardMembershipIcon />,
  },
  {
    name: 'abouts',
    href: '/about',
    icon: <FeedOutlined />,
  },
  {
    name: 'contacts',
    href: '/contacts',
    icon: <CallOutlined />,
  },
]

function RightMenu({ onClose, open }) {
  const vw = typeof window !== 'undefined' ? window.innerWidth : 0
  const cookies = parseCookies()
  const { locale, push, pathname } = useRouter()
  const [openLoginDialog, setOpenLoginDialog] = useState(false)
  const [openLang, setOpenLang] = useState(false)
  const [isCheckCode, setIsCheckCode] = useState(false)
  const [data, setData] = useState({ phone: '', fullName: '', sms: '' })
  const { token } = nookies.get()

  const handleRedirectToOrder = () => {
    // (cookies.client_id)
    if (token) {
      push('/orders')
      setOpenLoginDialog(false)
    } else {
      setOpenLoginDialog(true)
    }
    onClose()
  }
  const handleRedirectToTableService = () => {
    push('/table-service')
    onClose()
  }
  const handleCloseLogin = () => {
    setOpenLoginDialog(false)
  }

  // OPEN LANGUAGE DIALOG
  const handleCloseLang = () => {
    setOpenLang(false)
  }

  const handleOpenLang = () => {
    setOpenLang(!openLang)
  }

  const handleLogout = () => {
    // destroyCookie(null, 'client_id', { path: '/' })
    destroyCookie(null, 'token', { path: '/' })
    localStorage.removeItem(`persist:address`)
    destroyCookie(null, 'client_phone_number', { path: '/' })
    // localStorage.clear()
    window.location.href = '/'
    onClose
  }

  return (
    <>
      <Drawer
        anchor='right'
        open={vw <= 760 && open}
        onClose={onClose}
        id='rightProfileDrawer'
      >
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          width='100%'
          height={72}
          bgcolor='white'
          p={2}
          boxShadow='0px 4px 8px rgba(0, 0, 0, 0.08), inset 0px -1px 0px rgba(0, 0, 0, 0.05)'
        >
          <Box width={108} height={40} onClick={onClose}>
            <EvosLogo height='100%' width='100%' />
          </Box>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            width={40}
            height={40}
            bgcolor='#F6F8F9'
            onClick={onClose}
          >
            <ClearIcon fill='#323232' />
          </Box>
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          width='calc(100% - 32px)'
          padding='16px'
          m={2}
          bgcolor='white'
        >
          {list.map((item, index) => (
            <CustomBox key={item.name + index}>
              <Link href={item.href}>
                <a style={{ display: 'block' }} onClick={() => onClose()}>
                  <Box display='flex' alignItems='center'>
                    <Box alignSelf='center' verticalAlign='middle'>
                      {item.icon}
                    </Box>
                    <Typography
                      variant='h4'
                      sx={{ maxWidth: '144px', marginLeft: '12px' }}
                    >
                      {menu[locale][item.name]}
                    </Typography>
                  </Box>
                </a>
              </Link>
            </CustomBox>
          ))}
          <CustomBox>
            <Box
              display='flex'
              alignItems='center'
              onClick={handleRedirectToOrder}
            >
              <Box alignSelf='center' verticalAlign='middle'>
                <FastFood />
              </Box>
              <Typography
                variant={`h4`}
                sx={{ maxWidth: '144px', marginLeft: '12px' }}
              >
                {menu[locale].myOrders}
              </Typography>
            </Box>
          </CustomBox>
          <CustomBox>
            <Box display='flex' alignItems='center' onClick={handleOpenLang}>
              <Box alignSelf='center' verticalAlign='middle'>
                <Globus />
              </Box>
              <Typography
                variant={`h4`}
                sx={{ maxWidth: '144px', marginLeft: '12px' }}
              >
                {menu[locale].language}
              </Typography>
            </Box>
          </CustomBox>
          <CustomBox>
            <Box
              display='flex'
              alignItems='center'
              onClick={handleRedirectToTableService}
            >
              <Box
                alignSelf='center'
                verticalAlign='middle'
                sx={{
                  opacity: 0,
                }}
              >
                <TableBar />
              </Box>
              <Typography
                variant={`h4`}
                sx={{ maxWidth: '144px', marginLeft: '12px' }}
              >
                {menu[locale].tableService}
              </Typography>
            </Box>
          </CustomBox>
          <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
            <div className={cls.kidsWrapper}>
              <Link href={'/kids'}>
                <a onClick={onClose} className={cls.kids}>
                  kids
                </a>
              </Link>
            </div>
            <Link href='/kids/playgrounds/'>
              <a
                onClick={onClose}
                className={`${cls.content} ${
                  pathname.includes('/kids/playgrounds') ? cls.content__red : ''
                }`}
              >
                {menu[locale].playground}
              </a>
            </Link>
            <Link href='/kids/aquagrim/'>
              <a
                onClick={onClose}
                className={`${cls.content} ${
                  pathname.includes('/kids/aquagrim') ? cls.content__green : ''
                }`}
              >
                {menu[locale].aquagrim}
              </a>
            </Link>
            <Link href='/kids/events/'>
              <a
                onClick={onClose}
                className={`${cls.content} ${
                  pathname.includes('/kids/events') ? cls.content__yellow : ''
                }`}
              >
                {menu[locale].events}
              </a>
            </Link>
          </Box>
          {!token ? (
            <CustomBox>
              <Box
                display='flex'
                alignItems='center'
                onClick={() => setOpenLoginDialog(true)}
                // onClick={() => handleLogout()}
              >
                <Box alignSelf='center' verticalAlign='middle'>
                  <Logout />
                </Box>
                <Typography
                  variant={`h4`}
                  sx={{ maxWidth: '144px', marginLeft: '12px' }}
                >
                  {menu[locale].login}
                </Typography>
              </Box>
            </CustomBox>
          ) : (
            <CustomBox>
              <Box
                display='flex'
                alignItems='center'
                // onClick={() => setOpenLoginDialog(true)}
                onClick={() => handleLogout()}
              >
                <Box alignSelf='center' verticalAlign='middle'>
                  <Logout />
                </Box>
                <Typography
                  variant={`h4`}
                  sx={{ maxWidth: '144px', marginLeft: '12px' }}
                >
                  {menu[locale].logout}
                </Typography>
              </Box>
            </CustomBox>
          )}
        </Box>
      </Drawer>
      <Login
        open={openLoginDialog}
        onClose={handleCloseLogin}
        setOpenLoginDialog={setOpenLoginDialog}
        isCheckCode={isCheckCode}
        setIsCheckCode={setIsCheckCode}
        data={data}
        setData={setData}
      />
      <LanguageMobile open={openLang} onClose={handleCloseLang} />
    </>
  )
}

export default RightMenu
