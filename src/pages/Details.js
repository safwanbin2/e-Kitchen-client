import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const service = useLoaderData();
    console.log(service)
    return (
        <div>
            ths is service detailss
        </div>
    );
};

export default Details;