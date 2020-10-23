import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "components/Navbar";
import Home from "screens/Home";
import About from "screens/About";
import Wall from "screens/Wall";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="block clear-both" style={{ paddingBottom: "52px" }} />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/wall">
            <Wall />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
