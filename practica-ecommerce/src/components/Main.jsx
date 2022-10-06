import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./card";
import "./Main.css";
import NavBarExample from "./Navbar";

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
    <div className="nav-Principal">
      <NavBarExample />
      <section className="products">          
        {itemArray.map((item, index) => {
          return (
            <Cards
              id={item._id}
              key={index}
              product_name={item.product_name}
              image={item.image}
              images={item.images}
            />
          );
        })}
      </section>
    </div>
  );
};

export default pruebaApi;


// export function Car (props){
//   return (
//     <div className = _"Aqui la clase de boostrap"
//     </div>
//   );
// }