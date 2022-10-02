import { useState } from 'react'
import InputBox from './InputBox'
import Map from './Map'

export default function Viewer() {
  const [data, setData] = useState(null);

  function handleSubmission(input) {
    const json = validateInput(input);
    json !== null ? setData(json) : setData(null)
  }

  function validateInput(input) {
    try {
      const json = JSON.parse(input);
      return json;
    } catch (event) {
      alert(event);
    }

    return null
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <InputBox submitInput={handleSubmission} />
        </div>
        <div className="col">
          <Map geoJson={data} />
        </div>
      </div>
    </div>
  )
}
