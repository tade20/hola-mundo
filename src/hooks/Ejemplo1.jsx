/**
 * Ejemplo de uso del hook useState
 *
 * crear un componenete de tipo funcion y acceder a su estado
 * privado a traves de un hook y, a demas, poder modificarlo
 */

import React, { useState } from "react";

const Ejemplo1 = () => {
  // valor inicial para un contador
  const valorIncial = 0;

  // valor inicial para una persona
  const personaInicial = {
    nombre: "Martin",
    email: "martin@gmail.com",
  };

  /**
   * queremos que valorInicial y personainicial sean
   * parte del estado del componente para asi poder gestionar su cambio
   * y que este se vea reflejado en la vista del componente
   *
   * const [nombreVariable,funcionParaCambiar] = useState(valorInicial)
   */
  const [contador, setContador] = useState(valorIncial);
  const [persona, setPersona] = useState(personaInicial);
  /**
   * funcion para actualizar el estado privado
   *  que contiene el contador
   */
  function incrementarContador() {
    setContador(contador + 1);
  }
  /**
   * Funcion para actualizar el estado de persona en el componente
   */
  function actualizarPersona() {
    setPersona({
      nombre: "Tadeo",
      email: "tade@gmail.com",
    });
  }
  return (
    <div>
      <h1>*** Ejemplo de useState() ***</h1>
      <h2>contador: {contador}</h2>
      <h2>Datos de la persona:</h2>
      <h3>nombre: {persona.nombre}</h3>
      <h4>email: {persona.email}</h4>
      {/*Bloque de botones para actualizar el estado*/}
      <button onClick={incrementarContador}>incrementar contador</button>
      <button onClick={actualizarPersona}>actualizar persona</button>
    </div>
  );
};

export default Ejemplo1;
