/* eslint-disable no-unreachable */
import React from 'react';
//import ProductCard from '../ProductCard/ProductCard';

const Average = ({ nutriscoreGrade }) => {
  let nutriGlobal = ({ nutriscoreGrade }) => {
    if (nutriscoreGrade === 'a') {
      nutriGlobal = 3;
    } else if (nutriscoreGrade === 'b') {
      nutriGlobal = 3;
    } else if (nutriscoreGrade === 'c') {
      nutriGlobal = 3;
    } else if (nutriscoreGrade === 'd') {
      nutriGlobal = 3;
    } else if (nutriscoreGrade === 'e') {
      nutriGlobal = 3;
    } else {
      nutriGlobal = 3;
    }
    return console.log(`biz ${nutriscoreGrade}`);
    nutriGlobal({ nutriGlobal });
  };

  console.log(nutriscoreGrade);
  return nutriGlobal ? (
    <div>
      <p>votre nutriscore moyen est de : {nutriGlobal}</p>
    </div>
  ) : null;
};

export default Average;
