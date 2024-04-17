import React from "react";
import { Propsp } from "../component/Props";
import { Developer } from "../component/developer";
import { Console } from "../component/Console";
import { Cidade } from "../component/Cidade";
import { FuncaoProps } from "../component/FuncaoProps";
import { FuncoesDois } from "../component/FuncoesDois";

export const Props = () => {
  const event = () => {
    console.log("Deu certo");
  };

  const eventDois = () => {
    console.log("Essa é a segunda PropFunction")
  }

  return (
    <div>
      <h1>Props:</h1>
      <Propsp teste="testa no componente filho" />

      <Developer
        nome="Matheus"
        idade={29}
        area="FullStack"
        staks="React e Node"
      />

      <Console nome="PS4" lancamento={2014} jogos={999} acessorios={10} />

      <Cidade cidade="São Luis" estado="Maranhão" habitantes={1200000} />
      <FuncaoProps myEvent={event} />

      <FuncoesDois myEvent={eventDois}/>
    </div>
  );
};
