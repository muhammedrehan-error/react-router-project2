import { Link } from "react-router-dom";

import React from 'react'

export const Navbar = () => {
  return (
  <>
   <nav>
      <h2>My Store</h2>

      <Link to="/">Home</Link>
      {" | "}
      <Link to="/products">Products</Link>
    </nav>
  </>
  )
}
