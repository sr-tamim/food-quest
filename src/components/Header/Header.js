import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../App';
import showCartDrawer from '../../utilities/showCartDrawer';
import CartDrawer from '../CartDrawer/CartDrawer';
import { userContext } from '../UserContext/UserContext';
import "./Header.css";


const Header = () => {
    const [cart] = useContext(CartContext);
    const { user } = useContext(userContext);

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
                <div className="link" onClick={showCartDrawer}>Cart
                    <span id="cart-length">{cart.items.length}</span>
                </div>
                <div className="link">
                    {
                        !user.email ?
                            <NavLink activeStyle={{ color: '#ce3b5d' }} style={linkStyle} to="/user">Login</NavLink>
                            :
                            <NavLink activeStyle={{ color: '#ce3b5d' }} style={linkStyle} to="/profile">Profile</NavLink>
                    }
                </div>
            </nav>
            <CartDrawer />
        </header>
    );
};

export default Header;