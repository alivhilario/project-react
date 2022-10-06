import React from "react";
import "./index.css";
import { useHistory } from "react-router-dom";

const Cards = ({ product_name, image, images,id }) => {
  const location = useHistory();
  const gettingProducts = (e) => {
    e.preventDefault();
    location.push(`/card`);
  };
  return (
    <div className="cardPrincipal" onClick={gettingProducts}>
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
        <h4 className="h4Title">{product_name}</h4>
      </div>
    </div>
  );
};

export default Cards;
