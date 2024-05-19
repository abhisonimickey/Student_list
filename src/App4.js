import "./App.css";
import { useRef, useState } from "react";

function App4() {
  var a = useRef();
  const [x, setx] = useState(0);
  var getData = (event) => {
    event.preventDefault();
    var z = a.current.value;
    setx(z);
  };
  return (
    <div className="App">
      <input type="number" placeholder="Enter value f x" ref={a} />
      <button onClick={getData}>Send data</button>
      <h1>value of x : {x}</h1> <br />
    </div>
  );
}

export default App4;

/*
Hooks : usState () => it is capable of initilizing  the value of any variable & Dynamic cahnge

 const [varaiable, function] = useState(10);
    varaiable and function  both are defined by user 
 */