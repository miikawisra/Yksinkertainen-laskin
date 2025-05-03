window.onload = function() {
  const numA = Math.floor(Math.random() * 10) + 1;
  const numB = Math.floor(Math.random() * 10) + 1;
  document.getElementById('numberA').value = numA;
  document.getElementById('numberB').value = numB;
};


function changeValue(inputId, change) {
  const input = document.getElementById(inputId);
  let value = parseInt(input.value);
  value += change;
  if (value < 1) value = 1; 
  if (value > 10) value = 10; 
  input.value = value;
}


function calculate() {
  const numA = parseInt(document.getElementById('numberA').value);
  const numB = parseInt(document.getElementById('numberB').value);
  const operator = document.getElementById('operator').value;
  let result;


  switch (operator) {
    case '+':
      result = numA + numB;
      break;
    case '-':
      result = numA - numB;
      break;
    case '*':
      result = numA * numB;
      break;
    case '/':
      result = numA / numB;
      break;
    default:
      result = 'Virhe';
  }


  document.getElementById('result').textContent = 'Tulos: ' + result;
}
