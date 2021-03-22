import React from "react";
import { withRouter } from "react-router-dom";
const Checkout = () => {
  return (
    <div>
      <h1>Checkout page</h1>
      <p>If you see this, it means you are authenticated!</p>
    </div>
  );
};

export default withRouter(Checkout);
