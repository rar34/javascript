console.log(1);
console.log(2);

setTimeout(() => {
    console.log('finished within 2 second');
}, 2000);

console.log(4);
console.log(5);


let i = 1;
const clockId = setInterval(() => {
    console.log(clockId, i);
    i++;

    if(i >5){
        clearInterval(clockId)
    }
}, 2000);