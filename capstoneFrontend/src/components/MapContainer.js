import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "./MapContainer.css"




function MapContainer() {

  let center = {
    lat: 32.519510,
    lng: -90.162790
  };
  console.log(center)
  function location(){
    return(
    <Marker
      icon={{
              fillOpacity: 0.9,
              scale: 2,
              strokeWeight: 2,
            }}
            position={center}
    />
    )
  }
  console.log(location())
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA-K0ov2n8iHbkLMDrqJXH3Nys7SEPF66o"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {location()}
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapContainer)