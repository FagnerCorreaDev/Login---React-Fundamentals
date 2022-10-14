import React from "react";
import  Form from "./Form"

let estaCadastrado = false;

function App(){
  return(
    <div className="container">
      <Form
        estaCadastrado={estaCadastrado}
      />
    </div>
  )
}
export default App;