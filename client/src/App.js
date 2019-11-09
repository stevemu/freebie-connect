import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Request from "./pages/Request";
import rootReducer from "./reducers";
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
// import NavBar from './components/NavBar';

// redux stuff
const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
let persistor = persistStore(store);

// auth stuff
// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

function App() {
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Auth0Provider
          domain={config.domain}
          client_id={config.clientId}
          redirect_uri={window.location.origin}
          onRedirectCallback={onRedirectCallback}
        >
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
                  <Link to="/request">Request</Link>
                </li>
              </ul>
            </nav>
            {/* <NavBar /> */}
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
        </Auth0Provider>
      </PersistGate>
    </Provider>

  );
}

export default App;
