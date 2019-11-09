import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Request from "./pages/Request";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/offer">Offer</Link>
          </li>
          <li>
            <Link to="/request">Rquest</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/offer">
          <Offer />
        </Route>
        <Route path="/request">
          <Request />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
