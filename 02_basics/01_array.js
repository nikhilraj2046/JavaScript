//ARRAY


const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr)
// console.log(myArr[0]);

const myHeroes = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2)

// console.log(myArr2.length)

// ********************************* Array Methods ******************************

myArr.push(6)   // add element in the last
// console.log(myArr)

myArr.pop(); // last element ko delete karenge
// console.log(myArr);

myArr.unshift(9);  // add karega starting mein
// console.log(myArr)

myArr.shift();  // remove karega first element 
// console.log(myArr);


// console.log(myArr.includes(9)); // checking that this value is present or not
// console.log(myArr.indexOf(9)) // finding the index of 9 

// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr)
// console.log(typeof newArr)


//********************** SLICE OR SPLICE *************************************/

console.log("A",myArr);
const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B",myArr)

const myn2 = myArr.splice(1,3);
console.log("C ",myArr)
console.log(myn2);
