import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function Decrement() {
    if (count <= 0) {
      setCount(0)
    } else {
      setCount((c)=>c-1);
    }
  }
  return (
    <div className='main-cantainer'>
      <h1>{count}</h1>
      <div className='btn-cantainer'>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  )
}

export default App
