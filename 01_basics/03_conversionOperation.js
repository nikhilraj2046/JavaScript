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
console.log(typeof sconversion);
console.log(sconversion);

