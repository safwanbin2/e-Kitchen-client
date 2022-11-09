import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Addreview from './Addreview';
import SingleReview from './SingleReview';

const Reviews = ({ service }) => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${service._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err))
    }, [service?._id, refresh])

    console.log(reviews)
    return (
        <div className='w-8/12 mx-auto my-14'>
            <h2 className='text-2xl font-semibold text-center'>What people thinks about the food</h2>
            {
                reviews.length ?
                    <div className='my-8'>
                        {
                            reviews.map(review => <SingleReview
                                key={review._id}
                                review={review}
                            ></SingleReview>)
                        }
                    </div>
                    : <h2 className='text-xl text-center my-16'>No reviews found</h2>
            }
            {
                user ? <Addreview service={service} refresh={refresh} setRefresh={setRefresh}></Addreview>
                    : <h2 className='label-text-alt '>To add comment, You need to <Link to='/login' className='link text-xl link-hover'>Login</Link> First</h2>
            }
        </div>
    );
};

export default Reviews;