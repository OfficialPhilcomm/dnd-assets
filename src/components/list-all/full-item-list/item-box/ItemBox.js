import React, { Component } from "react";
import "./item-box.css";
import { Link } from "react-router-dom";
import QuestionMark from "../../../../img/question-circle-regular.svg";

export default class ItemBox extends Component {
  render() {
    const item = this.props.item || {};

    const itemId = item.id;
    const itemSpriteUrl = item.spriteUrl || QuestionMark;
    const itemName = item.name || "Name missing";

    return (
      <Link to={`/item/${itemId}`}>
        <div className="fullItemList-itemBox">
          <img
            className="fullItemList-itemBox-image"
            src={itemSpriteUrl}
            alt={item.name}
          />
          <div className="fullItemList-itemBox-name">{itemName}</div>
        </div>
      </Link>
    );
  }
}
