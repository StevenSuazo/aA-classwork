//sum
function sumWithout() {
    let sums = 0;
    for (let i = 0; i < arguments.length; i++) {
        sums += arguments[i];
    }
    return sums;
}

// console.log(sumWithout(1,2,3,));
// console.log(sumWithout(4,7,2,7,3));

function sum(...nums) {
    let sums = 0;
    for (let i =0; i < nums.length; i++) {
        sums += nums[i];
    }
    return sums;
}

// console.log(sum(1,2,3,4));
// console.log(sum(4,7,2,7,5,3));

Function.prototype.myBind1 = function(context) {
    const that = this;
    const bindArgs = Array.from(arguments).slice(1)
    // console.log(bindArgs);
    return function () {
        const callArgs = Array.from(arguments); 
        return that.apply(context, bindArgs.concat(callArgs));
    }
}

Function.prototype.myBind2 = function (context, ...bindArgs) {
  const that = this;
  return function (...callArgs) {
    return that.apply(context, bindArgs.concat(callArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says.myBind1(pavlov, "meow", "Kush");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind2(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind2(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind2(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind2(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// true

////curry
Function.prototype.curry1 = function (numArgs) {
    let numbers = [];
    let that = this;

    function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            return that(...numbers); 
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

// console.log(sumThree(4, 20, 6)); // == 30

// you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

Function.prototype.curry = function (numArgs) {
    let that = this;
    let numbers = [];
    
    function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            return that.apply(that, numbers);
        } else {
            return _curriedSum;
        }
    };
    return _curriedSum;
}

// console.log(sumThree.curry(3)(4)(20)(6)); // == 30