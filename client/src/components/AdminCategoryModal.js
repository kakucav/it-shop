import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import isEmpty from 'validator/lib/isEmpty';

import { createCategory } from '../redux/actions/categoryActions';
import { setErrorMessage, clearMessages } from '../redux/actions/messageActions';
import { showErrorMessage, showSuccessMessage } from '../utilities/messages';
import showLoading from '../utilities/loading';

const AdminCategoryModal = () => {
  const { successMessage, errorMessage } = useSelector((state) => state.messages);
  const { loading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  // EVENT-HANDLERS
  const handleNameChange = (e) => {
    setName(e.target.value);
    dispatch(clearMessages());
  };

  const handleCategorySubmit = (e) => {
    e.preventDefault();

    if (isEmpty(name)) {
      dispatch(setErrorMessage('Unesite naziv kategorije!'));
    } else {
      const data = { name };
      dispatch(createCategory(data));
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
              <input type='text' className='form-control mb-2' value={name} onChange={handleNameChange} />
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
