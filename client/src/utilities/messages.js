import React from 'react';

const showErrorMessage = (message) => (
  <div className='alert alert-danger text-center' role='alert'>
    {message}
  </div>
);

const showSuccessMessage = (message) => (
  <div className='alert alert-success text-center' role='alert'>
    {message}
  </div>
);

export { showErrorMessage, showSuccessMessage };
