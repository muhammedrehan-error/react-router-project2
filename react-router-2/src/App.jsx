import { Route,Routes } from "react-router-dom";
import {Navbar} from "./components/Navbar"
import {ProductCard} from "./components/ProductCard"
import { Home } from "./Pages/Home";
import { Products } from "./Pages/Products";
import { ProductDetails } from "./Pages/ProductDetails";
import "./App.css"

import React from 'react'

export const App = () => {
  return (
   <>
   
    <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>

   </>
    
  )
}
