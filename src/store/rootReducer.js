import { combineReducers } from "redux";

import userReducer from "./common/User/reducer";
import serviceReducer from "./common/ServiceRequest/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  serviceRequest: serviceReducer,
});

export default rootReducer;
