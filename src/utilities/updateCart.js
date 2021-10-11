
const updateCart = (newCart, setCart) => {
    const foodItemsId = newCart.map(food => food.idMeal);
    const foodDB = {};
    foodItemsId.forEach(id => {
        foodDB[id] ? foodDB[id] = foodDB[id] + 1 : foodDB[id] = 1;
    })
    setCart({ items: newCart });
    localStorage.setItem('food-cart', JSON.stringify(foodDB))
};

export default updateCart;