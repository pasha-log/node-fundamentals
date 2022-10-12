// In step1.js, write a function, cat.

// It should take one argument, path, and it should read the file with that path, and print the contents of that file.

// Then, write some code that calls that function, allowing you to specify the path argument via the command line.

const fs = require('fs')
const process = require('process');

function cat(path) {
    fs.readFile(path, 'utf8', function(error, data) {
        if(error) {
            console.log(`ERROR found:, ${error}`);
            process.exit(1)
        } else {
            console.log("DATA...", data);
        }
    });
}

cat(process.argv[2]);