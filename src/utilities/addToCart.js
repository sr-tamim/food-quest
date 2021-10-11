import updateCart from "./updateCart";

const addToCart = (food, useCart) => {
    const [cart, setCart] = useCart;
    const newCart = [...cart.items, food];
    updateCart(newCart, setCart);
};

export default addToCart;