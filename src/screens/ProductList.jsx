import React, { useEffect } from "react";
import { getRequest, postRequest } from "../axios.js";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./ProductList.css";
import Logo from "../assets/logo_green1.png";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRequest("/products")
      .then((response) => {
        const data = response.data;
        const sortedProducts = data.sort(
          (a, b) => a.selling_price - b.selling_price
        );
        setProducts(sortedProducts);
        // setTimeout(() => {
        //   setLoading(false);
        // }, 1000);

        console.log(sortedProducts);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  }, []);
  if (errorMsg !== null) {
    return <div>Something went wrong! {errorMsg}</div>;
  }

  function handleClick() {}

  return (
    <div className="container">
      <div className="header">
        <div className="logo_heading">
          <img src={Logo} alt="" className="logo" />
          <p className="heading">
            <i>Product Catalogue</i>
          </p>
        </div>

        <input
          type="text"
          placeholder="Search your product here..."
          className="search"
        />
        <button className="add_product">Add Product</button>
      </div>

      <div className="product_container">
        {products && products.length
          ? products.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id}>
                <div className="product" key={item.id}>
                  <img
                    onClick={handleClick}
                    src={item.productImage}
                    alt={item.name}
                  />
                  <div className="essentials">
                    <p>{item.name}</p>
                    <div>&#8377;{item.selling_price}</div>
                  </div>
                </div>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default ProductList;
