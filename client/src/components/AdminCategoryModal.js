import React, { useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';

import { createCategory } from '../api/category';
import { showErrorMessage, showSuccessMessage } from '../utilities/messages';
import showLoading from '../utilities/loading';

const AdminCategoryModal = () => {
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // EVENT-HANDLERS
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
  const showCategoryModal = () => (
    <div
      className='modal fade'
      id='addCategoryModal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div className='modal-content'>
          <form onSubmit={handleCategorySubmit} autoComplete='off'>
            <div className='modal-header bg-dark text-white'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Kreiranje nove kategorije
              </h5>
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
  return <>{showCategoryModal()}</>;
};

export default AdminCategoryModal;
