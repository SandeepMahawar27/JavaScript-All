
const score = 40;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);    // 3
console.log(balance.toFixed(2));          // 100.00

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4));    // 123.9

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));   // 10,00,000


// +++++++++++++++++++++++ Maths function +++++++++++++++++++++++++++

console.log(Math);   //object [Math] {}
console.log(Math.abs(-4));  // 4
console.log(Math.round(4,6));   // 4
console.log(Math.ceil(4,2));    // 4
console.log(Math.floor(4,9));   //4 
console.log(Math.min(4,3,6,2,1,9));     // 1
console.log(Math.max(4,3,5,19,29));   // 29


console.log(Math.random());        // 0.32786872684
console.log((Math.random() * 10) + 1);  // 1.3902392
console.log(Math.floor(Math.random() * 10) + 1); // 10,2,32,319034 random vlaue integer

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);   //answer is 10 to 20 values.....

