import React, { Component } from "react";
import { Link } from "react-router-dom";

class Productos extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Productos</h1>
        <h1 className="text-center">Natuba</h1>
        <ul>
          <li>
            <Link to={"/productos/chips"}>Chips</Link>
          </li>
          <li>
            <Link to={"/productos/mix"}>Mix</Link>
          </li>
          <li>
            <a href="/">Bowls</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Productos;
