const math = require('mathjs'); 

function question2(expression) {
  try {
    return math.evaluate(expression);
  } catch (error) {
    console.error("Invalid expression:", error);
    return null;
  }
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter an arithmetic expression: ', (expression) => {
  console.log(question2(expression));
  rl.close();
});
