// Object Destructuring 1
// console.log(numPlanets) prints 8
// console.log(yearNeptuneDiscovered) prints 1846

// Object Destructuring 2
// console.log(discoverYears) prints {yearNeptuneDiscovered : 1846, yearMarsDiscovered : 1659}

// Object Destructuring 3
// getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
// -> 'Your name is Alejandro and you like purple'
// getUserData({firstName: "Melissa"}) // ?
// -> 'Your name is Melissa and you like green
// getUserData({}) // ?
// -> 'Your name is undefined and you like green.

// Array Destructuring 1
// console.log(first) prints 'Maya'
// console.log(second) prints 'Marisa'
// console.log(third) prints 'Chi'

// Array Destructuring 2
// console.log(raindrops) prints 'Raindrops on roses'
// console.log(whiskers) prints 'whiskers on kittens'
// console.log(aFewOfMyFavoriteThings)
// -> prints ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with string']

// Array Destructuring 3
// console.log(numbers) prints [10, 30, 20]

// ES5
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

// ES2015 Object Destructuring

let {a, b} = obj.numbers;
// or
({numbers : {a, b}} = obj);

// ES5 Array Swap
var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// ES2015 One-Line Array Swap with Destructuring
[arr[0], arr[1]] = [arr[1], arr[0]];

// raceResults()

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})