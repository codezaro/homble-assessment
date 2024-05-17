import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./screens/ProductList";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
