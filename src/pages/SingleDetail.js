import React from 'react';

const SingleDetail = ({ service }) => {
    const { title, price, description, img, rating } = service;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row items-start">
                    <img src={img} alt="" className="md:w-6/12 rounded-lg shadow-2xl" />
                    <div className='md:w-6/12'>
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <h3>Price: <span className='text-xl'>{price}</span>tk</h3>
                        <div className="rating">
                            <h2 className='text-lg mr-2'>{rating}</h2>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="py-6">{description}</p>
                        <button className="btn btn-disabled">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDetail;