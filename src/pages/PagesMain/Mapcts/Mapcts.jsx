import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import {asset} from '../../../assets/asset'
const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 40.08616,
  lng: 65.3794206
};
const Mapcts = () => {
  const [map, setMap] = React.useState(null)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
  })

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return (
    <section id="mapscts">
        {isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <MarkerF
        position={center}
        icon={{
          url: asset.ioncts,
          scaledSize:{
            width:50,
            height: 100
          }
        }}
        >
        </MarkerF>
        <></>
      </GoogleMap>
  ) : <></>}
    </section>
  )
}

export default Mapcts