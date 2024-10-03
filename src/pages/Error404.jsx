import React from 'react';
import Header from '../components/Header/Header';

const Error404 = () => {
  return (
    <>
      <div className='error-message-content'>
        <div className='inner'>
          <div className='error-header'>
            <Header />
          </div>
          <div className='error-img'>
            <img src='/assets/error/error.png' alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
