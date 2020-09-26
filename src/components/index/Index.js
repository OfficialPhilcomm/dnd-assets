import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { ReactComponent as Patreon } from "../../img/patreon-brands.svg";

export default class Index extends Component {
  render() {
    return (
      <main className="index">
        <div className="index-welcome">
          <h1 className="index-welcome-header">DnD Assets</h1>
          <p className="index-welcome-paragraph">
            Welcome to the DnD Assets community. In this place you can find
            assets you can use for your campaign.
          </p>
          <p className="index-welcome-paragraph">
            You need a nice mission reward? Just pick a random one that you
            like.
          </p>
          <p className="index-welcome-paragraph">
            You need something more specific? The system is designed to help you
            filter the items so that in the end you get a good fitting item.
          </p>
          <p className="index-welcome-paragraph">
            Wanna get early access to new item releases or just support us so we
            can keep up adding to this ever growing item library? We have a
            Patreon <Patreon className="index-welcome-patreon" /> (not set up
            yet)
          </p>
        </div>
        <div className="index-link">
          <Link to={"/items"}>
            <button className="index-buttonGoToOverview">
              Go to item list
            </button>
          </Link>
        </div>
      </main>
    );
  }
}
