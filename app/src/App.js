import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="login" />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashbord" component={Dashboard} />
          {/* for invalid urls */}
          <Route
            path="*"
            component={() => {
              return <h1 align="center">Error 404</h1>;
            }}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
