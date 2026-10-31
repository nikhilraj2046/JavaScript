// "use strict";

// // alert(3+3) give error because we use nodejs not  BROWSER

// let name="sinha"
// let age=18
// let isLoggedIn=false
// let state=null
// let h;

// // number=>2 to power 53
// // bigInt
// // string ""
// // boolean =>true/false
// // null =>standalone value
// // undefined  => abhi value assign nhi hui h
// // symbol => use for uniqueness

// //object

// console.log(typeof "nikhil");
// console.log(typeof state) // null is an object

// console.log(typeof h);


// //Non-primitive data types => object key:value pair

// let obj ={
//     name:"nikhil",
//     age:18,
//     isLoggedIn:false
// }
// console.log(obj.name)

// let fun =function(){
//     console.log("hello world");
//     return 10;
// }
// // fun()
// console.log(fun()) // 10
// console.log(typeof fun) // function is also an object

//Type conversion => convert one data type to another data type

let account_balance="10"
let value=Number(account_balance)

console.log(typeof account_balance) // string
console.log(value) // 10
console.log(typeof value) // number

// Boolean convert to number
let isLoggedIn=true
let x=Number(isLoggedIn)
console.log(x) // 1

