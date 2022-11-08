import React from 'react';

const SingleReview = ({ review }) => {
    const { name, email, img, body, rating } = review;
    return (
        <div className='my-12 relative'>
            <div className='flex items-center'>
                <img src={img} className="w-11 h-11 rounded-lg" alt="" />
                <div className='ml-2'>
                    <h3>{name}</h3>
                    <h3>{email}</h3>
                </div>
            </div>
            <p>
                {body}
            </p>
            <div className="rating absolute top-4 right-4">
                <h2>{rating}</h2>
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
        </div>
    );
};

export default SingleReview;