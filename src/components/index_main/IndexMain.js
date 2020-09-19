import React, { Component } from "react";
import FullItemList from "./full-item-list/FullItemList";
import "./index-main.css";

export default class IndexMain extends Component {
  render() {
    return (
      <main>
        <FullItemList />
      </main>
    );
  }
}
