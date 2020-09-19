import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Index from "./components/index/Index";
import ListAll from "./components/list-all/ListAll";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/list" exact component={ListAll} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
