"use strict";
//Type Aliases   //it doesnot works for interfaces
//Literal types
let myName;
myName = 'Dave';
// myName='john'  //error
let username;
username = 'john'; // it expects only 3 values: Dave john Amy
// functions
const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello! ');
logMsg(add(2, 3));
/*
interface mathFunction {
    (a: number, b: number): number
}

*/
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 3));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
//generally default arguments should be written at end
logMsg(addAll(2, 3, 2));
logMsg(sumAll(2, 3, 2));
//Rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2));
