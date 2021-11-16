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
  addFavorites,
  isInFavorites,
}) {
  const divStyle = {
    backgroundImage: 'url(' + image + ')',
  };

  const [isFavorite, setIsFavorite] = React.useState();

  React.useEffect(() => {
    const localFavorites = localStorage.getItem('favorites');
    localFavorites
      ? JSON.parse(localFavorites)
      : localStorage.setItem('favorites', []);
    if (localFavorites != undefined)
      localFavorites.includes(id) && setIsFavorite(true);
  }, []);

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
              addFavorites(id, isFavorite);
            }}
            onKeyDown={() => {
              handleFavorite();
              addFavorites(id, isFavorite);
            }}
            role="button"
            tabIndex={0}
          >
            <FaHeart />
          </div>
          {!isInFavorites ? (
            <div
              className="delete"
              onClick={() => handleDelete(id)}
              onKeyDown={() => handleDelete(id)}
              role="button"
              tabIndex={0}
            >
              <FaRegTimesCircle />
            </div>
          ) : null}
        </div>
        <h2>{productName}</h2>
        <p>
          Nutriscore :{' '}
          <span className={`nustriscore ${nutriscoreGrade}`}>
            {nutriscoreGrade ? nutriscoreGrade : 'NC'}
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
