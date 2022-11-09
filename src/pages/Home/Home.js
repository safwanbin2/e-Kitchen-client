import React from 'react';
import useTitle from '../../hooks/useTitle';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Services from './Services';
import Steps from './Steps';

const Home = () => {
  useTitle('home')
  return (
    <div className='min-h-screen'>
      <Banner></Banner>
      <Services></Services>
      <AboutUs></AboutUs>
      <Steps></Steps>
    </div>
  );
};

export default Home;