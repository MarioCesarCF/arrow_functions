function calculateAverage() {
  const input1 = Number(document.getElementById("input1").value);
  const input2 = Number(document.getElementById("input2").value);
  const input3 = Number(document.getElementById("input3").value);
  const inputLetter = document.getElementById("inputLetter").value;

  showResults(input1, input2, input3, inputLetter);
}

function showResults(number1, number2, number3, letter) {
  let calc = 0;
  let amountElements = 3;

  if (
    letter !== "A" &&
    letter !== "P" &&
    letter !== "H" &&
    letter !== "a" &&
    letter !== "p" &&
    letter !== "h"
  ) {
    alert("Informe a letra correta. A, P ou H.");
    return;
  }
  
  switch (letter) {
    case "A":
      calc = (number1 + number2 + number3) / 3;
      imprimirNoHTML(`A média aritmética para estes números é: ${calc}`);
      break;
    case "a":
      calc = (number1 + number2 + number3) / 3;
      imprimirNoHTML(`A média aritmética para estes números é: ${calc}`);
      break;
    case "P":
      calc = (number1 * 5 + number2 * 3 + number3 * 2) / (5 + 3 + 2);
      imprimirNoHTML(`A média ponderada para estes números é: ${calc}`);
      break;
    case "p":
      calc = (number1 * 5 + number2 * 3 + number3 * 2) / (5 + 3 + 2);
      imprimirNoHTML(`A média ponderada para estes números é: ${calc}`);
      break;
    case "H":
      calc = amountElements / (1 / number1 + 1 / number2 + 1 / number3);
      imprimirNoHTML(`A média harmônica para estes números é: ${calc}`);
      break;
    case "h":
      calc = amountElements / (1 / number1 + 1 / number2 + 1 / number3);
      imprimirNoHTML(`A média harmônica para estes números é: ${calc}`);
      break;
    default:
      alert("Hum. Houve algum problema com as informações. Por favor tente novamente.")
      break;
  }
}

let imprimirNoHTML = (result) => {
  const span = document.getElementById('result');
  span.innerHTML = result;
}



