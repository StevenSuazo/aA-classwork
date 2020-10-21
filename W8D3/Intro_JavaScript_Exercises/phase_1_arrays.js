Array.prototype.myUnique = function () {
  let answer = [];
  for (let i = 0; i < this.length; i++) {
    if (answer.includes(this[i])) {
      continue
    } else {
      answer.push(this[i])
    }
  }
  return answer
};
// console.log([1, 2, 2, 5, 6, 4, 4, 6].myUnique());


// Array#twoSum - returns an array of position pairs where the elements sum to zero

Array.prototype.twoSum = function () {
  let answer = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        answer.push([i, j]);
      }
    }
  }
  return answer;
}

// console.log([1, -1, 5, 4, -5].twoSum());
// [[0,1], [2, 4]]

// [[1,2,3], [4,5,6]]

// [[1,4], [2, 5], [3, 6]]


Array.prototype.transpose = function () {

  let answer = [];
  for (let i = 0; i < this[0].length; i++) {
    answer.push([this[0][i], this[1][i]])
  }
  return answer;
}

// console.log([[1,2,3], [4,5,6]].transpose());