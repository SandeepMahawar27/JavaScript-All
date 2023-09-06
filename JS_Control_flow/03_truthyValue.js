const userEmail = []

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is Empty");
// }

// false == 0
// true
// false == ""
// true
// 0 == ""
// true


//Nullish Coalescing Operator(??) : null undefined 

let val;
// val = 5 ?? 10;               // 5
  
// val = null ?? 10             // 10
// val = undefined ?? 15        // 15

// val = null ?? 10 ?? 20       // 10

console.log(val);

// terniary operator (it is very important)

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");;