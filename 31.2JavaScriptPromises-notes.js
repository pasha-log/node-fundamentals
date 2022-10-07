// Intermediate GitHub 

// Don't want to clone a repo inside of another repo 

// mkdir DeepFake 
// cd DeepFake 
// git clone ... 

// git log (to see all the commits)
// You can click on Fork, and create your own changes and then ask if you can add these changes. 
// We Fork, then we clone our own Fork. 

// Pull request

////////////////////////////////////////////////////////

// Async Callbacks Review

// JS runs asyncrhonously, but there's a way to handle async code: asynchronous callbacks. 

console.log("START")

setTimeout(function timeout(){
    console.log("this prints third, one second later"); 
}, 1000); 

console.log("HELLO")

// Async + AJAX 
// Let's try to pull some data with jQuery, which utilizes callbacks (we're just using this as an example
// since axios doesn't support callbacks) 

let planet;

$.getJSON("https://swapi.co/api/planets/1", response => {
    planet = response;
});

console.log(planet); 

// planet is undefined because the console.log runs before the api request. console.log was 
// synchronous; ran before the asynchronous callback. 

// Just put the console.log inside of the function instead. 

let p;

$.getJSON("https://swapi.co/api/planets/1", response => {
    p = response;
    console.log(p); 
    $.getJSON(p.residents[0], response => {
        resident = response; 
        console.log(resident);
        $.getJSON(resident.films[0], response => {
            film = response; 
            console.log(film);
        });
    });
});

// Promises are a solution to fix this messy nested situation. 

//////////////////////////////////////////////////////////////

// Promises intro 

// One-time guarantee of future value 

// let url = "https://swapi.co/api/planets/1" 
// let ourFirstPromise = axios.get(url); 
// console.log(ourFirstPromise) 

// Promises in JS are objects 
// Native to js as of ES2015
// Can be in one of three states: 
// - Pending - doesn't have a value yet 
// - Resolved - It has successfully obtained a value 
// - Rejected - It failed to obtain a value for some reason 

///////////////////////////////////////////////////////////// 

// then catch 

// .then will run if the promise is resolved, and has access to the promise's resolved vaue. 
// .catch will run if the promise is rejected, and typically has access to some reason behind the rejection. 

// let url = "https://swapi.co/api/planets/1" 
// let ourFirstPromise = axios.get(url); 
// ourFirstPromise.then(res => console.log(res.data))
// ourFirstPromise.catch(err => console.log('REJECTED!', err))

///////////////////////////////////////////////////////////

// Promise Chaining 

// let url = "https://swapi.co/api/planets/1" 
// axios.get(url)
//     .then(res => { 
//         console.log(res)
//         axios.get(res.data.residents[0])
//         .then(res => {
//             console.log(res)
//         })
//         .catch(err => {
//             console.log("ERROR", err)
//         })
// })
// .catch(err => console.log('REJECTED!', err))

// Still very nested and complicated. 
// WHen you call .thn on a promise, you can return new promise in the callback! 
// This means you can chain multile asynchronous ops together with several .then calls. 

let url = "https://swapi.co/api/planets/1" 
axios.get(url)
.then(res => { 
    console.log("FIRST PROMISE RESOLVED!")

    console.log(res.data)
    return axios.get(res.data.residents[0])
})
.then(res => {
    console.log(res.data)
    return axios.get(res.data.films[0])
})   
.then(res => {
    console.log(res.data)
}) 
.catch(err => console.log('REJECTED!', err))

////////////////////////////////////////////////////

// Refactoring Callback Hell 

let baseURL = "https://pokeapi.co/api/v2/pokemon";

$.ajax(`${baseURL}/1/`, {
  success: p1 => {
    console.log(`The first pokemon is ${p1.name}`);
    $.ajax(`${baseURL}/2/`, {
      success: p2 => {
        console.log(`The second pokemon is ${p2.name}`);
        $.ajax(`${baseURL}/3/`, {
          success: p3 => {
            console.log(`The third pokemon is ${p3.name}`);
          },
          error: err => console.log(err)
        });
      },
      error: err => console.log(err)
    });
  },
  error: err => console.log(err)
}); 

// Nasty

axios
  .get(`${baseURL}/1/`)
  .then(p1 => {
    console.log(`The first pokemon is ${p1.data.name}`);
    return axios.get(`${baseURL}/2/`);
  })
  .then(p2 => {
    console.log(`The second pokemon is ${p2.data.name}`);
    return axios.get(`${baseURL}/3/`);
  })
  .then(p3 => {
    console.log(`The third pokemon is ${p3.data.name}`);
  })
  .catch(err => {
    console.log(`Oops, there was a problem :( ${err}`);
  }); 

//   Way easier to read. 

//////////////////////////////////////////////////////

// Writing our own promises 

// You can use Promise with the new keyord rto make your own promises 
// Promise accepts a single function (call it fn) as an argument 
// - fn accepts two functions as arguments, resolve and reject 
// - Pass resolve a value for the promise to resolve to that value 
// - Pass reject a value for the promise to reject to that value

