// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)


// console.log("2">1)
// console.log("02">1)

//null==undefined => true
//null===undefined => false
 //null is only equal to undefined and nothing else.


console.log(null > 0); // here null is converted to 0 and 0>0 is false
console.log(null == 0);
console.log(null >= 0); //true 

// Here is why this confusing behavior happens:
//  relational comparisons (>, <, >=, <=) and 
// equality comparisons (==) work entirely differently in JavaScript.

// UNDEFINED is only equal to null and nothing else.
// UNDEFINED IS CONVERTED TO NaN when compared with any other value using relational operators.
console.log(undefined==0); // false
console.log(undefined>0); // false
console.log(undefined>=0); // false

// === (check data types as well as value)

console.log("2"=== 2)

console.log(NaN===NaN) // false