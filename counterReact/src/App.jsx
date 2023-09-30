import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(10)
  const addValue = () => {
    if(counter<20){
      setCounter(counter + 1)
    }
  }
  const removeCounter = () => {
    if(counter>0){
      setCounter(counter - 1)
    }
  }
  return (
   <>
      <h1>Counter Project React</h1>
      <h3>The Value of Counter is {counter}</h3>
      <button onClick={addValue}>Add Counter</button>
      <br />
      <button onClick={removeCounter}>Remove Counter</button>
   </>
  )
}

export default App
