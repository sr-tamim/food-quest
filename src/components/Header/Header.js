import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

function showSideCart() {
    document.getElementById('side-cart').classList.toggle('show');
}

const Header = props => {
    const { cart } = props;
    // console.log(cart)


    document.addEventListener('scroll', () => {
        if (window.scrollY > 50) { document.getElementById('header').style.background = 'white' }
        else { document.getElementById('header').style.background = 'transparent' }
    })

    const linkStyle = {
        textDecoration: 'none',
        color: '#ff577e'
    }
    return (
        <header id="header">
            <nav>
                <div className="link">
                    <NavLink activeStyle={{ color: '#ce3b5d' }} style={linkStyle} to="/home">Home</NavLink>
                </div>
                <div className="link">
                    <NavLink activeStyle={{ color: '#ce3b5d' }} style={linkStyle} to="/foods">Foods</NavLink>
                </div>
                <div className="link" onClick={showSideCart}>Cart
                    <span id="cart-length">{cart.cart.length}</span>
                </div>
            </nav>
            <div id="side-cart">
                <div id="cart-head">
                    <h1>Cart</h1>
                    <div className="close-side-cart" style={{ cursor: 'pointer' }} onClick={showSideCart}>X</div>
                </div>

                {
                    cart.cart.filter((f, index) => cart.cart.indexOf(f) === index).map(food => {
                        return (
                            <div className="side-cart-item" key={food.strMeal}>
                                <img src={food.strMealThumb} alt="" />
                                <div className="side-cart-item-info">
                                    <h3>{food.strMeal}</h3>
                                    <h3>Quantity: {
                                        cart.cart.filter(i => i.idMeal === food.idMeal).length
                                    }
                                    </h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </header>
    );
};

export default Header;