// primitive

// 7 types:String,Number,Boolean,null,undefined,Symbol,bigInt

const scoree=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail=undefined;
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);

// const bigNumber=3432532523532523532n

// refrence (non primitive)

// array,objects,functions

const heroes=["shaktiman","nagraj","doga"]
let myObj ={
    name:"manas",
    age:19,
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof myObj)
console.log(typeof myFunction);
// return type as function object



