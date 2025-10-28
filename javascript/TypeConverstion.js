//Type COnverstion
let str = "40";
let num = 100;

console.log(str + num);
//impplicit convertion
//string

console.log("hi"+true);
console.log("hi"+100);
console.log("hi"+undefined);
// string = anything = string and anything + string = string 

//Number 
// default value of true = 1, false = 0

console.log(typeof 10+undefined);
console.log(10+null);
console.log(typeof 10+[1]);
console.log(typeof 10+{});
console.log(typeof 10+"hello");

//Boolean
console.log(10+true);
console.log(10+undefined);//Not A Number -- NAN
console.log(10+false);

//explicit converstion
//number
console.log(10+Number(10));
console.log(Number('abc'));
console.log(Number({}));
console.log(Number(false));
console.log(Number(true));

//boolean
console.log(Boolean("abc"))
console.log(Boolean("0"))
console.log(Boolean("-10"))
console.log(Boolean("10"))
console.log(Boolean("NAN"))
console.log(Boolean(undefined))
console.log(Boolean(String))
console.log(Boolean(Infinity))
console.log(Boolean(-Infinity))
console.log(Boolean(null))
