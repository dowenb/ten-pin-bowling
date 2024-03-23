import { useState } from 'react'
import './App.css'

function App() {
  const [count, setThrow] = useState(0)
  function throwBall(){
    return Math.floor(Math.random() * 11)
  }

  return (
    <>
      <div className="card">
        <button onClick={() => setThrow(throwBall())}>
          Bowl
        </button>
        <p>
          You knocked over {count} pins
        </p>
      </div>
    </>
  )
}

export default App
