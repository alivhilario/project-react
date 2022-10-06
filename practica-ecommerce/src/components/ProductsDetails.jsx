import React from "react";

const ProductsDetails = ({ item }) => {
  return (
    <div>
      <div>
        <img
          src={
            item.image ||
            item.images ||
            "https://nypost.com/wp-content/uploads/sites/2/2022/03/Best-Amazon-Products.jpg?quality=75strip=all"
          }
          alt=""
        />
      </div>
      <h4>Name {item.product_name} 🛒</h4>
      <h4>Decrption {item.description} 🛒</h4>
      <h4>Price {item.price} 🛒</h4>
      <h4>Category {item.category} 🛒</h4>
    </div>
  );
};

export default ProductsDetails;
