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
  const handleSearchValue = (e) => {
    //setData([...data, e.result.text]);
    window.navigator.vibrate(100);
    setData(e.target.value);
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
          } else alert('Insert a barre code');
        });
      //.catch(() => console.log('Error'));
    } else alert('Insert a barre code');
  };

  return (
    <div className="mainSearch">
      <div className="searchtext">
        <p>What do you want to add to your Umami ?</p>

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
        <div></div>
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
              onClick={() => setScan(!scan)}
              onKeyDown={() => setScan(!scan)}
              className="logoIconPhoto"
              src={LogoIconPhoto}
              alt="logo scan"
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
              role="button"
              tabIndex={0}
            />
          </div>
          <button
            className="buttonadd"
            label="text"
            type="button"
            onClick={() => userAction(setProducts)}
          >
            Add
          </button>
        </div>
      </div>
      <ProductList products={products} />
      <button onClick={() => setData([])}>CLEAR</button>
    </div>
  );
};

export default Search;
