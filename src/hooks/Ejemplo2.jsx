/**
 * Ejemplo de uso de:
 * -useState()
 * -useRef()
 * -useEffect()
 */

import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  // crear dos contadores distintos
  // cada uno en un estado diferente
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);
  // crear una referecia con useRef() para asociar a una variable
  // con un elemento del DOM
  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }

  function incrementar2() {
    setContador2(contador2 + 1);
  }

  /**
   * usando useEffect
   */
  /**
   * caso1: Ejecutar un snippet de codigo
   * cada vez ue haya un cambio en el estado del componente
   * se ejecuta aquello que este dentro del useEffect()
   */
  //useEffect(() => {
  //console.log("Cambio en el estado del componente");
  //console.log("Mostrando referencia al elemento del DOM:");
  //console.log(miRef);
  //});

  /**
   *  caso2: Ejecutar solo cuando se cambie el contador 1
   * cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
   * em caso de que cambie el contador 2 no habra ejecucion
   */
  //  useEffect(() => {
  //    console.log("Cambio en el estado del contador1");
  //    console.log("Mostrando referencia al elemento del DOM:");
  //    console.log(miRef);
  //  }, [contador1]);

  /**
   *  caso3: Ejecutar solo cuando se cambie el contador 1 o contador 2
   * cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
   * cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
   */
  useEffect(() => {
    console.log("Cambio en el estado del contador1 / contador2");
    console.log("Mostrando referencia al elemento del DOM:");
    console.log(miRef);
  }, [contador1, contador2]);
  return (
    <div>
      <h1>*** Ejemplo de useState(), useRef(), useEffect() ***</h1>
      <h2>Contador 1:{contador1}</h2>
      <h2>Contador 2:{contador2}</h2>
      {/* Elemento referenciado */}
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      {/* Bloque de botones*/}
      <div>
        <button onClick={incrementar1}>incrementar contador 1</button>
        <button onClick={incrementar2}>incrementar contador 2</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
