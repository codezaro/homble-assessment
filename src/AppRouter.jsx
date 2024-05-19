import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./screens/ProductList";
import ProductDetails from "./screens/ProductDetails";
import Dashboard from "./screens/Dashboard";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<> not found </>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
