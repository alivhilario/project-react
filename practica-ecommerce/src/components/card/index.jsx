import React from "react";
import "./index.css";

const Cards = ({ product_name, image }) => {
  return (
    <div className="card">
      <div className="cardImage">
        {/* conditional rendering⚠️ */}
        {image === undefined ? (
          <div>
            <h4>There is no image</h4>
          </div>
        ) : (
          <div>
            <img src={image} alt="" />
          </div>
        )}
      </div>
      <div className="title">
        <h4>{product_name}</h4>
      </div>
    </div>
  );
};

export default Cards;
