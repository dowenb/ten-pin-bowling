import { useState } from 'react'
import './App.css'

function App() {
  const [rolls, setRolls] = useState<number[]>([])
  const [pinsStanding, setPinsStanding] = useState(10)

  function throwBall() {
    const throwResult = Math.floor(Math.random() * (pinsStanding + 1))
    setRolls([...rolls, throwResult])
    setPinsStanding(pinsStanding - throwResult)
  }

  return (
    <>
      <div className="card">
        <button onClick={() => throwBall()}>
          Bowl
        </button>
        <p>
          There are {pinsStanding} remaining pins standing.
        </p>
        <ul>
          {rolls.map((r, i) => <li>Throw {i+1} knocked over {r} pins.</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
