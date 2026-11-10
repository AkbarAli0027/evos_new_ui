import React, { useState } from 'react'
import { Box, Typography, Dialog } from '@mui/material'
import Input from '../Input/Input'
import FullButton from '../FullButton/FullButton'
import { styled } from '@mui/material/styles'
import CloseIcon from '../CloseIcon/CloseIcon'
import cls from './VacancyRequest.module.scss'
import { useFormik } from 'formik'
import PhoneInput from '../Input/PhoneInput'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { menu } from '../../mock/menu'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  paper: {
    margin: '0',
    borderRadius: '0',
    padding: '32px',
    width: '483px',
    maxHeight: '100%',
    '@media (max-width: 800px)': {
      padding: '16px',
    },
  },
}))

function VacancyRequestForm({ onClose, open }) {
  const [loading, setLoading] = useState(false)
  const { locale } = useRouter()
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      file: '',
      fileName: '',
    },
    validate: (values) => {
      const errors = {}
      if (!values.name) {
        errors.name = 'Required'
      }
      if (!values.phone) {
        errors.phone = 'Required'
      } else if (values.phone.split(' ').join('').length < 13) {
        errors.phone = 'Phone is invalid'
      }
      return errors
    },
    onSubmit: (values) => {
      setLoading(true)

      sentEmail(values)
    },
    validateOnBlur: false,
    validateOnChange: false,
  })

/*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Send email with data to server
   * @param {Object} data - object with fields: name, phone, file, fileName
   * @returns {Promise<void>}
   */
/*******  a7781f4e-93f0-4f4c-960e-c8a1687d33c1  *******/  function sentEmail(data) {
    axios
      .post('/api/sent-email', data)
      .then((res) => {
        onClose()
        toast.success('Запрос успешно отправлен')
        formik.resetForm()
      })
      .catch((err) => {
        console.error(err)
        toast.error('Произошла ошибка, попробуйте позже')
      })
      .finally(() => setLoading(false))
  }

  function handleFileChange(event) {
    const file = event.target.files[0]
    formik.setFieldValue('fileName', file.name)
    getBase64(file)
  }

  function getBase64(file) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      formik.setFieldValue('file', reader.result)
    }
    reader.onerror = function (error) {
      console.log('Error: ', error)
    }
  }

  const classes = useStyles()

  return (
    <Dialog
      onClose={onClose}
      open={open}
      sx={{
        padding: 4,
        '@media (max-width: 800px)': {
          padding: 2,
        },
      }}
      classes={{ paper: classes.paper }}
      BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.8)' } }}
    >
      <CloseIcon style={{ margin: '0' }} onClick={onClose} />
      <Typography variant={`h1`}>{menu[locale].sendVacancyRequest}</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box marginBottom='24px' marginTop='32px'>
          <label htmlFor='name'>
            <Typography variant={`h17`}>{menu[locale].fio}</Typography>
          </label>
          <Input
            style={{ marginTop: '8px', maxWidth: '419px' }}
            name='name'
            id='name'
            placeholder={menu[locale].name}
            onChange={formik.handleChange}
            error={formik.errors.name}
          />
        </Box>
        <Box marginBottom='32px'>
          <label htmlFor='phone'>
            <Typography variant={`h17`}>{menu[locale].phoneNumber}</Typography>
          </label>
          <PhoneInput
            id='phone'
            name='phone'
            style={{ marginTop: '8px', maxWidth: '419px' }}
            onChange={formik.handleChange}
            placeholder={menu[locale].enterPhNum}
            error={formik.errors.phone}
          />
        </Box>
        <Box marginBottom='32px' display='flex' flexDirection='column'>
          <Typography variant={`h17`}>{menu[locale].resume}</Typography>
          <Box display='flex' className={cls.inputWrapper}>
            <Box className={cls.inputText} width='60%'>
              <Typography variant='h3'>
                {formik.values.fileName || menu[locale].fileNotChosen}
              </Typography>
            </Box>
            <Box width='40%'>
              <label htmlFor='file' className={cls.inputResume}>
                {menu[locale].chooseFile}
              </label>
              <input
                id='file'
                type='file'
                onChange={handleFileChange}
                className={cls.hiddenInput}
              />
            </Box>
          </Box>
        </Box>
        <FullButton text={menu[locale].send} type='submit' />
      </form>
    </Dialog>
  )
}

export default VacancyRequestForm
