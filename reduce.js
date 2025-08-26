const numbers = [10, 21, 5, 3, 1, 22]

const total = numbers.reduce((a, b) => a + b, 0)

const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 1, name: 'Hp', price: 50000 },
    { id: 1, name: 'Dell', price: 45000 },
    { id: 1, name: 'Mac', price: 154000 }
]

const productPrice = products.map(p => p.price)
const totalPrice = productPrice.reduce((a, b) => a + b, 0)
console.log('Total price is ', totalPrice);