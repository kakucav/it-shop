import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import isEmpty from 'validator/lib/isEmpty';

import { createProduct } from '../redux/actions/productActions';
import { setErrorMessage, clearMessages } from '../redux/actions/messageActions';
import { showErrorMessage, showSuccessMessage } from '../utilities/messages';
import showLoading from '../utilities/loading';

const AdminProductModal = () => {
  const { categories } = useSelector((state) => state.categories);
  const { successMessage, errorMessage } = useSelector((state) => state.messages);
  const { loading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: '',
    description: '',
    image: null,
    category: '',
    price: '',
    quantity: '',
  });

  const { name, description, image, category, price, quantity } = product;

  // EVENT HANDLERS
  const handleModalClick = () => {
    dispatch(clearMessages());
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    dispatch(clearMessages());
  };

  const handleProductImageChange = (e) => {
    const { name } = e.target;
    setProduct({ ...product, [name]: e.target.files[0] });
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();

    if (
      isEmpty(name) ||
      image === null ||
      isEmpty(description) ||
      isEmpty(category) ||
      isEmpty(quantity) ||
      isEmpty(price)
    ) {
      dispatch(setErrorMessage('Sva polja moraju biti popunjena!'));
    } else {
      dispatch(clearMessages());

      const formData = new FormData();
      formData.append('name', name);
      formData.append('image', image);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('price', price);
      formData.append('quantity', quantity);

      dispatch(createProduct(formData));

      setProduct({ name: '', description: '', image: null, category: '', price: '', quantity: '' });
    }
  };

  // VIEWS
  const showProductModal = () => (
    <div
      className='modal fade'
      id='addProductModal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div className='modal-content' onClick={handleModalClick}>
          <form onSubmit={handleProductSubmit} autoComplete='off'>
            <div className='modal-header bg-dark text-white'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Kreiranje novog proizvoda
              </h5>
            </div>
            <div className='modal-body'>
              {errorMessage && showErrorMessage(errorMessage)}
              {successMessage && showSuccessMessage(successMessage)}
              {loading && showLoading()}
              <label className='mb-2'>Naziv</label>
              <input
                type='text'
                name='name'
                className='form-control mb-2'
                value={name}
                onChange={handleProductChange}
              />
              <label className='mb-2'>Opis</label>
              <textarea
                type='text'
                rows='3'
                name='description'
                className='form-control mb-2'
                value={description}
                onChange={handleProductChange}
              />
              <div className='row'>
                <div className='col'>
                  <label className='mb-2'>Fotografija</label>
                  <input
                    type='file'
                    accept='image/*'
                    name='image'
                    className='form-control mb-2'
                    onChange={handleProductImageChange}
                  />
                </div>
                <div className='col'>
                  <label className='mb-2'>Kategorija</label>
                  <select
                    name='category'
                    className='form-select mb-2'
                    value={category}
                    aria-label='Default select example'
                    onChange={handleProductChange}
                  >
                    <option value=''>Izaberi kategoriju</option>
                    {categories &&
                      categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                          {cat.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <label className='mb-2'>Cijena</label>
                  <div className='input-group mb-2'>
                    <span className='input-group-text'>KM</span>
                    <input
                      type='number'
                      min='0'
                      max='5000'
                      name='price'
                      className='form-control '
                      value={price}
                      onChange={handleProductChange}
                    />
                  </div>
                </div>
                <div className='col'>
                  <label className='mb-2'>Količina</label>
                  <input
                    type='number'
                    min='0'
                    max='1000'
                    name='quantity'
                    className='form-control mb-2'
                    value={quantity}
                    onChange={handleProductChange}
                  />
                </div>
              </div>
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
  return <>{showProductModal()}</>;
};

export default AdminProductModal;
