// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)


// console.log("2">1)
// console.log("02">1)

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); //true 

// Here is why this confusing behavior happens:
//  relational comparisons (>, <, >=, <=) and 
// equality comparisons (==) work entirely differently in JavaScript.

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined>=0);

// === (check data types as well as value)

console.log("2"=== 2)