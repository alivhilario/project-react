import React from "react";
import "./index.css";

const Cards = ({ product_name, image, images, details }) => {
  return (
    <div className="card" onClick={() => details(product_name)}>
      <div className="cardImage">
        {/* conditional rendering⚠️ */}
        {image === undefined && images === undefined ? (
          <div>
            <img
              src="https://nypost.com/wp-content/uploads/sites/2/2022/03/Best-Amazon-Products.jpg?quality=75strip=all"
              alt=""
            />
          </div>
        ) : (
          <div>
            <img src={images || image} alt="" />
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
