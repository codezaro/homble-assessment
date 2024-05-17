import React, { useEffect } from "react";
import { getRequest, postRequest } from "../axios.js";
import { useState } from "react";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRequest("/products").then((response) => {
      const data = response.data;
      const sortedProducts = data.sort(
        (a, b) => a.selling_price - b.selling_price
      );
      setProducts(sortedProducts);
      setLoading(false);
      //   setProducts(sortedProducts);

      console.log(sortedProducts);
    });
  }, []);

  return (
    <div className="container">
      <div className="product_container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.productImage} alt={item.name} />
                {/* <p>{item.title}</p> */}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ProductList;
