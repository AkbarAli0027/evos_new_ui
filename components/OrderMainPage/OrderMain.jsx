import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import CardWrapper from '../CardWrapper/CardWrapper'
import Input from '../Input/Input'
// import SuccessStatus from '../SuccessStatus/SuccessStatus'
// import CanceledStatus from '../CanceledStatus/CanceledStatus'
import { useRouter } from 'next/router'
import ArrowIconEffect from '../ArrowIcon/ArrowIcon'
import cls from './OrderMain.module.scss'
import AcceptedStatus from '../Statuses/AcceptedStatus'
import CanceledStatus from '../Statuses/CanceledStatus'
import OnTheWayStatus from '../Statuses/OnTheWayStatus'
import ReadyStatus from '../Statuses/ReadyStatus'
import SuccessStatus from '../Statuses/SuccessStatus'
// import { RedCloseIcon } from '../Icons'
import { KnifeForkIcon, RedCloseIcon } from '../Icons'
import {
  Accepted,
  Rejected,
  OnTheWay,
  Ready,
  Delivered,
} from '../Statuses/StatusIcons'
import Link from 'next/link'
import moment from 'moment'
import 'moment/locale/ru'
import { menu, btnText } from '../../mock/menu'
import { useDispatch, useSelector } from 'react-redux'
import { setOrderNumber } from '../../store/actions/orderActions/orderActions'
import { destroyCookie, setCookie } from 'nookies'

function  OrderMain({ list }) {

  console.log( `list`,list)

  const router = useRouter()
  const { locale } = router
  useEffect(() => {
    destroyCookie(null, 'client_order_id')
  }, [])

  // const handleRedirect = () => {
  //   router.push(`/orders/${list.id}`)
  // }
  const dispatch = useDispatch()

  const getStatusComponent = (item) => {
    if (
      item.last_status_id === 0 ||
      item.last_status_id === 1 ||
      item.last_status_id === 11 ||
      item.last_status_id === 12 ||
      item.last_status_id === 13 ||
      item.last_status_id === 15
    ) {
      return <AcceptedStatus statusName={item.last_status_title} />
    } else if (
      item.last_status_id === 2 ||
      item.last_status_id === 7 ||
      item.last_status_id === 14
    ) {
      return <CanceledStatus statusName={item.last_status_title} />
    } else if (
      item.last_status_id === 10 ||
      item.last_status_id === 13 ||
      item.last_status_id === 8
    ) {
      return <OnTheWayStatus statusName={item.last_status_title} />
    } else if (item.last_status_id === 5 || item.last_status_id === 6) {
      return <SuccessStatus statusName={item.last_status_title} />
    } else if (item.last_status_id === 9 || item.last_status_id === 4) {
      return <ReadyStatus statusName={item.last_status_title} />
    }
  }

  const getStatusComponentMobile = (item) => {
    if (
      item.last_status_id === 0 ||
      item.last_status_id === 1 ||
      item.last_status_id === 11 ||
      item.last_status_id === 12 ||
      item.last_status_id === 13 ||
      item.last_status_id === 15
    ) {
      return <Accepted />
    } else if (
      item.last_status_id === 2 ||
      item.last_status_id === 7 ||
      item.last_status_id === 14
    ) {
      return <Rejected />
    } else if (
      item.last_status_id === 10 ||
      item.last_status_id === 13 ||
      item.last_status_id === 8
    ) {
      return <OnTheWay />
    } else if (item.last_status_id === 5 || item.last_status_id === 6) {
      return <Delivered />
    } else if (item.last_status_id === 9 || item.last_status_id === 4) {
      return <Ready />
    }
  }

  moment.locale('ru')
  return (
    <div>
      <Typography variant={`h1`} color={`black`} className={cls.title}>
        {menu[locale].myOrders}
      </Typography>
      {list?.map((item) => (
        <Link href={`/orders/${item.id}`} key={item.id}>
          <Box
            onClick={() => setCookie({}, 'client_order_id2', item?.id)}
            // key={item.id}
            display='flex'
            className={cls.verticalMargin}
          >
            <Box className={cls.maxWidthBox} style={{ cursor: 'pointer' }}>
              <CardWrapper>
                <Box display='flex' justifyContent='space-between'>
                  <Typography variant={`h1`} color={`black`}>
                    {menu[locale].order} №{item.id}
                  </Typography>
                  <div>
                    <ArrowIconEffect />
                  </div>
                </Box>
                <Box className={cls.statusBox}>
                  <Box display='flex' mt={4} alignItems='center'>
                    {getStatusComponent(item)}
                 
                    <Typography sx={{ marginLeft: 4 }}>
                      {moment(item.order_created).format('LLL')}
                    </Typography>
                  </Box>
                </Box>
                <Box className={cls.statusBoxResponsive}>
                  <Box display='flex' mt={2} alignItems='center'>
                    <Box className={cls.iconWrapper}>
                      {getStatusComponent(item)}
                      
                    </Box>
                    <Typography sx={{ marginLeft: 2 }}>
                      {moment(item.order_created).format('LLL')}
                    </Typography>
                  </Box>
                </Box>
              </CardWrapper>
            </Box>
          </Box>
        </Link>
      ))}
    </div>
  )
}

export default OrderMain
