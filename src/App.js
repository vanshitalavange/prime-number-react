import { useState } from "react";
import "./styles.css";
import calculator from "./images/calculator.svg";

export default function App() {
  return (
    <div className="App">
      <h1>Is it a Prime number?</h1>
      <div className="img-container">
        <img id="hero-img" src={calculator} />
      </div>
      <label>Enter a number:</label>
      <input
        onChange={(event) => setNumber(event.target.value)}
        id="year"
        type="number"
      />
      <button onClick={() => clickEventHandler()} id="btn-check">
        check
      </button>
      <div id="output">{result}</div>
    </div>
  );
}
