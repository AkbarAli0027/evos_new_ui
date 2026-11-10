import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import { menu } from '../../mock/menu'
import { ExpandIcon } from '../Icons'
import { LocationIcon } from '../Icons/LocationIcon'
import LanguageIcon from '@mui/icons-material/Language'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import nookies from 'nookies'
import { User } from '../Icons'

export default function MobileMenu({ onOpenAddress, onLoginClick, currentAddress }) {
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [kidsOpen, setKidsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { pathname, locale } = useRouter()
  const router = useRouter()
  const { token } = nookies.get()

  const close = () => {
    setOpen(false)
    setAboutOpen(false)
    setKidsOpen(false)
    setLangOpen(false)
  }

  const getLocaleLabel = (loc) => {
    switch (loc) {
      case 'uz': return "O'zbekcha"
      case 'ru': return 'Русский'
      case 'en': return 'English'
      default: return "O'zbekcha"
    }
  }

  const navLinks = [
    { href: '/branches', label: menu[locale].branches },
    { href: '/vacancy',  label: menu[locale].vacancies },
    { href: '/table-service', label: menu[locale].tableService },
  ]

  return (
    <>
      {/* Hamburger tugma */}
      <button
        onClick={() => setOpen(true)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
        }}
      >
        <MenuIcon style={{ fontSize: 28, color: '#007855' }} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.45)',
            backdropFilter: 'blur(4px)',
            zIndex: 10000,
          }}
        />
      )}

      {/* Drawer */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '85vw',
        maxWidth: 340,
        height: '100vh',
        backgroundColor: '#fff',
        zIndex: 10001,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        boxShadow: '-4px 0 24px rgba(0,0,0,0.12)',
      }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px',
          borderBottom: '1px solid #f0f0f0',
        }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: '#111' }}>Menyu</span>
          <button onClick={close} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
            <CloseIcon style={{ fontSize: 24, color: '#555' }} />
          </button>
        </div>

        {/* Manzil */}
        <button
          onClick={() => { close(); onOpenAddress?.() }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '14px 20px',
            background: '#f8fffe',
            border: 'none',
            borderBottom: '1px solid #f0f0f0',
            cursor: 'pointer',
            width: '100%',
            textAlign: 'left',
          }}
        >
          <LocationIcon stroke="#007855" fill="none" />
          <span style={{
            fontSize: 14,
            color: '#007855',
            fontWeight: 500,
            flex: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {currentAddress?.address?.replace('Узбекистан, Ташкент,', '') || menu[locale].selectYourAddress}
          </span>
          <ExpandIcon />
        </button>

        {/* Nav linklar */}
        <div style={{ padding: '8px 0' }}>

          {/* Biz haqimizda */}
          <div>
            <button
              onClick={() => setAboutOpen(v => !v)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '14px 20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 15,
                color: '#111',
                fontWeight: 500,
              }}
            >
              {menu[locale].abouts}
              <span style={{ transform: aboutOpen ? 'rotate(180deg)' : 'none', transition: '0.3s', display: 'flex' }}>
                <ExpandIcon />
              </span>
            </button>
            {aboutOpen && (
              <div style={{ background: '#f9f9f9', paddingLeft: 20 }}>
                {[
                  { href: '/news',   label: menu[locale].news },
                  { href: '/contacts', label: menu[locale].contacts },
                  { href: '/about/gallery/gallery-item/#gallery', label: menu[locale].certificates },
                ].map(item => (
                  <Link key={item.href} href={item.href}>
                    <a onClick={close} style={{ display: 'block', padding: '12px 20px', fontSize: 14, color: '#444', textDecoration: 'none' }}>
                      {item.label}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Oddiy linklar */}
          {navLinks.map(item => (
            <Link key={item.href} href={item.href}>
              <a
                onClick={close}
                style={{
                  display: 'block',
                  padding: '14px 20px',
                  fontSize: 15,
                  color: pathname === item.href ? '#007855' : '#111',
                  fontWeight: pathname === item.href ? 600 : 500,
                  textDecoration: 'none',
                  borderBottom: '1px solid #f5f5f5',
                }}
              >
                {item.label}
              </a>
            </Link>
          ))}

          {/* Kids */}
          <div>
            <button
              onClick={() => setKidsOpen(v => !v)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '14px 20px',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid #f5f5f5',
                cursor: 'pointer',
                fontSize: 15,
                fontWeight: 700,
                color: '#0a8cdc',
              }}
            >
              kids
              <span style={{ transform: kidsOpen ? 'rotate(180deg)' : 'none', transition: '0.3s', display: 'flex' }}>
                <ExpandIcon />
              </span>
            </button>
            {kidsOpen && (
              <div style={{ background: '#f9f9f9', paddingLeft: 20 }}>
                {[
                  { href: '/kids/playgrounds/', label: menu[locale].playground, color: '#fa6464', bg: '#fa6464' },
                  { href: '/kids/aquagrim/',    label: menu[locale].aquagrim,   color: '#00b987', bg: '#00b987' },
                  { href: '/kids/events/',      label: menu[locale].events,     color: '#ffeb32', bg: '#ffeb32' },
                ].map(item => (
                  <Link key={item.href} href={item.href}>
                    <a
                      onClick={close}
                      style={{
                        display: 'inline-block',
                        margin: '6px 0 6px 20px',
                        padding: '6px 14px',
                        borderRadius: 20,
                        background: item.bg,
                        color: '#fff',
                        fontSize: 13,
                        fontWeight: 700,
                        textDecoration: 'none',
                      }}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Pastki qism: til + login */}
        <div style={{ marginTop: 'auto', borderTop: '1px solid #f0f0f0', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* Til tanlash */}
          <div>
            <button
              onClick={() => setLangOpen(v => !v)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 0',
                width: '100%',
              }}
            >
              <LanguageIcon style={{ color: '#007855', fontSize: 22 }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>
                {getLocaleLabel(locale)}
              </span>
              <span style={{ marginLeft: 'auto', transform: langOpen ? 'rotate(180deg)' : 'none', transition: '0.3s', display: 'flex' }}>
                <ExpandIcon />
              </span>
            </button>
            {langOpen && (
              <div style={{ paddingLeft: 8 }}>
                {['uz', 'ru', 'en'].map(lng => (
                  <Link key={lng} href={router.asPath} locale={lng}>
                    <a
                      onClick={close}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '10px 8px',
                        textDecoration: 'none',
                        color: locale === lng ? '#007855' : '#444',
                        fontWeight: locale === lng ? 600 : 400,
                        fontSize: 14,
                      }}
                    >
                      <img src={`/images/svg/${lng}.svg`} alt={lng} width={22} height={22} />
                      {getLocaleLabel(lng)}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Login tugma */}
          <button
            onClick={() => { close(); onLoginClick?.() }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 16px',
              borderRadius: 12,
              border: '2px solid #007855',
              background: token ? '#007855' : 'transparent',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            <User color={token ? '#fff' : '#007855'} />
            <span style={{ fontSize: 14, fontWeight: 600, color: token ? '#fff' : '#007855' }}>
              {token ? menu[locale].myOrders || 'Mening buyurtmalarim' : menu[locale].login || 'Kirish'}
            </span>
          </button>
        </div>
      </div>
    </>
  )
}