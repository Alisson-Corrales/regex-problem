const fs = require('fs')
const input = fs.readFileSync('./jenkins.txt', 'utf-8')

const cities = [];
//const coordinates = [];
//const foundThises = [];

const reCities = /\@[a-zA-Z]+/g;
//const reCoords = /../g;
//const reThis = /../g;

cities.push(input.match(reCities))
cities.replace("@")
//input.match(reCities);



console.log(cities);