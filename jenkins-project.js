const fs = require('fs')
const input = fs.readFileSync('./jenkins.txt', 'utf-8')

const cities = [];
//const foundThises = [];

const reCities = /\@[a-zA-Z]+/g;
//const reThis = /../g;

cities.push(input.match(reCities))

const c = cities.toString()

const reg = /@/g
const fixC = c.replace(reg, "")
const reg2 = /,/g
const fixC2 = fixC.replace(reg2, "")

// const spacing = //g

// for (let i = 0; i < 19; i++){
//     if (fixC2 > i){
//         fixC2.split()
//     }
// }
const re3 = /(.{18})/g
const fixC3 = fixC2.replace(re3, "$1 ")

// console.log(fixC2.match(spacing));
//console.log(fixC3);



//#2
//const reCoords = /(7|63+|63-225|)/g;
const regCoords = /((\d)[a-zA-Z]{3,}){3}°/g
const reCoords2 = /\d/g
//const reCoords3 = //g
//console.log(input);
const coordinates = [];
const coordsWithLetters = input.match(regCoords);
// coordsWithLetters.match(reCoords2)
for(x of coordsWithLetters){
    let coord = (x.match(reCoords2).join(""));
    if(coord < 256 && coord > 0){
        coordinates.push(coord+"°")
    }
}
console.log(coordinates);
// console.log(coordsWithLetters);