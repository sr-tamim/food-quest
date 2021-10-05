
const addToCart = (food, useCart) => {
    const [cart, setCart] = useCart;
    const newCart = [...cart.cart, food]
    const foodItemsId = newCart.map(food => food.idMeal);
    const foodDB = {};
    foodItemsId.forEach(id => {
        foodDB[id] ? foodDB[id] = foodDB[id] + 1 : foodDB[id] = 1;
    })
    setCart({ cart: newCart });
    localStorage.setItem('food-cart', JSON.stringify(foodDB))
};

export default addToCart;