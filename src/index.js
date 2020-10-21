import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Pdc from "./Pages/Pdc";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/IndSpace" exact={true} component={Home} />
      <Route path="/IndSpace/login" exact={true} component={Login} />
      <Route path="/IndSpace/pdc" exact={true} component={Pdc} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
