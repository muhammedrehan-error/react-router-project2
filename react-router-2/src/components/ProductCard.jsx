import React from "react";
import { Link } from "react-router-dom";
export const ProductCard = ({ id, name, price }) => {
  return (
    <>
      <h2>{name}</h2>

      <p>Price: ₹{price}</p>

      <Link to={`/products/${id}`}>
        <button>View Details</button>
      </Link>
    </>
  );
};

