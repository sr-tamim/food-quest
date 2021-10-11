
const emptyCart = (setCart) => {
    setCart({ items: [] });
    localStorage.removeItem('food-cart');
}

export default emptyCart;