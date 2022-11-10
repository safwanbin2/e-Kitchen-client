import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../hooks/useTitle';

const Addreviews = () => {
    useTitle('Add service')
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const img = form.img.value;
        const body = form.body.value;

        const newService = {
            title,
            price,
            rating,
            img,
            description: body
        }

        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Successfully added Dish')
                    form.reset();
                }
                else{
                    toast.error('could not add the dish')
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='min-h-screen bg-base-200 flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='w-10/12 mx-auto py-12'>
                <input type="text" placeholder="Service Name" className="input input-bordered w-full my-1" name='title' required />
                <div className=' my-1'>
                    <input type="text" required name='price' placeholder="Food Price" className="input input-bordered w-6/12 " />
                    <input type="text" required name='rating' placeholder="Rate 1-5" className="input input-bordered w-6/12 " />
                </div>
                <input type="text" name='img' required placeholder="Image URL" className="input input-bordered w-full my-1" />
                <input type="text" name='body' required placeholder="type your Review" className="input input-bordered my-1 w-full h-20" />
                <div className='text-center my-2'>
                    <button className='btn w-8/12'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Addreviews;