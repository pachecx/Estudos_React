/* eslint-disable react/jsx-key */
import React, { useState } from "react";

const Todo1 = () => {
  

  return (
    <div>
      <form onSubmit={}>
        <input
          onChange={}
          name="atividade"
          type="text"
          placeholder="adicionar atividade"
          value={}
        />
        <button type="submit">Salvar</button>
      </form>

      {atividades.length === 0 ? (
        <p>Sem atividades</p>
      ) : (
        atividades.map((atividade, index) => (
          <div key={index}>
            <p>{atividade}</p>
            <button>excluir</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Todo1;
