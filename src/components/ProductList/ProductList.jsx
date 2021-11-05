import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';

function ProductList({ products, data }) {
  console.log(products);
  return (
    <div className="ProductList">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          productName={product.product_name}
          brand={product.brands}
          ingredients={product.ingredients_text}
          additives={product.additives_n}
          saturatedFat={product.nutrient_levels['saturated-fat']}
          salt={product.nutrient_levels.salt}
          sugars={product.nutrient_levels.sugars}
          image={product.image_front_small_url}
          environnement={product.ecoscore_data.agribalyse.score}
          nutriscoreGrade={product.nutriscore_grade}
          fat={product.nutrient_levels.fat}
          data={data}
        />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array,
  name: PropTypes.string,
  brand: PropTypes.string,
  ingredients: PropTypes.string,
  additives: PropTypes.string,
  saturatedFat: PropTypes.string,
  salt: PropTypes.string,
  sugars: PropTypes.string,
  image: PropTypes.string,
  environnement: PropTypes.string,
  nutriscoreGrade: PropTypes.string,
  fat: PropTypes.string,
  data: PropTypes.string,
};

export default ProductList;
