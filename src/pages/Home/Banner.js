import React from 'react';
import banner from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})`, backgroundAttachment: 'fixed' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">eKitchen</h1>
                    <p className="mb-5">The only cloud kitchen that will deliverying food 24/7, grab your favorite dishes.if you are confused about what to chose , take a look at the reviews and clear the confusions</p>
                    <button disabled className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;