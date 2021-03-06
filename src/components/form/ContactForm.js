import React from "react";
import useForm from "react-hook-form";

import "./../../scss/forms.scss";

export default function ContactForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input
  const mailRegex = /^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/;
  return (
    <div className="container">
      <h1 className="text-center">Formulario de Contacto</h1>
      <form
        method="POST"
        action="https://formspree.io/itzelmilaneshernandez@gmail.com"
      >
        <div className="form-group">
          <label>Nombre:</label>
          <input
            className="form-control border border-success"
            name="nombre"
            ref={register({
              required: true,
              maxLength: 12,
              pattern: /^[A-Za-z]+$/i
            })}
          />
          {errors.nombre && (
            <p className="warning">
              Este campo es obligatorio y/ó tiene caracteres invalidos.
            </p>
          )}
        </div>
        <div className="form-group">
          <label>Apellidos:</label>
          <input
            className="form-control border border-success"
            name="apellidos"
            ref={register({
              required: true,
              maxLength: 25,
              pattern: /^[A-Za-z]+$/i
            })}
          />
          {errors.nombre && (
            <p className="warning">
              Este campo es obligatorio y/ó tiene caracteres invalidos.
            </p>
          )}
        </div>
        <div className="form-group">
          <label>Correo electrónico:</label>
          <input
            className="form-control border border-success"
            name="correo"
            ref={register({
              required: true,
              maxLength: 20,
              pattern: /^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/
            })}
          />
          {errors.correo && (
            <p className="warning">
              Este campo es obligatorio y/ó tiene caracteres invalidos.
            </p>
          )}
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">
            Escribe aqui tu mensaje:
          </label>
          <textarea
            className="form-control border border-success"
            rows="3"
            name="mensaje"
            ref={register({ required: true, maxLength: 150 })}
          />
          {errors.correo && (
            <p className="warning">Este campo es obligatorio.</p>
          )}
        </div>
        <input
          className="btn btn-outline-success mr-1"
          //style={{ display: "block", marginTop: 8, width: 75 }}
          value="Enviar"
          type="submit"
        />
        <input
          className="btn btn-outline-success ml-1"
          //style={{ display: "block", marginTop: 8, width: 75 }}
          type="reset"
          value="Borrar"
        />
      </form>
    </div>
  );
}
