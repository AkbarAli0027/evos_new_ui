import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import nookies from 'nookies'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setAddresses,
  setCurrentAddress,
  setOpenAddress,
} from '../store/actions/addressActions/addressActions'
import { requestV2 } from '../utils/axios'
import AddressModal from './AddressModal'
import Header from './Header/Header'

const Footer = dynamic(() => import('./Footer/Footer'))
const Notification = dynamic(() => import('./Notification/Notification'))
const Basket = dynamic(() => import('./Basket/Basket'))

function Layout({ children }) {
  const router = useRouter()
  const { locale } = useRouter()
  const { currentAddress, openModal } = useSelector((state) => state.address)
  const { token } = nookies.get()
  const dispatch = useDispatch()

  const onOpenAddress = () => {
    dispatch(setOpenAddress())
  }

  const addAddress = async () => {
    try {
      const response = await requestV2.post('/service/address-add', {
        ...currentAddress,
      })
      if (response.code === 200) {
        const res = await requestV2.get('/service/client-info')
        const addresses = res.data.addresses
          .reverse()
          .filter((v, i, a) => a.findIndex((v2) => v2.geo === v.geo) === i)
          .slice(0, 5)

        // console.log('addresses===>', addresses)
        dispatch(
          setAddresses(
            addresses.map((item) => ({ ...item, address: item.title }))
          )
        )
        dispatch(
          setCurrentAddress({
            ...response.data,
            address: response?.data?.title,
          })
        )
      }
    } catch (e) {
      console.log(e)
    }
  }

  const getClientInfo = async () => {
    if (token) {
      try {
        const res = await requestV2.get('/service/client-info')
        const addresses = res.data.addresses
          .reverse()
          .filter((v, i, a) => a.findIndex((v2) => v2.geo === v.geo) === i)
          .slice(0, 5)
          .map((item) => ({ ...item, address: item.title }))
        console.log('addresses===>', addresses)
        if (currentAddress) {
          const item = addresses.find((val) => val.geo === currentAddress.geo)
          if (!item) {
            addAddress()
          } else {
            dispatch(setAddresses(addresses))

            dispatch(setCurrentAddress(item))
          }
        } else {
          dispatch(setAddresses(addresses))
        }
      } catch (e) {
        console.log(e)
      }
    }
  }

  useEffect(() => {
    getClientInfo()
  }, [currentAddress?.geo, token])

  return (
    <>
      {['/2025', '/2025-test'].includes(router.pathname) ? (
        <></>
      ) : (
        <Header onOpenAddress={onOpenAddress} />
      )}
      {children}
      {['/2025', '/2025-test'].includes(router.pathname) ? <></> : <Footer />}
      <AddressModal open={openModal} />
      <Notification />
      <Basket />
    </>
  )
}

export default Layout
