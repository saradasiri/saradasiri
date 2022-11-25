import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer";

const rootReducers = combineReducers({ userReducer });

export const Store = createStore(rootReducers, applyMiddleware(thunk));
