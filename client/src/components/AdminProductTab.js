import React from 'react';
import { useSelector } from 'react-redux';

import AdminProductModal from './AdminProductModal';

const AdminProductTab = () => {
  const { products } = useSelector((state) => state.products);

  // VIEWS
  const showProductTab = () => (
    <>
      <button
        type='button'
        className='btn btn-primary mx-3 my-3 '
        data-bs-toggle='modal'
        data-bs-target='#addProductModal'
      >
        <i className='fas fa-plus fw'></i> Dodaj proizvod
      </button>

      {products.map((product) => (
        <p key={product._id}>
          {product._id} {product.name} {product.category.name} {product.price}
        </p>
      ))}

      <AdminProductModal />
    </>
  );

  // RENDER
  return <>{showProductTab()}</>;
};

export default AdminProductTab;
