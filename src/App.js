import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import configureStore from "./store/configureStore";
import routes from "./routes";

const store = configureStore();
const browserHistory = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <Main history={browserHistory} />
  </Provider>
);

const Main = ({ history }) => <Router history={history}>{routes}</Router>;

export default App;
