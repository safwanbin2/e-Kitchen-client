import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services?limit=${3}`)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err))
    }, [])
    console.log(services)
    return (
        <div className='my-8 w-11/12 mx-auto'>
            <h3 className='text-center font-semibold text-3xl'>Foods I deliver</h3>
            <div className='grid md:grid-cols-3 gap-4 my-8'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center'>
                <Link to='/services-all' className='btn'>See All</Link>
            </div>
        </div>
    );
};

export default Services;