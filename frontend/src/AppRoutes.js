import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/Cart/CartPage";
import FoodPage from "./pages/Food/FoodPage";
import HomePage from "./pages/Home/HomePage";
import Menu from "./pages/Menu/Menu";
import CheckoutPage from "./pages/Checkout/CheckoutPage";

import About from "./pages/About/About";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Menu/search/:searchTerm" element={<Menu />} />
      <Route path="/food/:id" element={<FoodPage />} />
      <Route path="/About" element={<About />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />

    </Routes>
  );
}
