import React, { Component } from "react";
import "./creator-info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default class CreatorInfo extends Component {
  render() {
    return (
      <div className="creatorInfo">
        <div className="creatorInfo-creatorName">
          <span>Creator: </span>
          <span>Will</span>
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
