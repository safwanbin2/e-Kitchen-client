import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    const services = useLoaderData();
    useTitle('All foods')
    return (
        <div className='my-8 w-11/12 mx-auto'>
            <h3 className='text-center font-semibold text-3xl'>Grab your favorite food</h3>
            <div className='grid md:grid-cols-3 gap-4 my-8'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;