import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/logos/logo.png';
// import menu from '../assets/icons/indent-decrease.png';

const Navbar = () => {
  const [activeItem, setActiveitem] = useState('Dashboard');

  const handleMenuItemClick = (item) => {
    setActiveitem(item);
  };

  return (
    <>
      <div className='jobins-logo-section'>
        <div className='jobins-title'>
          {/* <img src={logo} alt='jobins-logo' /> */}
          <h4>JoBins</h4>
        </div>
        <div className='minimize-menu'>
          {/* <img src={menu} alt='inc-dec-menu' /> */}
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
                  {/* <FontAwesomeIcon icon={faEnvelopeOpen} /> */}
                  Dashboard
                </Link>
              </li>

              <li
                className={activeItem === 'Order Management' ? 'active' : ''}
                onClick={() => handleMenuItemClick('Order Management')}
              >
                <Link to='/order-management'>Order Management</Link>
              </li>

              <li
                className={activeItem === 'Brand' ? 'active' : ''}
                onClick={() => handleMenuItemClick('Brand')}
              >
                <Link to='/brand'>Brand</Link>
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
                <Link to='/order-management'>Add Products</Link>
              </li>
              <li
                className={activeItem === 'Product List' ? 'active' : ''}
                onClick={() => handleMenuItemClick('Product List')}
              >
                <Link to='/brand'>Product List</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
