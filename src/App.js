import { useState } from "react";
import "./styles.css";
import calculator from "./images/calculator.svg";

export default function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  function isPrime(number) {
    var flag = 0;
    if (number === 1 || number === 0) {
      flag = 1;
    } else if (number === 2) {
      flag = 2;
    } else if (number > 1) {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          flag = 3;
          break;
        } else {
          flag = 2;
        }
      }
    }
    return flag;
  }
  function clickEventHandler() {
    if (number === "" || number < 0) setResult("Please enter valid input");
    else {
      var flag = isPrime(Number(number));
      if (flag === 1) {
        setResult(number + " is neither prime nor composite");
      }
      if (flag === 2) {
        setResult(number + " is a prime number");
      }
      if (flag === 3) {
        setResult(number + " is not a prime number");
      }
    }
  }

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
