// const coding = ["js", "cpp", "java", "py", "ruby"];

//It is problem of forEach loop

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })
// console.log(values);


// Introduce  a Fillter function.......

const myNum = [1,2,3,4,5,6,7,8,9,10];

//1....
// const newNums = myNum.filter( (num) => num > 4 )

//2....
// const newNums = myNum.filter( (num) => {
//     return num > 4
// })

// 3....
// const newNums = []

// myNum.forEach( (num) => {

//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);



// important example

const books = [
    { title: "Book One", genre: "Fiction", publish: "1981", edition: "2004"},
    { title: "Book Two", genre: "Non-Fiction", publish: "1992", edition: "2008"},
    { title: "Book Three", genre: "History", publish: "1999", edition: "2007"},
    { title: "Book Four", genre: "Science", publish: "1989", edition: "2010"},
    { title: "Book Five", genre: "Maths", publish: "2009", edition: "2014"},
    { title: "Book Six", genre: "Physics", publish: "1987", edition: "2010"},
    { title: "Book Seven", genre: "Chemistry", publish: "1986", edition: "1996"},
    { title: "Book Eight", genre: "Economics", publish: "2003", edition: "2016"},
    { title: "Book Nine", genre: "Computer", publish: "1981", edition: "1989"},
];

//1..
let userBooks = books.filter( (bk) => {
    return bk.genre === "Maths"
})
// 2..
// userBooks = books.filter( (bk) => bk.publish >= 2000)

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})



console.log(userBooks);