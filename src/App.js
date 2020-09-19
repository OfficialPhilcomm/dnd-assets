import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListAll from "./components/list-all/ListAll";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/list" exact component={ListAll} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
