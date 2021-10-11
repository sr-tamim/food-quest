import React, { useState } from 'react';
import Food from '../Food/Food';
import './Foods.css';

const Foods = () => {

    const [foods, setFoods] = useState({});

    function getFoods(event) {
        if (event.type !== 'blur' && event.key !== 'Enter') { return };

        // set status as loading
        setFoods({ meals: 'Loading' });

        const searched = event.target.value;
        if (searched === '') { setFoods({}); return };
        const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searched;
        fetch(url).then(r => r.json()).then(d => setFoods(d)).catch(err => alert(err.message));
    }

    const { meals } = foods;
    return (
        <div id="foods-container">
            <h1 className="heading">
                <span>Foods search</span><sub>made using React.js</sub>
            </h1>
            <div className="searchArea">
                <input type="text" placeholder="type food name" id="searchField" onKeyUp={getFoods} onBlur={getFoods} />
                <span id="pressEnter">
                    Press Enter to Search
                </span>
            </div>
            <div className="foodContainer">
                {
                    meals === 'Loading' ? <h1 className="specialMessage">Loading...</h1> :
                        meals === undefined ? <h1 className="specialMessage">No Input.!</h1> :
                            meals === null ? <h1 className="specialMessage">Nothing found...</h1> :
                                meals.map(food => <Food food={food} key={food.idMeal}></Food>)
                }
            </div>
        </div>
    );
};


export default Foods;