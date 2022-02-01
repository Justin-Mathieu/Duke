'use strict'

let name1 = prompt('Say hi to Duke enter your name!');

let banana = prompt('what time is it?(24 hr)');

let message;

if(banana <= 1100){
    message = 'good morning!';
}
    
else if(banana <= 1800){
    message = 'Good aftenoon!';
}

else if(banana <= 2400){
    message = 'Good evening!';
}
else{
    message= 'That time does not exist!';
}

let guess = prompt('Guess how old Duke is!');
let message1;
if (guess < 10){
    message1 = 'Too low!'}
else if(guess> 11){
    message1 = 'Too high'}
else if(guess = 11){
    message1 = 'you got it!'

}
document.write('Hi, ' + name1 + message + message1)


    