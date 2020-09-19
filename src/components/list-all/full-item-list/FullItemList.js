import React, { Component } from "react";
import "./full-item-list.css";
import StringUtils from "../../../StringUtils";
import ItemBox from "./item-box/ItemBox";

export default class FullItemList extends Component {
  render() {
    return (
      <div className="fullItemList">
        {StringUtils.items.map((item) => (
          <ItemBox item={item} key={item.id} />
        ))}
      </div>
    );
  }
}
