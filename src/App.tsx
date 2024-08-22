import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [height, setHeight] = useState(50)

  return (
    <>
      <div>
        <input type='text'/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div 
      style={{height}}
        className='changeHeightEl'
        onClick={() => setHeight(150*Math.random() + 50)} >Random height element</div>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          setHeight(150*Math.random() + 50)
          }}>
          count is {count}
        </button>
        <button onClick={() => {
          setCount((count) => count + 1)
          setHeight(150*Math.random() + 50)
          }}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
