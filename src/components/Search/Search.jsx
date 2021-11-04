import { useState } from 'react';
// import Button from './Button/Button';
// import Scan from './Scan/Scan';
import './search.css';
import './Button/button.css';
import BarcodeScannerComponent from 'react-qr-barcode-scanner'
//import LogoIconPhoto from '../../assets/icone_appareil_photo.svg';

const Search = () => {
  const [product, setProduct] = useState();
  const [image, setImage] = useState();

  const [data, setData] = useState('');

  const handleSearchValue = (e) => {
    setData(e.target.value);
  };

  //3428273980046
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

  return (
    <div className="searchtext">
      <p>What do you want to add to your Umami ?</p>

      <BarcodeScannerComponent
        width={500}
        height={200}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
        }}
      />
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
          onClick={() => userAction(setImage, setProduct)}
        >
          Add
        </button>
      </div>

      <div className="ProductList">
        <h1>{product}</h1>
        <ul>
          <img src={image} />
        </ul>
      </div>
    </div>
  );
};

export default Search;
