const person = ['Abul', 'Babul', 'Dabul', 'Abul', 'Babul'];

function noDuplicated(array) {
    let unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item)
        }
    }
    return unique;
}

const uniqueArray = noDuplicated(person);
console.log(uniqueArray)