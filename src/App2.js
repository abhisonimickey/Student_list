import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App2() {
  const [x, setx] = useState(10);
  return (
    <div className="App">
      <h1 style={{color:'darkolivegreen'}}>value is : {x}</h1>
    </div>
  );
}

export default App2;
