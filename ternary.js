let price = 1500;
const coupon = 'DEALNAOa';

price = coupon === 'DEALNAO' ? price-price*0.25 : price ;
console.log(price)