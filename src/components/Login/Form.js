import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import ErrorMessage from "../Errors/Message";
import { email, password } from "../../utils/inputsValuesMessages";

const LoginForm = () => {
  const { register, handleSubmit, formState, errors } = useForm({
    mode: "onChange",
  });

  const handleUserLogin = (data) => {
    console.log(data);
  };

  return (
    <form className="form__login" onSubmit={handleSubmit(handleUserLogin)}>
      <input
        className="mb-4"
        type="email"
        name="email"
        placeholder="Correo Electrónico"
        ref={register(email)}
      />
      <ErrorMessage error={errors.email} />

      <input
        className="mb-3"
        name="password"
        type="password"
        placeholder="Contraseña"
        ref={register(password)}
      />
      <ErrorMessage error={errors.password} />

      <Link to="/recover-password">
        <p className="mb-2">Olvidé mi contraseña</p>
      </Link>
      <Link to="/register">
        <p className="mb-2">Entraré por primera vez</p>
      </Link>
      <button
        className="btn btn-success btn-block mb-2"
        disabled={!formState.isValid}
      >
        Entrar
      </button>
      <button className="btn btn-default btn-block">Entrar con Google</button>
    </form>
  );
};

export default LoginForm;
