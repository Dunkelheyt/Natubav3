import React, { Component } from "react";
import ContactForm from "./ContactForm";
import showResults from "./showResults";

class Contacto extends Component {
  render() {
    return (
      <div className="container">
        <h1>Contactanos!</h1>
        <ContactForm onSubmit={showResults} />
      </div>
    );
  }
}

export default Contacto;
