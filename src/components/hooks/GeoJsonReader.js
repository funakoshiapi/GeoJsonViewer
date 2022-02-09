import { useEffect, useState } from 'react'

export default function GeoJsonReader(geoJson) {
  if (geoJson !== null) {
    let polygonCorrdinates = [];
    const { type, coordinates } = geoJson.geometry;

    let coordArr = [];

    if (type === 'Polygon') {
      coordinates.forEach((elementArr) => {
        elementArr.map((coordinate) => {
          coordArr.push({ lat: coordinate[1], lng: coordinate[0] });
        })

        polygonCorrdinates.push(coordArr);
      })
    } else if (type === 'MultiPolygon') {
      // https://react-google-maps-api-docs.netlify.app/#polygon
      for (let i = 0; i < coordinates.length; i++) {
        let arrCoordinates = coordinates[i];
        let coordArr = [];
        arrCoordinates.forEach((elementArr) => {
          elementArr.map((coordinate) => {
            coordArr.push({ lat: coordinate[1], lng: coordinate[0] })
          })
          polygonCorrdinates.push(coordArr);
        })
      }
    }

    const polygonInfo = [
      {
        path: polygonCorrdinates,
        coordinates: coordinates,
        type: type,
      },
    ]

    return polygonInfo;
  }

  return null;
}
