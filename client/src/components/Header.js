import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { isAuthenticated, logout } from '../utilities/auth';

const Header = ({ history }) => {
  // EVENT HANDLERS
  const handleLogout = () => {
    logout(() => {
      history.push('/login');
    });
  };

  // VIEWS
  const showNavigation = () => (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand mx-2' to='#'>
          <img src='/logo.svg' alt='logo' style={{ width: '40px', height: '40px' }} />
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
            {!isAuthenticated() && (
              <>
                <li className='nav-item'>
                  <Link className='nav-link mx-2' to='/'>
                    <i className='fas fa-home fw'></i> Početna
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link mx-2' to='/register'>
                    <i className='fas fa-pen fw'></i> Registracija
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link mx-2' to='/login'>
                    <i className='fas fa-sign-in-alt fw'></i> Prijava
                  </Link>
                </li>
              </>
            )}
            {isAuthenticated() && isAuthenticated().role === 0 && (
              <>
                <li className='nav-item'>
                  <Link className='nav-link mx-2' to='/user/dashboard'>
                    <i className='fas fa-home fw'></i> Dashboard
                  </Link>
                </li>
              </>
            )}
            {isAuthenticated() && isAuthenticated().role === 1 && (
              <>
                <li className='nav-item'>
                  <Link className='nav-link mx-2' to='/admin/dashboard'>
                    <i className='fas fa-home fw'></i> Dashboard
                  </Link>
                </li>
              </>
            )}
            {isAuthenticated() && (
              <>
                <li className='nav-item'>
                  <button className='btn btn-link text-secondary text-decoration-none px-0 mx-2' onClick={handleLogout}>
                    <i className='fas fa-sign-out-alt fw'></i> Odjavi se
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );

  // RENDER
  return <header>{showNavigation()}</header>;
};

export default withRouter(Header);
