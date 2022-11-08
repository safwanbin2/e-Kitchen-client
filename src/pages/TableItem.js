import React from 'react';
import { FaEdit, FaStar, FaTrash } from 'react-icons/fa';

const TableItem = ({ review }) => {
    const { serviceTitle, _id, serviceImg, rating, body } = review;

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }
    return (
        <tr>
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
                {body}
            </td>
            <td className='text-xl'>
                <button onClick={() => handleDelete(_id)}><FaTrash></FaTrash></button>
                <button className='ml-4'><FaEdit></FaEdit></button>
            </td>
        </tr>
    );
};

export default TableItem;