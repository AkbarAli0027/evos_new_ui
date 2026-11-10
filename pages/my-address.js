import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import Input from '../components/Input/Input'
import FullButton from '../components/FullButton/FullButton'
import FullButtonGrey from '../components/FullButton/FullButtonGrey'
import cls from '../components/MyAddress/MyAddress.module.scss'
import { PencilEdit } from '../components/Icons'
import SEO from '../components/seo'

export default function MyInfoMobile() {
  return (
    <>
      <SEO title='Адрес' />
      <Box id='boxRoot'>
        <Container maxWidth='xl'>
          <Box
            display='flex'
            flexDirection='column'
            height='85vh'
            justifyContent='space-between'
          >
            <Box sx={{ backgroundColor: '#ffffff' }} padding='16px'>
              <Typography variant={`h1`}>Мои адреса</Typography>
              <form>
                <div className={cls.inputBox}>
                  <input
                    type='text'
                    defaultValue='ул. Чилонзор, 12'
                    className={cls.input}
                  />
                  <PencilEdit
                    style={{ cursor: 'pointer', marginRight: '16px' }}
                  />
                </div>
                <div className={cls.inputBox}>
                  <input
                    type='text'
                    defaultValue='ул. Чилонзор, 12'
                    className={cls.input}
                  />
                  <PencilEdit
                    style={{ cursor: 'pointer', marginRight: '16px' }}
                  />
                </div>
              </form>
            </Box>
            <Box
              display='flex'
              flexDirection='column'
              sx={{ backgroundColor: '#ffffff', padding: '16px' }}
            >
              <FullButtonGrey text='Отмена' style={{ marginBottom: '16px' }} />
              <FullButton text='Сохранить изменения' />
              {/* <button>Сохранить изменения</button> */}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}
