import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import rootReducer from "./reducer";

// thunk
const middleware = [thunkMiddleware];

// logger
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

// Redux DevTools Extension
const composeEnhancers = (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let store = createStore(
  combineReducers(rootReducer),
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
