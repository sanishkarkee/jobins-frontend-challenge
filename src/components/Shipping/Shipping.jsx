import React from 'react';
import './Shipping.scss';

const Shipping = () => {
  return (
    <>
      <section className='shipping-info-section'>
        <div className='shipping-inner'>
          <div className='shipping-info-block'>
            <div className='info-content-wrapper'>
              <div className='info-content-item'>
                <div className='user-img'>
                  <img src='/assets/profile/user.png' alt='' />
                </div>
                <div className='user-details'>
                  <h6>Robert Fox</h6>
                  <p>robert@gmail.com</p>
                </div>
              </div>

              <div className='info-content-item'>
                <div className='info-title'>
                  <p>PERSONAL INFORMATION</p>
                </div>

                <div className='info-details'>
                  <div className='info-details-content'>
                    <p>Contact Number</p>
                    <p> (201) 555-0124</p>
                  </div>
                  <div className='info-details-content'>
                    <p>Date of Birth</p>
                    <p>1 Jan, 1985</p>
                  </div>
                  <div className='info-details-content'>
                    <p>Member Since</p>
                    <p>3 March, 2023</p>
                  </div>
                </div>
              </div>

              <div className='info-content-item'>
                <div className='shipping-title'>
                  <p>SHIPPING ADDRESS</p>
                  <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
                </div>

                <div className='total-order-wrapper'>
                  <div className='order-item'>
                    <h4>150</h4>
                    <p>Total Order</p>
                  </div>

                  <div className='order-item'>
                    <h4>140</h4>
                    <p>Completed</p>
                  </div>

                  <div className='order-item'>
                    <h4>10</h4>
                    <p>Canceled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='nav-tabs-block'>
            <div className='nav-tabs-block-wrapper'>
              <div className='nav-tabs-block-item'>
                <p>All Orders</p>
              </div>
              <div className='nav-tabs-block-item'>
                <p>Completed</p>
              </div>
              <div className='nav-tabs-block-item'>
                <p>Canceled</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shipping;
