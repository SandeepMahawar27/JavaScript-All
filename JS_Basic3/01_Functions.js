
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




// function with object

function calculateCartprice(val1, val2, ...num1){             // in this use ...(rest operator) important 
    return num1
}
// console.log(calculateCartprice(200, 400, 500, 2000));



const user = {
    username: "Sandeep",
    price: 299
}

function handleObjects(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObjects(user);
handleObjects({
    username: 'sandy',
    price: 399
});


const myNewArray = [200,400,600,100]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

