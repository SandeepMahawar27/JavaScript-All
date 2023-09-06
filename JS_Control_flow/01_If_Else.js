// if

// const isUserLoggedIn = true;
// const temperature = 41

// if(temperature === 40){
//    console.log("less then 50");
// }else{
//     console.log("Temperature is grater than 50");
// }

// console.log("Execute");

// <, >, >=, <=, ==, !=, ===, !==


// 1.)
// const score = 200;

// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user poewer: ${power}`);

//    ++++++++++++++++++++ In this code are not use power variable out of scope so it is produce a error ++++++++++++
//   but use var so access the power variable out of scope......

//   const balance = 1000;

//   if(balance > 500) 
//     console.log("test"),
//     console.log("test2");              // this is a bad practice for write code


// if(balance < 500){
//     console.log("less than 500")
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }



//  use of real life (if else)

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserLoggedIn && debitCard){
    console.log("Allow to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}
