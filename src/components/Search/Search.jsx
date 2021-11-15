/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import './search.css';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import ProductList from '../ProductList/ProductList';
import LogoIconPhoto from '../../assets/icone_appareil_photo.svg';
const Search = () => {
  const [products, setProducts] = useState(() => {
    const localProducts = localStorage.getItem('products');
    return localProducts ? JSON.parse(localProducts) : [];
  });
  const [scan, setScan] = useState(false);
  const [data, setData] = useState('');
  const [favorites, setFavorites] = useState(() => {
    const localFavorites = localStorage.getItem('favorites');
    return localFavorites ? JSON.parse(localFavorites) : [];
  });
  const handleSearchValue = (e) => {
    //setData([...data, e.result.text]);
    window.navigator.vibrate(100);
    setData(e.target.value);
  };

  const handleFavorites = (id, isFavorite) => {
    if (!isFavorite) {
      const newFavorite = products.find((product) => product._id === id);
      if (favorites != []) {
        setFavorites([...favorites, newFavorite]);
        localStorage.setItem(
          'favorites',
          JSON.stringify([...favorites, newFavorite])
        );
      }
    } else {
      const newFavorites = favorites.filter((favorite) => favorite._id != id);
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  };

  const handleDelete = (id) => {
    const del = window.confirm('Are you sure?');
    if (del) {
      const newProductList = products.filter((product) => product._id !== id);
      setProducts(newProductList);
      localStorage.setItem('products', JSON.stringify(newProductList));
    }
  };

  //3428273980046
  const userAction = async () => {
    if (data !== '') {
      // je vais récuperer un objet via Api
      fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
        // 1e promesse : si j'ai un résultat alors affiche le moi sous forme de .json (propre à fetch)
        .then((res) => res.json())
        // 2e promesse : lorsque tu m'as converti le resultat en json, alors :
        .then((datas) => {
          // prend dans datas uniquement la marque et assigne le à setProduct
          const productAlreadyThere = products.find((e) => e._id === data);
          if (!productAlreadyThere) {
            setProducts([...products, datas.product]);
            localStorage.setItem(
              'products',
              JSON.stringify([...products, datas.product])
            );
          } else alert('Product already added');
        });
      //.catch(() => console.log('Error'));
    } else alert('Insert a barre code');
  };

  return (
    <div className="mainSearch">
      <div className="searchtext">
        <p className="textSearch">What do you want to add to your Umami ?</p>

        {scan && (
          <BarcodeScannerComponent
            width={400}
            height={200}
            className="visio"
            onUpdate={(err, result) => {
              if (result) {
                setData(result.text);
                setScan(false);
              }
            }}
          />
        )}
        <div className="search">
          <div className="scandiv">
            <input
              value={data}
              onChange={handleSearchValue}
              type="text"
              id="input"
              name="input"
              required
              size="100%"
              placeholder="Product search ..."
              className="inputSearch"
            />
            <img
              className="logoIconPhoto"
              src={LogoIconPhoto}
              alt="logo scan"
              onClick={() => setScan(!scan)}
            />
          </div>
          <button
            className="buttonadd"
            label="text"
            type="button"
            onClick={() => userAction()}
          >
            <span>Add </span>
          </button>
        </div>
      </div>
      <ProductList
        products={products}
        handleFavorites={handleFavorites}
        handleDelete={handleDelete}
      />
      <button onClick={() => localStorage.clear()}>CLEAR</button>
    </div>
  );
};

export default Search;
