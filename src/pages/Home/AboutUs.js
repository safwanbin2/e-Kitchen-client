import React from 'react';
import banner from '../../assets/banner.jpg';

const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={banner} alt='' className="w-6/12 h-96 rounded-lg shadow-2xl" />
                <div className='w-6/12'>
                    <h1 className="text-3xl font-bold">About Us</h1>
                    <p className="py-6">We serve food to the whole city by running cloud kitchen, we privde service inside chittagong city. Let us know if you are hungry</p>
                    <p className="py-6">We serve food to the whole city by running cloud kitchen, we privde service inside chittagong city. Let us know if you are hungry</p>
                    <button className="btn btn-disabled">Take a tour</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;