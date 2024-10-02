import React from 'react';
import Header from '../components/Header/Header';
import SalesCosts from '../components/SalesCosts/SalesCosts';
import Shipping from '../components/Shipping/Shipping';
import { IoSearchOutline } from 'react-icons/io5';

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

          <div className='shipping-container'>
            <Shipping />
          </div>

          <div className='filter-container'>
            <section className='filter-items-section'>
              <div className='filter-item-wrapper'>
                <div className='filter-item'>
                  <div className='subfilter-item-wrapper'>
                    <div className='subfilter-item'>
                      <select name='status' id='status'>
                        <option value='0'>Status : All</option>
                        <option value='1'>True</option>
                        <option value='2'>False</option>
                      </select>
                    </div>
                    <div className='subfilter-item'>
                      <div class='group'>
                        <input
                          id='query'
                          class='input'
                          type='search'
                          placeholder='Search...'
                          name='searchbar'
                        />
                        <IoSearchOutline className='search-icon' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='filter-item'>
                  <select name='date-range' id='date-range'>
                    <option value='0'>Filter by date range</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                  </select>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
