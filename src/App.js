import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexMain from "./components/index_main/IndexMain";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={IndexMain} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
