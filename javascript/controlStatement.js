// if statement and else statement

let UserAge = 50;
if(UserAge>10){
    console.log("The user is eligible to vote!");
}else{
    console.log("The User is not eligible to vote!-");
}
// if statement and else if statement 

let hour1 = 12;

if(hour1>1 && hour1<6){
    console.log("Early Morning");
}
else if(hour1>6 && hour1<12){
    console.log("Afternoon");
}
else{
    console.log("It is not an valid hour");
}

//else if ladder

let hour = 12;

if(hour>1 && hour<6){
    console.log("Early Morning");
}
else if(hour>6 && hour<12){
    console.log("Afternoon");
}
else if(hour >12 && hour <3){
    console.log("Mid Afternoon");
}
else{
    console.log("It is not a valid hour");
}