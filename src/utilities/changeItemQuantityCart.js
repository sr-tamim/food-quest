import updateCart from './updateCart';

const changeItemQuantityCart = (method, food, cart, setCart) => {
    const newCart = cart.items;
    method === 'decrease' &&
        newCart.splice(cart.items.indexOf(food), 1);
    method === 'increase' &&
        newCart.splice(cart.items.indexOf(food), 0, food);
    updateCart(newCart, setCart);
};

export default changeItemQuantityCart;