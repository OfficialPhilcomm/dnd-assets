import React, { Component } from "react";
import "./full-item-list.css";
import ItemBox from "./item-box/ItemBox";

export default class FullItemList extends Component {
  render() {
    return (
      <div className="fullItemList">
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
      </div>
    );
  }
}
