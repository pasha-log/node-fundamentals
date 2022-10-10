// Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. 
// (Make sure you get back JSON by including the json query key, specific to this API. Details.

const favoriteNum = 42;
let baseURL = "http://numbersapi.com";

// $.getJSON(`${baseURL}/${favoriteNum}?json`).then(data => {console.log(data)});

async function favoriteNumFact() {
    let res = await axios.get(`${baseURL}/${favoriteNum}?json`);
    console.log(res.data);
};

favoriteNumFact();

// Figure out how to get data on multiple numbers in a single request. 
// Make that request and when you get the data back, put all of the number facts on the page.

let favoriteNums = [16, 21, 42];

// $.getJSON(`${baseURL}/${favoriteNums}?json`).then(data => {console.log(data)});

async function favoriteNumsFacts() {
    let res = await axios.get(`${baseURL}/${favoriteNums}?json`);
    console.log(res.data);
};

favoriteNumsFacts();

// Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

// Promise.all(
//   Array.from({ length: 4 }, () => {
//     return $.getJSON(`${baseURL}/${favoriteNum}?json`);
//   })
// ).then(facts => {
//   facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
// });

async function fourFacts() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favoriteNum}?json`))
    );
    facts.forEach(data => {
        $("body").append(`<p>${data.text}</p>`);
    });
}

fourFacts();
