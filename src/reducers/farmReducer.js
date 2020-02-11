import afro from "../images/afro.png";
import red from "../images/red.png";
import burnett from "../images/burnett.png";
import hat from "../images/hat.png";
import bread from "../images/bread.png";
import blonde from "../images/blonde.png";

const farmReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "GET_FARMS":
      newState = { ...action.payload };
      return newState;
    case "SELECT_FARMERS":
      newState.selectedFarm = { ...action.payload };
      return newState;
    case "UNSELECT_FARMERS":
      newState.selectedFarm = null;
      return newState;
    default:
      return state;
      break;
  }
};

export default farmReducer;
