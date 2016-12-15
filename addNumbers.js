const readline = require('readline');

const reader = readline.createInterface ({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0){
    completionCallback(sum);
    reader.close();
  } else {
    reader.question("enter a number ", function(num1) {
      sum += parseInt(num1);
      console.log(`current sum: ${sum}`);
      addNumbers(sum, numsLeft-1, completionCallback);
    });
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
