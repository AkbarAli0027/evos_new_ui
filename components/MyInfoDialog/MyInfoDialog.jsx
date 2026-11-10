import React, { useState } from 'react'
import { Box, Typography, Dialog, DialogTitle } from '@mui/material'
import Input from '../Input/Input'
import FullButton from '../FullButton/FullButton'
import { styled } from '@mui/material/styles'
import CloseIcon from '../CloseIcon/CloseIcon'
import cls from './MyInfoDialog.module.scss'
import { menu } from '../../mock/menu'
import { useRouter } from 'next/router'
import { requestV2 } from '../../utils/axios'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    //   padding: theme.spacing(2),
    margin: '0',
    padding: '32px',
    width: '434px',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

function MyInfoDialog({ onClose, open, client }) {
  const { locale } = useRouter()
  const [fio, setFio] = useState('')

  const onSave = async (e) => {
    e.preventDefault()
    try {
      const res = await requestV2.post('/service/client-update', {
        fio: fio,
      })
      console.log('res', res)
      if (res.code === 200) {
        onClose(e)
      }
    } catch {}
  }

  return (
    <BootstrapDialog onClose={onClose} open={open}>
      <CloseIcon style={{ margin: '0' }} onClick={onClose} />
      <Typography variant={`h1`}>{menu[locale].myInfo}</Typography>
      <form>
        <Box marginBottom='24px' marginTop='32px'>
          <label htmlFor='name'>
            <Typography variant={`h17`}>{menu[locale].fullName}</Typography>
          </label>
          <Input
            onChange={(e) => setFio(e.target.value)}
            style={{ marginTop: '8px' }}
            defaultValue={client?.title}
          />
        </Box>
        <Box marginBottom='32px'>
          <label htmlFor='name'>
            <Typography variant={`h17`}>{menu[locale].phone}</Typography>
          </label>
          <Input
            style={{ marginTop: '8px', pointerEvents: 'none' }}
            defaultValue={`+${client?.phone_number}`}
            disabled
          />
        </Box>
        <Box display='flex'>
          <button className={cls.btn} onClick={onClose}>
            {menu[locale].cancel}
          </button>
          <button className={cls.btnPrimary} onClick={onSave}>
            {menu[locale].save}
          </button>
        </Box>
      </form>
    </BootstrapDialog>
  )
}

export default MyInfoDialog
