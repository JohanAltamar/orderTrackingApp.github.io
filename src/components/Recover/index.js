import React from "react";
import { useForm } from "react-hook-form";
import { email } from "../../utils/inputsValuesMessages";
import ErrorMessage from "../Errors/Message";

const RecoverPasswordContainer = () => {
  const { register, handleSubmit, formState, errors } = useForm({
    mode: "onChange",
  });

  const handleRecover = (data) => {
    console.log(data);
  };

  return (
    <section className="grid__padding mt-5">
      <form className="form__recover" onSubmit={handleSubmit(handleRecover)}>
        <h4 className="text-center">Recuperar Contraseña</h4>
        <input
          type="email"
          name="email"
          ref={register(email)}
          placeholder="Correo Electrónico"
        />
        <ErrorMessage error={errors.email} />

        <button
          className="btn btn-default btn-block"
          disabled={!formState.isValid}
        >
          Recuperar Contraseña
        </button>
      </form>
    </section>
  );
};

export default RecoverPasswordContainer;
