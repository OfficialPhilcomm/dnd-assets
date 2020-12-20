import React, { Component } from "react";
import "./creator-info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import CreatorController from "../../../creators/CreatorController";

export default class CreatorInfo extends Component {
  render() {
    const creatorTag = this.props.creatorTag;

    const creator = CreatorController.getCreatorByTag(creatorTag);

    return (
      <div className="creatorInfo">
        <div className="creatorInfo-creatorName">
          <span>{this.props.text}: </span>
          <span>{creator.name}</span>
        </div>

        <div className="creatorInfo-socialMedia">
          {creator.socialMedia.map((socialMedia) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={
                socialMedia.platform === "instagram"
                  ? `https://www.instagram.com/${socialMedia.tag}/`
                  : socialMedia.platform === "twitter"
                  ? `https://twitter.com/${socialMedia.tag}/`
                  : socialMedia.platform === "youtube"
                  ? `https://www.youtube.com/c/${socialMedia.tag}`
                  : "/#"
              }
              key={socialMedia.platform}
            >
              <div
                className={`creatorInfo-socialMedia-container ${socialMedia.platform}`}
              >
                <FontAwesomeIcon
                  icon={
                    socialMedia.platform === "instagram"
                      ? faInstagram
                      : socialMedia.platform === "twitter"
                      ? faTwitter
                      : socialMedia.platform === "youtube"
                      ? faYoutube
                      : null
                  }
                  className="creatorInfo-socialMedia-container-logo"
                />
                <div className="creatorInfo-socialMedia-container-username">
                  @{socialMedia.tag}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }
}
