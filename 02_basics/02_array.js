// const marvel_heros = ["spiderman", "thor", "Ironman"]
// const dc_heros = ["superman", "flash", "batman"]

// // marvel_heros.push(dc_heros) 

// // console.log(marvel_heros) 
// // // output:[ 'spiderman', 'thor', 'Ironman', [ 'superman', 'flash', 'batman' ] ]

// // console.log(marvel_heros[3][1])

// const allHeroes = marvel_heros.concat(dc_heros)
// // output:[ 'spiderman', 'thor', 'Ironman', [ 'superman', 'flash', 'batman' ] ]

// // console.log(allHeroes);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// // console.log(all_new_heros)


// const arr = [1, 2, 3, [4, 5], 6 ,7, [8, 9, [1, 2]]]
// const f=arr.flat(Infinity);
// console.log(f);  



// console.log(Array.isArray("Hitesh")) // Checking it is an array
// console.log(Array.from("Nikhil")) // Converting into array

// console.log(Array.from({name:"nikhil"})) // intersting giving empty array

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1,score2,score3))


//*****************concat****************** */
let arr = [1, 2, 3, 4, 5]
let arr2 = [1, 2, 3, 4, 5]
let arr3= arr.concat(arr2) // it will return a new array and it will not change the original array
// console.log(arr3) // [ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ]

let arr4=[1, 2, 3, 4, 5]
let arr5=arr.concat(arr2,arr4)
// console.log(arr5) // [ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ]


arr.push(arr2)
// console.log(arr[5][0]) // [ 1, 2, 3, 4, 5, [ 1, 2, 3, 4, 5 ] ]


// ***************************** 2D Array *********************************

let arr1 = [1,2,3,4,5,6,7,8,9]
let arr2D = [[1,2,3,[1,2,3]],[4,5,6],[7,8,9]]
// console.log(arr2D)
// console.log(arr2D[0])
// console.log(arr2D[1][1]) 

// converting 2D array to 1D array

// flat is used to convert 2D array to 1D array
let newarr = arr2D.flat(Infinity) // it will convert the 2D array to 1D array
console.log(newarr) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


// checking if it is an array or not
let abc = [1,2,3,4,5]
console.log(typeof abc) // object
console.log(Array.isArray(abc)) // true
 



// ***************************** 3D Array *********************************

let arr3D = [[1,2,[4,5]],[6,7,8],[9,10,11]]
console.log(arr3D[0][2][0]) // 4
console.log(arr3D[0][2][1]) // 5


