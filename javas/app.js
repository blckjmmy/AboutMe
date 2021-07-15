'use strict';
console.log('sky');
alert('it works');

let userinput=prompt('enter your name');
console.log(userinput.toUpperCase);

let texas=prompt('do you like texas ');
if (texas === 'yes' || texas === 'y') {
  alert (userinput + 'congrats welcome to greatest state in american');
}
if (texas === 'no'|| texas === 'n'){
  alert ('Beat it weirdo go to california');
}

let history = prompt('do you like to go to musuem'); 
if (history === 'yes' || history === 'y') 
{
  alert ('head to alamo great historical sight to see')
}
if (history === 'no' || history === 'n'){
  alert ('oh that sad to hear')
}



