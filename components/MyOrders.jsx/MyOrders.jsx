import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
import CardWrapper from '../CardWrapper/CardWrapper'
import cls from './MyOrders.module.scss'
import FullButton from '../FullButton/FullButton'
import AcceptedStatus from '../Statuses/AcceptedStatus'
import CanceledStatus from '../Statuses/CanceledStatus'
import OnTheWayStatus from '../Statuses/OnTheWayStatus'
import ReadyStatus from '../Statuses/ReadyStatus'
import SuccessStatus from '../Statuses/SuccessStatus'
import moment from 'moment'
import 'moment/locale/ru'
import { numberToPrice } from '../../utils/numberToPrice'
import { menu, btnText } from '../../mock/menu'
import { useRouter } from 'next/router'

export default function MyOrders({ orderItem }) {
  // console.log('orderItem', orderItem)
  const timestamp = orderItem?.created // Unix timestamp for 2023-11-22 15:35:54 UTC
  const date = new Date(timestamp * 1000)

  const { locale } = useRouter()

  const positionArr = orderItem && Object.values(orderItem?.positions)
  // const adressesArr = Object.values(orderItem.client.address)

  const getStatusComponent = (item) => {
    if (
      item?.lastStatusId === 0 ||
      item?.lastStatusId === 1 ||
      item?.lastStatusId === 11 ||
      item?.lastStatusId === 12 ||
      item?.lastStatusId === 13 ||
      item?.lastStatusId === 15
    ) {
      return <AcceptedStatus statusName={item?.lastStatusTitle} />
    } else if (
      item?.lastStatusId === 2 ||
      item?.lastStatusId === 7 ||
      item?.lastStatusId === 14
    ) {
      return <CanceledStatus statusName={item?.lastStatusTitle} />
    } else if (
      item?.lastStatusId === 10 ||
      item?.lastStatusId === 13 ||
      item?.lastStatusId === 8
    ) {
      return <OnTheWayStatus statusName={item?.lastStatusTitle} />
    } else if (item?.lastStatusId === 5 || item?.lastStatusId === 6) {
      return <SuccessStatus statusName={item?.lastStatusTitle} />
    } else if (item?.lastStatusId === 9 || item?.lastStatusId === 4) {
      return <ReadyStatus statusName={item?.lastStatusTitle} />
    }
  }

  // console.log('orderItem', orderItem)

  moment.locale('ru')
  return (
    <Box className={cls.root}>
      <Typography variant={`h1`} color={`black`} className={cls.title}>
        {menu[locale].myOrders}
      </Typography>
      <Box display='flex' className={cls.verticalMargin}>
        <Box className={cls.maxWidthBox}>
          <CardWrapper>
            <Box display='flex' justifyContent='space-between'>
              <Typography variant={`h1`} color={`black`}>
                {menu[locale].order} №{orderItem && orderItem?.order_id}
              </Typography>
            </Box>
            <Box
              display='flex'
              mt={4}
              alignItems='center'
              justifyContent='space-between'
            >
              {getStatusComponent(orderItem)}
              <Typography sx={{ marginLeft: 4 }}>
                {moment(date).format('LLL')}
              </Typography>
            </Box>
            <Box
              display='flex'
              flexDirection='column'
              marginTop='32px'
              marginBottom='16px'
            >
              {/* <Box
                display='flex'
                flexWrap='nowrap'
                justifyContent='space-between'
                alignItems='center'
                marginBottom='16px'
              >
                <Typography variant={`h11`} sx={{ marginRight: '32px' }}>
                  {menu[locale].typeOfDelivery}
                </Typography>
                <Typography variant={`h13`}>{menu[locale].delivery}</Typography>
              </Box> */}
              <Box
                display='flex'
                flexWrap='nowrap'
                justifyContent='space-between'
                alignItems='center'
                marginBottom='16px'
              >
                <Typography
                  className={cls.bodyText}
                  sx={{ marginRight: '32px' }}
                >
                  {menu[locale].typeOfPayment}
                </Typography>
                <Typography className={cls.bodyDescription}>
                  {Object?.values(orderItem?.payment)?.[0]?.payment_system_title}
                </Typography>
              </Box>
              <Box
                display='flex'
                flexWrap='nowrap'
                justifyContent='space-between'
                alignItems='center'
                marginBottom='16px'
              >
                <Typography
                  className={cls.bodyText}
                  sx={{ marginRight: '32px' }}
                >
                  {menu[locale].priceOfOrder}
                </Typography>
                <Typography className={cls.bodyDescription}>
                  {numberToPrice(orderItem?.total)}
                </Typography>
              </Box>
              <Box
                display='flex'
                flexWrap='nowrap'
                justifyContent='space-between'
                alignItems='center'
                marginBottom='16px'
              >
                <Typography
                  className={cls.bodyText}
                  sx={{ marginRight: '32px' }}
                >
                  {menu[locale].priceOfDelivery}
                </Typography>
                <Typography className={cls.bodyDescription}>
                  {numberToPrice(orderItem?.grand_total - orderItem?.total)}
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ marginTop: '36px' }}>
                {positionArr?.map((el, ind) => (
                  <Box
                    key={ind}
                    display='flex'
                    flexWrap='nowrap'
                    justifyContent='space-between'
                    alignItems='center'
                    marginBottom='16px'
                  >
                    <Typography
                      className={cls.bodyText}
                      sx={{ marginRight: '32px' }}
                    >
                      {el.cnt}х {el.title}
                    </Typography>
                    <Typography className={cls.bodyDescription}>
                      {numberToPrice(el?.price)}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box
                display='flex'
                flexWrap='nowrap'
                justifyContent='space-between'
                alignItems='center'
                marginTop='16px'
                marginBottom='16px'
              >
                <Typography variant={`h6`} sx={{ marginRight: '32px' }}>
                  {menu[locale].total}
                </Typography>
                <Typography variant={`h12`}>
                  {numberToPrice(orderItem?.grand_total)}
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ marginTop: '48px' }}>
                <Box
                  display='flex'
                  flexWrap='nowrap'
                  justifyContent='space-between'
                  alignItems='center'
                  marginBottom='16px'
                >
                  <Typography
                    className={cls.bodyText}
                    sx={{ marginRight: '32px' }}
                  >
                    {menu[locale].client}
                  </Typography>
                  <Typography
                    className={`${cls.bodyDescription} ${cls.textWidth}`}
                  >
                    {orderItem?.client?.title}
                  </Typography>
                </Box>

                <Box
                  display='flex'
                  flexWrap='nowrap'
                  justifyContent='space-between'
                  alignItems='center'
                  marginBottom='16px'
                >
                  <Typography
                    className={cls.bodyText}
                    sx={{ marginRight: '32px' }}
                  >
                    {menu[locale].address}
                  </Typography>
                  <Typography className={cls.bodyDescription}>
                    {orderItem?.client?.address.full}
                  </Typography>
                </Box>

                <Box
                  display='flex'
                  flexWrap='nowrap'
                  justifyContent='space-between'
                  alignItems='center'
                  marginBottom='16px'
                >
                  <Typography
                    className={cls.bodyText}
                    sx={{ marginRight: '32px' }}
                  >
                    {menu[locale].phoneNumber}
                  </Typography>
                  <Typography className={cls.bodyDescription}>
                    {`+${orderItem?.client?.phone}`}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <FullButton text={btnText[locale].reOrder} />
          </CardWrapper>
        </Box>
      </Box>
    </Box>
  )
}
