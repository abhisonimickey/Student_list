import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App2() {
  const [x, set] = useState(10);
  return (
    <div className="App">
      <h1  style={{color:'darkolivegreen'}}>value of x : {x}</h1> <br />
      <button onClick={() => set(200)} onDoubleClick={() => set(600)} onMouseEnter={() => set(6008)} onMouseLeave={() => set(608)}>Change value</button>
    </div>
  );
}

export default App2;

/*
Hooks : usState () => it is capable of initilizing  the value of any variable & Dynamic cahnge

 const [varaiable, function] = useState(10);
    varaiable and function  both are defined by user 
 */
