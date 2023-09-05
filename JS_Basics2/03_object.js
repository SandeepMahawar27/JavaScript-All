// singleton
// object.create

// object literals

const mySym = Symbol("key1");


const jsUser = {
    // key: value,
    name: "Sandeep",
    "full name": "Sandeep mahawar",
    [mySym]: "myKey1",                // it is a symbol key
    age: 21,
    location: "jaipur",
    email: "Sandeep@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.name);         // method 1
// console.log(jsUser["email"]);     // method 2


// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser.mySym);


// jsUser.email = "mahawarsandeep@gmail.com"
// console.log(jsUser.email);
// Object.freeze(jsUser);
// jsUser.email = "mahawar@gmail.com"
// console.log(jsUser);



jsUser.greeting = function(){
     console.log("Hello Sandy Bro");
}
console.log(jsUser.greeting());

jsUser.greeting2 = function() {
    console.log(`Hello Js User, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());