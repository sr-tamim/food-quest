import React from 'react';
import { NavLink } from 'react-router-dom';
import addToCart from '../../utilities/addToCart';
import './Food.css';



const Food = (props) => {
    const { food } = props;

    return (
        <div style={{ margin: '30px' }} className="single-food">
            <div className="food">
                <img src={food.strMealThumb} alt="" />
                <div>
                    <h3 className="food-name">{food.strMeal}</h3>
                    <NavLink to={`/foods/${food.idMeal}`}>
                        <button>See Details</button>
                    </NavLink>
                    <button style={{ zIndex: 100 }} onClick={() => addToCart(food, props.useCart)}>Add to cart</button>
                </div>
            </div>
        </div >
    );
};

export default Food;