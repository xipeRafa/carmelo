import { useState } from 'react'
import reactLogo from './assets/ces.svg'
import viteLogo from '/ces.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a  target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a  target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Carmelitas del Espiritu Santo</h2>
   
      <h1 className="read-the-docs">
        Alabado Sea Jesucristo
      </h1>
    </>
  )
}

export default App
