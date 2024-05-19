 import "./App.css";
import { useRef, useState } from "react";

function App5() {
  var a = useRef();
  var b = useRef();
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [z, setz] = useState(0);
  const [f, setf] = useState(0);
  var getData = (event) => {
    event.preventDefault();
    var x = a.current.value * 1;
    var y = b.current.value * 1;
    var z = x+y
    var f= x-y
    setx(x);
    sety(y);
    setz(z);
    setf(f);
  };
  return (
    <div className="App">
      <input type="number" placeholder="Enter value f x" ref={a} /> <br />{" "}
      <br />
      <input type="number" placeholder="Enter value f y" ref={b} /> <br />{" "}
      <br />
      <button onClick={getData}>Sand data</button>
      <h1>value of x : {x}</h1>
      <h1>value of y : {y}</h1>
      <h1>Addition is {z}</h1>
      <h1>Subtraction is {f}</h1>
      <h1>Multiplication is {x * y}</h1>
      <h1>Division is {x / y}</h1>
      <h1>Modulus is {x % y}</h1>
    </div>
  );
}

export default App5;

/*
Hooks : usState () => it is capable of initilizing  the value of any variable & Dynamic cahnge

 const [varaiable, function] = useState(10);
    varaiable and function  both are defined by user 
 */
