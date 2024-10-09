import React, { useState } from "react";

const IncrementarArr = () => {
  const [soma, setSoma] = useState([]);
  const [remover, setRemover] = useState([]);

  const acrec = () => {
    setSoma((prev) => {
      const newAcrec = [...prev, +1];

      return newAcrec;
    });
  };

  const sub = () => {
    const ultimo = soma[soma.length - 1];

    if(soma.length === 0) return

    setRemover((prev) => [...prev, ultimo]);

    setSoma((prev) => {
      const newremover = prev.slice(0, -1);
      return newremover;
    });
  };

  console.log("Soma:", soma);
  console.log("Subtrair:", remover);


  return (
    <div style={{ display: "flex" }}>
      <button onClick={sub}>-</button>
      <p>teste</p>
      <button onClick={acrec}>+</button>
    </div>
  );
};

export default IncrementarArr;
