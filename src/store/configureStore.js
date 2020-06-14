import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import rootReducer from "../reducers";

const history = createBrowserHistory();

const configureStore = initialState => {
  const middlewares = [routerMiddleware(history)];
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextReducer = connectRouter(history)(rootReducer);
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default configureStore;
