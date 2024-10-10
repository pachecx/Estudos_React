import React, { useState } from "react";

const Todo3 = () => {
  const [tarefas, setTarefa] = useState([]);
  const [handleTarefa, setHandleTarefa] = useState("");

  const salvar = (e) => {
    e.preventDefault();

    if (handleTarefa) {
      setTarefa((prev) => {
        const newTarefa = [...prev, { tarefa: handleTarefa, Id: Date.now() }];

        setHandleTarefa("");
        return newTarefa;
      });
    }
  };

  const remover = (Id) => {
    setTarefa(tarefas.filter((tarefa) => tarefa.Id !== Id));
  };

  console.log(tarefas);
  return (
    <div>
      <form onSubmit={salvar}>
        <input
          value={handleTarefa}
          onChange={(e) => setHandleTarefa(e.target.value)}
          type="text"
          placeholder="cadastre sua atividade"
        />
        <button type="submit">Salvar</button>
      </form>

      {!tarefas.length ? (
        <p>Sem atividades</p>
      ) : (
        <>
          {tarefas.map((tarefa) => (
            <div key={tarefa.Id}>
              <p>{tarefa.tarefa}</p>
              <button onClick={() => remover(tarefa.Id)}>excluir</button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Todo3;
