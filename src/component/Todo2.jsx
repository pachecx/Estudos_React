import React, { useState } from "react";

const Todo2 = () => {
  const [hadleTarefa, setHandleTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const salvar = (e) => {
    e.preventDefault();

    if (hadleTarefa) {
      setTarefas((prev) => {
        const newTarefa = [...prev, { tarefas: hadleTarefa, Id: Date.now() }];

        setHandleTarefa("");

        return newTarefa;
      });
    }
  };

  const deletar = (Id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.Id !== Id));
    console.log("clicou");
  };

  //console.log(hadleTarefa);

  console.log(tarefas);

  return (
    <div>
      <form onSubmit={salvar}>
        <input
          value={hadleTarefa}
          name="tarefa"
          onChange={(e) => setHandleTarefa(e.target.value)}
          type="text"
          placeholder="Cadastrar atividade"
        />
        <button type="submit">Cadastrar</button>
      </form>

      {!tarefas.length ? (
        <p>Sem atividades</p>
      ) : (
        <>
          {tarefas.map((tarefa) => (
            <div key={tarefa.Id}>
              <p>{tarefa.tarefas}</p>
              <button onClick={() => deletar(tarefa.Id)}>Excluir</button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Todo2;
