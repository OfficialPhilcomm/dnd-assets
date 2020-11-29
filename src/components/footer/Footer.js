import React, { Component } from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPatreon } from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-copyright">&copy;Philipp Schlesinger</div>
        <div className="footer-socialMedia">
          <span>Support us on Patreon </span>
          <FontAwesomeIcon
            icon={faPatreon}
            className="footer-socialMedia-patreon"
          />
        </div>
      </footer>
    );
  }
}
