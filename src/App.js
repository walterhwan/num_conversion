import React from 'react'
import { translateNumBase } from './helper'
import './App.css'

const DEFAULT_DATA = { 10: '', 16: '', 2: '' }
const START_DATA = { 10: '', 16: '', 2: '' }
const baseNumToText = {
  10: 'Decimal',
  16: 'Hex',
  2: 'Binary',
}
const baseSequence = [10, 16, 2]

function App() {
  const [inputs, setInputs] = React.useState(START_DATA)
  const [errorText, setErrorText] = React.useState('')

  function handleChange(event, base) {
    const value = event.target.value
    let newInputs = DEFAULT_DATA

    try {
      newInputs = translateNumBase(value, base)
      setInputs(newInputs)
    } catch (err) {
      setInputs({ ...DEFAULT_DATA, [base]: value })
      setErrorText(err.message)
    }
  }

  return (
    <div className="app">
      <p className="title">Number Convertor</p>
      <div className="data">
        {baseSequence.map((base, idx) => (
          <div className="row" key={`base-${base}`}>
            <p className="data-name">{baseNumToText[base]}</p>
            <input
              className="num-input"
              autoFocus={idx === 0}
              type="text"
              value={inputs[base]}
              onChange={(event) => handleChange(event, base)}
            />
          </div>
        ))}
      </div>
      <div className="error-message">
        <p>{errorText}</p>
      </div>
    </div>
  )
}

export default App
