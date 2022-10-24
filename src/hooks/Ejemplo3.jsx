/**
 * Ejemplo de hooks:
 * -useState()
 * -useContext()
 */

import React, { useState, useContext } from "react";
/**
 *
 * @returns Componente 1
 * dispone de un contexto que va a tener un valor
 * que recibe del padre
 */
const miContexto = React.createContext(null);
const Componente1 = () => {
  // inicializamos un estado vacio que va a rellenarse con los datos del padre
  const state = useContext(miContexto);
  return (
    <div>
      <h1>El token es: {state.token}</h1>
      {/*Pintamos el componente 2*/}
      <Componente2></Componente2>
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h2>La sesion es: {state.sesion}</h2>
    </div>
  );
};

const MiComponenteConContexto = () => {
  const estadoInicial = {
    token: "12345",
    sesion: 1,
  };
  // crear el estado del componente
  const [sessionData, setSessionData] = useState(estadoInicial);
  function actualizarSession() {
    setSessionData({
      token: "567873",
      sesion: sessionData.sesion + 1,
    });
  }
  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo que esta aca puede leer los datos de sessionData*/}
      {/* a demas si se actualiza lo de aqui tambien se actualiza*/}
      <h1>***Ejemplo de useState y useContext</h1>
      <Componente1></Componente1>
      <button onClick={actualizarSession}>Actualizar sesion: </button>
    </miContexto.Provider>
  );
};

export default MiComponenteConContexto;
