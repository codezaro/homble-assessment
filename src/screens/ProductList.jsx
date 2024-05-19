import React, { useEffect } from "react";
import { getRequest, postRequest } from "../axios.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "./ProductList.css";
import Logo from "../assets/logo_green1.png";
import LoadingSkeleton from "./LoadingSkeleton.jsx";
import Modal from "./Modal.jsx";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getRequest("/products")
      .then((response) => {
        const data = response.data;
        const sortedProducts = data.sort(
          (a, b) => a.selling_price - b.selling_price
        );
        setProducts(sortedProducts);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        console.log(sortedProducts);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  }, []);
  if (errorMsg !== null) {
    return <div>Something went wrong! {errorMsg}</div>;
  }
  function handleToggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="container">
      <div className="header">
        <div className="logo_heading">
          {loading ? (
            <Skeleton
              height={50}
              width={150}
              baseColor="#f0f0f0"
              highlightColor="#e0e0e0"
            />
          ) : (
            <img src={Logo} alt="" className="logo" />
          )}
          {loading ? (
            <Skeleton
              height={24}
              width={200}
              baseColor="#f0f0f0"
              highlightColor="#e0e0e0"
            />
          ) : (
            <p className="heading">
              <i>Product Catalogue</i>
            </p>
          )}
        </div>

        <div className="buttons">
          {loading ? (
            <Skeleton
              height={40}
              width={100}
              baseColor="#f0f0f0"
              highlightColor="#e0e0e0"
            />
          ) : (
            <button onClick={handleToggleModal} className="add_product">
              Add Product
            </button>
          )}

          {loading ? (
            <Skeleton
              height={40}
              width={100}
              baseColor="#f0f0f0"
              highlightColor="#e0e0e0"
            />
          ) : (
            <Link to={`/dashboard`}>
              <button className="add_product">Dashboard</button>{" "}
            </Link>
          )}
        </div>
      </div>

      <div className="product_container">
        {loading
          ? Array(9)
              .fill()
              .map((_, index) => (
                <div className="product" key={index}>
                  <Skeleton
                    height={350}
                    width={350}
                    baseColor="#f0f0f0"
                    highlightColor="#e0e0e0"
                  />
                  <div className="essentials">
                    <Skeleton
                      height={20}
                      width={150}
                      baseColor="#f0f0f0"
                      highlightColor="#e0e0e0"
                    />
                    <Skeleton
                      height={20}
                      width={50}
                      baseColor="#f0f0f0"
                      highlightColor="#e0e0e0"
                    />
                  </div>
                </div>
              ))
          : products.map((item) => (
              <Link
                to={`/product/${item.id}`}
                style={{ textDecoration: "none" }}
                key={item.id}
              >
                <div className="product" key={item.id}>
                  <img src={item.productImage} alt={item.name} />
                  <div className="essentials">
                    <p>{item.name}</p>
                    <div>&#8377;{item.selling_price}</div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
      {showModal && <Modal />}
    </div>
  );
};

export default ProductList;
