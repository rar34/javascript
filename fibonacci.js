let a = 0, b = 1;
console.log(a,b)

for(let i = 0; i<10; i++){
    let f = a + b;
    a = b;
    b = f;
    console.log(f)
}