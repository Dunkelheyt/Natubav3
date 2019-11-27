import React, { Component } from "react";
import DisplayProducto from "./DisplayProducto";
import { connect } from "react-redux";
import { getProductDataJSON } from "./../../redux/actions/items";
import productMix from "./../../json/productMix.json";

class ProductosChipsPaginaDesc extends Component {
  componentDidMount() {
    this.props.fetchProduct(productMix);
  }

  render() {
    let id = this.props.match.params.item_id;
    let value = this.props.itemData.filter(d => d.pageId === id);
    return (
      <div className="container">
        {value.map(data => (
          <DisplayProducto key={data.id} info={data} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemData: state.itemData
  };
};

const mapDispatchToProps = dispatch => {
  return { fetchProduct: dataJson => dispatch(getProductDataJSON(dataJson)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductosChipsPaginaDesc);
