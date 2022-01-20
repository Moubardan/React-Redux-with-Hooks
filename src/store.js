import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const inisialState = {};

const middlware = [thunk];

const store = createStore(
  rootReducer,
  inisialState,
  composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
