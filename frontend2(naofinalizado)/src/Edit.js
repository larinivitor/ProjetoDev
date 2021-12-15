import React, { useState, useEffect } from "react";
import { Form } from "./Form";
import { useRouteMatch, useHistory } from "react-router-dom";
import { getOng, updateOng } from "./api";

export const Edit = () => {
  const match = useRouteMatch()
  const [ong, setOng] = useState();
  const history = useHistory()

  useEffect(() => {
    const fetchOng = async () => {
      const ong = await getOng(match.params.id)
      setOng(ong)
    }
    fetchOng()
  });

  const onSubmit = async (data) => {
    await updateOng(data, match.params.id)
    history.push("/")
  }

  return ong ? (
    <div className="container">
      <div className="mt-3">
        <h3>Editar ONG</h3>
        <Form ong={ong} onSubmit={onSubmit}/>
      </div>
    </div>
  ) : (
    <div>Carregando...</div>
  );
};