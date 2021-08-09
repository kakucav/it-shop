import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const showNavigation = () => (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand mx-3' to='#'>
          <img
            src='./logo.svg'
            alt='logo'
            style={{ width: '40px', height: '40px' }}
          />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link mx-3' aria-current='page' to='/'>
                Početna
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link mx-3'
                aria-current='page'
                to='/register'
              >
                Registracija
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link mx-3' aria-current='page' to='/login'>
                Prijava
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  return <header>{showNavigation()}</header>;
};

export default Header;
