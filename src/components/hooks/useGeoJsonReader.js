
import polylabel from 'polylabel'

export default function useGeoJsonReader() {


  function getPolygon (geoJson)
  {
    if (geoJson !== null) {
      let polygonCorrdinates = [];
      const { type, coordinates } = geoJson.geometry;

      let coordArr = [];

      if (type === 'Polygon') {
        coordinates.forEach((elementArr) => {
          var ele = elementArr.map((coordinate) => {
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
  function centerPolygon(polygon) {
    if (polygon !== null) {
      const { type, coordinates } = polygon[0];

      if (type === 'Polygon') {
        const arr = polylabel(coordinates, 1.0);
        return { lat: arr[1], lng: arr[0] };
      }

      const arr = polylabel(coordinates[0], 1.0);
      return { lat: arr[1], lng: arr[0] };
    }

    return { lat: -11, lng: 23.8739 };
  }


  return {getPolygon, centerPolygon}
}
