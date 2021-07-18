
'use strict';

console.log ('hello world!');

let userName = prompt('Hello Who might you be ?');
console.log('This is ' + userName);
alert('Welcome ' + userName + ' you are playing guessing game');

let score = 0;

// 5 questions
// 1 Q: Did I grow up in maryland?
// A: No, dallas texas
// 2 Q: Do I like watching anime?
// A: Yes! I love  anime!
// 3 Q: Have you serve in military
// A: yes i have serve my country.
// 4 Q: your main goal is to go singapore 
// A: No, work in  tech company
// 5 Q: you were in army 
// A: No navy

// for prompt return values, use .toLowerCase

function chance(){let q1 = prompt('Do i live in  maryland');
console.log(q1);
let saturn = q1.toLowerCase();
if ( saturn === 'no' || saturn === 'n') {
  alert('Correct! I am at dallas.');
} else if (saturn === 'yes' || saturn === 'y') {
  alert('Nope,');
} else {
  alert('I didn\'t get that. Please submit your answers in the form of "yes" or "no".');
}
console.log(saturn);
return chance;
}

chance()


function cake(){let q2 = prompt('Do I like anime?');






console.log(q2);
let goku = q2.toLowerCase();
if (goku === 'no' || goku === 'n') {
  alert('Im hurt');
} else if (goku === 'yes' || goku === 'y') {
  alert('Yes! I love anime!')
} else {
  alert('I didn\'t get that. Please submit your answers in the form of "yes" or "no".')
}
console.log(goku);
return cake;
}

cake()


function books(){let q3 = prompt('Have I serve in military');





console.log(q3);
let money = q3.toLowerCase();
if (money === 'no' || money === 'n') {
  alert('wrong.');
} else if (money === 'yes' || money === 'y') {
  alert('correct.')
} else {
  alert('I didn\'t get that. Please submit your answers in the form of "yes" or "no".')
}
console.log(money);
return books;
}
books()


function pen(){let q4 = prompt('your main goal is to visit singapoire');




console.log(q4);
let hope = q4.toLowerCase();
if (hope === 'no' || hope === 'n') {
  alert('Correct, i want to work in tech company');
} else if (hope === 'yes' || hope === 'y') {
  alert('sadly not')
} else {
  alert('I didn\'t get that. Please submit your answers in the form of "yes" or "no".')
}
console.log(hope);
return pen;
}
pen()

function mars(){let q5 = prompt('you were in army');
console.log(q5);
let jon = q5.toLowerCase();
if (jon === 'no' || jon === 'n') {
  alert('correct i was in navy');
} else if (jon === 'yes' || jon === 'y') {
  alert('nope sadly not')
} else {
  alert('I didn\'t get that. Please submit your answers in the form of "yes" or "no".')
}
console.log(jon);
return mars;
}
mars()




// question 6

function guessing(){
alert(userName + ', let\'s play a number guessing game!');
  let correctAnswer = '77';
  console.log(correctAnswer);
  
  for(let cap = 0; cap < 4; cap++){
    let userAnswer = prompt('Please enter a number between 1-100. You will have 4 attempts.');
    console.log(userAnswer);
  
    while(userAnswer < 1 || userAnswer > 100) {
      userAnswer = prompt('Please enter a number from 1-100');
    }
    if (userAnswer === correctAnswer){
      alert('CONGRATULATIONS!! You are correct!');
      score++;
      break;
    }
    else if (userAnswer < correctAnswer){
      alert('Too low!');
    }
    else if (userAnswer > correctAnswer){
      alert('Too high!');
    }
    else {
      alert('Something else went wrong.');
    }
    console.log(cap);
    if (cap === 3){
      alert('I\'m sorry. You did not guess correctly. The correct number is '+ correctAnswer + '.');
    }
  }
}


guessing();


// question 7

function Shows(){
  const Array = ['Naruto','Tokyo Revenger','Black clover','Shaman King'];
  let guesses = 6;
  let correctshow = false;
  
  while(correctshow === false && guesses > 0) {
    let placeGuess = prompt('can you guess my favorite show' + guesses + ' attempts currently.');
    let placeGuessLower = placeGuess.toLowerCase();
    for (let index=0; index<Array.length; index++){
      if (placeGuessLower === placesArray[index]){
        alert('CONGRATULATIONS. You are correct!');
        score++;
        correctshow = true;
        break;
      }
    }
    if (correctshow) {
      alert('Here are the other choices: ' + Array);
    } if (!correctshow && guesses<= 6 && guesses >1) {
      alert('Sorry you are incorrect. Please try again.');
    }
    if (!correctshow && guesses === 1) {
      alert('Sorry you got it incorrect. The correct answers were ' + Array);
    }
    
  }
}
Shows();







// code ideas from MarquesaAsmussen


