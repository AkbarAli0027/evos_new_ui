// import { useRef, useState } from 'react'
// import { YMaps, Map, Placemark } from 'react-yandex-maps'
// import { mapDefaults } from '../../utils/yandex'
// import { useSelector } from 'react-redux'

// export default function MapContent({
//   placemarkGeometry,
//   setPlacemarkGeometry,
//   setData,
//   data,
//   setAddress,
//   cls,
// }) {
//   const [ymapsApi, setYmapsApi] = useState(null); // API obyektini saqlash uchun
//   const { yandexKey } = useSelector((state) => state.address)

//   // Koordinata bo'yicha manzilni olish
//   const getAddressFromCoords = (coords) => {
//     if (ymapsApi && ymapsApi.geocode) {
//       ymapsApi.geocode(coords).then((res) => {
//         const firstGeoObject = res.geoObjects.get(0);
//         if (firstGeoObject) {
//           const addressLine = firstGeoObject.getAddressLine();
//           setAddress(addressLine);
//         }
//       }).catch(err => console.log("Geocoding error: ", err));
//     }
//   };

//   const onMapClick = (e) => {
//     const coords = e.get('coords'); // [lat, long]
    
//     // 1. State-ni yangilash
//     setData({
//       lat: coords[0],
//       long: coords[1],
//     });
//     setPlacemarkGeometry(coords);

//     // 2. Manzilni olish
//     getAddressFromCoords(coords);
//   };

//   return (
//     <div className={cls.map} style={{ height: '300px', width: '100%' }}>
//       <YMaps
//         query={{
//           apikey: yandexKey,
//           lang: 'ru_RU',
//           load: 'package.full',
//         }}
//       >
//         <Map
//           // onLoad orqali ymaps API obyektini ushlab olamiz
//           onLoad={(ymaps) => setYmapsApi(ymaps)} 
//           onClick={onMapClick}
//           width="100%"
//           height="100%"
//           state={{
//             center: [data.lat || 41.311081, data.long || 69.240562],
//             zoom: 16,
//           }}
//           defaultState={mapDefaults}
//         >
//           {data.lat && data.long && (
//             <Placemark geometry={[data.lat, data.long]} />
//           )}
//         </Map>
//       </YMaps>
//     </div>
//   )
// }



import { useState } from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import { mapDefaults } from '../../utils/yandex'
import { useSelector } from 'react-redux'

export default function MapContent({
  setData,
  data,
  setAddress,
  setPlacemarkGeometry,
  cls,
}) {
  const [ymapsApi, setYmapsApi] = useState(null)
  const { yandexKey } = useSelector((state) => state.address)

  const onMapClick = (e) => {
    const coords = e.get('coords')
    setData({ lat: coords[0], long: coords[1] })
    setPlacemarkGeometry(coords)

    if (ymapsApi) {
      ymapsApi.geocode(coords).then((res) => {
        const firstGeoObject = res.geoObjects.get(0)
        if (firstGeoObject) {
          setAddress(firstGeoObject.getAddressLine())
        }
      })
    }
  }

  return (
    <div className={cls.map} style={{ height: '300px', width: '100%' }}>
      <YMaps query={{ apikey: yandexKey, lang: 'ru_RU', load: 'package.full' }}>
        <Map
          onLoad={(api) => setYmapsApi(api)}
          onClick={onMapClick}
          width="100%"
          height="100%"
          state={{
            center: [data.lat, data.long],
            zoom: 16,
          }}
          defaultState={mapDefaults}
        >
          {data.lat && data.long && <Placemark geometry={[data.lat, data.long]} />}
        </Map>
      </YMaps>
    </div>
  )
}