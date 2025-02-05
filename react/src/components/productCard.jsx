import React from "react";

export default ({ product }) => {
  return (
    <div
      key={product.id}
      className={`product-item ${product.category.toLowerCase()}`}
    >
      <img
        className="product-image"
        src={product.photo}
        alt={product.prodName}
      />
      <h3>{product.prodName}</h3>
      <p>{product.prodDescription}</p>
      <p>${product.price}</p>
    </div>
  );
};
