import axios from 'axios'

export const getAddressFromMap = (
  setAddress,
  data,
  setConfirmAddress,
  yandexKey
) => {
  axios
    .get(process.env.MAP_API_URL, {
      params: {
        format: 'json',
        apikey: yandexKey,
        geocode: data.lat ? data.lat + ',' + data.long : '69.279884,41.311061',
        lang: 'ru-RU',
        results: 3,
      },
    })
    .then((body) => {
      var tempAddress =
        body?.data?.response?.GeoObjectCollection.featureMember[0]?.GeoObject
          ?.metaDataProperty?.GeocoderMetaData?.Address?.Components

      let addressName = ''
      tempAddress?.map((address, i) => {
        if (i !== 2) {
          addressName +=
            address.name + (i !== tempAddress.length - 1 ? ', ' : '')
        }
      })

      if (data.lat) {
        setAddress(addressName)
        // setConfirmAddress(true)
      }
    })
    .catch((err) => {
      console.log('err', err)
    })
}
