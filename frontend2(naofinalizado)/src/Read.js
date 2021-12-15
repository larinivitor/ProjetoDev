import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getOngs } from "./api"

export const Read = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const ongs = await getOngs()
      setItems(ongs)
    }
    fetchItems()
  }, [])

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Todo List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(ong => (
                <tr key={ong._id}>
                  <td>
                    {ong.nome}
                  </td>
                  <td>
                    <Link to={`/edit/${ong.id}`}>Editar</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};