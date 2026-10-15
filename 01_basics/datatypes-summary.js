//Primitive data types

// 7 types :-String,Number,Boolean,Null,Symbol,BigInt,undefined

// JAVASCRIPT IS DYNAMICALLY TYPED LANGUAGE BECAUSE 
// LET X=10
// (WE CANNOT ASSIGN THE DATA TIME AT THE MOMENT OF ASSINGING  A VARIABLE WHILE IT AUTOMATICALLY TAKE IT)

const value=100
const valued=100.5
const outsideTemp=null

const id=Symbol('123')
const anotherId=Symbol('123')
// console.log(id === anotherId)

// const bigNumber=335895285245969855n
// console.log(typeof bigNumber)


// Reference type :(Non-Primitive data type) 
//Array, Object, Functions

//arrray
const heroes=["shaktiman","naagraj","doga"]

// object
let myObj={
    name:"nikhil",
    age: 22,
}

//function

const myFunction=function(){
    console.log("Hello World");
}

 console.log(typeof myFunction)
 console.log(typeof myObj)
 console.log(typeof heroes)

