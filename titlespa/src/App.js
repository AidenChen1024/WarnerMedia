import React from "react";
import Home from "./pages/homePage";
import Details from "./pages/detailsPage";
import Navbar from "./UI/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
