const marvel_heros = ["spiderman", "thor", "Ironman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) 

// console.log(marvel_heros) 
// // output:[ 'spiderman', 'thor', 'Ironman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1])

const allHeroes = marvel_heros.concat(dc_heros)
// output:[ 'spiderman', 'thor', 'Ironman', [ 'superman', 'flash', 'batman' ] ]

// console.log(allHeroes);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)


const arr = [1, 2, 3, [4, 5], 6 ,7, [8, 9, [1, 2]]]
const f=arr.flat(Infinity);
console.log(f);  



console.log(Array.isArray("Hitesh")) // Checking it is an array
console.log(Array.from("Nikhil")) // Converting into array

console.log(Array.from({name:"nikhil"})) // intersting giving empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))