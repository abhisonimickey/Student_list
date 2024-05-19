import logo from "./logo.svg";
import "./App.css";

function App1() {
  var x = 10;
  var y = 20;

  return (
    <div className="App">
      <h1>Value of x is {x}</h1>
      <h1>Value of y is {y}</h1>
      <h1>Addition is {x + y}</h1>
      <h1>Subtraction is {x - y}</h1>
      <h1>Multiplication is {x * y}</h1>
      <h1>Division is {x / y}</h1>
    </div>
  );
}

export default App1;
