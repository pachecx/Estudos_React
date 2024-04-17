import React from "react";

export const Console = ({nome, lancamento, jogos, acessorios}) => {
  return (
    <div>
      <h1>Nome: {nome}</h1>
      <h2>Lançamento: {lancamento}</h2>
      <h2>Jogos: {jogos}</h2>
      <h2>Acessorios: {acessorios}</h2>
    </div>
  );
};
