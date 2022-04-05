import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';
import './CustomerReview.css';

const CustomerReview = () => {
    const [reviews] = useReviews();

    const reviewData = reviews.slice(0, 3);

    const navigate = useNavigate();

    return (
        <div className='container'>
            <h1><b>Customer Reviews(3)</b></h1>

            <div className='three-customer-review'>
                {
                    reviewData.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>

            <button className='mb-5 navigation-btn' onClick={() => navigate('/reviews')}>See All Reviews</button>
        </div >
    );
};

export default CustomerReview;