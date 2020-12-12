import React, { Component } from "react";
import "./creator-info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import CreatorController from "../../../creators/CreatorController";

export default class CreatorInfo extends Component {
  render() {
    const authorTag = this.props.author;
    const artistTag = this.props.artist;

    const creator = CreatorController.getCreatorByTag(authorTag);

    return (
      <div className="creatorInfo">
        <div className="creatorInfo-creatorName">
          <span>Creator: </span>
          <span>{creator.name}</span>
        </div>
        <div className="creatorInfo-socialMedia">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/"
          >
            <div className="creatorInfo-socialMedia-container instagram">
              <FontAwesomeIcon
                icon={faInstagram}
                className="creatorInfo-socialMedia-container-logo"
              />
              <div className="creatorInfo-socialMedia-container-username">
                @will
              </div>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/"
          >
            <div className="creatorInfo-socialMedia-container twitter">
              <FontAwesomeIcon
                icon={faTwitter}
                className="creatorInfo-socialMedia-container-logo"
              />
              <div className="creatorInfo-socialMedia-container-username">
                @will
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
