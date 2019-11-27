import React, { Component } from "react";
import logo from "./../../imgs/logo.png";

class HeroImage extends Component {
  render() {
    return (
      <div className="hero-image text-center">
        <img
          alt="banner"
          className="img-fluid scale-in-hor-center"
          src={logo}
        />
      </div>
    );
  }
}

export default HeroImage;
