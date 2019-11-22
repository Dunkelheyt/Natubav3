import React from "react";
import { Link } from "react-router-dom";

class ThumbProducto extends React.Component {
  render() {
    const { info } = this.props; // ES6 destructuring

    return (
      <div className="col-sm-12 col-md-12 col-lg-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 col-sm-12">
              <img className="img-fluid rounded" src={info.img} alt="Testing" />
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12">
              <Link to={"/productos/" + info.tipoProducto + "/" + info.pageId}>
                <h1> {info.productoNombre}</h1>
                <p>{info.desc}</p>
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default ThumbProducto;
