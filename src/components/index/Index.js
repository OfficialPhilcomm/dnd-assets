import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default class Index extends Component {
  render() {
    return (
      <main className="index">
        <h1 className="index-header">This is the header</h1>
        <div className="index-link">
          <Link to={"/list"}>
            <button className="index-buttonGoToOverview">Go to overview</button>
          </Link>
        </div>
      </main>
    );
  }
}
