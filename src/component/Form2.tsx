import React, { useState } from "react";

const Form2 = () => {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const newForm = { ...prev, [name]: value };
      return newForm;
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!form.nome || !form.sobrenome || !form.email) return;

    console.log("submit", form);
  };

  console.log(form);

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" onChange={handleForm} type="text" placeholder="Nome" />

      <input
        name="sobrenome"
        onChange={handleForm}
        type="text"
        placeholder="sobreNome"
      />

      <input
        name="email"
        onChange={handleForm}
        type="email"
        placeholder="email"
      />

      <button type="submit">enviar</button>
    </form>
  );
};

export default Form2;
