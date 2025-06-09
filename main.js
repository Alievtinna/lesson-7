let A = "right";
let button = document.querySelector(".function");
button.onclick = function () {
  let Func = document.querySelector(".output");
  Func.innerText = A;
};

// Следующее задание
let currentResult = 0;

const input = document.getElementById("numberInput");
const resultSpan = document.getElementById("result");

const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");

function performOperation(operation) {
  const value = parseFloat(input.value);
  if (isNaN(value)) {
    alert("Пожалуйста, введите число");
    return;
  }

  switch (operation) {
    case "+":
      currentResult += value;
      break;
    case "-":
      currentResult -= value;
      break;
    case "*":
      currentResult *= value;
      break;
    case "/":
      if (value === 0) {
        alert("Деление на ноль невозможно!");
        return;
      }
      currentResult /= value;
      break;
  }

  resultSpan.innerText = currentResult;

  input.value = "";
}

addBtn.addEventListener("click", () => performOperation("+"));
subtractBtn.addEventListener("click", () => performOperation("-"));
multiplyBtn.addEventListener("click", () => performOperation("*"));
divideBtn.addEventListener("click", () => performOperation("/"));
