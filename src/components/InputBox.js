import '../components/InputBox.css'
import { useState } from 'react'

export default function InputBox({ submitInput }) {
  const [input, setInput] = useState('');

  function handleInput(event) {
    const inputValue = event.target.value;
    setInput(inputValue);
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">GEO JSON</span>
          </div>
          <textarea
            className="form-control"
            aria-label="With textarea"
            onInput={(event) => handleInput(event)}
          ></textarea>
        </div>
      </div>

      <div className="d-flex  justify-content-center">
        <div className="p-2">
          <button
            type="button"
            className="btn btn-success float-left"
            onClick={() => submitInput(input)}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  )
}
