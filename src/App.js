import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Home from "./pages/Home";
import ShowDetail from "./pages/ShowDetail";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route path="(/|/shows)" exact>
          <Home />
        </Route>
        <Route path="/shows/:id">
          <ShowDetail />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