// function wait3Seconds(){
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 3000)
//     })
// }

// wait3Seconds()
// .then(() => console.log("ALL DONE!"))
// .catch(() => console.log("ERROR!"))

// console.log("STILL WAITING!")

// const h1 = document.querySelector('h1');
// setTimeout(function () {
//     h1.style.color = 'red'
//     setTimeout(() => {
//          h1.style.color = 'orange'
//          setTimeout(() => {
//             h1.style.color = 'yellow'
//             setTimeout(() => {
//                 h1.style.color = 'green'
//            }, 1000)
//        }, 1000)
//     }, 1000)
// }, 1000)

function changeColor(el, color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            el.style.color = color;
            resolve()
       }, 1000)
    })
}

changeColor(h1, 'red')
.then(() => changeColor(h1, 'orange'))
.then(() => changeColor(h1, 'yelow'))
.then(() => changeColor(h1, 'green'))
.then(() => changeColor(h1, 'blue'))
.then(() => changeColor(h1, 'indigo'))
.then(() => changeColor(h1, 'violet'))

/////////////////////////////////////////////////////// 

// In general, you’ll typically find that Promise.all is by far the most useful method on the Promise function. 
// There are definitely use-cases for Promise.race, Promise.resolve, and Promise.reject, but they are more rare.

// For now, you should focus your attention on getting comfortable with Promise.all, 
// as we won’t really encounter these other methods until we’ve gotten farther in the Node curriculum.

// Promise.all
// Promise.all accepts an array of promises and returns a new promise
// This new promise will resolve when every promise in the array resolves, and will be rejected if any promise in the array is rejected
// Promise.all is extremely useful whenever you want to send out several independent requests in parallel.

// Mock AJAX Request 

function mockAjaxRequest() {}
    return new Promise(function(resolve, reject) {
        let probSuccess = 0.5;
        let requestTime = 1000;
  
    // We mock a network request using a setTimeout.
    // The request takes requestTime milliseconds.
    // Afterwords, the promise is either resolved with data
    // or rejected with a timeout message,
    // based on whether randomNum is less than probSuccess.
    setTimeout(function() {
      let randomNum = Math.random();
      if (randomNum < probSuccess) {
        let data = "here's your data!";
        resolve(data);
      } else {
        reject("Sorry, your request failed.");
      }
    }, requestTime);
  });
  
  mockAjaxRequest
    .then(data => {
        console.log(data);
        return mockAjaxRequest()
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));

///////////////////////////////////////////////////// 

// Recreating Axios 

// Parses our response, JSON data 

// var request = new XMLHttpRequest(): 

// XML sucks 

const request = new XMLHttpRequest(); 

request.onload = function () {
    if (request.readyState !== 4) return; // (0) UNSENT,(1) OPENED,(2) HEADERS_RECEIVED,(3) LOADING,(4) DONE

    // Check status code 
    if (request.status >= 200 && request.status < 300) {
        console.log("IT WORKED", request)
    } else {
        console.log("ERROR!!!")
    }
}

request.onerror = function handelError() {
    console.log("NETWORK ERROR!")
    request = null; 
};

request.open('GET', 'https://swapi.co/api/planets/1/');

request.send()




function get(url) {
    const request = new XMLHttpRequest(); 
    return new Promise((resolve, reject) => {
        request.onload = function () {
            if (request.readyState !== 4) return; 
        
            // Check status code 
            if (request.status >= 200 && request.status < 300) {
                resolve(JSON.parse(request.response))
            } else {
                reject({
                    msg:'Server Error',
                    status: request.status,
                    request: request
                })
            }
        }
        request.onerror = function handleError() {
            request = null; 
            reject({
                msg:'Network Error'
            })
        };
        request.open('GET', url);
        request.send();
    }) 
}

get('https://swapi.co/api/planets/1/')
    .then(res => {console.log(res)
        console.log(res)
        return get('https://swapi.co/api/planets/2/')
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))


/////////////////////////////////////////////////////

// Promise.all and Promise.race 

// Promise.all accepts an array of promises and returns a new promise 

// This new promise will resolve when every promise in the array resolves, and will rejected
// if any promise in the array is rejected 
// Promise.all is extremely useful whenever you want to send out several independent requests in parallel. 

let fourPokemonPromises = [];

for (let i = 1; i < 5; i++) {
  fourPokemonPromises.push(
    axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
  );
}

Promise.all(fourPokemonRace)
  .then(pokemonArr => {
    for(res of pokemonArr) {
        console.log(res.data.name)
    }
})
  .catch(err => console.log(err));

// Promise.race accepts an array of promises and returns a new promise 
// This new promise will resolve or reject as soon as one promise in the array resolves or rejects 

let fourPokemonRace = [];

for (let i = 1; i < 5; i++) {
  fourPokemonRace.push(
    axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
  );
}

Promise.race(fourPokemonRace)
  .then(pokemon => console.log(`${pokemon.name} won!`))
  .catch(err => console.log(err));