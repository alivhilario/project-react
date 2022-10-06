import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./card";
import "./Main.css";
import NavBarExample from "./Navbar";

const pruebaApi = () => {
  const BASE_URL = "https://ecomerce-master.herokuapp.com/api/v1/item";

  const [itemArray, setItemArray] = useState([]);
  // const [productsIndex, setProductsIndex] = useState(undefined);

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then(({ data }) => setItemArray(data))
      .catch((error) => console.log(`error api ${error}`));
  }, []);

  return (
    <div className="nav-Principal">
      <NavBarExample />
      <section className="products">
        {itemArray.map((item, index) => {
          return (
            <Cards
              id={index}
              key={index}
              product_name={item.product_name}
              image={item.image}
              images={item.images}
              // details={(product_name) => console.log(product_name)}
            />
          );
        })}
      </section>
    </div>
  );
};

export default pruebaApi;
