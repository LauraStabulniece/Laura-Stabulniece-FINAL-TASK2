import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '40rem',
  height: '30rem'
}

const center = {
  lat: 56.2850990,
  lng: 26.7210118
}

function Map() {

  return (
    <LoadScript
      id='google-map-script' 
      googleMapsApiKey=""
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
      >
           <Marker position={{ 
          lat: 56.2850990,
          lng: 26.7210118
        }}  />
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)