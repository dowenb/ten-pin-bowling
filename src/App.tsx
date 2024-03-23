import { useState } from 'react'
import './App.css'

function App() {
  const [roll, setRoll] = useState(0)
  const [pinsStanding, setPinsStanding] = useState(10)
  
  function throwBall(){ 
    const throwResult = Math.floor(Math.random() * (pinsStanding + 1))
    setRoll(throwResult)
    setPinsStanding(pinsStanding - throwResult)
    return throwResult
  }

  return (
    <>
      <div className="card">
        <button onClick={() => throwBall()}>
          Bowl
        </button>
        <p>
          You knocked over {roll} pins.
        </p>
        <p>
          There are {pinsStanding} remaining pins standing.
        </p>
      </div>
    </>
  )
}

export default App
