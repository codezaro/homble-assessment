import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import "./ProductList.css";
const LoadingSkeleton = () => {
  return (
    <div className="container">
      <div className="header">
        <Skeleton
          height={25}
          width={120}
          baseColor="#f0f0f0"
          highlightColor="#999797"
        />
        <div className="logo_heading">
          <Skeleton
            height={25}
            width={150}
            // baseColor="#f0f0f0"
            // highlightColor="#e0e0e0"
          />
          <Skeleton
            height={25}
            width={200}
            // baseColor="#f0f0f0"
            // highlightColor="#999797"
          />
        </div>
        <Skeleton
          height={25}
          width={300}
          //   baseColor="#f0f0f0"
          //   highlightColor="#e0e0e0"
        />
        <Skeleton
          height={25}
          width={100}
          //   baseColor="#f0f0f0"
          //   highlightColor="#e0e0e0"
        />
      </div>
      <div className="product_container">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="product" key={index}>
            <Skeleton height={350} width={350} />
            <div
              className="essentials"
              baseColor="#f0f0f0"
              highlightColor="#e0e0e0"
            >
              <Skeleton
                height={20}
                width={150}
                // baseColor="#f0f0f0"
                // highlightColor="#e0e0e0"
              />
              <Skeleton
                height={20}
                width={50}
                // baseColor="#f0f0f0"
                // highlightColor="#e0e0e0"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
