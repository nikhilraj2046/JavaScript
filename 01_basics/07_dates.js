// Date

let myDate = new Date();
// console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);


let myCreatedDate = new Date(2023,11,23)    //(0-jan,1-feb,......11->dec)
// console.log(myCreatedDate.toString())


let myCreateDate=new Date(2023,0,23,5,30);
// console.log(myCreateDate.toLocaleString());


let myDatecreate= new Date("2026-10-23");
// console.log(myDatecreate.toLocaleString());


let myTimeStamp = Date.now(); //aaj ka date in millisecond or TIME STAMP in UTC
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());


console.log(Math.floor(Date.now()/1000));  //converting to second



let newDate = new Date();
console.log(newDate)
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(`${newDate.getDate()}`);


console.log(newDate.toLocaleDateString('en-IN', {
    weekday: "long",
    timeZone: "Asia/Kolkata"
}));
 
console.log(newDate.toLocaleString('en-IN', {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata"
}));