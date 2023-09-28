let myName = "sandeep     "

// console.log(myName.trim().length);
console.log(myName.trueLength);

let myHeros = ["thur","spiderman"];

let heroPowers = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sandeep = function(){
    console.log("sandeep is present in all objects");
}

Array.prototype.heySandeep = function(){
    console.log(`sandeep says hello`);
}

// heroPowers.sandeep();
// myHeros.sandeep();
// myHeros.heySandeep();
// heroPowers.heySandeep();

//Inheritance
const User = {
    name: "sandeep",
    email: "sandeep@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAcaliable: true
}

const TASupport = {
    makeAssignment: "js assignment",
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__.User


//moder syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "sandeepMahawar       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True lenth is: ${this.trim().length}`);
}

anotherUserName.trueLength();
"sandeep".trueLength();
"kunal".trueLength();