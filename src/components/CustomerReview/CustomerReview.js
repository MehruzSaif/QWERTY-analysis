import React from 'react';
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';
import './CustomerReview.css';

const CustomerReview = () => {
    const [reviews, setReviews] = useReviews();

    const reviewData = reviews.slice(0, 3);

    return (
        <div>
            <h1><b>Customer Reviews(3)</b></h1>

            <div className='three-customer-review container'>
                {
                    reviewData.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div >
    );
};

export default CustomerReview;