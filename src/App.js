import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import "./App.css";
import LoadingSpinner from "./components/ui/loading";

const Home = React.lazy(() => import("./pages/Home"));
const ShowDetail = React.lazy(() => import("./pages/ShowDetail"));

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/shows" />
          </Route>
          <Route path="/shows" exact>
            <Home />
          </Route>
          <Route path="/shows/:id">
            <ShowDetail />
          </Route>
        </Switch>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
