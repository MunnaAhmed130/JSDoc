/**
 * @type {(price: number, isOnSale: boolean) => number}
 */
const calculateTotalPrice = (price, isOnSale) => {
    const tax = 0.07;
    let discount = 0;
    if (isOnSale) {
        discount = 0.1;
    }
    let discountedPrice = price - price * discount;

    return Number((discountedPrice * (1 + tax)).toFixed(2));
};

console.log(calculateTotalPrice(3999, true));
