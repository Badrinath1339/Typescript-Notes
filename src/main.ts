let username='stark';
console.log(username);
let a:number=25;

let myName: string ='Dave';
let meaningOfLife: number;
let isLoading: boolean;
let album: string | number; //union type (album can be string or a number)
let box:any;




myName ='john';
meaningOfLife = 42;
isLoading = true;
album = 5150;

const sum =(a:number,b:string) =>a+b;
console.log(sum(5,"ab"));  //5ab

let re:RegExp=/w+/g;