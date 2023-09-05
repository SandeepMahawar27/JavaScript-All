
// method 1 without argument in function

// function sayMyName() {
//     // console.log("Sandeep");
// }

// sayMyName();
// sayMyName();
// sayMyName();
// sayMyName();

// method 2 with argument in function 

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {
    let result = number1 + number2;
    // console.log("sandeep"); 
    return result;
    // console.log("sandeep");   // return ke baad kuch print nhi hoga....
}

const result = addTwoNumber(2, 3);
// console.log("Result:", result);



function loginUserMessage(username = "sandy"){
    if(!username){
        console.log("Please enter user Name");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("sandeep"));
console.log(loginUserMessage());
