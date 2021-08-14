import React from 'react';

const ProductCard = ({ product }) => {
  const { name, image, price } = product;

  // RENDER
  return (
    <div className='col'>
      <div className='card'>
        <img className='card-img-top' src={`/uploads/${image}`} alt={name} style={{ height: '13rem' }} />
        <div className='card-body text-center'>
          <h5>{name}</h5>
          <hr />
          <h6>{`Cijena: ${price} KM`}</h6>
          <button className='btn btn-danger'>
            <i className='far fa-heart fw'></i>
          </button>
          <hr />
          <button className='btn btn-secondary mx-2'>Detalji</button>
          <button className='btn btn-primary mx-2'>
            <i className='fas fa-shopping-cart'></i> Dodaj u korpu
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
