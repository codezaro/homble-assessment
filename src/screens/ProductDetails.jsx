import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest, postRequest } from "../axios.js";
import "./ProductDetails.css";
import Logo from "../assets/logo_green1.png";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRequest(`/products/${id}`)
      .then((response) => {
        const data = response.data;
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  if (loading) {
    return <div>Loading data! Please wait.</div>;
  }

  return (
    <div className="wrapper">
      <div className="header">
        <div className="logo_heading ">
          <Link to={`/`}>
            <img src={Logo} alt="" className="logo shift" />
          </Link>
          <p className="heading">
            <i>Product Details</i>
          </p>
        </div>
      </div>
      <div className="wrapper box">
        {product ? (
          <div className="description">
            <div className="image">
              <img src={product.productImage} alt={product.name} />
            </div>
            <div className="about">
              <p>Name: {product.name}</p>
              <p>Price: &#8377;{product.selling_price}</p>
              <p>About: {product.description}</p>
              <p>Allergen: {product.allergen_info}</p>
              <p>Usage: {product.cooking_instruction}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductDetails;
