// Alustetaan satunnaisluvut 1-10
window.onload = function() {
  const numA = Math.floor(Math.random() * 10) + 1;
  const numB = Math.floor(Math.random() * 10) + 1;
  document.getElementById('numberA').value = numA;
  document.getElementById('numberB').value = numB;
};

// Funktio, joka muuttaa lukuja
function changeValue(inputId, change) {
  const input = document.getElementById(inputId);
  let value = parseInt(input.value);
  value += change;
  if (value < 1) value = 1; // estetään negatiiviset ja nollat
  if (value > 10) value = 10; // estetään liian suuret arvot
  input.value = value;
}

// Funktio laskemiseen
function calculate() {
  const numA = parseInt(document.getElementById('numberA').value);
  const numB = parseInt(document.getElementById('numberB').value);
  const operator = document.getElementById('operator').value;
  let result;

  // Suoritetaan laskutoimitus valitun operaattorin mukaan
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

  // Näytetään tulos
  document.getElementById('result').textContent = 'Tulos: ' + result;
}
