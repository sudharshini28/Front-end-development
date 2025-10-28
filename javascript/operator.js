//Arithmetic Operators
console.log(10 + 40);// Addition
console.log(20 - 40);// Subtracton
console.log(30 * 2);//Multiplication
console.log(30 / 20); //Quetient
console.log(50 % 20); //Modules
console.log(30 ** 3 ); // exponential

//Increment and Decrement 

//INCREMENT
let num = 10;
num = num + 1;
console .log(num);
//OR
let num1 = 15;
num1++; //Preincrement
++num1;//Postincrement
console.log (num1);

//DECREMENT
let num2 = 10;
num = num -1;
console.log(num2);
//OR
let num3 = 40;
num--;//PostDecrement
--num;//PreDecrement
console.log(num3);

//Post Increment and Pre Increment
// Substiution 
// increment 
// operation

let newnum = 10;
newnum = newnum++ + ++newnum; // 10 + 12 = 22
console.log(newnum);

let newnum1 = 1;
newnum1= ++newnum1 + ++newnum1; // 2+ 3 = 5
console.log(newnum1);


// Post Decrement and Pre Decrement
// substituion
// decrement 
// operation

let number = 30;
number = --number - --number // 29 - 28 = 1
console.log(number); 

let number1 = 9;
number1 = number1-- - number1--

console.log(number1,number);

//Assingment Operators 
//Addition
let add = 20;
add += 20;
let additionalval = 10;
add += additionalval;
console.log(add);


// Subtraction 
let sub = 25;
sub -= 10;
console.log(sub);

//Multiplication
let mul = 15;
let multival = 20;
mul *= multival;
console.log(mul);

//Division
let div = 3;
let divisionval = 2;
div /= divisionval ;
console.log(div);

//Modules
let mod = 2;
let modval = 3;
mul %= modval;
console.log(mod);

//Exponential
let expo = 5;
let exponenval = 1;
expo **= exponenval;
console.log(expo);

// Relational Operators or Comparisional Operators
console.log( 10 < 20); //Less than <
console.log(20>30); //Grater than >
console.log(20>=10); //Grater than or equal to >=
console.log(50<=30); //Less than or equal to <=
console.log(50==50); // equal to == ( to compare only values)
console.log(50==="50"); // equal to === ( to compare only values and data types)
// in not equal to if there is a different value the first preference is for value or else the data is different the first priority will be for data type
console.log(50 !=50); // not equal to != ( to compare only values )
console.log(50 !==50); // Strict not equal to != ( to compare only values and data types)
console.log(50 !=="50"); // Strict not equal to != ( to compare only values and data types)


