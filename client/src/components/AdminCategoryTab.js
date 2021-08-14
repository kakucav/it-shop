import React from 'react';

import AdminCategoryModal from './AdminCategoryModal';

const AdminCategoryTab = () => {
  // VIEWS
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

      <AdminCategoryModal />
    </>
  );

  // RENDER
  return <>{showCategoryTab()}</>;
};

export default AdminCategoryTab;
