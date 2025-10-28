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