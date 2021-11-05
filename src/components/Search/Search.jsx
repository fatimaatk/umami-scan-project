import { useState } from 'react';
// import Button from './Button/Button';
// import Scan from './Scan/Scan';
import './search.css';
import './Button/button.css';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import ProductList from '../ProductList/ProductList';
//import LogoIconPhoto from '../../assets/icone_appareil_photo.svg';

const Search = () => {
  // const [product, setProduct] = useState();
  const [products, setProducts] = useState([]);
  const [scan, setScan] = useState(false);
  const [data, setData] = useState('');
  const handleSearchValue = (e) => {
    //setData([...data, e.result.text]);
    window.navigator.vibrate(100);
    setData(e.target.value);

  };

  //3428273980046
  const userAction = async (setProducts) => {
    // je vais récuperer un objet via Api
    fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
      // 1e promesse : si j'ai un résultat alors affiche le moi sous forme de .json (propre à fetch)
      .then((res) => res.json())
      // 2e promesse : lorsque tu m'as converti le resultat en json, alors :
      .then((datas) => {
        // prend dans datas uniquement la marque et assigne le à setProduct
        setProducts([...products, datas.product]);
      });
  };

  return (
    <div className="searchtext">
      <p>What do you want to add to your Umami ?</p>
      <button onClick={() => setScan(true)}>SCAN</button> <br />
      <button onClick={() => setScan(false)}>Off</button>
      {scan && (

        <BarcodeScannerComponent
          width={400}
          height={200}
          onUpdate={(err, result) => {
            if (result) {
              setData(result.text);
              setScan(false);
            }
          }}
        />

      )}
      <div>
        <button onClick={() => setData([])}>CLEAR</button>
      </div>
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
          />
          <img className="logoIconPhoto" src="#" alt="logo scan" />
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
      <ProductList products={products} data={data} />
    </div>
  );
};

export default Search;
