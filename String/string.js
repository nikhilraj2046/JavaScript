let str1 = "Hello, World!";
console.log(str1); // Output: Hello, World!
let str2 = 'JavaScript is awesome!';
console.log(str2);
let str3 = `This is a template literal.`;
console.log(str3);

let price = 9.99;
console.log(`price of the tomato is ${price}`); //use for dynamic values
//alternative way 
console.log("price of the tomato is " + price); //use for dynamic values    

//string concatenation

let str4 = "hello";
let str5 = "Sinha";
let str6 = str4 + " " + str5;
console.log(str6); // Output: hello Sinha


let message = "Nikhil raj sinha is an b.tech stduent. \n he is an tech enthusiast. \n he is a coder. \n he is a learner.";
console.log(message);

//escape characters (\n, \t, \\, \", \', etc.)
let comment = "Nikhil raj sinha is an b.tech stduent. \\n he is an tech enthusiast. \n he is a coder. \n he is a learner.";
console.log(comment);

// "hello coder army"
console.log('"hello coder army"'); // Output: hello coder army


// ********************properties and methods of string******************************

let str7 = "Hello, World!";
//used for finding the length of the string
console.log(str7.length); // Output: 13

//used for lowercase and uppercase conversion(original string ke andar koi change nhi hoga)
console.log(str7.toLowerCase()); // Output: hello, world!
console.log(str7.toUpperCase()); // Output: HELLO, WORLD!

//used for finding the index of a substring
console.log(str7.indexOf("World")); // Output: 7
console.log(str7.lastIndexOf("o")); // Output: 8
console.log(str7.indexOf("hello")); // Output: -1 (not found)
console.log(str7.includes("World")); // Output: true

//Extracting parts of a string

//slice(start, end) - extracts a section of a string and returns it as a new string
console.log(str7.slice(0, 5)); // Output: Hello
//slice can take negative index while substring can take only positive index
//0 1 2 3 4 5 6 7 8 9

//-9 -8 -7 -6 -5 -4 -3 -2 -1

console.log(str7.slice(-6, 5)); // starting idx > ending idx
console.log(str7.substring(0, 5)); // Output: Hello
console.log(str7.substr(5,7))  // string starting from index 5 and length 7

//replacing a substring with another substring
console.log(str7.replace("World", "JavaScript")); // Output: Hello, JavaScript! 
console.log(str7.charAt(0)); // Output: H

let str8 = "   Hello, World!   ";
//removing whitespace from both ends of a string
console.log(str8.length); // Output: 19
console.log(str8.trim()); // Output: Hello, World!
console.log(str8.trim().length); // Output: 13

//splitting a string into an array of substrings
let str9 = "Hello, World!,kya,lo,bhai";
console.log(str9.split(",")); // Output: [ 'Hello', 'World!', 'kya', 'lo', 'bhai' ]


// New way to create a string using String constructor
let str10 = new String("Hello, World!");
console.log(str10); // Output: [String: 'Hello, World!']
console.log(typeof str10); // Output: object
console.log(str10.valueOf()); // Output: Hello, World!
