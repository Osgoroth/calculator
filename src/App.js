import { useState } from "react";
import "./App.scss";

const calculatorButtons = [
  { id: "clear", value: "AC" },
  { id: "divide", value: "/" },
  { id: "multiply", value: "*" },
  { id: "seven", value: 7 },
  { id: "eight", value: 8 },
  { id: "nine", value: 9 },
  { id: "subtract", value: "-" },
  { id: "four", value: 4 },
  { id: "five", value: 5 },
  { id: "six", value: 6 },
  { id: "add", value: "+" },
  { id: "one", value: 1 },
  { id: "two", value: 2 },
  { id: "three", value: 3 },
  { id: "zero", value: 0 },
  { id: "decimal", value: "." },
  { id: "equals", value: "=" },
];

const operators = ["AC", "/", "*", "-", "+", "="];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function Display({ input, expression }) {
  return (
    <>
      <div className="expression">{expression}</div>
      <div id="display" className="input">
        {input}
      </div>
    </>
  );
}

function Keypad({
  handleDot,
  handleClear,
  handleSum,
  handleNumber,
  handleOperator,
}) {
  return (
    <>
      <div id="buttons">
        {calculatorButtons.map(({ id, value }) => {
          return (
            <button
              key={id}
              id={id}
              value={value}
              onClick={
                id === "equals"
                  ? handleSum
                  : id === "clear"
                  ? handleClear
                  : numbers.includes(value)
                  ? handleNumber
                  : id === "decimal"
                  ? handleDot
                  : handleOperator
              }
            >
              {value === "*" ? "x" : value}
            </button>
          );
        })}
      </div>
    </>
  );
}

function App() {
  const [input, setInput] = useState("0");
  const [expression, setExpression] = useState("");

  // if the user is 'building' up their calculation carry on
  // if they have summed, we need to use the sum value

  function handleDot(e) {
    const param = e.target.value;

    if (input.includes(".")) return false;
    setExpression(expression + param);
    setInput(input + param);
  }

  function handleOperator(e) {
    const param = e.target.value;
    if (expression.includes("=")) {
      setExpression(input + param);
      setInput(param);
    } else {
      setExpression(expression + param);
      setInput(param);
    }
  }
  function handleNumber(e) {
    const param = e.target.value;
    // dont let the user put multiple 0's at the start
    if (input === "0" && param === "0") return false;
    // add the number (param) to the expression
    setExpression(expression + param);
    // if the input shows 0 (default) then change it to param, otherwise append it to the input
    setInput(
      (input === "0" && param) ||
        (operators.includes(input) && param) ||
        input + param
    );
  }

  function handleSum() {
    const sum = eval(expression);
    console.log(sum);
    setExpression(expression + "=" + sum);
    setInput(sum);
    console.log(expression);
  }

  function handleClear() {
    setExpression("");
    setInput("0");
  }

  return (
    <div className="App container-sm">
      <div id="calculator" className="bg-primary">
        <Display input={input} expression={expression} />
        <Keypad
          handleClear={handleClear}
          handleNumber={handleNumber}
          handleOperator={handleOperator}
          handleDot={handleDot}
          handleSum={handleSum}
        />
      </div>
    </div>
  );
}

export default App;
