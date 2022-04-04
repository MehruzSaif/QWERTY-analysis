import React from 'react';
import './Home.css';
import img1 from '../images/keyboard-home.png';
import CustomerReview from '../CustomerReview/CustomerReview';

const Home = () => {
    return (
        <div>
            <div className='product-container my-5'>
                <div className="written-container">
                    <h1>Your next <span>CONSOLE</span></h1>
                    <h1>Your best <span>QWERTY</span></h1>
                    <h5>For mechanical keyboards lovers, by mechanical keyboards lovers. Customize your keyboard to create your perfect aesthetic with an exciting suite of accessories in bold new colorways, including swappable top frames, rotary knobs, keycap sets, and coiled cables!</h5>

                    <button className='home-btn'>Live Demo</button>
                </div>

                <div className="img-container">
                    <img src={img1} alt="" />
                </div>
            </div>

            <CustomerReview></CustomerReview>
        </div>

    );
};

export default Home;