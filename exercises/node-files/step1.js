// In step1.js, write a function, cat.

// It should take one argument, path, and it should read the file with that path, and print the contents of that file.

// Then, write some code that calls that function, allowing you to specify the path argument via the command line.

const process = require('process');
const fs = require('fs')

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) {
            console.log("ERROR found:", err);
            process.kill(1)
        }
        console.log("DATA...", data)
})
}

cat(process.argv)[2]