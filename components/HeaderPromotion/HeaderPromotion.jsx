import { Box, Container } from '@mui/material'
import cls from './HeaderPromotion.module.scss'
import Link from 'next/link'
import { EvosLogo2, ExpandIcon2, MenuIcon } from '../Icons'
import { Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
import RightMenu from '../RightMenu/RightMenu'
import { menu } from '../../mock/menu'

export default function HeaderPromotion() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [openRightMenu, setOpenRightMenu] = useState(false)
  const { locale } = useRouter()
  const router = useRouter()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleOpenRightMenu = () => {
    setOpenRightMenu(!openRightMenu)
  }
  const handleCloseRightMenu = () => {
    setOpenRightMenu(false)
  }

  return (
    <div className={cls.wrapperHeader}>
      <Container sx={`xl`}>
        <Box display='flex' flexDirection='column'>
          <div className={cls.header}>
            <div className={cls.headerLeftBox}>
              <Link href={'/'} className={cls.desctopLogo}>
                <a className={cls.brandLogo}>
                
                  <EvosLogo2 />
                </a>
              </Link>

              <Box className={cls.navbar}>
                <ul className={cls.navbarList}>
                  <li className={cls.navbarListItem}>
                    <a className={cls.navbarListLink} href='#КАК УЧАСТВОВАТЬ'>
                      {menu[locale].navMenu1}
                    </a>
                  </li>
                  <li className={cls.navbarListItem}>
                    <a className={cls.navbarListLink} href='#ВИДЫ СЮРПРИЗОВ'>
                     {menu[locale].giftTitle}
                     
                    </a>
                  </li>
                  <li className={cls.navbarListItem}>
                    <a className={cls.navbarListLink} href='#ПРАВИЛА УЧАСТИЯ'>
                    {menu[locale].navMenu3}
                    </a>
                  </li>
                </ul>
              </Box>
            </div>

          

            <div className={cls.headerRightBox}>
              <a className={cls.boteLink} href='https://t.me/evospromo_bot'>
               {menu[locale].rigisterCod}
              </a>

              <div
                className={cls.lang}
                aria-describedby={id}
                onClick={handleClick}
              >
                {locale === 'uz' ? (
                  <div className={cls.activelang}>
                    <img src='/images/svg/uz.svg' alt='uzbek' /> UZ
                  </div>
                ) : locale === 'en' ? (
                  <div className={cls.activelang}>
                    <img src='/images/svg/en.svg' alt='english' /> EN
                  </div>
                ) : (
                  <div className={cls.activelang}>
                    <img src='/images/svg/ru.svg' alt='russian' /> RU
                  </div>
                )}
                <div className={cls.expandIcon}>
                  <ExpandIcon2 />
                </div>
                <div className={cls.wrapper}>
                  <div className={cls.langList}>
                    <Link href={router?.asPath} locale='uz'>
                      <a className={cls.listItem}>
                        <img src='/images/svg/uz.svg' alt='uzbekistan' />
                        <Typography
                          variant={`h4`}
                          sx={{ marginLeft: 2, textAlign: 'left' }}
                        >
                          O’zbekcha
                        </Typography>
                      </a>
                    </Link>
                    <Link href={router?.asPath} locale='ru'>
                      <a className={cls.listItem}>
                        <img src='/images/svg/ru.svg' alt='russian' />
                        <Typography
                          variant={`h4`}
                          sx={{ marginLeft: 2, textAlign: 'left' }}
                        >
                          Русский
                        </Typography>
                      </a>
                    </Link>
                    <Link href={router?.asPath} locale='en'>
                      <a className={cls.listItem}>
                        <img src='/images/svg/en.svg' alt='english' />
                        <Typography
                          variant={`h4`}
                          sx={{ marginLeft: 2, textAlign: 'left' }}
                        >
                          English
                        </Typography>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${cls.menuIconBox} ${openRightMenu && cls.rightMenu}`}
              onClick={handleOpenRightMenu}
              // onClose={handleCloseRightMenu}
            >
              <MenuIcon />
            </div>
          </div>
        </Box>
      </Container>
      <RightMenu open={openRightMenu} onClose={handleCloseRightMenu} />
    </div>
  )
}
