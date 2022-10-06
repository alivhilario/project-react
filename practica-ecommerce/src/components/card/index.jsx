import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Cards = ({ product_name, image, images, id }) => {
  const navigate = useNavigate();
  const gettingProducts = (e) => {
    e.preventDefault();
    navigate(`/card/${id}`);
  };
  return (
    <div className="cardPrincipal" onClick={gettingProducts}>
      <div className="cardImage">
        {/* conditional rendering⚠️ */}

        <img
          src={
            images ||
            image ||
            "https://nypost.com/wp-content/uploads/sites/2/2022/03/Best-Amazon-Products.jpg?quality=75strip=all"
          }
          alt=""
        />
      </div>
      <div className="title">
        <h4 className="h4Title">{product_name}</h4>
      </div>
    </div>
  );
};

export default Cards;
