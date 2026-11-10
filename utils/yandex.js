import axios from 'axios'

// export const getAddressListYandex = (params) =>
//   axios({
//     method: 'get',
//     url: 'http://search-maps.yandex.ru/v1/',
//     params: {
//       ...params,
//       type: 'biz',
//       lang: 'ru_RU',
//       apikey: '4aeda2d1-130c-4f22-9a31-9bba3198264a',
//       results: 5,
//       rspn: 1,
//     },
//   })
export const getGeoCodeAddressList = (geocoder, yandexKey) => {
  return axios({
    method: 'get',
    url: 'https://geocode-maps.yandex.ru/1.x/',
    params: {
      format: 'json',
      apikey: yandexKey,
      geocode: geocoder,
      sco: 'latlong',
      lang: 'ru-RU',
      results: 5,
      // ll: currentCity,
      ll: '69.241320,41.292906', // new state
      spn: '6.5,6.5',
      rspn: 1,
    },
  })
}

export const mapDefaults = {
  center: [41.311236, 69.279716],
  zoom: 12,
}

export const apikey = process.env.MAP_API_KEY
