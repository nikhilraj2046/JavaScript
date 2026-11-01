//*******************************ARRAY********************************
const myArr = [0, 1, 2, 3, 4, 5, "Nikhil",true]
// console.log(myArr)
// console.log(myArr[0])

// at is latest it take negative index also
console.log(myArr.at(1))
console.log(myArr.at(-5)) // last element
const newArr = myArr;
console.log(newArr)
console.log(newArr === myArr) // true because both are pointing to same memory location

const arr = structuredClone(myArr); // deep copy
console.log(arr)
console.log(arr === myArr) // false because both are pointing to different memory location

console.log(typeof myArr) // object


const myArr2 = new Array(1,2,3,4)
console.log(typeof myArr2)
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

//   delete operation // delete the first element but it will not change the length of array
// delete myArr[0];
// console.log(myArr)
// console.log(myArr.length) // length will remain same

// console.log(myArr.includes(9)); // checking that this value is present or not
// console.log(myArr.indexOf(9)) // finding the index of an element which is present first

console.log(myArr.lastIndexOf(9)) // finding the index of an element which is present last


// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr)
// console.log(typeof newArr)


//********************** SLICE OR SPLICE *************************************/

//  slice(startIndex, endIndex) // it will return a new array and it will not change the original array

console.log(myArr.slice(1, 4)) // it will return a new array from index 1 to index 4 but not including index 4
console.log(myArr.slice(2)) // it will return a new array from index 2 to the end of the array


//splice
// splice(startIndex, total_element_deleted,additional_value) // it will change the original array and return the removed elements

console.log(myArr.splice(2,5)) // it will remove the elements from index 2 to index 5 and return the removed elements
// console.log(myArr) // it will change the original array

const myArr3= [1,2,5,9,7,8,9,11,5,51,5,58,0];
console.log(myArr3.splice(2,3,10,11,"moneyu"))

console.log(myArr3) // it will change the original array and add 10,11 at index 2 and remove 3 elements from index 2

// converting array to string

const myArr4 = [1,2,3,4,5,6,7,8,9]
const myArr4String = myArr4.toString();
console.log(myArr4String) // it will convert the array to string
console.log(typeof myArr4String) // string
console.log(myArr4.join("*")) // it will join the array elements with asterisk and return a string



