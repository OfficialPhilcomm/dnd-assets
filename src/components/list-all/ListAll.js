import React, { Component } from "react";
import StringUtils from "../../StringUtils";
import FullItemList from "./full-item-list/FullItemList";
import "./list-all.css";

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

    const racialOrigin = event.target.elements.racialOrigin.value;
    const unique = event.target.elements.unique.value;
    const itemType = event.target.elements.itemType.value;
    const cursed = event.target.elements.cursed.value;

    let filters = {};

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

    this.setState({ filters: filters });
  };

  render() {
    const filterOpened = this.state.filterOpened;

    return (
      <main>
        <div>
          <div>
            <button onClick={this.filterToggle}>
              {filterOpened ? "Close filter" : "Open filter"}
            </button>
          </div>
          {filterOpened ? (
            <form className="listAll-filter" onSubmit={this.filterSubmit}>
              <div className="listAll-filterBox">
                <div>Racial Origin</div>
                <select name="racialOrigin">
                  <option value="all">All</option>
                  {StringUtils.distinct(
                    StringUtils.items.map((item) => item.racialOrigin)
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
                  <option value="false">Common</option>
                  <option value="true">Unique</option>
                </select>
              </div>
              <div className="listAll-filterBox">
                <div>Item Type</div>
                <select name="itemType">
                  <option value="all">All</option>
                  {StringUtils.distinct(
                    StringUtils.items.map((item) => item.itemType)
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
                  <option value="false">Not Cursed</option>
                  <option value="true">Cursed</option>
                </select>
              </div>

              <input type="submit" />
            </form>
          ) : null}
        </div>
        <FullItemList filters={this.state.filters} />
      </main>
    );
  }
}
