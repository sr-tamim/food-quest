import React, { useContext } from 'react';
import { CartContext } from '../../App';
import changeItemQuantityCart from '../../utilities/changeItemQuantityCart';
import emptyCart from '../../utilities/emptyCart';
import removeFromCart from '../../utilities/removeFromCart';
import showCartDrawer from '../../utilities/showCartDrawer';
import "./CartDrawer.css";


const CartDrawer = () => {
    const [cart, setCart] = useContext(CartContext);
    const handleQuantityButton = (method, food) => changeItemQuantityCart(method, food, cart, setCart);
    return (
        <div>

            {/* cart drawer */}
            <div id="side-cart">
                <div id="side-cart-head">
                    <h1>Cart</h1>
                    <div className="close-side-cart" style={{ cursor: 'pointer' }} onClick={showCartDrawer}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
                <div className="side-cart-items">

                    {
                        cart.items.filter((f, index) => cart.items.indexOf(f) === index).map(food => {
                            return (
                                <div className="side-cart-item" key={food.strMeal}>
                                    <img src={food.strMealThumb} alt="" />
                                    <div className="side-cart-item-info">
                                        <h3>{food.strMeal}</h3>
                                        <div className="quantity-buttons">
                                            <span className="quantity-but decrease-but"
                                                onClick={() => handleQuantityButton('decrease', food)}><i className="fas fa-minus"></i></span>
                                            {
                                                cart.items.filter(i => i.idMeal === food.idMeal).length
                                            }
                                            <span className="quantity-but increase-but"
                                                onClick={() => handleQuantityButton('increase', food)}><i className="fas fa-plus"></i></span>
                                        </div>
                                        <button className="item-remove-but" onClick={() => removeFromCart(food, cart, setCart)}>Remove</button>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {cart.items.length > 0 &&
                    <div className="side-cart-button">
                        <button onClick={() => emptyCart(setCart)}>Empty Cart</button>
                    </div>}
            </div>
        </div>
    );
};

export default CartDrawer;