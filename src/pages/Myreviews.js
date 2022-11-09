import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import TableItem from './TableItem';

const Myreviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const [refresh, setRefresh] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
            .catch(err => console.error(err))
    }, [user?.email, refresh])

    console.log(myReviews)

    return (
        <div className='min-h-screen'>
            <h2 className='text-center text-2xl font-semibold my-6'>Reviews you have given</h2>
            {
                myReviews.length ?
                    <table className='table w-10/12 mx-auto'>
                        <tbody>
                            {
                                myReviews.map(review => <TableItem
                                    key={review._id}
                                    review={review}
                                    setRefresh={setRefresh}
                                    refresh={refresh}
                                ></TableItem>)
                            }
                        </tbody>
                    </table>
                    : <h2 className='text-center text-2xl mt-32'>No reviews were added</h2>
            }
        </div>
    );
};

export default Myreviews;