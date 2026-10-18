const name='sinha'
const repoCount=2
// console.log(name[0]) // output :->>  s
// console.log(name)


// console.log(name +repoCount) 

//Template literals use backticks (`) instead of single or double quotes.
// ${...} interpolation works inside backticks, not ordinary single or double quotes.

// console.log(`My name is ${name} and My repoCount is ${repoCount}`); 

//declaring string 

const gameName = new String("Sinha")
// console.log(gameName)
// console.log(typeof gameName) //object

// console.log(gameName[0]);

console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));

console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4);   // it give output till last-1;
console.log(newString)

const anotherStrig = gameName.slice(-4,4);  // only we can use negative value in  slice 
console.log(anotherStrig) // output inh

const x = "          don             banega            john        "
console.log(x);
console.log(x.trim()) // it removes the whitespace from start and beginning


const url = "sinha@iii.nikhil20%gmsil,cojujf";

console.log(url.replace('20%','-'))     // replace is used to replace a individual value using replace function replace(old,new);


// converting string using split function 
const g="my name is lakhan sajno ka sajan mera naam hain lakhan"
console.log(g.split(" "))



