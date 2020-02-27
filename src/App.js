import React from 'react'
import { translateNumBase } from './helper'
import './App.css'

const DEFAULT_DATA = { decimal: '', hex: '', binary: '' }
const START_DATA = { decimal: '', hex: '', binary: '' }

function App() {
  const [inputs, setInputs] = React.useState(START_DATA)
  const [errorText, setErrorText] = React.useState('')

  function handleChange(event, name) {
    const value = event.target.value
    let newInputs = DEFAULT_DATA

    try {
      switch (name) {
        case 'hex':
          newInputs = translateNumBase(value, 16)
          break
        case 'binary':
          newInputs = translateNumBase(value, 2)
          break
        case 'decimal':
          newInputs = translateNumBase(value, 10)
          break
        default:
          break
      }
    } catch (err) {
      setInputs({ ...inputs, [name]: value })
      setErrorText(err.message)
    }

    setInputs(newInputs)
  }

  return (
    <div className="app">
      <p className="title">Number Convertor</p>
      <div className="data">
        {Object.entries(inputs).map(([name, val]) => (
          <div className="row" key={name}>
            <p className="data-name">{name}</p>
            <input
              className="num-input"
              autoFocus
              type="text"
              value={val}
              onChange={(event) => handleChange(event, name)}
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
