import { Link } from "react-router-dom";

import React from 'react'

export const Home = () => {
  return (
    <>
    <h1>Welcome to My Store 🛍️</h1>

      <p>Find amazing products here.</p>

      <Link to="/products">
        <button>View Products</button>
      </Link>
    </>
  )
}
