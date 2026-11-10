import React, { useEffect, useState } from 'react'
import { Box, Typography, Grid } from '@mui/material'
import cls from './DeliveryAddress.module.scss'
import styles from '../DeliveryType/DeliveryType.module.scss'
import CardWrapper from '../CardWrapper/CardWrapper'
import Input from '../Input/Input'
import AddressInput from '../Input/addressInput'
import { getAddressFromMap } from '../../utils/getAddressFromMap'
import { getGeoCodeAddressList } from '../../utils/yandex.js'
import { requestAxios } from '../../utils/axios'
import { menu } from '../../mock/menu'
import { useRouter } from 'next/router'
import NumberInput from '../NumberInput/NumberInput'
import MapDropDown from '../MapDropDown/MapDropDown'
import Map from '../Map/Map.jsx'
import { useSelector } from 'react-redux'

export default function DeliveryAddress({ formik, addresses }) {
  const [data, setData] = useState('')
  const [address, setAddress] = useState('')
  const { locale } = useRouter()
  const [placemarkGeometry, setPlacemarkGeometry] = useState([])
  const [addressList, setAddressList] = useState('')
  const [checked, setChecked] = useState('')
  // console.log('addresses', addresses)
  const { currentAddress } = useSelector((state) => state.address)

  useEffect(() => {
    if (currentAddress) {
      const geo = currentAddress.geo.split(',')
      setData({
        long: parseFloat(geo[0]),
        lat: parseFloat(geo[1]),
      })
      setPlacemarkGeometry([parseFloat(geo[0]), parseFloat(geo[1])])
      setAddress(currentAddress.address)
    }
  }, [currentAddress])

  useEffect(() => {
    if (address) {
      getGeoCodeAddressList(address).then((res) => {
        if (res.status === 200) {
          setAddressList(
            res?.data?.response?.GeoObjectCollection?.featureMember?.map(
              (address) => ({
                label: address?.GeoObject?.name,
                value: address?.GeoObject?.Point?.pos,
                // id: address.properties.CompanyMetaData.id,
                description: address?.GeoObject?.description,
                location: address?.GeoObject?.Point?.pos,
                ...address,
              })
            )
          )
        }
        //   const addresses = customerAddresses;
        //   const index = addresses.findIndex(
        //     (item) => item.value === "searched-address",
        //   );
        //   if (index < 0) {
        //     addresses.unshift({
        //       label: "searched-address",
        //       value: "searched-address",
        //       options:
        //         res.data?.response?.GeoObjectCollection?.featureMember?.map(
        //           (item) => ({
        //             label: item?.GeoObject.name,
        //             description: item?.GeoObject.description,
        //             location: item?.GeoObject.Point,
        //           }),
        //         ),
        //     });
        //   } else {
        //     addresses[index].options =
        //       res.data?.response?.GeoObjectCollection?.featureMember?.map(
        //         (item) => ({
        //           label: item?.GeoObject.name,
        //           description: item?.GeoObject.description,
        //           location: item?.GeoObject.Point,
        //         }),
        //       );
        //   }
        //   setCustomerAddresses(addresses);
        // }
      })
    }
    // else {
    //   setCustomerAddresses((prev) =>
    //     prev.filter((item) => item.value !== "searched-address"),
    //   );
    // }
  }, [address])

  

  useEffect(() => {
    const coords = [data.long, data.lat].join(',')
    formik.setFieldValue('address', address)
    formik.setFieldValue('geoLocation', coords)
  }, [address])

  useEffect(() => {
    getAddressFromMap(setAddress, data)
    getNearestBranch(data.long, data.lat)
  }, [data])

  function getNearestBranch(lat, long, companyId = '1') {
    const coords = [lat, long].join(',')
    requestAxios
      .get(`/branch/nearby/${coords}/${companyId}`)
      .then((res) => {
        const branch = res?.branches[0]
        getBranchById(branch?.id)
        formik.setFieldValue('branchId', branch?.id)
      })
      .catch((err) => console.log(err))
  }

  function getBranchById(branchId) {
    requestAxios
      .get(`/menu/bracnh/${branchId}`)
      .then((res) => {
        const deliveryDetails = res.deliveryDetails[0]

        formik.setFieldValue('deliveryDetails', deliveryDetails)
      })
      .catch((err) => console.log(err))
  }

  // console.log("formik eerror", formik.errors);

  return (
    <CardWrapper mt={2}>
      <Typography variant={`h1`} color={`black`}>
        {menu[locale].deliveryAddress}
      </Typography>
      {addresses && addresses.length >= 3 && (
        <Box display='flex' flexDirection='column' rowGap='12px' my='20px'>
          {addresses.map((el, index) => (
            <div
              className={styles.radioCard}
              key={`delivery-address-customer-${index}`}
              onClick={() => {
                const geoArr = el.deliveryAddress.geoLocation.split(',')
                formik.setFieldValue('customerAddress', el.deliveryAddress)
                // formik.setFieldValue('address', el.deliveryAddress.title)
                // formik.setFieldValue('geoLocation', el.deliveryAddress.geoLocation)
                getNearestBranch(geoArr[0], geoArr[1])
              }}
            >
              <input
                type='radio'
                name='customerAddress'
                value={el.deliveryAddress}
                readOnly
                checked={
                  formik.values.address
                    ? false
                    : el.deliveryAddress.id === formik.values.customerAddress.id
                }
              />
              <label htmlFor='customerAddress'>
                <span className={styles.cardTitle}>
                  {el.deliveryAddress.title}
                </span>
                <span className={styles.radio} />
              </label>
            </div>
          ))}
        </Box>
      )}
      <Box mt={2}>
        <AddressInput
          name='address'
          placeholder='Адрес'
          value={address}
          onChange={(e) => {
            setAddress(e.target.value)
            formik.setFieldValue('customerAddress', '')
          }}
          className={cls.personalInput}
          error={
            !formik.values.customerAddress ? formik.errors.address : undefined
          }
          required={!formik.values.customerAddress && data}
        />
      </Box>
      {addressList.length > 0 && (
        <MapDropDown
          options={addressList}
          setAddressList={setAddressList}
          setAddress={setAddress}
          setData={setData}
          setPlacemarkGeometry={setPlacemarkGeometry}
        />
      )}

      <div className={cls.adress_form}>
        <Input
          name='flatOrOffice'
          placeholder={menu[locale].flatOrOffice}
          onChange={formik.handleChange}
          className={cls.personalInput}
          error={
            !formik.values.customerAddress
              ? formik.errors.flatOrOffice
              : undefined
          }
          value={formik.values?.flatOrOffice}
        />
        <NumberInput
          name='intercom'
          placeholder={menu[locale].intercom}
          onChange={formik.handleChange}
          className={cls.personalInput}
          error={
            !formik.values.customerAddress ? formik.errors.intercom : undefined
          }
          value={formik.values?.intercom}
        />
        <NumberInput
          name='entrance'
          placeholder={menu[locale].entrance}
          onChange={formik.handleChange}
          className={cls.personalInput}
          error={
            !formik.values.customerAddress ? formik.errors.entrance : undefined
          }
          value={formik.values?.entrance}
        />
        <NumberInput
          name='floor'
          placeholder={menu[locale].floor}
          onChange={formik.handleChange}
          className={cls.personalInput}
          error={
            !formik.values.customerAddress ? formik.errors.floor : undefined
          }
          value={formik.values?.floor}
        />
      </div>
      <Box mt={2}>
        <Input
          name='comment'
          placeholder={menu[locale].comment}
          onChange={formik.handleChange}
          className={cls.personalInput}
          error={formik.errors.comment}
          value={formik.values?.comment}
        />
      </Box>
      {formik.errors.comment ||
      formik.errors.flatOrOffice ||
      formik.errors.intercom ||
      formik.errors.entrance ||
      formik.errors.floor ? (
        <Box mt={2} color={'tomato'}>
          {menu[locale].provideExactAdress}
        </Box>
      ) : null}

      <Box mt={2}>
        {/* <YMaps
          query={{
            apikey: process.env.MAP_API_KEY,
          }}
        >
          <Map
            style={{ height: '300px' }}
            onClick={(e) => {
              console.log('e => ', e)
              setData({
                ...data,
                lat: e.get('coords')[0],
                long: e.get('coords')[1],
              })
            }}
            onChange={(e) => {
              console.log('e => ', e)
              setData({
                ...data,
                lat: e.get('coords')[0],
                long: e.get('coords')[1],
              })
            }}
            state={{
              center: data ? [data.lat, data.long] : [41.311153, 69.279729],
              zoom: 16,
              controls: ['zoomControl', 'fullscreenControl'],
            }}
            modules={['control.ZoomControl', 'control.FullscreenControl']}
          >
            <GeolocationControl options={{ float: 'left' }} />
            <SearchControl options={{ placeholderContent: data.address }} />
            <Placemark
              options={{ iconColor: '#000' }}
              geometry={[data.lat, data.long]}
            />
          </Map>
        </YMaps> */}
        <Map
          placemarkGeometry={placemarkGeometry}
          setPlacemarkGeometry={setPlacemarkGeometry}
          setAddress={setAddress}
          data={data}
          setData={setData}
        />
      </Box>
    </CardWrapper>
  )
}
