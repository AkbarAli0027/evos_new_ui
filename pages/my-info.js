import React from 'react'
import {Box, Typography, Container} from '@mui/material'
import Input from '../components/Input/Input'
import FullButton from '../components/FullButton/FullButton'
import FullButtonGrey from '../components/FullButton/FullButtonGrey'
import SEO from '../components/seo'


export default function MyInfoMobile() {
    return (
        <>
        <SEO title='Моя информация'/>
        <Box id='boxRoot'>
          <Container maxWidth='xl'>
          <Box display='flex' flexDirection='column' height='85vh' justifyContent='space-between'>
              <Box sx={{backgroundColor: '#ffffff'}} padding='16px'>
                  <Typography variant={`h1`}>Мои данные</Typography>
                    <form>
                        <Box marginBottom='24px' marginTop='32px'>
                            <label htmlFor="name"><Typography variant={`h17`}>ФИО</Typography></label>
                            <Input style={{marginTop: '8px'}} defaultValue='Abror'/>
                        </Box>
                        <Box marginBottom='32px'>
                            <label htmlFor="name"><Typography variant={`h17`}>Телефон</Typography></label>
                            <Input style={{marginTop: '8px'}} defaultValue='+998901234567'/>
                        </Box>
                        {/* <Box display='flex'>
                            <button className={cls.btn} onClick={onClose}>Отмена</button>
                            <button className={cls.btnPrimary} onClick={onClose}>Сохранить изменения</button>
                        </Box> */}
                    </form>
              </Box>
              <Box display='flex' flexDirection='column' sx={{backgroundColor:'#ffffff', padding: '16px'}}>
                    <FullButtonGrey text='Отмена' style={{marginBottom:'16px'}}/>
                    <FullButton text='Сохранить изменения'/>
                    {/* <button>Сохранить изменения</button> */}
                </Box>
          </Box>
          </Container>
        </Box>
        </>
      )
}