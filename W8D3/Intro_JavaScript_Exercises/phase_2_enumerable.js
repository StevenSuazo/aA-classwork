Array.prototype.myEach = function(callback) { //test space between callback
    for (let num of this) {
        console.log(callback(num));
    }
} 

Array.prototype.myEach = function (callback) { //regular #each
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};



// console.log([1, -1, 5, 4, -5].myEach(callback))


let callback1 = function (ele) {
  console.log(ele + "!");
};


let callback2 = function (num) {
  return num * 2;
}


Array.prototype.myMap = function (callback) {
  let answer = [];
  this.myEach(function (ele) { answer.push(callback(ele)) });
  return answer;
};

console.log([1, -1, 5, 4, -5].myMap(callback1))

[1, -1, 5, 4, -5].myEach(callback1);

