import React, { Component } from "react";
import "./item-box.css";
import { Link } from "react-router-dom";
import QuestionMark from "../../../../img/question-circle-regular.svg";

export default class ItemBox extends Component {
  getSprite(itemId) {
    try {
      return require(`../../../../img/sprites/${itemId}.png`);
    } catch (err) {
      return QuestionMark;
    }
  }

  render() {
    const item = this.props.item || {};

    const itemId = item.id;

    const itemSpriteUrl = this.getSprite(itemId);
    const itemName = item.name || "Name missing";

    return (
      <div className={`fullItemList-itemBox ${item.elementalType}`}>
        <Link to={`/items/${itemId}`}>
          <img
            className="fullItemList-itemBox-image"
            src={itemSpriteUrl}
            alt={item.name}
          />
          <div className="fullItemList-itemBox-name">{itemName}</div>
        </Link>
      </div>
    );
  }
}
