// Copy over your step2.js code to step3.js.

// Add a feature where, on the command line, you can optionally provide an argument to output to a file instead of printing to the console. 
// The argument should look like this: --out output-filename.txt readfile-or-url.

// Current features should still work the same: 

const fs = require('fs')
const process = require('process');
const axios = require('axios')

function handleOut(text, out) {
    if (out){
        fs.writeFile(out, text, 'utf8', error => {
            if (error) {
                console.log(`Can't write ${out}, ${error}`)
                process.exit(1)
            }
        })
    } else {
        console.log(text);
    }
}


function cat(path, out) {
    fs.readFile(path, 'utf8', function(error, data) {
        if (error) {
            console.log(`ERROR: ${error}, ${path}`);
            process.exit(1)
        } else {
            handleOut(data, out);
        }
    });
}

async function webCat(URL, out) {
    try {
        const response = await axios.get(URL);
        handleOut(response.data, out);
    } catch (error) {
        console.log(`ERROR: ${error}, ${URL}`);
        process.exit(1)
    }
}

let path;
let out;

if (process.argv[2] === "--out") {
    out = process.argv[3];
    path = process.argv[4]
} else {
    path = process.argv[2]
}

if (path.slice(0,4) === 'http') {
    webCat(path, out);
} else {
    cat(path, out);
};


