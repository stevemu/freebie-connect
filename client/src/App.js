import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";

import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Request from "./pages/Request";
import Profile from "./pages/Profile";
import rootReducer from "./reducers";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";
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

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <NavBar />
          <Switch>
            <PrivateRoute path="/offer">
              <Offer />
            </PrivateRoute>
            <PrivateRoute path="/request">
              <Request />
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
            <Route path="/">
              <Home />
            </Route>
            
          </Switch>
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
