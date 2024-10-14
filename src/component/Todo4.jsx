import React, { useState } from "react";

const Todo4 = () => {
  const [handleAtividade, setHandle] = useState("");
  const [atividade, setAtividade] = useState([]);

  const salvar = (e) => {
    e.preventDefault();

    if (handleAtividade) {
      setAtividade((prev) => {
        const newhandle = [
          ...prev,
          { atividade: handleAtividade, id: Date.now() },
        ];

        setHandle("");
        return newhandle;
      });
    }
  };

  const remover = (id) => {
    setAtividade(atividade.filter((ativ) => ativ.id !== id));
  };
  console.log(atividade);

  return (
    <div>
      <form onSubmit={salvar}>
        <input
          value={handleAtividade}
          onChange={(e) => setHandle(e.target.value)}
          name="atividade"
          type="text"
          placeholder="sua atividade"
        />
        <button type="submit"> salvar</button>
      </form>

      {atividade.map((ativi) => (
        <div key={ativi.id}>
          <p>{ativi.atividade}</p>
          <button onClick={() => remover(ativi.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

export default Todo4;
