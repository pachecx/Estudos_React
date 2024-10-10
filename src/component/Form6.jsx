import React, { useState } from "react";

const Form6 = () => {
  const [dados, setDados] = useState({
    nome: "",
    sobrenome: "",
    idade: "",
    profissao: "",
  });

  const handle = (e) => {
    const { name, value } = e.target;

    setDados((prev) => {
      const newDados = { ...prev, [name]: value };

      return newDados;
    });
  };

  const enviar = (e) => {
    e.preventDefault();

    if (!dados.nome || !dados.idade || !dados.profissao || !dados.sobrenome)
      return;

    console.log("dados enviados:", dados);
  };

  //console.log(dados)
  return (
    <div>
      <form
        onSubmit={enviar}
        style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}
      >
        <input onChange={handle} name="nome" type="text" placeholder="nome" />
        <input
          onChange={handle}
          name="sobrenome"
          type="text"
          placeholder="sobrenome"
        />
        <input
          onChange={handle}
          name="idade"
          type="number"
          placeholder="idade"
        />
        <input
          onChange={handle}
          name="profissao"
          type="text"
          placeholder="profissao"
        />
        <button type="submit"> salvar</button>
      </form>
    </div>
  );
};

export default Form6;
