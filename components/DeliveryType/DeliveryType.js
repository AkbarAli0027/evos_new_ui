import React from 'react'
import { Typography, Box } from '@mui/material'
import CardWrapper from '../CardWrapper/CardWrapper'
import { DeliveryIcon, PickUpIcon } from '../Icons'
import cls from './DeliveryType.module.scss'
import { useRouter } from 'next/router'
import { menu } from '../../mock/menu'

export default function DeliveryType({ formik }) {
  const router = useRouter()
  const { locale } = router
  return (
    <CardWrapper mt={2}>
      <Box display='flex' justifyContent='space-between'>
        <Typography variant={`h1`} color={`black`}>
          {menu[locale].typeOfDelivery}
        </Typography>
      </Box>
      <Box className={cls.inputWrapper}>
        <div className={cls.radioCard}>
          <input
            type='radio'
            name='deliveryType'
            value='delivery'
            id='deliver'
            defaultChecked
            onChange={formik.handleChange}
          />
          <label htmlFor='deliver'>
            <span className={cls.cardIcon}>
              <DeliveryIcon />
            </span>
            <span className={cls.cardTitle}>Доставка</span>
            <span className={cls.radio} />
          </label>
        </div>

        {/* <div className={cls.radioCard}>
          <input
            type='radio'
            name='deliveryType'
            value='pickup'
            id='pickup'
            onChange={formik.handleChange}
          />
          <label htmlFor='pickup'>
            <span className={cls.cardIcon}>
              <PickUpIcon />
            </span>
            <span className={cls.cardTitle}>Самовывоз</span>
            <span className={cls.radio} />
          </label>
        </div> */}
      </Box>
    </CardWrapper>
  )
}
