import React, { Component } from "react";
import "./item-details.css";
import StringUtils from "../../StringUtils";
import DetailsTable from "./details-table/DetailsTable";
import CreatorInfo from "./creator-info/CreatorInfo";

export default class ItemDetails extends Component {
  render() {
    const itemId = this.props.match.params.id;

    const item = StringUtils.getItemById(itemId);
    const spriteUrl =
      item.spriteUrl || require(`../../img/sprites/${itemId}.png`);

    const isCreatorSame = item.author === item.artist;

    return (
      <main className="itemDetails-main">
        <div className="itemDetails-spriteContainer">
          <img
            className="itemDetails-spriteContainer-image"
            alt="Item Sprite"
            src={spriteUrl}
          />
        </div>
        <div className="itemDetails-name">{item.name}</div>
        <div className="itemDetails-description">{item.description}</div>
        <DetailsTable item={item} />
        <div className="itemDetails-creatorContainer">
          {isCreatorSame ? (
            <CreatorInfo text="Author and Artist" creatorTag={item.author} />
          ) : (
            <React.Fragment>
              <CreatorInfo text="Author" creatorTag={item.author} />
              <CreatorInfo text="Artist" creatorTag={item.artist} />
            </React.Fragment>
          )}
        </div>
      </main>
    );
  }
}
