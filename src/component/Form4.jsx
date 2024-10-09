import React, { useState } from "react";

const Form4 = () => {
  const [dados, setDados] = useState({});

  const handleDados = (e) => {
    const { name, value } = e.target;

    setDados((prev) => {
      const newDados = { ...prev, [name]: value };

      return newDados;
    });
  };

  const submitDados = (e) => {
    e.preventDefault();

    console.log("Dados salvos:", dados)
  };

  console.log(dados);

  return (
    <div>
      <form onSubmit={submitDados}>
        <input
          name="nome"
          onChange={handleDados}
          type="text"
          placeholder="Nome"
        />
        <input
          name="idade"
          onChange={handleDados}
          type="number"
          placeholder="Idade"
        />
        <input
          name="profissao"
          onChange={handleDados}
          type="text"
          placeholder="Profissão"
        />
        <button type="submit">salvar</button>
      </form>
    </div>
  );
};

export default Form4;
