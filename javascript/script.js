// let Uname = "javascript";
// console.log(Uname)

// let lname = "java";
// console.log(lname)

// let Lname ="c++";
// let $name="python";
// let _name = ".net";
// console.log(Lname)
// console.log($name)
// console.log(_name)

// // let 0name = "Csharp"; Numerc values does not suites for create a identifiers

// // CASES:  
// // camelCase 
// // PascalCase
// // Under_case

// let employeeId  //--camelCase
// let EmployeeId  //--PascalCase
// let Employee_Id //--Under_Case

// var age = 20; // declaration and intiallization
// age = 21; //  assinging
// // reclare means following through the keyword

// // var age = 25; // redeclaration
// // age = "Twentyone"//reassining 
// // console.log(age)

// //  let newage = 28 // declaration
// // let newage = 30 // redeclaration is also not possible
// // age = 40; // reassing is not possible
// // console.log(newage)
// // const newwage = 16 // declaration const is for constant we could not change the value
// // const newage; we must use the = 
// // const newwage cannot redeclare
// // newwage = 30; // cannot reassing 
// // console.log(newwage)

// // confirm (newage) // it shows alert with ok and cancel 

// // let  Userage = prompt("Enter your Age")
// // console.log(Userage)
// // console.error()
// // console.warn()
// // console.clear()

//DATATYPES
//PRIMITIVE DATATYPES

console.clear
// Number
var num = 120;
var  num = 12.6;
console.log(num);
//String
let UserName = " Javascript is a scripting language";
UserName = "java"

console.log(num,UserName)

//Boolean

let Condition = true;
Condition = false;

console.log(Condition)
 //undefined
 let novalue ;
  console.log(novalue)
  //null
  let emptyvalue = null
  console.log( num,UserName,Condition)

  //Non-PRIMITIVE DATATYPES or REFERENCE DATATYPES-- Can Store Multiple values or data
// Array 
let multiuser = ["Instagram","Facebook","twitter"];
console.log(multiuser);
console.log(multiuser[0],multiuser[1]) // can acess the sing array
console.log(multiuser.length);//to find final value
console.log(multiuser[multiuser.length-1]);//to find final value

//Object
//Key Value Pair
let vechicle = {
    vehicleType: "Four Wheeler",
    brand: "Hyundai",
    price: 2000000
}
console.log(vechicle);
console.log(vechicle.brand);
console.log(vechicle.vehicleType);
console.log(vechicle.price);

let departmemts = {
    course: "BCA",
    class:"A",
    fees:30000
}
console.log(departmemts);
console.log(departmemts.course);
console.log(departmemts.class);
console.log(departmemts.fees);

