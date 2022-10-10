// async function sayHi() {
//     return "HELLO!!"
// }

// // function sayHi() {
// //     // return new Promise((resolve, reject) => {
// //     //     resolve["HELLO!!"]
// //     // })
// //     return Promise.resolve("HELLO!!")
// // }

// async function oops(){
//     throw "BAD IDEA!"
//     // return "BAD IDEA!"
// }

// sayHi().then((msg) => console.log(msg))

// oops()
//     .then(msg => console.log("INSIDE THEN", msg))
//     .catch(err => console.log("INSIDE CATCH: ", err))

// async function getStarWarsFilms() {
//     console.log("STARTING")
//     const res = await axios.get("https://swapi.dev/api/films/")
//     console.log("ENDING")
//     console.log(res)
// }

// console.log("STARTING!")
// axios.get("https://swapi.dev/api/films/")
// .then(res => {
//     console.log("ENDING");
//     console.log(res.data)
// })

// const deck = { 
//     async init() {
//         let res = await axios.get('https://deckofcardsapi.com/api/deck/new')
//         this.deckId = res.data.deck_id;
//     },
//     async shuffle() {
//        let res = await axios.get(`https://deckofcardsapi.com/api/deck${this.deckId}/shuffle/`)
//        console.log(res)
//     },
//     async drawCard() {
//         let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
//         console.log(res.data)
//     }
// }

// class Pokemon {
//     constructor(id) {
//         this.id = id;
//         this.types = [];
//     }
//     async getInfo() {
//         let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
//         this.name = res.data.name;
//         for(let type of res.data.types) {
//             this.types.push(type.type.name)
//         }
//     }
// }

// Pokemon(56)

// async function getStarWarsFilms() {
//     const res = await axios.get("https://swapi.dev/api/filmsss/")
//     console.log(res)
// }

// getStarWarsFilms()

// async function getUser(user) {
//     try {
//       let url = `https://api.github.com/users/${user}`;
//       let response = await $.getJSON(url);
//       console.log(`${response.name}: ${response.bio}`);
//     } catch (e) {
//       console.log("User does not exist!", e);
//     }
// }

// function getUser(user){
//     let url = `https://api.github.com/users/${user}`;
//     axios.get(url) 
//     .then(response => {
//         console.log(`${response.name}: ${response.bio}`);
//     })
//     .catch(e => {
//         console.log("User does not exist!", e);
//     })
// }

async function getThreePokemon() {
    let baseURL = "https://pokeapi.co/api/v2/pokemon"; 
    let {data: p1} = await axios.get(`${baseURL}/1`) 
    console.log(p1.name)
    let {data: p2} = await axios.get(`${baseURL}/2`) 
    console.log(p2.name)
    let {data: p3} = await axios.get(`${baseURL}/3`) 
    console.log(p3.name)

    // .then(({data}) => {
    //     console.log(`The first pokemon is ${data.name}`);
    //     return axios.get(`${baseURL}/2`)
    // })
    // .then(({data}) => {
    //     console.log(`The second pokemon is ${data.name}`);        
    //     return axios.get(`${baseURL}/3`)
    // })
    // .then(({data}) => {
    //     console.log(`The third pokemon is ${data.name}`);        
    // })
}