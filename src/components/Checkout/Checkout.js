import React, { useContext } from 'react';
import { UserContext } from '../AuthContext/AuthContext';
import './Checkout.css';

const Checkout = () => {
    const { user } = useContext(UserContext);
    return (
        <div id="checkout-container">
            <h1 id="checkout-heading"><span>Checkout</span></h1>
            <form>
                <div className="input-field-container">
                    <input type="text" value={user.displayName && user.displayName} placeholder="" />
                    <label>Name</label>
                </div>
                <div className="input-field-container">
                    <input type="email" value={user.email && user.email} placeholder="" />
                    <label>Email</label>
                </div>
                <div className="input-field-container">
                    <textarea cols="30" rows="10" placeholder="Address"></textarea>
                    <label>Address</label>
                </div>
            </form>
        </div>
    );
};

export default Checkout;