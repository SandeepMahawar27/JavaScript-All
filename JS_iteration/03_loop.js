// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for(const num of arr){
    // console.log(`print the numbers ${num}`);
}

const greeting = "Hello sandeep";
for(const greet of greeting){
    // console.log(`Each char is ${greet}`);
}

//Maps  in arrays

const map = new Map()
map.set('IN', "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

// objects on forof loop (in this forof loop doesn't not work)  important 

// const myObject = {
//     'game1': "NFS",
//     'game2': "GTA5"
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

