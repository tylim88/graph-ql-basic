import myLocation, { getGreeting, message, name } from './myModule';
//myLocation is default import, free to use any name for default import
console.log(message);
console.log(name);
console.log(myLocation);
console.log(getGreeting('Jessie'));

import plus, { subtract } from './math';

console.log(plus(1, 2));
console.log(subtract(5, 6));
