import React, { useState } from "react";
import { useSelector } from "react-redux";

const OrderPage = () => {
  const selectedFarm = useSelector(state => state.farms.selectedFarm);
  const customer = useSelector(state => state.customer);
  return (
    <div>
      <div className="row">
        <div
          className="offset-md-4 col-md-10"
          style={{ backgroundColor: "#9fedd7" }}
        >
          <div className="m-4">
            <h1 className="display-4">California Online Farmers Market</h1>
            <p className="lead">
              We connect people, who are seraching for fresh garden to table
              produce, to local farmers in their areas.
            </p>
            <hr className="my-4" />
            <h3>Thank You For Your Order </h3>

            {selectedFarm && (
              <h6>
                <img
                  className="mx-1"
                  width="5%"
                  src={selectedFarm.img}
                  alt=""
                />
                From {selectedFarm.name}
              </h6>
            )}
          </div>
          <div className="m-4">
            Your Box of
            {customer.order.info.produce.map(p => (
              <span key={p.id} className="ml-1">
                {p.text},
              </span>
            ))}
            will be ready for pick up in 7 days.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
