// Async Keyword 

// ES2017 Async Functions 

// You can declare any function in JS as async 
// async functions always return promises! 
// Inside of an async function, you can write code that looks synchronous, 
// even if it isn't (more on this later)

// Inside of async functions, the return values is wrapped in a resolved promise. 

//////////////////////////////////////////////

// The await keyword 

// Inside of an async function, we can use the await keyword 
// await pauses the execution of the async func 
// Can await any async op returning a promise (eg other async funcs!)
// The await keyword waits for promise to resole & extracts its resolved value 
// It then resumes the async function's execution 
// Think of the await keyword like a pause button 

// No .then or callback necessary! 

//////////////////////////////////////////////

async function rainbow(el){
    await changeColor(el, 'red')
    await changeColor(el, 'orange')
    await changeColor(el, 'yellow')
    await changeColor(el, 'green')
    await changeColor(el, 'blue')
    await changeColor(el, 'indigo')
    await changeColor(el, 'violet')
}

///////////////////////////////////////////// 

// Async Instance Methods 

const p = new Pokemon(98) 
p.getInfo()

/////////////////////////////////////////////

// Handling errors async functions  

// If a promise is rejected using await, an error with be thrown. 
// We can use a try/catch statement to handle errors! 

async function getUser(user) {
    try {
      let url = `https://api.github.com/users/${user}`;
      let response = await $.getJSON(url);
      console.log(`${response.name}: ${response.bio}`);
    } catch (e) {
      console.log("User does not exist!");
    }
  }

///////////////////////////////////////////

// Sequential Parallel Requests 

async function catchSomeOfEmParallel() {
    let baseURL = "https://pokeapi.co/api/v2/pokemon";
    let p1Promise = $.getJSON(`${baseURL}/1/`);
    let p2Promise = $.getJSON(`${baseURL}/2/`);
    let p3Promise = $.getJSON(`${baseURL}/3/`);
  
    let p1 = await p1Promise;
    let p2 = await p2Promise;
    let p3 = await p3Promise;
  
    console.log(`The first pokemon is ${p1.name}`);
    console.log(`The second pokemon is ${p2.name}`);
    console.log(`The third pokemon is ${p3.name}`);
  }
  
  catchSomeOfEmParallel();

//   Another option with Promise.all
  async function catchSomeOfEmParallel2() {
    let baseURL = "https://pokeapi.co/api/v2/pokemon";
    let pokemon = await Promise.all([
      $.getJSON(`${baseURL}/1/`),
      $.getJSON(`${baseURL}/2/`),
      $.getJSON(`${baseURL}/3/`)
    ]);
  
    console.log(`The first pokemon is ${pokemon[0].name}`);
    console.log(`The second pokemon is ${pokemon[1].name}`);
    console.log(`The third pokemon is ${pokemon[2].name}`);
  }
  
  catchSomeOfEmParallel2();