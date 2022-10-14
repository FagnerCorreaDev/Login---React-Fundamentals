import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Usuário" />
      <input type="password" placeholder="Password" />

      {props.estaCadastrado === false ? (
        <input type="password" placeholder="Confirme seu password" />
      ):null}
      <button type="submit">
        {props.estaCadastrado === true ? "Login" : "Registrar"}
      </button>

    </form>
  )
}
export default Form;