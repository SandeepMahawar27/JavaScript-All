let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);   // object

let mycreatedDate1 = new Date(2023, 6, 27);
let mycreatedDate2 = new Date(2023,0,23,5,3);
let mycreatedDate3 = new Date("2023-01-12");
let mycreatedDate4 = new Date("01-14-2023")
console.log(mycreatedDate1.toLocaleString());


// ++++++++++++++++++ Time +++++++++++++++++
let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(mycreatedDate4.getTime());
console.log(Math.floor(Date.now()/1000));

// newDate.toLocalString('default', {
//     weekday: "long",
// })



