import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { title, img, description, rating, price, _id } = service;
    return (
        <div className="card glass">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} className="h-56 w-full" alt="car!" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{
                    description.length > 100 ? description.slice(0, 80)
                        : description
                }...</p>
                <h3>Price: <span className='text-xl'>{price}</span>tk</h3>
                <div className="rating">
                    <h2 className='text-lg mr-2'>{rating}</h2>
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;