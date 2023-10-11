//Type Aliases   //it doesnot works for interfaces


type stringOrNumber= string | number
type stringOrNumberArray = (string | number)[]

type Guitarist={
    name:string,
    active:boolean,
    albums:stringOrNumberArray
}

type UserId=stringOrNumber

//Literal types
let myName:'Dave'
myName='Dave'
// myName='john'  //error

let username:'Dave' | 'john' | 'Amy'

username='john';// it expects only 3 values: Dave john Amy

// functions
const add = (a: number, b:number) :number =>{
    return a + b
}
const subtract = (a: number, b:number) :number =>{
    return a - b
}
   
const logMsg = (message: any):void=>{
    console. log(message)
}
  
logMsg( 'Hello! ')
logMsg(add(2,3))


type mathFunction = (a: number, b: number) => number
/*
interface mathFunction {
    (a: number, b: number): number
}

*/
let multiply: mathFunction = function (c, d){
 return c * d
}

logMsg(multiply(2,3))




// optional parameters
const addAll = (a: number, b: number,c?:number ):
    number => {
    if (typeof c !=='undefined'){
        return a+b+c
    }
    return a+b
    }    
const sumAll = (a: number, b: number,c:number=2 ):
    number => {
    
    return a+b+c
    }    
 //generally default arguments should be written at end


/*
if you wan't to use default argument at the beginning

then,
const sumAll = (a: number=10, b: number,c:number=2 ):
    number => {
    return a+b+c
    }   


    call this function as below:

    sumAll(undefined,3)
*/

logMsg(addAll(2,3,2))
logMsg(sumAll(2,3,2))

//Rest parameters
const total=(...nums:number[]):number=>{
    return nums.reduce((prev,curr)=> prev+curr)
}

logMsg(total(1,2))

//never return type

//for infinite loops and throw errors

const createError =(errMsg:string):never=>{
 
    throw new Error(errMsg)
}


//endless loop
    const infinite = ()=>{
    let i: number=0;
    while (true){
    i++
    }

}

// custom type guard
const isNumber=(value: any): boolean =>{
    return typeof value === 'number' ? true : false
}
  
   
   

//usage of never type
const numberOrString=(value: number | string):string=>{
if (typeof value =='string') return 'string'
if (typeof value =='number') return 'number'
return createError( 'This should never happen!');
}