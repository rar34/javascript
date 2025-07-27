function Add(numbers) {
    let sum = 0;
    for (num of numbers) {
        sum = sum + num;
    }
    return sum;
}

const numbs = [54, 25, 45, 62, 5, 51];
const sum = Add(numbs);
console.log(sum)