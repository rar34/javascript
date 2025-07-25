let price = 1500;
const coupon = 'DEALNAO';

price = coupon === 'DEALNAO' ? price-price*0.25 : price ;
console.log(price)