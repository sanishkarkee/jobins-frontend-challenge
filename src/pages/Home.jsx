import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AppRoutes from '../Routes/AppRoutes';

const Home = () => {
  return (
    <>
      <section className='main-container'>
        <div className='main-content-wrapper'>
          <div className='left-content-section'>
            <Navbar />
          </div>

          <div className='right-content-section'>
            <AppRoutes />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
