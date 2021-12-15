import React from "react";
import { useForm } from "react-hook-form";

export const Form = ({ ong, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { nome: ong ? ong.nome : "" },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="text">Nome:</label>
        <input className="form-control" ref={register} type="text" name="nome" id="nome"/>
      </div>
      <div className="form-group">
        <label htmlFor="text">Rua:</label>
        <input className="form-control" ref={register} type="text" name="rua" id="rua"/>
      </div>
      <div className="form-group">
        <label htmlFor="text">Bairro:</label>
        <input className="form-control" ref={register} type="text" name="bairro" id="bairro"/>
      </div>
      <div className="form-group">
        <label htmlFor="text">Cidade:</label>
        <input className="form-control" ref={register} type="text" name="cidade" id="cidade"/>
      </div>
      <div className="form-group">
        <label htmlFor="text">Data de inauguração:</label>
        <input className="form-control" ref={register} type="text" name="data_inauguracao" id="data_inauguracao"/>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Salvar ONG
        </button>
      </div>
    </form>
  );
};