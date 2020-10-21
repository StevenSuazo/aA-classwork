Array.prototype.bubbleSort = function () {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length; i++) {
      if (this[i] > this[i + 1]) {
        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        sorted = false;
      }
    }
  }
  return this;
}


// console.log([4, 6, 1, 8].bubbleSort());


String.prototype.substrings = function () {
  let answer = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      answer.push(this.slice(i, j));
    }
  }
  return answer;
};

console.log("Roger".substrings());