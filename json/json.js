const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'Hp', price: 50000 },
    { id: 3, name: 'Dell', price: 45000 },
    { id: 4, name: 'Mac', price: 154000 }
]

const mac = { id: 4, name: 'Mac', price: 154000 };
const stringify = JSON.stringify(mac)
console.log(stringify);