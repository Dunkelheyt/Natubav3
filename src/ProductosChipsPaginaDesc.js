import React, { Component } from "react";
import { connect } from "react-redux";

class ProductosChipsPaginaDesc extends Component {
  render() {
    let id = this.props.match.params.item_id;
    let value = this.props.itemDataChips.filter(d => d.pageId === id);
    return (
      <div className="container">
        <h1 className="text-center">{value[0].productoNombre}</h1>
        <p>{id}?</p>
        <p>
          {value[0].desc},,,,,,,,,,,, {value[0].tipoProducto}?
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemDataChips: state.itemDataChips
  };
};

export default connect(mapStateToProps)(ProductosChipsPaginaDesc);
