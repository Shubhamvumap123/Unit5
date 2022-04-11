import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(76);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <div className="App">
      <h1>India</h1>
      <h2>Score:{counter}</h2>
      <h3>Add Score</h3>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add1
      </button>

      <button
        onClick={() => {
          setCounter(counter + 4);
        }}
      >
        Add4
      </button>
      <button
        onClick={() => {
          setCounter(counter + 6);
        }}
      >
        Add6
      </button>
      <h2>Wicket:{counter1}</h2>
      <h3>Add Wicket</h3>
      <button
        onClick={() => {
          setCounter1(counter1 + 1);
        }}
      >
        Add1
      </button>
      <h2>Over:{counter2}</h2>
      <h3>Add Over</h3>
      <button
        onClick={() => {
          setCounter2(counter2 + 0.1);
        }}
      >
        Add1
      </button>
    </div>
  );
}

export default App;


