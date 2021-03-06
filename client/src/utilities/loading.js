import React from 'react';

const showLoading = () => (
  <div className='d-flex justify-content-center my-auto'>
    <div className='spinner-border' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </div>
  </div>
);

export default showLoading;
