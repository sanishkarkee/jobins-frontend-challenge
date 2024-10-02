import React, { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import { FiBox } from 'react-icons/fi';
import { IoIosStarOutline, IoMdAddCircleOutline } from 'react-icons/io';
import { RiMenuFoldLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './Navbar.scss';

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
          <RiMenuFoldLine size={20} color='#8b909a' />
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
                  <FaRegEnvelopeOpen size={16} /> <span>Dashboard</span>
                </Link>
              </li>

              <li
                className={activeItem === 'Order Management' ? 'active' : ''}
                onClick={() => handleMenuItemClick('Order Management')}
              >
                <Link to='/order-management'>
                  <BsCart3 size={18} />
                  <span>Order Management</span>
                </Link>
              </li>

              <li
                className={activeItem === 'Brand' ? 'active' : ''}
                onClick={() => handleMenuItemClick('Brand')}
              >
                <Link to='/brand'>
                  <IoIosStarOutline size={20} />
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
                <Link to='/add-products'>
                  <IoMdAddCircleOutline size={20} />
                  <span>Add Products</span>
                </Link>
              </li>
              <li
                className={activeItem === 'Product List' ? 'active' : ''}
                onClick={() => handleMenuItemClick('Product List')}
              >
                <Link to='/product-list'>
                  <FiBox size={18} />
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
