import React, { Component } from "react";
import { connect } from "react-redux";
import ThumbProducto from "./ThumbProducto";

class ProductosChips extends Component {
  componentDidMount() {
    console.log(this.props.itemDataChips);
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Productos Chips</h1>
        <hr />
        <div className="row">
          {this.props.itemDataChips.map(data => (
            <ThumbProducto key={data.id} info={data} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemDataChips: state.itemDataChips
  };
};

export default connect(mapStateToProps)(ProductosChips);
