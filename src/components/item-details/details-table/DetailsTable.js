import React, { Component } from "react";
import StringUtils from "../../../StringUtils";
import "./details-table.css";

export default class DetailsTable extends Component {
  render() {
    const item = this.props.item;

    const playerLevel =
      item.playerLevel === 0
        ? "Low level"
        : item.playerLevel === 1
        ? "Mid level"
        : item.playerLevel === 2
        ? "High level"
        : "Unknown level";

    const rarity =
      item.rarity === 0
        ? "Common"
        : item.rarity === 1
        ? "Uncommon"
        : item.rarity === 2
        ? "Rare"
        : "Unknown rarity";

    return (
      <table className="detailsTable">
        <tbody className="detailsTable-tbody">
          <tr className="detailsTable-row">
            <td className="detailsTable-row-title">Player Level</td>
            <td className="detailsTable-row-content">{playerLevel}</td>
          </tr>

          <tr className="detailsTable-row">
            <td className="detailsTable-row-title">Rarity</td>
            <td className="detailsTable-row-content">{rarity}</td>
          </tr>

          <tr className="detailsTable-row">
            <td className="detailsTable-row-title">Racial Origin</td>
            <td className="detailsTable-row-content">
              {StringUtils.humanize(item.racialOrigin)}
            </td>
          </tr>

          <tr className="detailsTable-row">
            <td className="detailsTable-row-title">Unique</td>
            <td className="detailsTable-row-content">
              {item.unique ? "Yes" : "No"}
            </td>
          </tr>

          <tr className="detailsTable-row">
            <td className="detailsTable-row-title">Item Type</td>
            <td className="detailsTable-row-content">
              {StringUtils.humanize(item.itemType)}
            </td>
          </tr>

          <tr className="detailsTable-row">
            <td className="detailsTable-row-title">Cursed</td>
            <td className="detailsTable-row-content">
              {item.cursed ? "Yes" : "No"}
            </td>
          </tr>

          {item.damage ? (
            <tr className="detailsTable-row">
              <td className="detailsTable-row-title">Damage</td>
              <td className="detailsTable-row-content">{item.damage}</td>
            </tr>
          ) : null}

          <tr className="detailsTable-row">
            <td className="detailsTable-row-title">Weight</td>
            <td className="detailsTable-row-content">
              {StringUtils.poundsToKilogram(item.weight)}kg ({item.weight}lbs)
            </td>
          </tr>

          {item.properties ? (
            <tr className="detailsTable-row">
              <td className="detailsTable-row-title">Properties</td>
              <td className="detailsTable-row-content">{item.properties}</td>
            </tr>
          ) : null}

          {item.customProperties.map((customProperty) => (
            <tr className="detailsTable-row" key={customProperty.name}>
              <td className="detailsTable-row-title">{customProperty.name}</td>
              <td className="detailsTable-row-content">
                {customProperty.text}
              </td>
            </tr>
          ))}

          {item.armorClass ? (
            <tr className="detailsTable-row">
              <td className="detailsTable-row-title">Armor Class</td>
              <td className="detailsTable-row-content">{item.armorClass}</td>
            </tr>
          ) : null}

          {item.hitPoints ? (
            <tr className="detailsTable-row">
              <td className="detailsTable-row-title">Hit Points</td>
              <td className="detailsTable-row-content">{item.hitPoints}</td>
            </tr>
          ) : null}

          {item.speed ? (
            <tr className="detailsTable-row">
              <td className="detailsTable-row-title">Speed</td>
              <td className="detailsTable-row-content">{item.speed}</td>
            </tr>
          ) : null}

          {item.skills ? (
            <tr className="detailsTable-row">
              <td className="detailsTable-row-title">Skills</td>
              <td className="detailsTable-row-content">{item.skills}</td>
            </tr>
          ) : null}

          {item.elementalType ? (
            <tr className="detailsTable-row">
              <td className="detailsTable-row-title">Elemental Type</td>
              <td className="detailsTable-row-content">
                {StringUtils.humanize(item.elementalType)}
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    );
  }
}
