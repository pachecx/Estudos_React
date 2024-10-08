import React, { useState } from "react";

const Todo1 = () => {
  const [tarefa, setTarefa] = useState([]);
  const [handleTarefa, setHandleTarefa] = useState("");

  const salvar = (e) => {
    e.preventDefault();

    if (handleTarefa) {
      setTarefa((prev) => {
        const newTarefa = [...prev, handleTarefa];

        setHandleTarefa("");

        return newTarefa;
      });
    }
  };

  const removerTarefa = (index) => {
    setTarefa((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={salvar}>
        <input
          value={handleTarefa}
          onChange={(e) => setHandleTarefa(e.target.value)}
          name="atividade"
          type="text"
          placeholder="adicionar atividade"
        />
        <button type="submit">Salvar</button>
      </form>

      {tarefa.length === 0 ? (
        <p>Sem atividades</p>
      ) : (
        tarefa.map((tarefas, index) => (
          <div key={index}>
            <p>{tarefas}</p>
            <button onClick={() => removerTarefa(index)}>excluir</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Todo1;
