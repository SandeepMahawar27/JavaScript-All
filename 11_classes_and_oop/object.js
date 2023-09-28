function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const sandeep = new createUser("sandy", 25);
const kunal = new createUser("kunal", 250);

sandeep.printMe();
