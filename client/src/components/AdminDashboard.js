import React, { useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';

import { createCategory } from '../api/category';
import { showErrorMessage, showSuccessMessage } from '../utilities/messages';
import showLoading from '../utilities/loading';

const AdminDashboard = () => {
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // EVENT-HANDLERS
  const handleModalClose = () => {
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleCategorySubmit = (e) => {
    e.preventDefault();

    if (isEmpty(category)) {
      setErrorMessage('Unesite naziv kategorije!');
    } else {
      setLoading(true);
      setErrorMessage('');
      setSuccessMessage('');
      const data = { name: category };

      createCategory(data)
        .then((response) => {
          setLoading(false);
          setCategory('');
          setSuccessMessage(response.data.successMessage);
        })
        .catch((error) => {
          setLoading(false);
          setErrorMessage(error.response.data.errorMessage);
        });
    }
  };

  // VIEWS
  const showAdminDashboard = () => (
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
          {showCategoryTab()}
        </div>
        <div className='tab-pane fade' id='profile' role='tabpanel' aria-labelledby='profile-tab'>
          ...
        </div>
        <div className='tab-pane fade' id='contact' role='tabpanel' aria-labelledby='contact-tab'>
          ...
        </div>
      </div>
    </div>
  );

  const showCategoryTab = () => (
    <>
      <button
        type='button'
        className='btn btn-primary mx-3 my-3 '
        data-bs-toggle='modal'
        data-bs-target='#addCategoryModal'
      >
        <i className='fas fa-plus fw'></i> Dodaj kategoriju
      </button>

      {showCategoryModal()}
    </>
  );

  const showCategoryModal = () => (
    <div
      className='modal fade'
      id='addCategoryModal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
      onClick={handleModalClose}
    >
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div className='modal-content'>
          <form onSubmit={handleCategorySubmit}>
            <div className='modal-header bg-dark text-white'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Kreiranje nove kategorije
              </h5>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              {errorMessage && showErrorMessage(errorMessage)}
              {successMessage && showSuccessMessage(successMessage)}
              {loading && showLoading()}
              <label className='mb-2'>Naziv</label>
              <input type='text' className='form-control mb-2' value={category} onChange={handleCategoryChange} />
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-bs-dismiss='modal' disabled={loading}>
                Zatvori
              </button>
              <button type='submit' className='btn btn-primary' disabled={loading}>
                Kreiraj
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  // RENDER
  return <div>{showAdminDashboard()}</div>;
};

export default AdminDashboard;
