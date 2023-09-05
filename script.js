"use strict";

// const displayClear = document.querySelector("#clear");
// const deleteDisplay = document.querySelector("#erase");
// const numbers = document.querySelectorAll(".num_btn");
// const operators = document.querySelectorAll(".fun_btn");
// const equality = document.querySelector("#evaluate");
// let previousOperand = document.querySelector(".previous-operand");

const displayInput = document.querySelector(".currentInput");
const displayOutput = document.querySelector(".answerScreen");
const buttons = document.querySelectorAll(".key");

//========================================================
let input = "";

// using FOR OF loops  to iterate over each button  and execute the code .
for (let button of buttons) {
  const value = button.value;

  button.addEventListener("click", () => {
    if (value == "clear") {
      input = "";
      displayInput.innerHTML = "";
      displayOutput.innerHTML = "";
    } else if (value == "backspace") {
      // using slice expression to extract characters  from the screen when backspace is  clicked.
      // note that using a negative index at the end will remove the last charater from the string....

      input = input.slice(0, -1);
      displayInput.innerHTML = input;
    } // evntlisteners btns for powers , square , squareroot
    else if (value == "sqr2") {
      displayInput.innerHTML = `${input} ^2`;
      input = input * input;
      displayOutput.innerHTML = input;
    } else if (value == "sqrt") {
      displayInput.innerHTML = ` &#x221A; ${input}`;
      displayOutput.innerHTML = Math.sqrt(input);
    } else if (value == "div") {
      displayInput.innerHTML = `1/ ${input} `;
      displayOutput.innerHTML = 1 / input;
    } else if (value == "sqrp") {
      displayInput.innerHTML = `10 ^ ${input} `;
      displayOutput.innerHTML = Math.pow(10, input);
    } // eval functon enables the evaluation of arithmetic operation e.g "eval("2+4*2") == 10" . 
    // it evaluates the string expression and returns an integer as result
    else if (value == "=") {
      let result = eval(prepareInput(input));
      displayOutput.innerHTML = result;
    } else {
      if (validateInput(value)) {
        input += value;
        displayInput.innerHTML = input;
      }
    }
  });
}

function validateInput(value) {
  let last_input = input.slice(-1);
  let operators = ["+", "-", "*", "/", "^"];

  if (value == "." && last_input == ".") {
    return false;
  }

  if (operators.includes(value)) {
    if (operators.includes(last_input)) {
      return false;
    } else {
      return true;
    }
  }

  return true;
}

function prepareInput(input) {
  //input.spilt methods creates an array from the inputs passed in.
  let input_array = input.split("");
  for (let i = 0; i < input_array.length; i++) {
    if (input_array[i] == "%") {
      input_array[i] = "/100";
    }
  }

  return input_array.join("");
}

//========================================================

// function displayCurrentOperand(input) {
//   currentOperand.textContent += input;
// }

// // function displayPreviousOperand(input) {
// //   previousOperand.textContent += input;
// // }

// numbers.forEach((number) => {
//   number.addEventListener("click", () => {
//     const userInput = number.textContent;
//     displayCurrentOperand(userInput);
//   });
// });

// function allClear() {
//   currentOperand.textContent = "";
//   previousOperand.textContent = "";
//   operators.textContent = undefined;
// }

// displayClear.addEventListener("click", () => {
//   allClear();
// });

// function toDelete() {
//   const currentText = currentOperand.textContent.toString();
//   if (currentText.length > 0) {
//     const newText = currentText.slice(0, -1);
//     currentOperand.textContent = newText;
//   }
// }

// deleteDisplay.addEventListener("click", () => {
//   toDelete();
// });

// function selectOperator(sign) {
//   if (currentOperand.textContent === "") {
//     return;
//   }
//   if (previousOperand.textContent != "") {
//     operators.textContent = sign;
//   }
//   operators.textContent = sign;
//   previousOperand.textContent = currentOperand.textContent;
//   currentOperand.textContent = "";
// }

// function calculate() {
//   let computed;
//   const firstNumber = parseFloat(previousOperand.textContent);
//   const currentNumber = parseFloat(currentOperand.textContent);
//   if (isNaN(firstNumber) || isNaN(currentNumber)) return;

//   switch (operators.textContent) {
//     case "+":
//       computed = firstNumber + currentNumber;
//       break;
//     case "-":
//       computed = firstNumber - currentNumber;
//       break;
//     case "*":
//       computed = firstNumber * currentNumber;
//       break;
//     case "/":
//       computed = firstNumber / currentNumber;
//       break;
//     default:
//       return;
//   }
//   currentOperand.textContent = computed;
//   previousOperand.textContent = "";
//   operators.textContent = undefined;
//   console.log(currentOperand.textContent);
// }

// operators.forEach((operator) => {
//   operator.addEventListener("click", () => {
//     selectOperator(operator.textContent);
//   });
// });

// // function displayResult(result) {
// //     currentOperand.textContent = result;
// //     previousOperand.textContent = '';
// //     operators.textContent = undefined;
// // }

// equality.addEventListener("click", () => {
//   /* const resultText = */ calculate();
//   // displayResult(resultText)
// });
