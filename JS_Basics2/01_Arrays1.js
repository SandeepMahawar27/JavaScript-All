// arrays

const myArr = [0,1,2,3,4,5];
const myHeros = ["IronMan", "SpiderMan"];

const myArr2 = new Array(1,2,3,4,5);
// console.log(myArr[1]); // 1
// console.log(myArr2);    // [ 1,2,3,4,5 ]

// Array methods..................

// myArr.push(6);
// myArr.push(7);
// myArr.push(8);
// myArr.push(9);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));   //false
// console.log(myArr.indexOf(9));    // -1

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);    // string(0,1,2,3,4,5)


//slice and splice
console.log("A ", myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3);
console.log("C ", myArr);
console.log(myArr2);

