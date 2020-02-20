import React, { useState } from "react";
import { useSelector } from "react-redux";

const Banner = ({ text }) => {
  const selectedFarm = useSelector(state => state.farms.selectedFarm);
  const user = useSelector(state => state.users);
  return (
    <div className="row">
      <div
        className="offset-md-1 col-md-10"
        style={{ backgroundColor: "#9fedd7" }}
      >
        <div className="m-4">
          <div>
            <h1 className="display-4">California Online Farmers Market</h1>
            <p className="lead">
              We connect people, who are seraching for fresh garden produce, to
              local farmers in their areas.
            </p>
            <hr />
            <h2>{user.firstName}</h2>
            <br />
            <p className="lead">{text}</p>
            {user.firstName &&
              user.order.info.produce &&
              user.order.info.produce.map(p => (
                <span key={p.id} className="ml-1">
                  {p.text},
                </span>
              ))}
            {selectedFarm && user.firstName && user.order.info.produce && (
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
        </div>
      </div>
    </div>
  );
};

export default Banner;
