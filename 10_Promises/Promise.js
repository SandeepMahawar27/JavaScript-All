// fetch('http://somthjing.com')
// .then().catch().finally()

// method 1

// const promise1 = new Promise( (res,rej) => {
//     //Do an async task
//     //DB Calls cryptography network

//     setTimeout( () => {
//         console.log("Async task is complete");
//         res();
//     }, 1000)
// });


// promise1.then(() => {
//     console.log("promise consumed!");
// });


// method 2

// new Promise( (res,rej) => {
//     setTimeout( () => {
//         console.log("Async task 2");
//         res();
//     },1000);
// }).then( () => {
//     console.log("Async 2 resolved..");
// })


// method 3

// const promise3 = new Promise((res,rej) => {
//  setTimeout( () => {
//     res({username: "sandeep", email: "sandeep@gmai.com"})
//  })
// },1000)

// promise3.then( (user) => {
//     console.log(user);
// })

// prommise 4

// const promise4 = new Promise( (res,rej) => {
//     setTimeout( () => {
//         let error = false;
//         if(!error){
//             res( {username: "sandeep", email: "sandeeep@code.com", password: "1234"})
//         }else{
//             rej("ERROR: Something went wrong");
//         }
//     },2000)
// })
// promise4
// .then( (user) => {
//     console.log(user);
//     return user.username;
// }).then( (username) => {
//     console.log(username);
// }).catch((err) =>{
//     console.log(err);
// }).finally( () => {
//     console.log("promise is either resolved or rejected!");
// })


// promise 5

// const promise5 = new Promise( (res,rej) => {
//     setTimeout( () => {
//         let error = true;
//         if(!error){
//             res({username: "sandeep", password: "2344"})
//         }else{
//             rej("ERROR: Something went wrong")
//         }
//     },1000)
// });

//  consumePromiseFive = async () => {
//     try{
//         const res = await promise5;
//     console.log(res);
//     }catch(err){
//         console.log(err);
//     }
// }
// consumePromiseFive();
