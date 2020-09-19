import React, { Component } from "react";
import "./item-box.css";
import QuestionMark from "../../../../img/question-circle-regular.svg";

export default class ItemBox extends Component {
  render() {
    const item = this.props.item || {};

    const itemSpriteUrl = item.spriteUrl || QuestionMark;
    const itemName = item.name || "Name missing";

    return (
      <div className="fullItemList-itemBox">
        <img className="fullItemList-itemBox-image" src={itemSpriteUrl} />
        <div className="fullItemList-itemBox-name">{itemName}</div>
      </div>
    );
  }
}
