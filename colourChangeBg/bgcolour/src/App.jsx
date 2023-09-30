import { useState } from 'react'
import './App.css'

function App() {

  const [color,setColor] = useState("black")
  return (
    <>
      <div style={{backgroundColor : color, width : 1000, height : 500}}>
      <div>
        <button onClick={()=>setColor("green")}>Green</button>
        <button onClick={()=>setColor("red")}>Red</button>
        <button onClick={()=>setColor("aqua")}>Aqua</button>
        <button onClick={()=>setColor("white")}>White</button>
        <button onClick={()=>setColor("olive")}>Olive</button>
        <button onClick={()=>setColor("yellow")}>Yellow</button>
      </div>
      </div>
    </>
  )
}

export default App
