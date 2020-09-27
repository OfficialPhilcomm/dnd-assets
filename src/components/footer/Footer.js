import React, { Component } from "react";
import "./footer.css";
import { ReactComponent as Patreon } from "../../img/patreon-brands.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-copyright">&copy;Philipp Schlesinger</div>
        <div className="footer-socialMedia">
          <Patreon className="footer-socialMedia-patreon" />
        </div>
      </footer>
    );
  }
}
