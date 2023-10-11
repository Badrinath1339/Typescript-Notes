"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
//we can also write the assertions like below. but these may not work in react(tsx files)
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
//The above function may have return type as number or string
//To explicitly specify as string using assertions
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'add');
// 10 as string   //error
10;
//The DOM
const img = document.querySelector('img'); //HTMLImageElement | null
const myImg = document.querySelector('#img'); //Element | null
/*
//non-null assertion
const myImg=document.querySelector('#img')! //Element
*/
//or
//To use above as only Html element then use assertion
const img1 = document.querySelector('img'); // HTMLImageElement
const myImg1 = document.querySelector('#img'); //element
