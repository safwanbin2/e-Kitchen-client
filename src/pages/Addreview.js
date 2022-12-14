import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Addreview = ({ service, refresh, setRefresh }) => {

    const { user } = useContext(AuthContext);
    const handleAddReview = (e) => {
        e.preventDefault();
        const body = e.target.body.value;
        const rating = e.target.rating.value;

        const newReview = {
            name: user.displayName,
            email: user.email,
            serviceTitle: service.title,
            serviceId: service._id,
            serviceImg: service.img,
            rating: rating,
            body: body,
            img: user.photoURL
        }

        fetch(`https://b6a11-service-review-server-side-safwanbin2.vercel.app/reviews`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review added successfully')
                    setRefresh(!refresh)
                    e.target.reset();
                }
                else {
                    toast.error('Could not add review')
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <h2 className='text-xl underline'>Add a review:</h2>
            <form onSubmit={handleAddReview} className=''>
                <input name='body' required type="text" placeholder="Write your Review" className="input input-bordered w-full h-20 my-2" />
                <input name='rating' required type="text" placeholder="rate it 1-5" className="input input-bordered w-full my-2" />
                <button className='btn btn-primary my-2'>Submit</button>
            </form>
        </div>
    );
};

export default Addreview;