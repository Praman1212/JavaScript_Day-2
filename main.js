console.log("Variable");
// var(comment)
var name="praman";
console.log(name);
var thar =" ghimire";
console.log(name+thar);//javascript always recoginzie any variable as a strimg first

console.log('const');
const x= 10;
console.log(x)
// x=6;//paidina


// console.log("Conditional Rendering")

// if else
let age = 30;
//  if(age == 25){
//      console.log("budo bhais");
//  }
//  else{
//      console.log("bacchai xas bhai");
//  }
//  switch
switch(age){
    case 20:
        console.log("milena");
        break;
    case 25: 
        console.log("milyo");
        break;
    default:
        console.log("ja uta");
}
// string literals

// `${variable name}`

const ages = 48;
console.log(`My age is ${ages}`)

var names = "praman";
console.log("this is outside the function");
function myFunction(name,age){
    if(age==45){
        console.log(name)
        console.log(age)
    }
    else{
        console.log("milena")
    }
    
    // console.log('hello `${names}`')
}
myFunction(names,45)
console.log("aba arko")
myFunction(name,67)
// myFunction()
// myFunction()
// myFunction()

// object
console.log('object')

var kura={
    name : "praman",
    thar : "ghimire",
    age  : function(year){
        console.log("your age is")
        var age = 2020-year
        console.log(age)
    }
}
console.log(kura.name)
kura.age(1999)

// hoisting
console.log("hosting")



var q=10
yeuta()
function yeuta(){
   
    console.log(q)
    console.log("yeuta function vitra")
}

// scoping

console.log("scoping")
let o=10;
function auta(){
    
}
console.log("..........................................")

function arko(){
    auta()
    console.log(o)
}
arko()