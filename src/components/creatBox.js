import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import DND from "./dnd";
import OrderPage from "./oderPage";

function CreateBox() {
  const customer = useSelector(state => state.customer);

  useEffect(() => {}, [customer]);

  return (
    <div className="row text-center" style={{ marginTop: "8rem" }}>
      <div className="offset-md-2">
        {customer.order.complete === true ? <OrderPage /> : <DND />}
      </div>
    </div>
  );
}

export default CreateBox;
