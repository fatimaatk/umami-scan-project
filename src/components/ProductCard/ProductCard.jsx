import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductCard({
  productName,
  image,
  brand,
  ingredients,
  data,
  additives,
  salt,
  saturatedFat,
  sugars,
  environnement,
  nutriscoreGrade,
  fat,
}) {
  return (
    <div className="ProductCard">
      <h1>{productName}</h1>
      <h2>{brand}</h2>
      <ul>
        <button className="details">
          <Link to={`/product/${data}`}>Redirection test</Link>
        </button>
        <img src={image} />
      </ul>
      <p>{ingredients} </p>
      <p>Valeurs nutritionnelles</p>
      <ul>
        <li>Additif : {additives ? additives : "Non renseigné"}</li>
        <li>Matière grasse : {fat ? fat : 'Non renseignée'}</li>
        <li>Teneur en sel : {salt ? salt : 'Non renseignée'}</li>
        <li>Graisses saturées : {saturatedFat ? saturatedFat : 'Non renseignée'}</li>
        <li>Teneur en sucre : {sugars ? sugars : 'Non renseignée'}</li>
        <li>Indice environnement : {environnement == undefined ? environnement : 'Non renseigné'}</li>
        <li>Nutriscore grade : {nutriscoreGrade ? nutriscoreGrade : 'Non renseigné'}</li>
      </ul>
    </div>
  );
}
ProductCard.propTypes = {
  productName: PropTypes.string,
  image: PropTypes.string,
  brand: PropTypes.string,
  ingredients: PropTypes.string,
  additives: PropTypes.string,
  saturatedFat: PropTypes.string,
  salt: PropTypes.string,
  sugars: PropTypes.string,
  environnement: PropTypes.string,
  nutriscoreGrade: PropTypes.string,
  fat: PropTypes.string,
  data: PropTypes.string,
};

export default ProductCard;
