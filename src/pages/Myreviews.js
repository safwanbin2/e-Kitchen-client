import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import TableItem from './TableItem';

const Myreviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
            .catch(err => console.error(err))
    }, [user?.email])

    console.log(myReviews)

    return (
        <div className='min-h-screen'>
            <h2 className='text-center text-2xl font-semibold my-6'>Reviews you have given</h2>
            <table className='table w-10/12 mx-auto'>
                <tbody>
                    {
                        myReviews.map(review => <TableItem
                            key={review._id}
                            review={review}
                        ></TableItem>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Myreviews;