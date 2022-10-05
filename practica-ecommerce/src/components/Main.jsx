import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./card";
import "./Main.css";

const pruebaApi = () => {
  const BASE_URL = "https://ecomerce-master.herokuapp.com/api/v1/item";

  const [itemArray, setItemArray] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then(({ data }) => setItemArray(data))
      .catch((error) => console.log(`error api ${error}`));
  }, []);

  return (
    <div>
      {itemArray.map((item, index) => {
        return (
          <Cards
            key={index}
            product_name={item.product_name}
            image={item.image}
            images={item.images}
            details={(product_name) => console.log(product_name)}
          />
        );
      })}
    </div>
  );
};

export default pruebaApi;
