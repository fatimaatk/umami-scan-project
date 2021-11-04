import './product.css';
import React, { useState } from 'react';
import ProductList from '../ProductList/ProductList';

const data = '3428273980046';
// eslint-disable-next-line no-unused-vars

const userAction = async (setImage, setProduct) => {
  // je vais récuperer un objet via Api
  fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
    // 1e promesse : si j'ai un résultat alors affiche le moi sous forme de .json (propre à fetch)
    .then((res) => res.json())
    // 2e promesse : lorsque tu m'as converti le resultat en json, alors :
    .then((datas) => {
      // prend dans datas uniquement l'image et assigne le à setImage
      setImage([datas.product.image_front_small_url]);
      // prend dans datas uniquement la marque et assigne le à setProduct
      setProduct([datas.product.brands]);
    });
};

const Product = () => {
  const [product, setProduct] = useState();
  const [image, setImage] = useState();

  console.log(product, image);
  // si je n'ai pas de produit alors affiche moi "..."
  // if (product.length === 0) {
  // return "Your empty component"
  // }
  // sinon retourne :
  return (
    <div className="Products">
      <ProductList title={product} image={image} />
      <button
        label="text"
        type="button"
        onClick={() => userAction(setImage, setProduct)}
      >
        Add
      </button>
    </div>
  );
};
export default Product;

