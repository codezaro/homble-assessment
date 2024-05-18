import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest, postRequest } from "../axios.js";
import "./ProductDetails.css";
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
      <h1>Product Details</h1>
      {product ? (
        <div className="description">
          <div className="image">
            <img src={product.productImage} alt={product.name} />
          </div>
          <div className="about">
            <p>Name: {product.name}</p>
            <p>Price: {product.selling_price}</p>
            <p>About: {product.description}</p>
            <p>Allergen: {product.allergen_info}</p>
            <p>Usage: {product.cooking_instruction}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
