import React, { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import { FiBox, FiStar } from 'react-icons/fi';
import { IoIosStarOutline, IoMdAddCircleOutline } from 'react-icons/io';
import { RiMenuFoldLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { VscMailRead } from 'react-icons/vsc';

const Navbar = () => {
  const [activeItem, setActiveitem] = useState('Dashboard');

  const handleMenuItemClick = (item) => {
    setActiveitem(item);
  };

  return (
    <>
      <div className='jobins-logo-section'>
        <div className='jobins-title'>
          <img src='/assets/logo/logo.png' alt='jobins-logo' />

          <h4>JoBins</h4>
        </div>
        <div className='minimize-menu'>
          <RiMenuFoldLine color='#8b909a' />
        </div>
      </div>

      <div className='navbar-section'>
        <nav className='navbar'>
          <div className='main-menu-section'>
            <div className='section-title'>
              <p>MAIN MENU</p>
            </div>

            <ul>
              <li
                className={activeItem === 'Dashboard' ? 'active' : ''}
                onClick={() => handleMenuItemClick('Dashboard')}
              >
                <Link to='/'>
                  <VscMailRead />
                  <span>Dashboard</span>
                </Link>
              </li>

              <li
                className={activeItem === 'Order Management' ? 'active' : ''}
                onClick={() => handleMenuItemClick('Order Management')}
              >
                <Link to='/Order-Management'>
                  <BsCart3 />
                  <span>Order Management</span>
                </Link>
              </li>

              <li
                className={activeItem === 'Brand' ? 'active' : ''}
                onClick={() => handleMenuItemClick('Brand')}
              >
                <Link to='/Brand'>
                  <FiStar />
                  <span>Brand</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className='product-section'>
            <div className='section-title'>
              <p>PRODUCTS</p>
            </div>

            <ul>
              <li
                className={activeItem === 'Add Products' ? 'active' : ''}
                onClick={() => handleMenuItemClick('Add Products')}
              >
                <Link to='/Add-Products'>
                  <IoMdAddCircleOutline />
                  <span>Add Products</span>
                </Link>
              </li>
              <li
                className={activeItem === 'Product List' ? 'active' : ''}
                onClick={() => handleMenuItemClick('Product List')}
              >
                <Link to='/Product-List'>
                  <FiBox />
                  <span>Product List</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
