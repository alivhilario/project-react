import React from "react";
import { useParams } from "react-router-dom";

function CarRoute() {
  const { id } = useParams;
  console.log(id);
  return <div>CarRoute</div>;
}

export default CarRoute;
