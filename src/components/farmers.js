import React, { useEffect } from "react";
import MyMap from "./map";
import PageHeader from "./pageHeader";
import FarmersList from "./farmersList";
import { useSelector } from "react-redux";

const Farmers = () => {
  const farms = useSelector(state => state.farms.farms);
  const selectedFarm = useSelector(state => state.farms.selectedFarm);

  useEffect(() => {
    console.log("farm", farms);
  }, [farms]);

  return (
    <React.Fragment>
      <PageHeader />
      <div className="row" style={{ margin: 0 }}>
        <div className="col-md-4 mt-2">
          <MyMap selectedFarm={selectedFarm} farms={farms} />
        </div>
        <div className="col-md-8">
          {farms &&
            farms.map(farm => (
              <FarmersList
                key={farm.name}
                farm={farm}
                produce={farm.produce}
                selectedFarm={selectedFarm}
              />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Farmers;
