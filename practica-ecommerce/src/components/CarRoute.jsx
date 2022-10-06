import React from "react";
import { withRouter } from "react-router-dom";

function CarRoute({ match }) {
  console.log(match);
  return <div>CarRoute</div>;
}

export default withRouter(CarRoute);
