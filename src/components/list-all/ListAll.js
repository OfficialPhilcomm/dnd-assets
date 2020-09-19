import React, { Component } from "react";
import FullItemList from "./full-item-list/FullItemList";
import "./list-all.css";

export default class ListAll extends Component {
  render() {
    return (
      <main>
        <FullItemList />
      </main>
    );
  }
}
