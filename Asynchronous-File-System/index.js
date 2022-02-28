const fs = require('fs');

// fs.writeFile('bio.txt', 'This is asynchronous challenge', (error) => {
//     console.log('This is callback function');
//     console.log(error);
// });

// fs.appendFile('bio.txt', ' I am Bhoomika Sahu', (err) => {
//     console.log('This is callback function');
// })

// fs.readFile('bio.txt', 'utf-8', (err, data) => {
//     console.log(data);
//     console.log('This is callback function');
// })

// fs.rename('bio.txt', 'mybio.txt', (err) => {
//     console.log('This is callback function');
// });

// fs.mkdir('Bhoomika', (err) => {
//     console.log('This is callback function');
// })

// fs.writeFile('bhoomika.txt', 'I will delete this file', (err) => {
//     console.log('This is callback function');
// })

// fs.unlink('Bhoomika/bhoomika.txt', (err) => {
//     console.log('This is callback function');
// });

fs.rmdir('Bhoomika', (err) => {
    console.log('This is callback function');
});


