import React from 'react';
import './Review.css';

const Review = (props) => {
    const { img, name, rating, review } = props.review;

    return (
        <div className='review'>
            <img src={img} alt="" />

            <div className='review-info'>
                <h2 className='review-name'>Name: {name}</h2>
                <h5 className='review-rating'>Rating: {rating} stars</h5>
                <p className='review-p'><small><b>Review: </b>{review}</small></p>
            </div>

        </div>
    );
};

export default Review;