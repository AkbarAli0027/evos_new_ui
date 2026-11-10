import React from 'react'
import { Box, Typography } from '@mui/material'
import CardWrapper from '../CardWrapper/CardWrapper'
import Input from '../Input/Input'
import PhoneInput from '../Input/PhoneInput'
import cls from './PersonalData.module.scss'
import { menu } from '../../mock/menu'
import { useRouter } from 'next/router'

export default function PersonalData({ formik }) {
  const { locale } = useRouter()
  return (
    <CardWrapper>
      <Typography variant={`h1`} color={`black`}>
        {menu[locale].personalInfo}
      </Typography>
      <Box className={cls.formBox} mt={4}>
        <Input
          name='name'
          placeholder={menu[locale].name}
          onChange={formik.handleChange}
          className={cls.personalInput}
          error={formik.errors.name}
          value={formik.values?.name}
        />
        <PhoneInput
          name='phone'
          onChange={formik.handleChange}
          placeholder={menu[locale].phoneNumber}
          className={cls.personalInput}
          error={formik.errors.phone}
          value={formik.values?.phone}
        />
      </Box>
    </CardWrapper>
  )
}