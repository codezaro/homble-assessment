import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./screens/ProductList";
import LoadingSkeleton from "./screens/LoadingSkeleton";
import Home from "./screens/Home";
import ProductDetails from "./screens/ProductDetails";
import Dashboard from "./screens/Dashboard";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/product" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
