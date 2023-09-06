// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}
// console.log(element);           isko bhar access nhi kr skte hai because scope se bhar hai


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for(let j = 1; j <= 10; j++){
        // console.log(`Inner loop value ${j} and innner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i * j);
    }   
}

// array with loop

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);    // 3

for (let index = 0; index < myArray.length; index) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue 

for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        // break;
        continue
    }
    console.log(`value of i is ${index}`); 
}