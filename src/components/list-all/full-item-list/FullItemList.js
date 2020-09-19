import React, { Component } from "react";
import "./full-item-list.css";
import ItemBox from "./item-box/ItemBox";

export default class FullItemList extends Component {
  render() {
    const items = [
      {
        name: "mystic spear",
        spriteUrl:
          "https://image.shutterstock.com/image-vector/scratchy-ink-drawing-spear-260nw-46828840.jpg",
      },
      {
        name: "some sword",
        spriteUrl:
          "https://image.shutterstock.com/image-vector/sword-hand-drawn-sketch-vector-260nw-480665485.jpg",
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ];

    return (
      <div className="fullItemList">
        {items.map((item) => (
          <ItemBox item={item} />
        ))}
      </div>
    );
  }
}
