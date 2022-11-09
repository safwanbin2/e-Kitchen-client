import React from 'react';
import toast from 'react-hot-toast';
import { FaEdit, FaStar, FaTrash } from 'react-icons/fa';

const TableItem = ({ review, setRefresh, refresh }) => {
    const { serviceTitle, _id, serviceImg, rating, body } = review;
    console.log(review)
    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete the review?')
        if (confirm) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        setRefresh(!refresh)
                        toast.success('Deleted Successfully')
                    }
                    else {
                        toast.error('Could not Delete')
                    }
                })
                .catch(err => console.error(err))
        }
    }

    const handleEdit = (e) => {
        e.preventDefault();
        const form = e.target;
        const body = form.body.value;
        const rating = form.rating.value;

        const updateBody = {
            body: body,
            rating: rating
        }

        console.log(updateBody)
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateBody)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.matchedCount) {
                    window.location.reload();
                    toast.success('Updated Successfully')
                }
                else {
                    toast.error('Failed to update')
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <>
            <tr className='flex flex-col md:flex-row md:justify-between w-full mb-12'>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={serviceImg} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{serviceTitle}</div>
                            <div className="text-sm opacity-50 flex items-center"><h2>{rating}</h2> <FaStar className='text-yellow-600'></FaStar></div>
                        </div>
                    </div>
                </td>
                <td>
                    {
                        body.length > 30 ? <>{body.slice(0, 30)}...</>
                            : body
                    }
                </td>
                <td className='text-xl flex'>
                    <button onClick={() => handleDelete(_id)}><FaTrash></FaTrash></button>
                    <a href="#my-modal-2" className="btn ml-2"><FaEdit></FaEdit></a>
                </td>
            </tr>
            <div className="modal" id="my-modal-2">
                <form onSubmit={handleEdit} className="modal-box">
                    <h3 className="font-bold text-lg">Edit Your review: </h3>
                    <input type="text" className='input input-bordered w-full my-2 h-20' required placeholder='enter new description' name="body" />
                    <input type="text" className='input input-bordered w-full my-2' required placeholder='enter new rating' name="rating" />
                    <div className="modal-action">
                        <button className='btn'>Update</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default TableItem;