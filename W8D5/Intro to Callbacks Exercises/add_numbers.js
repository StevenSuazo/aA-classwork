const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0){
    reader.question("Pick a number:", function(answer) {
      let number = parseInt(answer);
      sum += number;
      console.log(`${sum}`);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, completionCallback)
    });
  } else {
      completionCallback(sum);
      reader.close();
  }
}

addNumbers(0, 4, sum => console.log(`Total Sum: ${sum}`));