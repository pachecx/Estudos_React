import { useReducer } from "react";

const initializeState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      
      return { count: state.count + 1};

    case "decrement":
      if(state.count === 0) return  { count: state.count }

      return { count: state.count - 1 };

    case "reset":
        return { count: state.count = 0}

      default:
        return state;
  }
};

export const UseReduce = () => {
  const [state, dispatch] = useReducer(reducer, initializeState);

  return (
    <div>
      <h1>Contador usando useReduce:</h1>

      <div>
        <button onClick={() => dispatch(({ type: "decrement"}))}>-</button>
       
        <span>{state.count}</span>

        <button onClick={() => dispatch(({ type: "increment"}))}>+</button>
      </div>
      <button onClick={() => dispatch({type: "reset"})}>RESETAR</button>
    </div>
  );
};
