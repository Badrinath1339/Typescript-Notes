"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['onedfad', 'heydfasf', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('John cena');
guitars[0] = 1984;
guitars.unshift('JIM');
let test = []; //any
let bands = [];
bands.push('Van Halen');
//Tuple
let myTuple = ['Dave', 42, true];
let mixed = ['john', 1, false];
mixed = myTuple; //no error  
/*
mixed is a type of :       let mixed: (string | number | boolean)[]
myTuple can be assigned to mixed
*/
// myTuple=mixed; //error
//OBJECTS
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true
};
/*
//we  can't create object as below:
// it gives error
let evh:Guitarist={
    name:'Eddie',
    albums:[1984,'abc']
}

*/
/*
//if we create like below:
type Guitarist={
    name:string,
    active?:boolean,
    albums:(string | number)[]
}

then, we can create a object like below:
may or may not include active properity
let evh:Guitarist={
    name:'Eddie',
    albums:[1984,'abc']
}


*/
//we need to include all the properties
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 'abc']
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
//Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime. "
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A); //5
