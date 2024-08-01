import { useState } from 'react'
import Logo from '/icon.svg'
import Title from './title.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  if (count === 1) {
  }
    return (
      <>
      <Title/>
        <div>
          <img src={Logo} className="logo" alt="logo" />
        </div>
        <h1>Hiernymus's Blog</h1>
        <div className="card">
          <button onClick={()=>{setCount(1)}}>
            Entry
          </button>
        </div>
        <p className="read-the-docs">
          Click and go to the contents
        </p>
      </>
    )
  
  
}

export default App
