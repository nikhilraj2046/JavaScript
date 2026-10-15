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
const heroes=["shaktiman","naagraj","doga"]  //datatypes is object

// object
let myObj={ //datatype is object
    name:"nikhil",
    age: 22,
}

//function

const myFunction=function(){ // datatype is function
    // console.log("Hello World");
}

//  console.log(typeof myFunction)
//  console.log(typeof myObj)
//  console.log(typeof heroes)




// ++++++++++++++++++++++++++++++++++


// STACK (Primitive), HEAP (Non-Primitive)

let myYoutubename="nikhilrajdotcom"

let anothername=myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename)
console.log(anothername)


let user={
    email:"user@google.com",
    upi:"user@ybl",
}

let useroneuser

userone.email="nikhil@google.com"

console.log(user.email);
console.log(userone.email);



