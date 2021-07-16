
'use strict';

console.log ('hello world!');

let userName = prompt('Hello Who might you be ?');
console.log('This is ' + userName);
alert('Welcome ' + userName + '!');

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





// code ideas from MarquesaAsmussen