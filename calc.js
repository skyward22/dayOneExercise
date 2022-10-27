const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to calculate?", function (input) {
  const tokens = input.split(" ");

  const mathSymbol = input[0];
  const num1 = Number(input[1]);
  const num2 = Number(input[2]);

  if (mathSymbol === "+") {
    console.log(num1 + num2);
  }

  if (mathSymbol === "-") {
    console.log(num1 - num2);
  }

  if (mathSymbol === "*") {
    console.log(num1 * num2);
  }

  if (mathSymbol === "/") {
    console.log(num1 / num2);
  }

  if (mathSymbol === "sqrt") {
    console.log(Math.sqrt(num1));
  }

  reader.close();
});
