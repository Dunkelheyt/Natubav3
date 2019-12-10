import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeroImage from "./components/heroimage/HeroImage";

class Main extends Component {
  render() {
    return (
      <div>
        <HeroImage />
        <div className="container">
          <h1 className="text-center">Natuba</h1>
          <ul>
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/conocenos"}>Conocenos</Link>
            </li>
            <li>
              <Link to={"/productos"}>Productos</Link>
            </li>
            <li>
              <Link to={"/ordenar"}>Ordenar</Link>
            </li>
            <li>
              <Link to={"/contacto"}>Contacto</Link>
            </li>
            <li>
              <Link to={"/encuentranos"}>Encuentranos</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;
