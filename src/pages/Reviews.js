import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Reviews = ({ service }) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${service._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err))
    }, [service?._id])

    return (
        <div className='w-8/12 mx-auto my-14'>
            <h2 className='text-2xl font-semibold text-center'>What people thinks about the food</h2>
            <div className='my-8'>
                {
                    reviews.map(review => <SingleReview
                        key={review._id}
                        review={review}
                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;