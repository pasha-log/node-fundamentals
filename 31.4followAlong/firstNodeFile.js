// const annoyingGreet = () => { 
//     for(let i = 0; i < 10; i++) {
//         console.log("HELLO FROM NODE!");
//     }
// }

// annoyingGreet(); 

const faker = require('faker')
const axios = require('axios')

console.log(faker.name.findName())
console.log(axios)