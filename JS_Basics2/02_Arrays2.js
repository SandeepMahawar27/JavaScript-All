const marvelHeros = ["IronMan", "Thor", "SpiderMan"];
const dcHeros = ["SuperMan", "Flash", "BatMan"]

// marvelHeros.push(dcHeros);                          // method 1

// console.log(marvelHeros);            
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros);       // method 2
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros]           // method 3
// console.log(allNewHeros);



const anotherArray = [1,2,3, [4,5,6], 7, [6,7, [4,5]]];
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);


console.log(Array.isArray("sandeep"));
console.log(Array.from("sandeep"));
console.log(Array.from({name: "sandeep"}));         // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));


 