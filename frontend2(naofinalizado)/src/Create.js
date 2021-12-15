import React from "react";
import { Form } from "./Form";
import { createOng } from "./api";
import { useHistory } from "react-router-dom";

export const Create = () => {
  const history = useHistory()
  
  const onSubmit = async (data) => {
    await createOng(data)
    history.push("/")
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Criar ONG</h3>
        <Form onSubmit={onSubmit} />
      </div>
    </div>
  );
};