import './product.css';
import { useEffect , useState} from 'react';
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState();
  const [image, setImage] = useState();
  const [ingredients, setIngredients] = useState();
  const [additives, setAdditives] = useState();
  //const [fat, setFat] = useState();
  //const [salt, setSalt] = useState();
  //const [saturatedFat, setSaturatedFat] = useState();
  //const [sugars, setSugars] = useState();
  const [environnement, setEnvironnement] = useState();
  const [nutriscoreGrade, setNutriscoreGrade] = useState();
  
  useEffect(() => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${params.id}.json`)
    // 1e promesse : si j'ai un résultat alors affiche le moi sous forme de .json (propre à fetch)
      .then((res) => res.json())
    // 2e promesse : lorsque tu m'as converti le resultat en json, alors :
      .then(datas => {
        setImage([datas.product.image_front_small_url]);
        setProduct([datas.product.brands]);
        setIngredients([datas.product.ingredients_text]);
        setAdditives([datas.product.additives_n]);
        //setFat([datas.products.nutrient_levels.fat]);
        //setSalt([datas.product.nutrient_levels.salt]);
        // setSaturatedFat([datas.product.nutrient_levels.saturated-fat]);
        //setSugars([datas.product.nutrient_levels.sugars]);
        setEnvironnement([datas.product.ecoscore_data.agribalyse.score]);
        setNutriscoreGrade([datas.product.grades]);
      })}, []);



  return (
    <div className="product">
      <div className="productIngredient">
        <h1>{product ? product :"null"}</h1>
        <img src={image? image :"null"} alt="product" />
        <p>{ingredients? ingredients :"null"} </p>
        <p>Valeurs nutritionnelles</p>
        <ul>
          <li>Additif : {additives? additives :"null"}</li>
   
          <li>Indice environnement : {environnement? environnement :"null"}</li>
          <li>Nutriscore grade : {nutriscoreGrade? nutriscoreGrade :"0"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Product;