const initalState = {
  firstName: "",
  lastName: "",
  order: {
    complete: false,
    info: {
      farmer: "",
      location: "",
      produce: []
    }
  }
};

const customerReducer = (state = initalState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "COMPLETE_ORDER":
      newState.order.complete = true;
      newState.order.info.produce = [...action.payload.order];
      newState.order.info.farmer = action.payload.farm.name;
      newState.order.info.location = action.payload.farm.location;
      console.log("here in customer Reducer", newState, action.payload.farm);

      return newState;
    case "REGISTRATION":
      newState.firstName = action.payload.firstName;
      newState.lastName = action.payload.lastName;
      return newState;
    default:
      return state;
  }
};
export default customerReducer;
