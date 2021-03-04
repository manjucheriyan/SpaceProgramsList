
import React from "react";
import {Link} from "react-router-dom";


function ProductstylingController1({ productObj}) {
 
  return (
    <div className="product">
      <div className="product__info">
      <p><Link to={{ 
                    pathname: "/login",
                    }}>{productObj.productName}</Link>
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>{productObj.productPrice}</strong>
        </p>.............
        <p className="category">
          
          <p>{productObj.productCategory}</p>
        </p>
        
        
      </div>
     

    </div>
  );
}

export default ProductstylingController1;