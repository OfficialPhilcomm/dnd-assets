import React, { Component } from "react";
import StringUtils from "../../StringUtils";
import FullItemList from "./full-item-list/FullItemList";
import "./list-all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import ItemController from "../../ItemController";

export default class ListAll extends Component {
  state = {
    filterOpened: false,
    filters: {},
  };

  filterToggle = () => {
    this.setState({ filterOpened: !this.state.filterOpened, filters: {} });
  };

  filterSubmit = (event) => {
    event.preventDefault();

    const playerLevel = event.target.elements.playerLevel.value;
    const rarity = event.target.elements.rarity.value;
    const racialOrigin = event.target.elements.racialOrigin.value;
    const unique = event.target.elements.unique.value;
    const itemType = event.target.elements.itemType.value;
    const cursed = event.target.elements.cursed.value;
    const elementalType = event.target.elements.elementalType.value;

    let filters = {};

    if (playerLevel !== "all") {
      filters.playerLevel = parseInt(playerLevel);
    }
    if (rarity !== "all") {
      filters.rarity = parseInt(rarity);
    }
    if (racialOrigin !== "all") {
      filters.racialOrigin = racialOrigin;
    }
    if (unique !== "all") {
      filters.unique = unique === "true" ? true : false;
    }
    if (itemType !== "all") {
      filters.itemType = itemType;
    }
    if (cursed !== "all") {
      filters.cursed = cursed === "true" ? true : false;
    }
    if (elementalType !== "all") {
      filters.elementalType = elementalType;
    }

    this.setState({ filters: filters });
  };

  render() {
    const filterOpened = this.state.filterOpened;

    return (
      <main className="listAll-main">
        <div>
          <div>
            <button
              className="listAll-filterToggle"
              onClick={this.filterToggle}
            >
              {filterOpened ? "Close filter" : "Open filter"}
              <FontAwesomeIcon icon={faFilter} />
            </button>
          </div>

          <form
            className={filterOpened ? "listAll-filter open" : "listAll-filter"}
            onSubmit={this.filterSubmit}
          >
            <div className="listAll-filterBox">
              <div>Player Level</div>
              <select name="playerLevel">
                <option value="all">All</option>
                <option value="0">Low level</option>
                <option value="1">Mid level</option>
                <option value="2">High level</option>
              </select>
            </div>
            <div className="listAll-filterBox">
              <div>Rarity</div>
              <select name="rarity">
                <option value="all">All</option>
                <option value="0">Common</option>
                <option value="1">Uncommon</option>
                <option value="2">Rare</option>
              </select>
            </div>
            <div className="listAll-filterBox">
              <div>Racial Origin</div>
              <select name="racialOrigin">
                <option value="all">All</option>
                {StringUtils.distinct(
                  ItemController.items.map((item) => item.racialOrigin)
                ).map((racialOrigin) => (
                  <option value={racialOrigin} key={racialOrigin}>
                    {racialOrigin}
                  </option>
                ))}
              </select>
            </div>
            <div className="listAll-filterBox">
              <div>Unique</div>
              <select name="unique">
                <option value="all">All</option>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>
            <div className="listAll-filterBox">
              <div>Item Type</div>
              <select name="itemType">
                <option value="all">All</option>
                {StringUtils.distinct(
                  ItemController.items.map((item) => item.itemType)
                ).map((itemType) => (
                  <option value={itemType} key={itemType}>
                    {itemType}
                  </option>
                ))}
              </select>
            </div>
            <div className="listAll-filterBox">
              <div>Cursed</div>
              <select name="cursed">
                <option value="all">All</option>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>
            <div className="listAll-filterBox">
              <div>Elemental Type</div>
              <select name="elementalType">
                <option value="all">All</option>
                {StringUtils.distinct(
                  ItemController.items.map((item) => item.elementalType)
                ).map((elementalType) => (
                  <option value={elementalType} key={elementalType}>
                    {elementalType}
                  </option>
                ))}
              </select>
            </div>

            <input type="submit" value="Apply filter" />
          </form>
        </div>
        <FullItemList filters={this.state.filters} />
      </main>
    );
  }
}
