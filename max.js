const heights = [54, 52, 45, 62, 55, 51,78];

function getMax(numbers) {
    let max = numbers[0];
    for (let num of numbers){
        if(num > max){
            max = num;
        }
    }
    console.log(max)
}


const maxHeight = getMax(heights);
// console.log(maxHeight)