import React from 'react';

const showLoadingButton = () => (
  <button className='btn btn-primary w-100' type='button' disabled>
    <span className='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>
    <span className='visually-hidden'>Loading...</span>
  </button>
);

export { showLoadingButton };
