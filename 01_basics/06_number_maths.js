 let num1=230
 console.log(typeof num1) // number
 let num2=new Number(230)
 console.log(typeof num2) // object
 let num3=new Number(230)
 console.log(num1==num2) // true
 console.log(num2==num3) // false because num2 and num3 ka address alag hai toh stack mein address alag hone ke wajah se false return hoga 

 let num4 = 231.68

 // toFixed() ka simple mtlb h ki kitne decimal places tk number ko round off karna h
 console.log(num4.toFixed(1)) // 231.7

 //toPrecision() ka simple mtlb h ki kitne significant digits tk number ko round off karna h
 console.log(num4.toPrecision(3)) // 231

 //.toExponential() ka simple mtlb h ki number ko exponential form mein convert karna h
console.log(num4.toExponential(2)) // 2.32e+2

// .toString() ka simple mtlb h ki number ko string mein convert karna h
console.log(num4.toString()) // 231.68
console.log(typeof num4.toString()) // string

// .valueOf() ka simple mtlb h ki number ko primitive value mein convert karna h
console.log(num4.valueOf()) // 231.68
console.log(typeof num4.valueOf()) // number

// ***************************MATH OBJECT******************************

console.log(Math.E) // 2.718281828459045
console.log(Math.PI) // 3.141592653589793
console.log(Math.SQRT2) // 1.4142135623730951

// random() ka simple mtlb h ki 0 se 1 ke beech mein random number generate karna h
console.log(Math.random()) // 0.123456789
// 0 <=value < 1

console.log(Math.random()*10) // 0 <=value < 10
console.log(Math.floor(Math.random()*10)) // 0 <=value < 10

console.log(Math.ceil(Math.random()*10)) // 1 <=value < 10

//1-10 generate karne ke liye
console.log(Math.floor(Math.random()*10)+1) // 1 <=value < 11

//11-20 generate karne ke liye
console.log(Math.floor(Math.random()*10)+11) // 11 <=value < 21

//41-50 generate karne ke liye
console.log(Math.floor(Math.random()*10)+41) // 41 <=value < 51

// 1-100 generate karne ke liye
console.log(Math.floor(Math.random()*100)+1) // 1 <=value < 101

let min = 40, max = 50;
console.log(Math.floor(Math.random()*(max-min+1)+min)) // 40 <=value < 51

