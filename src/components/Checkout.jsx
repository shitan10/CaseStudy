import React from "react";

import StripeButton from "./StripeButton"

const Checkout = () => {
  return (
    <div>
      <div className="total">TOTAL : $648</div>
      <StripeButton price="648" />
    </div>
  );
};

export default Checkout;
