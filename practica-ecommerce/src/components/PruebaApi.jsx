import React, { useEffect, useState } from "react";
import axios from "axios";

const pruebaApi = () => {
  const BASE_URL = "https://ecomerce-master.herokuapp.com/api/v1/item";

  const [itemArray, setItemArray] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then(({ data }) => setItemArray(data))
      .catch((error) => console.log(`error api ${error}`));
  }, []);

  return <div>pruebaApi
    <ul>
    {itemArray.map((item, index) =>{
      return <li key ={index}>
        {item.product_name}
      </li>
    })}
    </ul>
  </div>;
};

export default pruebaApi;
