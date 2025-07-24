let age = 60;
let price = 1500;

if (age <= 12) {
    console.log("you can eat free");
}

else if (age >= 60) {
    let discount = price * 50 / 100;
    let payableAmount = price - discount;
    console.log("You have to pay: ", payableAmount, "Tk")
}
else{
    console.log("You have to pay ", price, "Tk")
}