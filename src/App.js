import { useState } from "react";
import "./App.scss";

const calculatorButtons = [
  { id: "clear", value: "AC" },
  { id: "divide", value: "/" },
  { id: "multiply", value: "*" },
  { id: "seven", value: 7 },
  { id: "eight", value: 8 },
  { id: "nine", value: 9 },
  { id: "minus", value: "-" },
  { id: "four", value: 4 },
  { id: "five", value: 5 },
  { id: "six", value: 6 },
  { id: "plus", value: "+" },
  { id: "one", value: 1 },
  { id: "two", value: 2 },
  { id: "three", value: 3 },
  { id: "zero", value: 0 },
  { id: "decimal", value: "." },
  { id: "equals", value: "=" },
];

function App() {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState();
  function handleClick(e) {
    setOutput(output + e.target.value);
    setInput(e.target.value);
  }

  function handleSum {
    setOutput
  }
  return (
    <div className="App container-sm align--center">
      <div id="calculator" className="bg-primary">
        <div className="output">{output}</div>
        <div id="display" className="input">
          {input}
        </div>

        <div id="buttons">
          {calculatorButtons.map(({ id, value }) => {
            return (
              <button id={id} value={value} onClick={id === "equals" ? handleSum : handleClick}>
                {value}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
