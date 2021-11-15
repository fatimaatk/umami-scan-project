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
    // if (!isFavorite) {
    //   const newFavorite = favorites.find((product) => product._id === id);
    //   if (favorites != []) {
    //     setFavorites([...favorites, newFavorite]);
    //     localStorage.setItem(
    //       'favorites',
    //       JSON.stringify([...favorites, newFavorite])
    //     );
    //   }
    // } else {
    const newFavorites = favorites.filter((favorite) => favorite._id != id);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    // }
  };

  return (
    <div>
      <h1>Mes favoris</h1>
      <div className="favoritesproducts">
        {favorites.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            productName={product.product_name}
            image={product.image_front_small_url}
            nutriscoreGrade={product.nutriscore_grade}
            addFavorites={addFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default MyFavorites;
