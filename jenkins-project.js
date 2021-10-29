const fs = require('fs')
const input = fs.readFileSync('./jenkins.txt', 'utf-8')

const cities = [];
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
const regCoords = /((\d)[a-zA-Z]{3,}){3}°/g
const regTwoDig = /((\d)[a-zA-Z]{3,}){2}'/g
const regOneDig = /((\d)[a-zA-Z]{3,}){2}\./g
const regZeroDig = /(\d)[a-zA-Z]{3,}(")[a-z]{3,}([NESW])/g


const coordinates = [];
const coordinates2 = [];
const coordinates3 = [];
const coordinates4 = [];

let match = regZeroDig.exec(input)
while(match){
    console.log(match[1]+match[2]+match[3]);

    if(match[1] > 7 && match[1] < 0){
        console.log(match[1]);
    }
}
console.log(match);

const threeDigCoord = input.match(regCoords);
const twoDigCoord = input.match(regTwoDig);
const oneDigCoord = input.match(regOneDig);
// const zeroDigCoord = input.match(regZeroDig);

// /const fixZero = /(\d)"[WESN]/
// /console.log(zeroDigCoord.match(fixZero));

//const alphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m,n,o,p,q,r,s,t,u,v,w,x,y,z]

for(x of threeDigCoord){
    let regFix = /\d/g
    let coord = (x.match(regFix).join(""));
    if(coord < 256 && coord > 0){
        coordinates.push(coord+"°")
    }
}
for(x of twoDigCoord){
    const regFix = /\d/g;
    let coord = (x.match(regFix).join(""));
    if(coord < 64 && coord > 0){
        coordinates2.push(coord+"'")
    }
}
for(x of oneDigCoord){
    const regFix = /\d/g;
    let coord = (x.match(regFix).join(""));
    if(coord < 64 && coord > 0){
        coordinates3.push(coord+".")
    }
}
// console.log(zeroDigCoord);
// for(x of zeroDigCoord){
//     const regFix = /\d/g;
//     let coord = (x.match(regFix).join(""));
//     if(coord < 8 && coord > 0){
//         coordinates4.push(coord)
//     }
// }
//console.log(coordinates);
//console.log(coordinates2);
//console.log(coordinates3);
console.log(coordinates4);


// for (let i = 0; i < 26; i++) {
//     zeroDigCoord.replace('alphabet', '')

// }