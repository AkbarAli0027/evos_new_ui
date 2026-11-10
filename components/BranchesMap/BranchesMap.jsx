import React from 'react'
import { Box } from '@mui/material'
import { YMaps, Map, ZoomControl, GeoObject } from 'react-yandex-maps'

const mapState = {
  center: [41.31, 69.31],
  zoom: 12,
}

export default function BranchMap({ branches }) {
  return (
    <Box
      sx={{
        background: '#fff',
        padding: '32px',
        marginTop: '24px',
        minHeight: '70vh',
      }}
    >
      <YMaps>
        <Map
          width='100%'
          height='100vh'
          state={mapState}
          instanceRef={(ref) => {
            ref && ref.behaviors.disable('scrollZoom')
          }}
        >
          {branches?.data?.map((branch, i) => (
            <GeoObject
              key={i}
              options={{
                iconColor: '#f5363e',
                iconLayout: 'default#image',
                iconImageHref: '/images/svg/location_pin.svg',
                imageIconSize: [96, 96],
              }}
              geometry={{
                type: 'Point',
                coordinates: [
                  parseFloat(branch?.location?.split(',')[0]),
                  parseFloat(branch?.location?.split(',')[1]),
                ],
              }}
              properties={{ hintContent: branch.title }}
              modules={['geoObject.addon.hint']}
            />
          ))}
          <ZoomControl
            options={{
              size: 'auto',
              zoomDuration: 500,
            }}
          />
        </Map>
      </YMaps>
    </Box>
  )
}
