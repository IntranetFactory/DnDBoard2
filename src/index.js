import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router";
import { createBrowserHistory } from "history";

import Dashboard from "./containers/Dashboard";
import DetailPage from "./containers/DetailPage";
import EditPage from "./containers/EditPage";

import configureStore from "./configureStore";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./styles.css";

const store = configureStore();
const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/:id/view" component={DetailPage} />
          <Route exact path="/:id/edit" component={EditPage} />
          <Route path="/" component={Dashboard} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
