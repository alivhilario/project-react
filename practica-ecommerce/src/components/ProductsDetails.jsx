import React from "react";
import "./ProductsDetails.css";

const ProductsDetails = ({ item }) => {
  return (
    <div className="cardOne">
      <div className="cardContainer">
        <div className="image">
          <img
            src={
              item.image ||
              item.images ||
              "https://nypost.com/wp-content/uploads/sites/2/2022/03/Best-Amazon-Products.jpg?quality=75strip=all"
            }
            alt=""
          />
        </div>
      </div>
      <div className="text">
        <h2> {item.product_name} </h2>
        <h4> {item.description} </h4>
        <h4>
          Category: <span>{item.category}</span>{" "}
        </h4>
        <p className="precio">${item.price} </p>
        <button className="buyButton">Buy</button>
      </div>
    </div>
  );
};

export default ProductsDetails;
