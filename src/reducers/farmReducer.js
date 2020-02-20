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
