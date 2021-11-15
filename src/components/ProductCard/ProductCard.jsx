import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaHeart, FaRegTimesCircle } from 'react-icons/fa';
import './productCard.css';

function ProductCard({
  productName,
  image,
  nutriscoreGrade,
  id,
  handleDelete,
  handleFavorites,
}) {
  const divStyle = {
    backgroundImage: 'url(' + image + ')',
  };
  const [isFavorite, setIsFavorite] = React.useState(false);
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="ProductCard" style={divStyle}>
      <div className="ProductCard-container">
        <div className="ProductCard-edit">
          <div
            id="favorite"
            className={isFavorite ? 'isFavorite' : 'notFavorite'}
            onClick={() => {
              handleFavorite();
              handleFavorites(id, isFavorite);
            }}
            onKeyDown={() => {
              handleFavorite();
              handleFavorites(id, isFavorite);
            }}
            role="button"
            tabIndex={0}
          >
            <FaHeart />
          </div>
          <div
            className="delete"
            onClick={() => handleDelete(id)}
            onKeyDown={() => handleDelete(id)}
            role="button"
            tabIndex={0}
          >
            <FaRegTimesCircle />
          </div>
        </div>
        <h2>{productName}</h2>
        <p>
          Nutriscore :{' '}
          <span className={`nustriscore ${nutriscoreGrade}`}>
            {nutriscoreGrade ? nutriscoreGrade : 'X'}
          </span>
        </p>
        <div className="details">
          <Link to={`/product/${id}`}>View product details</Link>
        </div>
      </div>
    </div>
  );
}
ProductCard.propTypes = {
  id: PropTypes.string,
  productName: PropTypes.string,
  image: PropTypes.string,
  nutriscoreGrade: PropTypes.string,
};

export default ProductCard;
