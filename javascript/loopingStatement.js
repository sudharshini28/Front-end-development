// for loop 
// for (intialization; condition ; updation){

// }

// for(let i = 2; i<=10;i++){
//     console.log ( i );
// }

for(let i = 2; i<=10;i++){
    if(i%2 === 0) console.log(i);
}

//While Loop

// intialization;
// while(condition){
//     Statement;
//     updation;
// }
let val = 10;
while(val>=1){
    console.log(val);
    val--;
}

let num = 1234;
let sum = 0;

while(num > 0){
    let last = num %10; // 1234 % 10 ==> 1230
    num = parseInt( num/10); // 123 * 10 ==> 1230 parsseInt removes the decimal value
    sum += last;
}
console.log(sum);