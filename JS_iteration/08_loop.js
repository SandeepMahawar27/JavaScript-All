const myNums = [1,2,3]

// 1...
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

//2..
// const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

// console.log(myTotal);


// important example
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 3999
    },
    {
        itemName: "MERN Stack",
        price: 3999
    },
    {
        itemName: "Mobile Development",
        price: 11999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay);