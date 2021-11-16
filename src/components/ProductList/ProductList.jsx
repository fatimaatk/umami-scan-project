import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import Average from '../Average/Average';
import './productList.css';

function ProductList({ products, handleDelete, addFavorites }) {
  return (
    <div className="ProductList">
      {products == '' ? (
        <div>
          <h3>Cher Umamiste,</h3>
          <p>
            bienvenue sur notre application. Votre Umami étant vide pour le
            moment, n’hésitez pas à scanner des produits ou taper votre code
            barre pour incrémenter votre panier.
          </p>
        </div>
      ) : null}

      {products.map((product) => (
        <>
          <ProductCard
            key={product._id}
            id={product._id}
            productName={product.product_name}
            image={product.image_front_small_url}
            nutriscoreGrade={product.nutriscore_grade}
            handleDelete={handleDelete}
            addFavorites={addFavorites}
          />
          <Average nutriscoreGrade={product.nutriscore_grade} />
        </>
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
