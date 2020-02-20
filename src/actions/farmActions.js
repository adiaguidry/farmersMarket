import { CONSTANTS } from ".";
import axios from "axios";

export const getFarms = farms => {
  return {
    type: CONSTANTS.GET_FARMS,
    payload: farms
  };
};

export const initialState = () => {
  return dispatch => {
    axios.get("/api/farmsdb").then(response => {
      console.log("action", response.data[0]);
      dispatch(getFarms(response.data[0]));
    });
  };
};

export const selectFarmer = farm => {
  return {
    type: CONSTANTS.SELECT_FARMERS,
    payload: farm
  };
};

export const unselectFarmer = () => {
  return {
    type: CONSTANTS.UNSELECT_FARMERS
  };
};
