import React, { Component } from "react";

export default class ItemDetails extends Component {
  render() {
    const itemId = this.props.match.params.id;

    return <main>Item details for item {itemId}</main>;
  }
}
