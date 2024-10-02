import React from 'react';
import './Header.scss';
import { GoBell } from 'react-icons/go';

const Header = () => {
  return (
    <>
      <div className='header-section'>
        <div className='header-content-wrapper'>
          <div className='header-title'>
            <h4>Dashboard</h4>
          </div>

          <div className='profile-details'>
            <div className='notification-info'>
              <GoBell size={25} />
            </div>
            <div className='profile-info'>
              <img src='/assets/profile/Avatar.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
