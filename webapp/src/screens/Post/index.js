import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";

import Single from "./Single";
import Form from "./Form";

export default ({}) => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}/share`} exact>
        <Form />
      </Route>

      <Route path={`${match.url}/:postId/:slug`} exact>
        <Single />
      </Route>
    </Switch>
  );
};
