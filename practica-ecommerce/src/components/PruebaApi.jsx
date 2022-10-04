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

  return (
    <div>
      {itemArray.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <h4>{item.product_name}</h4>
            </div>

            <div>
              {/* conditional rendering⚠️ */}
              {item.image === undefined ? (
                <div>
                  <h4>There is no image</h4>
                </div>
              ) : (
                <div>
                  <img src={item.image} alt="" />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default pruebaApi;
