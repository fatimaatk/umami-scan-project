import './product.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import lowicon from '../../assets/lowicon.png';
import moderateicon from '../../assets/moderateicon.png';
import highicon from '../../assets/highicon.png';

const Product = () => {
  const params = useParams();
  const [productName, setProductName] = useState();
  const [productBrand, setProductBrand] = useState();
  const [image, setImage] = useState();
  const [ingredients, setIngredients] = useState();
  //const [additives, setAdditives] = useState();
  //const [fat, setFat] = useState();
  const [salt, setSalt] = useState();
  const [saturatedFat, setSaturatedFat] = useState();
  const [sugars, setSugars] = useState();
  const [nova, setNova] = useState();
  const [nutriscoreGrade, setNutriscoreGrade] = useState();

  useEffect(() => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${params.id}.json`)
      // 1e promesse : si j'ai un résultat alors affiche le moi sous forme de .json (propre à fetch)
      .then((res) => res.json())
      // 2e promesse : lorsque tu m'as converti le resultat en json, alors :
      .then((datas) => {
        setImage([datas.product.image_front_small_url]);
        setProductName([datas.product.generic_name]);
        setProductBrand([datas.product.brands]);
        setIngredients([datas.product.ingredients_text]);
        //setAdditives([datas.product.additives_n]);
        //setFat([datas.products.nutrient_levels.fat]);
        setSalt([datas.product.nutrient_levels.salt]);
        setSaturatedFat([datas.product.nutrient_levels['saturated-fat']]);
        setSugars([datas.product.nutrient_levels.sugars]);
        setNova([datas.product['nova_group']]);
        setNutriscoreGrade([datas.product.nutriscore_grade]);
      })
      .catch(() => console.log('Error'));
  }, []);

  // <li>Graisse : {fat? fat :"0"}</li>
  return (
    <div className="product">
      <div className="productIngredient">
        <div className="title">
          <h1>{productBrand ? productBrand : 'null'}</h1>
          <h3>{productName ? productName : 'null'} </h3>
        </div>
        <p className="ingredients">{ingredients ? ingredients : 'null'} </p>

        <h3 className="valeursnutri">
          <br />
          Valeurs nutritionnelles{' '}
        </h3>
        <div className="imageList">
          <img className="image" src={image ? image : 'null'} alt="product" />

          <ul className="ullist">
            <li className="titlelist">
              <span className={`saturatedFat ${saturatedFat}`}></span> Graisse
              saturée{' '}
            </li>
            <li className="titlelist">
              <span className={`salt ${salt}`}></span> Teneur en sel{' '}
            </li>
            <li className="titlelist">
              <span className={`sugars ${sugars}`}></span> Teneur en sucre
            </li>
          </ul>
        </div>
        <div className="labeldiv">
          <ul className="ullabel">
            <li className="label">
              <span className={`nova nova${nova}`}></span> Nova score
            </li>
            <li className="label">
              <span className={`nutriscore ${nutriscoreGrade}`}></span> Nutri
              score
            </li>
          </ul>
        </div>
        <p className="textlevel">
          L&apos;ensemble des éléments indiqués sont basés sur l&apos;API
          openfoodfacts.
          <br /> <br /> Les valeurs nutrionnelles sont évaluées sous trois
          niveaux : <br /> faible{' '}
          <img className="levelicon" src={lowicon} alt="faible" />, modéré{' '}
          <img className="levelicon" src={moderateicon} alt="modérée" />
          et élevée <img className="levelicon" src={highicon} alt="élevée" />
          .<br />
          <br /> La classification NOVA assigne un groupe aux produits
          alimentaires en fonction du degré de transformation qu&apos;ils ont
          subi.
        </p>
      </div>
    </div>
  );
};

export default Product;
