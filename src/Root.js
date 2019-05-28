import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import reducer from "./reducers";

export default ({ children, initialstate = {} }) => {
  const store = createStore(
    reducer,
    initialstate,
    applyMiddleware(reduxPromise)
  );
  return <Provider store={store}>{children}</Provider>;
};
