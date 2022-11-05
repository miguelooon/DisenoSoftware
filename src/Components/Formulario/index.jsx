import React from 'react'
import ReactDOM from 'react-dom';
import { Form } from 'react-formio';
import "./index.scss"
import "./index.css"


const Formulario= () => {



  return (
    <div className='Contenedor1' >
      <h1>Agenda tu hora!</h1>
        <div className='Contenedor'>
            <Form src="https://dvliggxnddczxtm.form.io/formulario"/>;
        </div>

    </div>
  )
}

export default Formulario