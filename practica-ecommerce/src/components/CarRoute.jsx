import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductsDetails from "./ProductsDetails";

const urlItem = "https://ecomerce-master.herokuapp.com/api/v1/item/";

function CarRoute() {
  const [productsItem, setProductsItem] = useState();

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${urlItem}${id}`)
      .then(({ data }) => setProductsItem(data))
      .catch((error) => console.log(`error api ${error}`));
  }, []);
  console.log(productsItem);
  // conditional⚠️
  return <div>{productsItem && <ProductsDetails item={productsItem} />}</div>;
}

export default CarRoute;
