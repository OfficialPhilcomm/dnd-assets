import React, { Component } from "react";
import "./item-details.css";
import StringUtils from "../../StringUtils";
import DetailsTable from "./details-table/DetailsTable";

export default class ItemDetails extends Component {
  render() {
    const itemId = this.props.match.params.id;

    const item = StringUtils.getItemById(itemId);
    const spriteUrl =
      item.spriteUrl || require(`../../img/sprites/${itemId}.png`);

    return (
      <main>
        <div className="itemDetails-spriteContainer">
          <img className="itemDetails-spriteContainer-image" src={spriteUrl} />
        </div>
        <div className="itemDetails-name">{item.name}</div>
        <div className="itemDetails-description">{item.description}</div>
        <DetailsTable item={item} />
      </main>
    );
  }
}
