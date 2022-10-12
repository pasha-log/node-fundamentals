// What is Node? 

// A JavaScript environment that runs server-side 
// - It uses the Chrome v8 engine, but doesn't require/use Chrome 

// Can be used to build any kind of server-side JS 
// - Including building web apps! 
// - or as a general-purpose scripting language  

// Why use Node.js ? 
// The entire stack (frontend/backend) can be JS 
// Good practice for JS 
// THere is an extensive set of add-on libraries via npm 
// - Many can also be used in client-side JS 

// Axios can also run on node. 
// Widely used, very common and popular. 
// Good for streaming data like Netflix 
// ELECTRON - App on PCs and Windows, Slack uses it. 
// Data science and ML is not for Node. Great for web development.  

///////////////////////////////////////

// Running Node

// python3 
// python app.py

// node 

// To change the version of Node.js you would like to use for a project, create a new project directory mkdir NodeTest, and enter the directory cd NodeTest, then enter nvm use node to switch to the Current version, or nvm use --lts to switch to the LTS version. 

// pasha@DESKTOP-56QVNTJ:~/code/SpringboardCareerTrack/Unit31NodeFundamentals/31.4followAlong$ nvm use node
// Now using node v18.10.0 (npm v8.19.2)
// pasha@DESKTOP-56QVNTJ:~/code/SpringboardCareerTrack/Unit31NodeFundamentals/31.4followAlong$ node firstNodeFile.js
// HELLO FROM NODE!

//////////////////////////////////////

// npm and package json

// Node Package Manager 

// Massive registry of add-on libraries 
// Built in to node, smoother to use. Like requirements.txt
// Express is a framework. 
// react, request, moment, express, axios are all packages from npm.  
// Register with npm to publsh open-source or proprietary packages 

// $ cd my-project
// $ npm init 
// Creates package.json with metadata & dependencies 
// Kinda like pip freeze 

// npm install axios
// or npm i axios

// npm init --yes 

////////////////////////////////////////

// npm install dependencies 

// A directory containing all dependencies in the root directory of your project. 
// Always add node_modules to .gitignore 
// (It's just a collection of dependencies that can be reinstalled)

// Reinstalling packages 
// When you clone an existing project from GitHub or somehow lose your node_modules, here's how you get those dependencies: 
// npm install

// npm install without arguments uses dependencies object in package.json 
// Similar to pip install -r requirements.txt in Python

const faker = require('faker')
console.log(faker.name.findName())

////////////////////////////////////////

// Process Env Argv 

// Node provides a global object, process, for managing the current script. 
// Using process

process.env  
process.env.SECRET_KEY 
// Get value of environmental variables from shell 
// process.env is an object; its keys are the names of environmental variables. 
// $ export SECRET_INFO=abc123 
// $ node 
> process.SECRET_INFO 
'abc123'

process.argv[index]
// an array of command-line arguments given to start this program 


// npm is a node script 

// process.argv Example 
// demo/basics/showArgs.js
const argv = process.argv;

for (let i = 0; i < argv.length; i += 1) {
    console.log(i, argv[i]);
}

//////////////////////////////////////////

// Process Exit 

process.exit(exit_code) 
// Exit the program immediately and return an exit code to the shell. 

process.on('exit', function(code){
    console.log('EXITING WITH CODE: ${code}')
})

for (let arg of process.argv) {
    console.log(arg)
}

setInterval(function(){
    console.log("HELLO!")
}, 1000)

setInterval(function(){
    process.exit(2)
}, 6000)

//////////////////////////////////////////// 

// Node Modules 
// Modules are the way to share code across different files in a Node project. 
// You might hear this system referred to as "CommonJS Modules". 
// There aren't <script> tags in the Node ecosystem, so you have to include other files by exporting/importing explicitly.

// Importing a Project File 
// All imports use the require keyword. 
// To import a local project file, specify a relative path to that file: 

// demo/modules/other.js 
const usefulStuff = require("./usefulStuff");
const results = usefulStuff.add(2,3); 
console.log(results);

// This usaully means ./ for current directory or ../ for parent directory 
// You don't need to include the file extension for .js and .json files.

// helpers.js
function add(x,y) {
    return x + y
}

function subtract(x,y) {
    return x - y;
}

modules.exports = {
    add: add,
    subtract: subtract,
    color: 'PURPLE'
}

// modules.exports = 77

// app.js 
// const helpers = require('./helpers')
const {add, subtract, color} = require('./helpers')

// console.log(helpers.color)
// console.log(helpers.subtract(5,2))

console.log(color)
console.log(subtract(5,2))
console.log(add(22,45))

///////////////////////////////////////////

// FS Read Write 

// Many Node library functions utilize asynchronous callbacks by default. 
// E.g.: to read a file 

fs.readFile('myFile.txt', 'utf8', function(err, data) {
    // process file here
}); 

// > const fs = require('fs')
// undefined
// > fs

// Reading Files 
// The default method for reading files is asynchronous, using a callback. 
fs.readFile(path, encoding, callback)
// path: path to file (relative to working directory)
// encoding: how to interpret file 
// - for text files, this is almost always "utf8" 
// - for binary files (like an image), omit this argument 
//  callback: function that takes error and data 


// app.js 
const fs = require('fs'); 

// fs.readFile('poem.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.log("ERROR:", err);
//         process.kill(1)
//     }
//     console.log("DATA...", data)
// })

const line = "And Eternity in an hour";

// fs.writeFile('poem.txt', line, {encoding:'utf8', flag: 'a'}, err => {
//     if (err) {
//         console.log("ERROR!!!", err)
//         process.kill(1)
//     }
//     console.log("IT WORKED!")
// })

fs.appendFile('poem.txt', "\n APPEND ME!!!", 'utf8', err => {
    if (err) {
        console.log("ERROR!!!", err)
        process.kill(1)
    }
    console.log("IT WORKED!")
})

// Writing FIles 
fs.writeFile(path, data, encoding, callack)

// 'a' : Open file for appending. This file is created if it does not exsit. 
// flag <string> Default: 'w' for write 
// encoding <string> | <null> Default: 'utf8'

// $ node app.js  
// IT WORKED! 

// $ cat poem.txt 
// The whole poem 

////////////////////////////////

// Node vs. Browser 
// Most programmatic behavior is exactly the same (yay v8!)
// The "global object" isn't window, it's global 
// - This is where global vars go, where setTimeout is, etc 

// > window
// Uncaught ReferenceError: window is not defined
// > global
// <ref *1> Object [global] {
//   global: [Circular *1],
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   structuredClone: [Function: structuredClone],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 27538.306299984455,
//       nodeStart: 23.616299986839294,
//       v8Start: 48.62620002031326,
//       bootstrapComplete: 175.93860000371933,
//       environment: 132.5760999917984,
//       loopStart: 240.88010001182556,
//       loopExit: -1,
//       idleTime: 26990.8343
//     },
//     timeOrigin: 1665545032388.862
//   },
//   fetch: [AsyncFunction: fetch]
// }

// These can be added 
// person: 'Emily!',
// hello: [Function: hello]

// Node doesn't have document & DOM methods
// Node provides access filesystem & can start server processes 
// Many NPM libraries are "isomorphic" (can be used in web JS or Node)






// CSS custom properties
// :root { —primary-color: blue }
// button { color: var(--primary-color; }
// Can be used to add a dark light mode button.

"https://github.com/css-modules/css-modules"

// SSR -server side rendering

// Learn from other websites 

// https://www.sassmeister.com

// cssgradient.io

// On average, a plane produces a little over 53 pounds of carbon dioxide (CO2) per mile.