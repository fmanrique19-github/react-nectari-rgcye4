import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import LogIn from "../LogIn";

export default function Router(){
  return(
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/">
          <LogIn/>
        </Route>
      </Switch>
    </Router>
  )
}
