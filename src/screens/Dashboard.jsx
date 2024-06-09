import React, { useEffect, useState } from "react";
import { getRequest } from "../axios.js";
import "./Dashboard.css";
import Logo from "../assets/logo_green1.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "ascending",
  });

  useEffect(() => {
    getRequest("/dashboard")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const sortProducts = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const sortedProducts = [...products].sort((a, b) => {
      if (key === "id") {
        return direction === "ascending" ? a[key] - b[key] : b[key] - a[key];
      } else {
        if (a[key] < b[key]) {
          return direction === "ascending" ? -1 : 1;
        }
        if (a[key] > b[key]) {
          return direction === "ascending" ? 1 : -1;
        }
        return 0;
      }
    });

    setSortConfig({ key, direction });
    setProducts(sortedProducts);
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };
  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.id.toString().toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, search]);

  function handleSearchInput(e) {
    setSearch(e.target.value);
  }
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
          <p
            className="heading"
            style={{
              paddingTop: "30px",
            }}
          >
            <i>Product Dashboard</i>
          </p>
        </div>
        <input
          className="inputstyle"
          type="text"
          value={search}
          onChange={handleSearchInput}
          placeholder="Search product by name or id"
        />
        <span></span>
        <span></span>
      </div>
      <div className="dashboard">
        <table>
          <thead>
            <tr>
              <th onClick={() => sortProducts("id")}>ID</th>
              <th className="width" onClick={() => sortProducts("name")}>
                Product Name
              </th>
              <th onClick={() => sortProducts("selling_price")}>
                Selling Price
              </th>
              <th className="delete">Remove Item</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>&#8377;{product.selling_price}</td>
                <td
                  className="center"
                  style={{
                    height: "45px",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{
                      cursor: "pointer",
                    }}
                    onChange={() => handleDelete(product.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
