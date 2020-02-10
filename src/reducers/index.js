import { combineReducers } from "redux";
import listReducer from "./listReducer";
import farmReducer from "./farmReducer";
import customerReducer from "./customerReducer";

export default combineReducers({
  lists: listReducer,
  farms: farmReducer,
  customer: customerReducer
});
