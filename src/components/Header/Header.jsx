import React from 'react';
import './Header.scss';
import { GoBell } from 'react-icons/go';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const currentPath =
    location.pathname === '/'
      ? 'Dashboard'
      : location.pathname.replace('/', '');
  return (
    <>
      <div className='header-section'>
        <div className='header-content-wrapper'>
          <div className='header-title'>
            <h4>{currentPath}</h4>
          </div>

          <div className='profile-details'>
            <div className='notification-info'>
              <GoBell />
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
