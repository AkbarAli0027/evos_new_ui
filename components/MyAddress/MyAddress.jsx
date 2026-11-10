import React from 'react'
import {Box, Typography, Dialog, DialogTitle} from '@mui/material'
import Input from '../Input/Input'
import FullButton from '../FullButton/FullButton'
import { styled } from '@mui/material/styles';
import CloseIcon from '../CloseIcon/CloseIcon'
import { PencilEdit } from '../Icons';
import cls from './MyAddress.module.scss'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
    //   padding: theme.spacing(2),
    margin: '0',
    padding: '32px',
    width: '507px'
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

function MyAddress({onClose, open}) {
  return (
    <BootstrapDialog onClose={onClose} open={open}>
    <CloseIcon style={{margin: '0'}} onClick={onClose}/>
  <Typography variant={`h1`}>Мои адреса</Typography>
  <form>
      <div className={cls.inputBox}>
         <input type="text" defaultValue='ул. Чилонзор, 12' className={cls.input}/>
         <PencilEdit style={{cursor: 'pointer', marginRight: '16px'}}/>
      </div>
      <div className={cls.inputBox}>
         <input type="text" defaultValue='ул. Чилонзор, 12' className={cls.input}/>
         <PencilEdit style={{cursor: 'pointer', marginRight: '16px'}}/>
      </div>
      <Box display='flex' flexDirection='column' marginTop='32px'>
          <button className={cls.btn} style={{marginBottom: '16px'}} onClick={onClose}>Добавить адрес</button>
          <button className={cls.btnPrimary} onClick={onClose}>Сохранить изменения</button>
      </Box>
  </form>
</BootstrapDialog>
  )
}

export default MyAddress