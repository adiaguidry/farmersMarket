import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import DND from "./dnd";
import Banner from "./banner";

function CreateBox() {
  const user = useSelector(state => state.users.currentUser);

  useEffect(() => {
    console.log("user order complete", user.order);
  }, [user]);

  return (
    <div className="row text-center" style={{ marginTop: "8rem" }}>
      <div className="offset-md-2">
        {user.order && user.order.complete === true ? (
          <Banner
            text={
              "Thank you for you order! Your box of will be ready in 7 days. Includes:"
            }
          />
        ) : (
          <DND />
        )}
      </div>
    </div>
  );
}

export default CreateBox;
