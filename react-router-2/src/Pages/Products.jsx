
import React from 'react'
import { ProductCard } from "../components/ProductCard";

export const Products = () => {
    const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Headphones",
      price: 2000,
    },
    {
      id: 3,
      name: "Keyboard",
      price: 1500,
    },
  ];

  return (                            
    <>
     <h1>Products 🛍️</h1>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
      
    </>
  )
}
