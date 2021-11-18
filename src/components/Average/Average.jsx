/* eslint-disable no-unreachable */
import React, { useState } from 'react';
import './average.css';
//import ProductCard from '../ProductCard/ProductCard';

const Average = ({ products }) => {
  const [moyenne, setMoyenne] = useState();

  React.useEffect(() => {
    const nutriscores = [];
    products.map((product) => nutriscores.push(product.nutriscore_grade));
    let sum = 0;
    for (let i = 0; i < nutriscores.length; i++) {
      if (nutriscores[i] === 'a') {
        sum = sum + 1;
      }
      if (nutriscores[i] === 'b') {
        sum = sum + 2;
      }
      if (nutriscores[i] === 'c') {
        sum = sum + 3;
      }
      if (nutriscores[i] === 'd') {
        sum = sum + 4;
      }
      if (nutriscores[i] === 'e') {
        sum = sum + 5;
      }
      if (nutriscores[i] === undefined) {
        nutriscores.length = nutriscores.length - 1;
      }
    }
    let moyenne = Math.round(sum / nutriscores.length);
    if (moyenne === 0) {
      moyenne = null;
    }
    if (moyenne === 1) {
      moyenne = 'A';
    }
    if (moyenne === 2) {
      moyenne = 'B';
    }
    if (moyenne === 3) {
      moyenne = 'C';
    }
    if (moyenne === 4) {
      moyenne = 'D';
    }
    if (moyenne === 5) {
      moyenne = 'E';
    }

    setMoyenne(moyenne);
    // console.log('plop', moyenneString);
  }, [products]);

  //console.log('test', moyenneString);
  return (
    <div className="averagediv">
      <div className="average">{moyenne}</div>
    </div>
  );
};

export default Average;
