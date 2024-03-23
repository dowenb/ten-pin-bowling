import { useState } from 'react'
import './App.css'

type roll = number

type frame = {
  rolls: roll[]
}

function App() {
  const [frames, setFrames] = useState<frame[]>(Array(10).map(() => { return { rolls: [] } }))
  const [rolls, setRolls] = useState<roll[]>([])
  const [pinsStanding, setPinsStanding] = useState(10)

  const currentFrame = frames[0]
  
  function throwBall() {
    const throwResult = Math.floor(Math.random() * (pinsStanding + 1))
    setRolls([...rolls, throwResult])
    if (rolls.length % 2 == 0) {
      setPinsStanding(pinsStanding - throwResult)
    } else {
      setPinsStanding(10)
    }
  }

  return (
    <>
      <div className="card">
        <button onClick={() => throwBall()}>
          Bowl
        </button>

        <ul>
          {rolls.map((r, i) => <li>Throw {i + 1} knocked over {r} pins.</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
