const products = [
    { name: "Mobile", price: 25000 },
    { name: "Charger", price: 2500 },
    { name: "TV", price: 12000 },
    { name: "Laptop", price: 40000 },
]

function getTotalPrice(products) {
    let total = 0;
    for (let product of products) {
        total = total + product.price
    }
    return total;
}

const totalPrice = getTotalPrice(products);
console.log("total price is: ", totalPrice)