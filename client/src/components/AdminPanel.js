import React from 'react';

import AdminCategoryTab from './AdminCategoryTab';
import AdminProductTab from './AdminProductTab';

const AdminPanel = () => {
  // VIEWS
  const showAdminPanel = () => (
    <div className='my-3'>
      <ul className='nav nav-tabs' id='myTab' role='tablist'>
        <li className='nav-item' role='presentation'>
          <button
            className='nav-link active'
            id='home-tab'
            data-bs-toggle='tab'
            data-bs-target='#home'
            type='button'
            role='tab'
            aria-controls='home'
            aria-selected='true'
          >
            Kategorije
          </button>
        </li>
        <li className='nav-item' role='presentation'>
          <button
            className='nav-link'
            id='profile-tab'
            data-bs-toggle='tab'
            data-bs-target='#profile'
            type='button'
            role='tab'
            aria-controls='profile'
            aria-selected='false'
          >
            Proizvodi
          </button>
        </li>
        <li className='nav-item' role='presentation'>
          <button
            className='nav-link'
            id='contact-tab'
            data-bs-toggle='tab'
            data-bs-target='#contact'
            type='button'
            role='tab'
            aria-controls='contact'
            aria-selected='false'
          >
            Narudžbe
          </button>
        </li>
      </ul>
      <div className='tab-content' id='myTabContent'>
        <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
          <AdminCategoryTab />
        </div>
        <div className='tab-pane fade' id='profile' role='tabpanel' aria-labelledby='profile-tab'>
          <AdminProductTab />
        </div>
        <div className='tab-pane fade' id='contact' role='tabpanel' aria-labelledby='contact-tab'>
          ...
        </div>
      </div>
    </div>
  );

  // RENDER
  return <>{showAdminPanel()}</>;
};

export default AdminPanel;
