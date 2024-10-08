import { useReducer } from "react";

const init = { count: 0 };

const reduce = (state, action) => {
  switch (action.type) {
    case "alterar":
      return { count: Math.random() * 10 };

    case "zera":
      return { count: (state.count = 0) };

    default:
      return state;
  }
};

console.log(Math.random());

export const CustomReduce = () => {
  const [state, dispatch] = useReducer(reduce, init);

  return (
    <div>
      <h1>Numero aleatorio comcustom Reduce:</h1>

      <div>
        <p>De 0 a 10: {state.count}</p>
        <button onClick={() => dispatch({ type: "alterar" })}>
          trocar numero
        </button>
      </div>

      <button onClick={() => dispatch({ type: "zera" })}>Zerar</button>
    </div>
  );
};
