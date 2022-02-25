const fs = require('fs');

// fs.writeFileSync('bio.txt', 'Bhoomika Sahu');   // Created new file with data

// fs.appendFileSync('bio.txt', ' I am from Raisen');  // add nnew data

// const data = fs.readFileSync('bio.txt', 'utf8');   // Read data
// console.log(data);

// fs.mkdirSync('Bhoomika');  // To create a folder
// fs.writeFileSync('Bhoomika/palak.txt', 'I will delete this file');  // Created a file

// fs.unlinkSync('Bhoomika/palak.txt');  // To delete existing file

// fs.rmdirSync('Bhoomika');  // To delete existing folder 

// fs.renameSync('bio.txt', 'mybio.txt');  // For rename file name

fs.appendFileSync('mybio.txt', ' Challenge Comleted :)');
