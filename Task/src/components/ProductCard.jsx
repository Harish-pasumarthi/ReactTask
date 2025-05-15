import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { image, title, description, price } = product;

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="price">${price}</p>
    </div>
  );
};

export default ProductCard;
