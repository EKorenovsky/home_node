const fs = require('fs');
const path = require('path');

let fileData = path.join(__dirname, 'data.txt');
let fileResult1 = path.join(__dirname, 'out-1.txt');
let fileResult2 = path.join(__dirname, 'out-2.txt');


fs.readFile(fileData, 'utf8', (err, data) => {
    if (err) throw err;

    let arr = data.split(' ');

    let arr1 = arr.filter(elem => (elem % 2) == 0);

    let arr2 = [];
    arr.forEach(elem => (arr2.push(Math.pow(elem, 3))));


    fs.writeFile(fileResult1, arr1.join(' '), 'utf8', (err) => {
        if (err) throw err;
        console.log(`${fileResult1} is saved!`);
    });
    fs.writeFile(fileResult2, arr2.join(' '), 'utf8', (err) => {
        if (err) throw err;
        console.log(`${fileResult2} is saved!`);
    });

});