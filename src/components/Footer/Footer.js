import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (

        <footer>
            <div id="footer-head">
                <img src="/img/footer-logo.png" alt='' />
                <h1>
                    <span id="color1">Food</span> <span id="color2">Quest</span>
                </h1>
            </div>
            <h3>Good food choices are good investments</h3>
            <div id="copyright">
                © All Rights Reserved by Food Quest
            </div>
        </footer>
    );
};

export default Footer;