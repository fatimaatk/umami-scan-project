import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import './productList.css';

function ProductList({ products, handleDelete, handleFavorite }) {
  return (
    <div className="ProductList">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          id={product._id}
          productName={product.product_name}
          image={product.image_front_small_url}
          nutriscoreGrade={product.nutriscore_grade}
          handleDelete={handleDelete}
          handleFavorite={handleFavorite}
        />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array,
  id: PropTypes.string,
  productName: PropTypes.string,
  image: PropTypes.string,
  nutriscoreGrade: PropTypes.string,
};

export default ProductList;
