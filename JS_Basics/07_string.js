const name = "sandeep";
const repoCount = 20;

// this syntax are old so not use 
// console.log(name + repoCount + "value"); 

// use a backticks (string interpolation) 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = "BGMI";

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('I'));

const newString = gameName.substring(0,2)
console.log(newString);

const anotheString = gameName.slice(-4, 2)
console.log(anotheString);

const newStringTwo = "   Sandeep    ";
console.log(newStringTwo);
console.log(newStringTwo.trim());

const url = "https://sandeep.com/sandeep%30mahawar";
console.log(url.replace('%30', '-'));

console.log(url.includes('sandeep'));

const password = "Abcdef@#123"
console.log(password.split('@'));    // ['Abcdef','#123']


