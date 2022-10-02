import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { Polygon } from '@react-google-maps/api'
import useGeoJsonReader from './hooks/useGeoJsonReader'


const onLoad = (polygon) => {
  console.log('polygon: ', polygon);
}

const Map = ({ geoJson }) => {

  const {getPolygon, centerPolygon} = useGeoJsonReader();

  const polygon = getPolygon(geoJson);
  const center = centerPolygon(polygon);

  const containerStyle = {
    width: '50vw',
    height: '80vh',
    marginRight: '5em',
    marginTop: '4em',
  }

  return (
    <LoadScript googleMapsApiKey= "AIzaSyBlfqFcnNnpxaMPV9k6yLoB8oayVfw0_vo" >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
        {polygon !== null && (
          <Polygon
            onLoad={onLoad}
            paths={polygon[0].path}
            options={{
              fillColor: '#08487A',
              fillOpacity: 0.2,
              strokeColor: '#F08080',
              strokeOpacity: 1,
              strokeWeight: 2,
              clickable: false,
              draggable: false,
              editable: false,
              geodesic: false,
              zIndex: 0,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default Map;
