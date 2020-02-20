const initialState = {
  currentUser: {}
};

const userReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "REG_USER":
      newState.currentUser = action.payload;
      return newState;
    case "SIGNIN":
      newState.currentUser = action.payload;
      return newState;
    case "COMPLETE_ORDER":
      newState.currentUser.order.complete = true;
      // newState.order.info.produce = [...action.payload.order];
      // newState.order.info.farmer = action.payload.farm.name;
      // newState.order.info.location = action.payload.farm.location;
      console.log("here in customer Reducer", newState, action.payload);

      return newState;
    case "LOGOUT_USER":
      //logout user
      break;
    default:
      return state;
  }
};

export default userReducer;
