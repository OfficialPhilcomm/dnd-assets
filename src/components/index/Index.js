import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPatreon } from "@fortawesome/free-brands-svg-icons";

export default class Index extends Component {
  render() {
    return (
      <main className="index">
        <div className="index-welcome">
          <h1 className="index-welcome-header">Welcome</h1>
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
          <h1 className="index-welcome-header">Funding</h1>
          <p className="index-welcome-paragraph">
            Since this project is provided to you for free, and the team has
            ongoing expenses, we need to go for alternative funding sources. For
            once, we have our Patreon <FontAwesomeIcon icon={faPatreon} />. It
            helps us keep the service running, and gives you the benefit of
            insights and early access to future releases.
          </p>
          <p className="index-welcome-paragraph">
            To make the project costs as transparent as possible to you, here is
            the estimated monthly cost and how it was calculated:
          </p>
          <ul className="index-welcome-list">
            <li>Domain: 4$</li>
            <li>Frontend Hosting: 7$</li>
            <li>Backend Hosting: 5$</li>
            <li>FontAwesome (Icons): 9$</li>
          </ul>
          <p className="index-welcome-paragraph">
            Together, this is a total amount of 25$. With just 2$ a month, you
            can help keep this project up. Only if you can afford it though. Of
            course, we appreciate everything that goes above that. This project
            was never intended to make us money, though it sure motivates
            keeping this project expanding.
          </p>
        </div>
        <div className="index-link">
          <Link to={"/items"}>
            <button className="index-buttonGoToOverview">
              Click here for the full item list
            </button>
          </Link>
        </div>
      </main>
    );
  }
}
