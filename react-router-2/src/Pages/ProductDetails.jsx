import React from 'react'
import { useParams } from "react-router-dom";


export const ProductDetails = () => {
    const { id } = useParams();
  return (
  <>
  <h1>Product Details</h1>

  <p>Product ID:{id}</p>

  <p>this is the details page of the product.</p>
  </>
  )
}
