import React, { useState } from "react";

const Form5 = () => {
  const [jogos, setJogos] = useState({});

  const handleJogos = (e) => {
    const { name, value } = e.target;

    setJogos((prev) => {
      const newJogos = { ...prev, [name]: value };

      return newJogos;
    });
  };

  const submitJogos = (e) => {
    e.preventDefault();

    if (!Object.values(jogos).length) return;

    console.log(jogos);
  };

  console.log(jogos);
  return (
    <div>
      <form onSubmit={submitJogos}>
        <input
          name="jogos"
          onChange={handleJogos}
          type="text"
          placeholder="jogos"
        />
        <input
          name="genero"
          onChange={handleJogos}
          type="text"
          placeholder="genero"
        />
        <input
          name="modo"
          onChange={handleJogos}
          type="text"
          placeholder="modo"
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default Form5;
