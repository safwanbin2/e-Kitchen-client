import React from 'react';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div className='min-h-screen'>
          <Banner></Banner>
          <Services></Services>
        </div>
    );
};

export default Home;