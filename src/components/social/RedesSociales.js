import React, { Component } from "react";

class RedesSociales extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1>Redes Sociales</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          varius urna faucibus nisi mollis, in ultrices nibh aliquam. Vestibulum
          vel dolor non ex auctor vulputate vitae a nisi. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <div className="row">
          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
            <a href="https://www.facebook.com/Natubamx/">
              {" "}
              <img
                className="image zoom"
                src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-512.png"
                alt="Facebook"
              />
            </a>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
            <a href="https://www.instagram.com/natubamx/">
              <img
                className="image zoom"
                src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-04-512.png"
                alt="Facebook"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default RedesSociales;
