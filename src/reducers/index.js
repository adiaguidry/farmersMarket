import { combineReducers } from "redux";
import listReducer from "./listReducer";
import farmReducer from "./farmReducer";
import userReducer from "./userReducer";

export default combineReducers({
  lists: listReducer,
  farms: farmReducer,
  users: userReducer
});
