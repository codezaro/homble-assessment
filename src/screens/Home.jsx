import React, { useEffect, useState } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import ProductList from "./ProductList";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return <div>{loading ? <LoadingSkeleton /> : <ProductList />}</div>;
};

export default Home;
