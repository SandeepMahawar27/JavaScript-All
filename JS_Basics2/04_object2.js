// const tinderUser = new Object();       // it is singleton object
  
const tinderUser = {}                    // it is not a singlton object

tinderUser.id = "123abc",
tinderUser.name = "Sandeep",
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "Sandeep@gamil.com",
    fullName: {
        userfullname: {
            firstname: "Sandeep",
            lastname: "mahawar"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 ={
    3: "c",
    4: "d"
}
const obj3 = {
    5: "e",
    6: "f"
}
const obj4 ={
    7: "g",
    8: "h"
}

// const obj = {obj1, obj2}
// const obj = Object.assign({}, obj1, obj2, obj3, obj4)

const obj = {...obj1, ...obj2, ...obj3, ...obj4}    // mostly use syntax for mearge objects
// console.log(obj);

const user = [
    {
        id: 1,
        email: "Sandeep@gmail.com"
    },
    {
        id: 2,
        email: "Sandeep1234@gmail.com"
    },
    {
        id: 3,
        email: "Sandeep5678@gmail.com"
    },
]
// user[1].email
// console.log(user[1].email);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




// +++++++++++++++++++++++++++++++++++++++++++++++

const course = {
    course: "Js in Hindi",
    price: "999",
    courseInstructor: "Sandeep"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);


//  important for react......
const navbar = ({company}) => {     // it is de structuring. it is use of react......
       
}

navbar(company = "sandeep")


// +++++++++++++++++++++ JSON API's
// {
//     "name": "sandeep",
//     "courseName": "Java script sikh lo guys",
//     "Price": "Free"
// }

// 2.....
// [
//     {},
//     {},
//     {},
// ]
