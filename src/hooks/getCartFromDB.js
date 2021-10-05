
const getCartFromDB = setCart => {
    const newCart = [];
    const getCartFromDB = JSON.parse(localStorage.getItem('food-cart'));
    if (!getCartFromDB) { return }

    Object.keys(getCartFromDB).forEach(id => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(url).then(r => r.json()).then(d => {
            for (let i = 1; i <= getCartFromDB[id]; i++) { newCart.push(d.meals[0]); setCart({ cart: newCart }) }
        })
    })
};

export default getCartFromDB;