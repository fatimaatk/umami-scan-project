import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useState } from 'react';
import './myFavorites.css';

const MyFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const localFavorites = localStorage.getItem('favorites');
    return localFavorites ? JSON.parse(localFavorites) : [];
  });

  const addFavorites = (id) => {
    const newFavorites = favorites.filter((favorite) => favorite._id != id);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const isInFavorites = true;

  return (
    <section className="Umami MyFavorites">
      <h1>Mes favoris</h1>
      <div className="MyFavorites-list">
        {favorites.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            productName={product.product_name}
            image={product.image_front_small_url}
            nutriscoreGrade={product.nutriscore_grade}
            addFavorites={addFavorites}
            isInFavorites={isInFavorites}
          />
        ))}
      </div>
    </section>
  );
};

export default MyFavorites;
