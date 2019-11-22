import React, { Component } from "react";
import { connect } from "react-redux";
import ThumbProducto from "./ThumbProducto";

class ProductosMix extends Component {
  componentDidMount() {
    console.log(this.props.itemDataChips);
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Productos Mix</h1>
        <hr />
        <div className="row">
          {this.props.itemDataMix.map(data => (
            <ThumbProducto key={data.id} info={data} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemDataMix: state.itemDataMix
  };
};

export default connect(mapStateToProps)(ProductosMix);
