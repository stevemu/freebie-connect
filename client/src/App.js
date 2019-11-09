import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./reducers";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Request from "./pages/Request";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
