import React from 'react';
import './SalesCosts.scss';
import { HiArrowSmallUp } from 'react-icons/hi2';
import { RiArrowUpSLine } from 'react-icons/ri';

const SalesCosts = () => {
  return (
    <>
      <section className='sales-costs-section'>
        <div className='sales-costs-wrapper'>
          <div className='total-sales-costs-block'>
            <div className='inner'>
              <div className='sales-wrapper'>
                <div className='sales-img'>
                  <img src='/assets/salescosts/bar.png' alt='' />
                </div>
                <div className='sales-info'>
                  <div className='title'>
                    <h6>Total Sales & Costs</h6>
                    <p>Last 7 days</p>
                  </div>
                  <div className='price'>
                    <h3>$350K</h3>
                    <p>
                      <span>
                        <HiArrowSmallUp />
                        8.56K
                      </span>
                      vs last 7 days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='total-profit-block'>
            <div className='inner'>
              <div className='total-profit-title'>
                <div className='profit-logo'>
                  <img src='/assets/salescosts/yen.png' alt='' />
                </div>
                <div className='profit-title'>
                  <h6>Total Profit</h6>
                  <p>Last 7 days</p>
                </div>
              </div>

              <div className='profit-amount'>
                <h3>50K</h3>
                <p>
                  <span>
                    <HiArrowSmallUp />
                    12%
                  </span>
                  vs last 7 days
                </p>
              </div>
            </div>
          </div>

          <div className='progress-percentage-block'>
            <div className='inner'>
              <div className='country-progress-wrapper'>
                <div className='country-item'>
                  <div className='country-img'>
                    <img src='/assets/salescosts/usa.png' alt='' />
                  </div>
                  <div className='country-name'>
                    <h6>30k</h6>
                    <p>United States</p>
                  </div>
                  <div className='progress-bar'>
                    <progress id='file' value='50' max='100'></progress>
                  </div>
                  <div className='inc-dec'>
                    <p>
                      <RiArrowUpSLine size={25} />
                      25.8%
                    </p>
                  </div>
                </div>

                <div className='country-item'>
                  <div className='country-img'>
                    <img src='/assets/salescosts/brazil.png' alt='' />
                  </div>
                  <div className='country-name'>
                    <h6>26k</h6>
                    <p>Brazil</p>
                  </div>
                  <div className='progress-bar'>
                    <progress id='file' value='35' max='100'></progress>
                  </div>
                  <div className='inc-dec'>
                    <p>
                      <RiArrowUpSLine size={25} />
                      16.2
                    </p>
                  </div>
                </div>

                <div className='country-item'>
                  <div className='country-img'>
                    <img src='/assets/salescosts/australia.png' alt='' />
                  </div>
                  <div className='country-name'>
                    <h6>17k</h6>
                    <p>Australia</p>
                  </div>
                  <div className='progress-bar'>
                    <progress id='file' value='10' max='100'></progress>
                  </div>
                  <div className='inc-dec'>
                    <p>
                      <RiArrowUpSLine size={25} />
                      11.9%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SalesCosts;
