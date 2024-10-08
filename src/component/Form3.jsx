import React, { useState } from "react";

const Form3 = () => {
  const [form, setForm] = useState({
    cidade: "",
    pais: "",
    estado: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const newForm = { ...prev, [name]: value };
      return newForm;
    });
  };

  const FormSbmit = (e) => {
    e.preventDefault();

    console.log("submit", form);
  };

  console.log(form);

  return (
    <form
      onSubmit={FormSbmit}
      style={{ display: "flex", flexDirection: "column", marginTop: "30px" }}
    >
      <input name="pais" onChange={handleForm} type="text" placeholder="pais" />
      <input
        name="estado"
        onChange={handleForm}
        type="text"
        placeholder="estado"
      />
      <input
        name="cidade"
        onChange={handleForm}
        type="text"
        placeholder="cidade"
      />
      <button>salvar</button>
    </form>
  );
};

export default Form3;
