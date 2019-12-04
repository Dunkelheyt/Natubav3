import React from "react";
import { Field, reduxForm } from "redux-form";

const required = value => (value ? undefined : "Requerido");
const maxLength = max => value =>
  value && value.length > max
    ? `Debe de ser ${max} caracteres ó menos`
    : undefined;
const maxLength15 = maxLength(15);
const maxLength25 = maxLength(25);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Dirección invalida de correo"
    : undefined;

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="mb-2 ">
    <label>{label}:</label>
    <label className="errorLetters">*</label>
    <div className="borderContact w50">
      <input
        {...input}
        placeholder={label}
        type={type}
        size="35"
        className="image hoverBorder"
      />
      {touched &&
        ((error && <p className="errorLetters">{error}</p>) ||
          (warning && <p className="errorLetters">{warning}</p>))}
    </div>
  </div>
);

const textAreaField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="mb-2">
    <label>{label}:</label>
    <label className="errorLetters w50">*</label>
    <div>
      <textarea
        className="image hoverBorder"
        rows="4"
        {...input}
        placeholder={label}
        type={type}
      />
      {touched &&
        ((error && <p className="errorLetters">{error}</p>) ||
          (warning && <p className="errorLetters">{warning}</p>))}
    </div>
  </div>
);

const ContactForm = props => {
  const { submitting } = props;
  return (
    <div className="rightBorder">
      <h1 className="text-center">Formulario de Contacto</h1>
      <form method="POST" action="https://formspree.io/dalmadxx@gmail.com">
        <Field
          name="nombre"
          type="text"
          component={renderField}
          label="Nombre"
          validate={[required, maxLength15]}
          className="borderContact"
        />
        <Field
          name="apellidos"
          type="text"
          component={renderField}
          label="Apellidos"
          validate={[required, maxLength25]}
        />
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Correo Electronico"
          validate={[required, email]}
        />
        <Field
          name="notes"
          type="text"
          component={textAreaField}
          label="Mensaje"
          validate={[required]}
        />
        <button className="btn btn-dark" type="submit" disabled={submitting}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "fieldLevelValidation" // a unique identifier for this form
})(ContactForm);
