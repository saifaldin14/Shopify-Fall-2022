import { combineReducers } from "redux";

import postGPTData from "./postGPTData";

const rootReducer = combineReducers({
  postGPTData,
});

const mapStateToRootReducer = (state, action) => rootReducer(state, action);
export default mapStateToRootReducer;
