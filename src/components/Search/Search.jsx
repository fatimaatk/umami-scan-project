import { useState } from 'react';
// import Button from './Button/Button';
// import Scan from './Scan/Scan';
import './search.css';
import './Button/button.css';
import { Link } from 'react-router-dom';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
//import LogoIconPhoto from '../../assets/icone_appareil_photo.svg';

const Search = () => {
  const [product, setProduct] = useState();
  const [brand, setBrand] = useState();
  const [image, setImage] = useState();
  const [scan, setScan] = useState(false);
  const [data, setData] = useState('');
  const [ingredients, setIngredients] = useState();
  const [additives, setAdditives] = useState();
  const [fat, setFat] = useState();
  const [salt, setSalt] = useState();
  const [saturatedFat, setSaturatedFat] = useState();
  const [sugars, setSugars] = useState();
  const [environnement, setEnvironnement] = useState();
  const [nutriscoreGrade, setNutriscoreGrade] = useState();

  const handleSearchValue = (e) => {
    //setData([...data, e.result.text]);
    window.navigator.vibrate(100);
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
        setProduct([datas.product_name]);
        setBrand([datas.product.brands]);
        setIngredients([datas.product.ingredients_text]);
        setAdditives([datas.product.additives_n]);
        setFat([datas.product.nutrient_levels.fat]);
        setSalt([datas.product.nutrient_levels.salt]);
        setSaturatedFat([datas.product.nutrient_levels.saturated-fat]);
        setSugars([datas.product.nutrient_levels.sugars]);
        setEnvironnement([datas.product.ecoscore_data.agribalyse.score]);
        setNutriscoreGrade([datas.product.nutriscore_grade]);
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
          onClick={() => userAction(setImage, setProduct)}
        >
          Add
        </button>
      </div>

      <div className="ProductList">
        <h1>{product ? product :"Null"}</h1>
        <h2>{brand}</h2>
        <ul>
          <button className="details"><Link to={`/product/:${data}`}>Redirection test</Link></button>
          <img src={image} />
        </ul>
        <p>{ingredients} </p>
        <p>Valeurs nutritionnelles</p>
        <ul>
          <li>Additif : {additives}</li>
          <li>Matière grasse : {fat ? fat : "Null"}</li>
          <li>Teneur en sel : {salt ? salt : "Null"}</li>
          <li>Graisses saturées : {saturatedFat ? saturatedFat :"Null"}</li>
          <li>Teneur en sucre : {sugars ? sugars : "Null"}</li>
          <li>Indice environnement : {environnement ? environnement : "Null"}</li>
          <li>Nutriscore grade : {nutriscoreGrade ? nutriscoreGrade : "0"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
