import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
import { useRouter } from 'next/router'
import { menu, btnText } from '../../mock/menu'
import cls from './StatusCheck.module.scss'
import CardWrapper from '../CardWrapper/CardWrapper'
import FullButton from '../FullButton/FullButton'
import AcceptedStatus from '../Statuses/AcceptedStatus'
import CanceledStatus from '../Statuses/CanceledStatus'
import OnTheWayStatus from '../Statuses/OnTheWayStatus'
import ReadyStatus from '../Statuses/ReadyStatus'
import SuccessStatus from '../Statuses/SuccessStatus'
import { numberToPrice } from '../../utils/numberToPrice'

export default function StatusCheck({ orderItem }) {
  const getStatusComponent = (item) => {
    if (
      item.lastStatusId === 0 ||
      item.lastStatusId === 1 ||
      item.lastStatusId === 11 ||
      item.lastStatusId === 12 ||
      item.lastStatusId === 13 ||
      item.lastStatusId === 15
    ) {
      return <AcceptedStatus statusName={item.lastStatusTitle} />
    } else if (
      item.lastStatusId === 2 ||
      item.lastStatusId === 7 ||
      item.lastStatusId === 14
    ) {
      return <CanceledStatus statusName={item.lastStatusTitle} />
    } else if (
      item.lastStatusId === 10 ||
      item.lastStatusId === 13 ||
      item.lastStatusId === 8
    ) {
      return <OnTheWayStatus statusName={item.lastStatusTitle} />
    } else if (item.lastStatusId === 5 || item.lastStatusId === 6) {
      return <SuccessStatus statusName={item.lastStatusTitle} />
    } else if (item.lastStatusId === 9 || item.lastStatusId === 4) {
      return <ReadyStatus statusName={item.lastStatusTitle} />
    }
  }
  const { locale } = useRouter()
  return (
    <Box className={`${cls.boxWrapper} ${cls.root}`}>
      <Box
        display='flex'
        className={`${cls.verticalMargin} ${cls.maxWidthBox}`}
      >
        <Box width='100%'>
          <CardWrapper>
            <Box display='flex' justifyContent='space-between'>
              <Typography variant={`h1`} color={`black`}>
                {menu[locale].order} №{orderItem.id}
              </Typography>
            </Box>
            <Box
              display='flex'
              mt={4}
              alignItems='center'
              justifyContent='space-between'
            >
              {getStatusComponent(orderItem)}
              {/* <Typography sx={{ marginLeft: 4 }}>
                      {moment(orderItem.createdDate).format('LLL')}
                    </Typography> */}
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
                  {menu[locale].typeOfDelivery}
                </Typography>
                <Typography className={cls.bodyDescription}>
                  {menu[locale].delivery}
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
                  {menu[locale].typeOfPayment}
                </Typography>
                <Typography className={cls.bodyDescription}>
                  {orderItem?.lastPaymentTitle}
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
                  {numberToPrice(orderItem?.totalAmount)}
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
                  {orderItem?.additional?.deliverySum}
                </Typography>
              </Box>
              <Divider />
              {/* <Box sx={{ marginTop: '36px' }}>
                      {orderItem.positions.map((el, ind) => (
                        <Box
                          key={ind}
                          display='flex'
                          flexWrap='nowrap'
                          justifyContent='space-between'
                          alignItems='center'
                          marginBottom='16px'
                        >
                          <Typography  className={cls.bodyText} sx={{ marginRight: '32px' }}>
                            {el.count}х {el.title}
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
                        {numberToPrice(orderItem?.totalAmount)}
                      </Typography>
                    </Box>
                    <Divider /> */}
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
                  <Typography className={cls.bodyDescription}>
                    {orderItem?.client?.title}
                  </Typography>
                </Box>
                {orderItem.client.addresses.map((el) => (
                  <Box
                    key={el.id}
                    display='flex'
                    flexWrap='nowrap'
                    justifyContent='space-between'
                    alignItems='center'
                    marginBottom='16px'
                  >
                    <Typography
                      className={`${cls.bodyText} ${cls.textWidth}`}
                      sx={{
                        marginRight: '32px',
                        textAlign: 'right',
                      }}
                    >
                      {menu[locale].address}
                    </Typography>
                    <Typography className={cls.bodyDescription}>
                      {el?.title}
                    </Typography>
                  </Box>
                ))}
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
                    {`+${orderItem?.client?.phoneNumber}`}
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* <FullButton text={btnText[locale].reOrder} /> */}
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
                {numberToPrice(orderItem?.totalAmount)}
              </Typography>
            </Box>
          </CardWrapper>
        </Box>
      </Box>
      <Box className={`${cls.maxWidthBoxSml} ${cls.verticalMargin}`}>
        <CardWrapper>
          <Typography className={cls.title}>
            {menu[locale].yourOrder}
          </Typography>
          <Box sx={{ marginTop: '36px' }}>
            {orderItem.positions.map((el, ind) => (
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
                  {el.count}х {el.title}
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
              {numberToPrice(orderItem?.totalAmount)}
            </Typography>
          </Box>
          <Box className={cls.btnWrapper}>
            <button className={cls.btn}>Отменить заказ</button>
            <button className={cls.btnPrimary}>Служба поддержки</button>
          </Box>
        </CardWrapper>
      </Box>
    </Box>
  )
}
