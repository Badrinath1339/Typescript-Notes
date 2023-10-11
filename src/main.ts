//Type assertions
type One=string
type Two = string | number
type Three= 'hello'


// convert to more or less specific
let a: One = 'hello'
let b = a as Two // less specific
let c = a as Three // more specific


//we can also write the assertions like below. but these may not work in react(tsx files)
let d = <One>'world'
let e= <string | number>'world'

const addOrConcat = (a: number,b:number,c:'add' | 'concat'):number | string => {
    if (c ==='add') return a+b;
 return ''+a+b;
}

//The above function may have return type as number or string
//To explicitly specify as string using assertions
let myVal: string = addOrConcat(2,2, 'concat') as string  

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2,2, 'add') as number

// 10 as string   //error

(10 as unknown) as string

//The DOM

const img=document.querySelector('img')    //HTMLImageElement | null
const myImg=document.querySelector('#img')    //Element | null

/*
//non-null assertion
const myImg=document.querySelector('#img')! //Element
*/
//or

//To use above as only Html element then use assertion
const img1=document.querySelector('img')   as HTMLImageElement // HTMLImageElement
const myImg1=document.querySelector('#img') as Element //element






