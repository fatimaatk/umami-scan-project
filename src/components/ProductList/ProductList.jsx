import React from 'react';
import PropTypes from 'prop-types';

function ProductList({ title, image }) {
  return (
    <div className="ProductList">
      <h1>{title}</h1>
      <ul>
        <img src={image} />
      </ul>
    </div>
  );
}
ProductList.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default ProductList;
