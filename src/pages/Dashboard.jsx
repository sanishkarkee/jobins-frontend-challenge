import React from 'react';
import Header from '../components/Header/Header';
import SalesCosts from '../components/SalesCosts/SalesCosts';

const Dashboard = () => {
  return (
    <>
      <section className='dashboard-section'>
        <div className='inner'>
          <div className='header-container'>
            <Header />
          </div>

          <div className='sales-costs-container'>
            <SalesCosts />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
