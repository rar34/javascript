const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const reversed = [];

for(num of numbers) {
    reversed.unshift(num)
}

console.log(reversed)