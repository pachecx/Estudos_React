import React, { useState } from "react";

const Form7 = () => {
  const [dados, setDados] = useState({
    nome:"",
    sobrenome:"",
    idade:"",
    profissao:""
  });

  const handle = (e) => {
    const {name, value} = e.target;

    setDados((prev) => {
        const newDados = {...prev, [name]:value}
        return newDados
    })
  };

  const salvar = (e) => {
    e.preventDefault()

    setTimeout(() => {
        
        console.log("Novo colaborador:", dados)

        setDados({
            nome:"",
            sobrenome:"",
            idade:"",
            profissao:""
          })
    }, 2000)
  };

  return (
    <form onSubmit={salvar}>
      <input
        onChange={handle}
        name="nome"
        value={dados.nome}
        type="text"
        placeholder="nome"
      />
      <input
        onChange={handle}
        name="sobrenome"
        value={dados.sobrenome}
        type="text"
        placeholder="sobrenome"
      />
      <input
        onChange={handle}
        name="idade"
        value={dados.idade}
        type="number"
        placeholder="idade"
      />
      <input
        onChange={handle}
        name="profissao"
        value={dados.profissao}
        type="text"
        placeholder="profissão"
      />
      <button type="submit">salvar</button>
    </form>
  );
};

export default Form7;
