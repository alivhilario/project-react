import React, { useEffect } from "react";
import axios from "axios";

const pruebaApi = () => {
  const BASE_URL = "https://ecomerce-master.herokuapp.com/api/v1/item";

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(`error api ${error}`));
  }, []);

  return;
  <>
    <div>pruebaApi</div>;
  </>;
};

export default pruebaApi;
