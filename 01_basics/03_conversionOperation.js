let score=33
// console.log(typeof score);
// console.log(typeof(score));  //Grouping style 
// console.log(typeof(2+3*(5/2)));

//conversion
score ="33"
let valueInNumber=Number(score)
// console.log(typeof valueInNumber);

score="33abc";
let d=Number(score);
// console.log(typeof d);
// console.log(d); // Not a Number

score=null
let j=Number(score);
// console.log(typeof j);
// console.log(j);

let IsLoggedIn="sinha";
let m=Boolean(IsLoggedIn);
// console.log(m);

//"33"=>33
// "33abc" => NaN
// 1=>true , 0=>false , ""=>false  , " "=>true,"sinha"=>true;


let someNumber=33
let sconversion=String(someNumber);
// console.log(typeof sconversion);
// console.log(sconversion);

/* *********************        OPERATIONS     ****************************** */

let value=3
let negvalue=-value
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2**3)
// console.log(2/3)
// console.log(4%2)

let str1="hello"
let str2=" nikhil"
let str3=str1+str2
// console.log(str3)

// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+"2")
// console.log("1"+2+2)
// console.log(1+2+"2"); // output 32
// console.log((3+4)*5%3)


console.log(+true) // it forces to convert in the number

console.log(+"")


let num1,num2,num3
num1 = num2 = num3 = 2+2


let gameCounter = 100
gameCounter++;
console.log(gameCounter)


