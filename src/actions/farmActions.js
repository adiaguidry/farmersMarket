import { CONSTANTS } from ".";

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
