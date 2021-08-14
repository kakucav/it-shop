import React from 'react';
import { useSelector } from 'react-redux';

import showLoading from '../utilities/loading';
import { showErrorMessage } from '../utilities/messages';
import ProductCard from './ProductCard';

const Home = () => {
  const { products } = useSelector((state) => state.products);
  const { loading } = useSelector((state) => state.loading);
  const { errorMessage } = useSelector((state) => state.messages);

  // RENDER
  return (
    <>
      {loading ? (
        showLoading()
      ) : errorMessage ? (
        showErrorMessage(errorMessage)
      ) : (
        <div className='container my-4'>
          <div className='row row-cols-1 row-cols-md-4 g-4'>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
