'use strict'
function namef() {
    let name1 = prompt('Say hi to Duke enter your name!');
    return  name1;

}

function time() {
    let banana = prompt('what time is it?(24 hr)');

    let message;

    if (banana <= 1100) {
        message = 'good morning!';
    }

    else if (banana <= 1800) {
        message = 'Good aftenoon!';
    }

    else if (banana <= 2400) {
        message = 'Good evening!';
    }
    else
        message = 'That time does not exist!';
    return message;
}


function ageguess() {
    let guess = prompt('Guess how old Duke is!');

    let message1;

    if (guess <= 10) {

        message1 = 'Too low!';
    }

    else if (guess > 11) {

        message1 = 'Too high';
    }

    else if (guess == 11) {

        message1 = 'you got it!';
    }

    return message1;

}

function guessnumber(){

let answer;
do {
    answer = prompt('Guess a number between 1-10');
    if(answer != 7){
    alert('try again');}
    
    else{
        alert('you are correct');}
}
    while(answer !=7 );
}


function displayrating() {
let output='';
let rating =  prompt('how many stars? 1-5')
for(let i = 0;i <rating; i++){
    output = output +"<img class=star src='Images/R.jpg'>"
}
return document.write(output);
}
guessnumber()



