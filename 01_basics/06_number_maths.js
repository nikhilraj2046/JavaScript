const score = 400;
// console.log(score);
const balance = new Number(400);
// console.log(balance);

// console.log(balance.toString())


// console.log(balance.toFixed(2));  // output after decimal


const otherNumber=23.8696
// console.log(otherNumber.toPrecision(2))  // output using toPrecision gives from counting the number from left side 

const x=1000000
// console.log(x.toLocaleString()); // it give us based o/p i.e. 1,000,000
// console.log(x.toLocaleString('en-IN')) ;// it gives indian value o/p


// +++++++++++++++++++++++++++++++++++ MATHS  ++++++++++++++++++++++++++++++++++++++++++++++++

// it is a library in js

// console.log(Math)
// console.log(Math.abs(-5))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))  // o/p------ 5
// console.log(Math.floor(4.3)) //o/p --===== 4
// console.log(Math.sqrt(81))
// console.log(Math.min(5,7,8,1))
// console.log(Math.max(5,7,8,9,7,2,55,99,111,5,2))


console.log(Math.random());  // Math.random() generates a random decimal number greater than or equal to 0 and less than 1.
console.log((Math.random()*10)+1);  // 
console.log(Math.floor(Math.random()*10)+1)

const min=10;
const max = 20;  // max - min + 1 sets the size of the range.
console.log(Math.floor(Math.random()*(max-min+1))+min)

