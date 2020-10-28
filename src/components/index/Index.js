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
          <h2 className="index-welcome-header">Funding</h2>
          <p className="index-welcome-paragraph">
            Since this project provided to you for free, and the team has
            consistent expenses, we need to go for alternative funding sources.
            For once, we have our Patreon <FontAwesomeIcon icon={faPatreon} />.
            It helps us keep the service running, and gives you the benefit of
            insights and early access to future releases.
          </p>
          <p className="index-welcome-paragraph">
            To make the project costs as transparent as possible to you, here is
            the estimated monthly cost and how it was calculated:
          </p>
          <ul>
            <li>Domain: 4$</li>
            <li>Frontend Hosting: 7$</li>
            <li>Backend Hosting: 5$</li>
            <li>FontAwesome (Icons): 9$</li>
          </ul>
          <p className="index-welcome-paragraph">
            Together, this is a total amount of 25$. With just 2$ a month, you
            can help keep this project up. Only if you can afford it though. Of
            course, we appreciate everything that goes above that. This project
            was never intended to make a lot of money, though it sure motivates
            keeping this project expanding.
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
