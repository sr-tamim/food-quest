import updateCart from "./updateCart";

const removeFromCart = (food, cart, setCart) => {
    const newCart = cart.items.filter(i => i.idMeal !== food.idMeal);
    updateCart(newCart, setCart);
};

export default removeFromCart;