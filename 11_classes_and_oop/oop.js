// object literals

const user = {
    username: "sandeep",
    loginCount: 7,
    signedIn: true,

    getUserDetails: function(){
        //  console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        
        // output of this keyword for user context....
        // console.log(this);  
        // sandeep
        // {
        //   username: 'sandeep',
        //   loginCount: 7,
        //   signedIn: true,
        //   getUserDetails: [Function: getUserDetails]
        // }
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


// this keyword means currant context


// const promiseOne = new Promise();
// const date = new Date();

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this    
}

const userOne = new User("sandeep", 12, true);
const userTwo = new User("sandy",10,false)
console.log(userOne.constructor);
// console.log(userTwo);