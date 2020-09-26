import React, { Component } from "react";
import StringUtils from "../../../StringUtils";
import "./details-table.css";

export default class DetailsTable extends Component {
  render() {
    const item = this.props.item;

    return (
      <table className="detailsTable">
        <tbody className="detailsTable-tbody">
          {item.racialOrigin ? (
            <tr className="detailsTable-row">
              <td className="detailsTable-row-title">Racial Origin</td>
              <td className="detailsTable-row-content">{item.racialOrigin}</td>
            </tr>
          ) : null}

          {item.unique ? (
            <tr className="detailsTable-row">
              <td className="detailsTable-row-title">Unique</td>
              <td className="detailsTable-row-content">Yes</td>
            </tr>
          ) : null}

          {item.damage ? (
            <tr className="detailsTable-row">
              <td className="detailsTable-row-title">Damage</td>
              <td className="detailsTable-row-content">{item.damage}</td>
            </tr>
          ) : null}

          {item.weight ? (
            <tr className="detailsTable-row">
              <td className="detailsTable-row-title">Weight</td>
              <td className="detailsTable-row-content">
                {StringUtils.poundsToKilogram(item.weight)}kg ({item.weight}lbs)
              </td>
            </tr>
          ) : null}

          {item.properties ? (
            <tr className="detailsTable-row">
              <td className="detailsTable-row-title">Properties</td>
              <td className="detailsTable-row-content">{item.properties}</td>
            </tr>
          ) : null}
        </tbody>
      </table>
    );
  }
}
