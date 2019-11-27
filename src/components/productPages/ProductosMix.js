import React, { Component } from "react";
import ThumbProducto from "./ThumbProducto";
import { connect } from "react-redux";
import { getProductDataJSON } from "./../../redux/actions/items";
import productMix from "./../../json/productMix.json";

class ProductosMix extends Component {
  componentDidMount() {
    this.props.fetchProduct(productMix);
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Productos Mix</h1>
        <p className="container">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <hr />
        <div className="row">
          {this.props.itemData.map(data => (
            <ThumbProducto key={data.id} info={data} />
          ))}
        </div>
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
)(ProductosMix);
