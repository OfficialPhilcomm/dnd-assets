import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Index from "./components/index/Index";
import ListAll from "./components/list-all/ListAll";
import ItemDetails from "./components/item-details/ItemDetails";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/items" exact component={ListAll} />
          <Route path="/items/:id" exact component={ItemDetails} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
