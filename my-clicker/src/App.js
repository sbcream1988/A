import React, { useState } from 'react'
import './App.css';



function App() {
  return (
    <div className="App">
      <Clicker></Clicker>
    </div>
  );
}

function Clicker(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <p>몇번? <b>{count}</b></p>
      <button onClick={() => setCount(count+1)}>
        클릭하세요
      </button>
    </div>
  )
}

export default App;
