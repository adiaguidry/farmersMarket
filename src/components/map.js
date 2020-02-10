import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as createAction from "../actions/farmActions";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useDispatch } from "react-redux";

const MyMap = ({ selectedFarm, farms }) => {
  const dispatch = useDispatch();

  const handlePopup = (e, farm) => {
    e.preventDefault();
    dispatch(createAction.selectFarmer(farm));
  };

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100vh",
    latitude: 33.05975,
    longitude: -117.55135,
    zoom: 7
  });
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/adiag/ck6ay92ub051g1ilf0o40zazb"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {farms.map(farm => (
          <Marker key={farm.name} latitude={farm.lat} longitude={farm.long}>
            <button
              style={styles.locationIcon}
              onClick={() => dispatch(createAction.selectFarmer(farm))}
            >
              <LocationOnIcon className="fas fa-seedling fa-xl"></LocationOnIcon>
            </button>
          </Marker>
        ))}
        {selectedFarm && (
          <Popup
            latitude={selectedFarm.lat}
            longitude={selectedFarm.long}
            onClose={() => dispatch(createAction.unselectFarmer())}
          >
            <h3>{selectedFarm.name}</h3>
            <p>{selectedFarm.location}</p>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

const styles = {
  locationIcon: {
    fontSize: "1.5em",
    color: "black",
    borderRadius: 50
  }
};

export default MyMap;
