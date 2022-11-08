import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from './Reviews';
import SingleDetail from './SingleDetail';

const Details = () => {
    const service = useLoaderData();
    return (
        <div>
            <SingleDetail service={service}></SingleDetail>
            <Reviews service={service}></Reviews>
        </div>
    );
};

export default Details;