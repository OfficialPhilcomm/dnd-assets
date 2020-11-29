import React, { Component } from "react";
import "./artist-info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default class ArtistInfo extends Component {
  render() {
    return (
      <div className="artistInfo">
        <div className="artistInfo-artistName">
          <span>Artist: </span>
          <span>Will</span>
        </div>
        <div className="artistInfo-socialMedia">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/"
          >
            <div className="artistInfo-socialMedia-container instagram">
              <FontAwesomeIcon
                icon={faInstagram}
                className="artistInfo-socialMedia-container-logo"
              />
              <div className="artistInfo-socialMedia-container-username">
                @will
              </div>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/"
          >
            <div className="artistInfo-socialMedia-container twitter">
              <FontAwesomeIcon
                icon={faTwitter}
                className="artistInfo-socialMedia-container-logo"
              />
              <div className="artistInfo-socialMedia-container-username">
                @will
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
