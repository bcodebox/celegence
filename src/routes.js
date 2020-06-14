import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Survey from "./containers/Survey";

export default (
  <>
    <Switch>
      <Route exact path="/survey" component={Survey} />
      <Redirect exact path="/" to="/survey" />
    </Switch>
  </>
);
