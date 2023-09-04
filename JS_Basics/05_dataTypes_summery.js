 // primitive

 //7 types: string, Number, Boolean, null, undefined, Symbol, BigInt

 const score = 100;
 const scoreValue = 100.3

 const isLoggedIn = false;
 const outsideTemp = null;
 let userEmail;

 const id = Symbol("103");
 const anotherId = Symbol("103");

 console.log(id === anotherId);

 const bigNumber = 56346737623763267n;


//  Reference (Non Primitive)

//   Array, Objects, Fuctions

//arrays
const heros = ["IronMan", "BatMan", "Thor", "CaptainAmerica"];
//objects
let obj = {
    name: "sandeep",
    age: 21
}
//functions
const myFunction = () => {
    console.log("Hiii Sandy")
}

// console.log(typeof outsideTemp);  // object

// console.log(typeof myFunction);  //functions

// myFunction();  //Hii Sandy





