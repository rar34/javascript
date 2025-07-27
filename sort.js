const persons = ['dakib', 'sakib', 'makib', 'Akib', 'pakib'];
const sortedPerson = persons.sort();
// console.log(sortedPerson)

const numbers = [21, 12, 25, 2, 4, 62, 42, 15];

const revAs = [...numbers].sort((a, b) => a - b);
const revDs = [...numbers].sort((a, b) => b - a);

console.log(revAs)
console.log(revDs)