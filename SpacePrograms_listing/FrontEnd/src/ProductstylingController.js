
import React from "react";


function ProductstylingController({ Name, price, category,}) {
 
  return (
    <div className="product">
      <div className="product__info">
        <p>{productName}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="category">
          
          <p>{category}</p>
        </p>
        
      </div>

     
      <button>Add to Basket</button>
    </div>
  );
}

export default ProductstylingController;