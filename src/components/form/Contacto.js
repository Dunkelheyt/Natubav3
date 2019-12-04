import React, { Component } from "react";
import ContactForm from "./ContactForm";
import RedesSociales from "./../social/RedesSociales";

class Contacto extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Contactanos!</h1>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            varius urna faucibus nisi mollis, in ultrices nibh aliquam.
            Vestibulum vel dolor non ex auctor vulputate vitae a nisi. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius
            urna faucibus nisi mollis, in ultrices nibh aliquam. Vestibulum vel
            dolor non ex auctor vulputate vitae a nisi. Pellentesque posuere
            nisi at rhoncus cursus. Pellentesque consequat dui ipsum, et
            fermentum magna sodales dapibus.
          </p>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <ContactForm />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <RedesSociales />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacto;
