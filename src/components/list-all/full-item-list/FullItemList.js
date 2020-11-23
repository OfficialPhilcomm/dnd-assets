import React, { Component } from "react";
import "./full-item-list.css";
import StringUtils from "../../../StringUtils";
import ItemBox from "./item-box/ItemBox";
import ItemController from "../../../ItemController";

export default class FullItemList extends Component {
  render() {
    const filters = this.props.filters;
    const items = ItemController.items;

    const filteredItems = items.filter((item) =>
      StringUtils.deepEqual({ ...item, ...filters }, item)
    );

    return (
      <div className="fullItemList">
        {filteredItems.map((item) => (
          <ItemBox item={item} key={item.id} />
        ))}
      </div>
    );
  }
}
