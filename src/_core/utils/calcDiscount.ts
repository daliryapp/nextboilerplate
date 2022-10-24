export const calcDiscount = (price: number, discount: number): number => {
    return price - price * discount;
}