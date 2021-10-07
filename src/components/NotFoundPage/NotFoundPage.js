import React from 'react';
import { useHistory } from 'react-router-dom';
import "./NotFoundPage.css";

const NotFoundPage = () => {
    const history = useHistory();
    return (
        <div id='not-found-page'>
            <span> 404 - Not Found </span>
            <br />
            <span id="home-link" onClick={() => history.push('/')}>Go to Home</span>
        </div>
    );
};

export default NotFoundPage;