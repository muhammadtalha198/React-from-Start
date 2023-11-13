const numbers = [1, 2, 3,4,5,6,7,8];

const adddedAfter = [...numbers, 4];
const adddedBefore = [4, ...numbers];

// inSomeSpecificState 
const index = numbers.indexOf(5);
const added = [...numbers.slice(0,index), 4, ...numbers.slice(index)];
console.log(added);

const remove = numbers.filter(n => n !== 2);
console.log(remove);
