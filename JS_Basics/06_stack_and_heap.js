// ********************************************************
// stack (Primitive) and heap memory(Non-Primitive)

// that's are all work of stack memory so not change in firstEmial 
// and in this are give a pass by copy of variables

let myPersonalEmail = "sandeepMah@gmail.com"; 

let anotherEmail = myPersonalEmail;
anotherEmail = "SandeepBhiya@gmail.com";

// console.log(myPersonalEmail);
// console.log(anotherEmail);

// that's are work of heap memory so in tha pass by reference and give a original value of objects

let user1 = {
    name: "Sandeep",
    email: "sandeep@gmail.com"
}

// let user2 = {
//     name: "Govind",
//     email: "Govind@gmail.com",
// }

let user2 = user1;

user2.email = "Govind@gmail.com";
user2.name = "Govind";

console.log(user1);    //so output is change in user1(Govind, Govind@gmil.com)
// console.log(user1.name);