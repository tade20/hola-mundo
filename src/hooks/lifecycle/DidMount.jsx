/**
 * Ejemplo de uso del metodo
 * de ciclo de vida en componente de clase y el hook de ciclo de vida
 * en componente funcional
 */
import React, { Component, useEffect } from "react";

export class DidMount extends Component {
  componentDidMount() {
    console.log(
      "Comportamiento antes de que el componente se encuentre en el DOM"
    );
  }
  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    );
  }
}

export const DidMountHook = () => {
  useEffect(() => {
    console.log(
      "Comportamiento antes de que el componente se encuentre en el DOM"
    );
  }, []);
  return (
    <div>
      <h1>DidMount</h1>
    </div>
  );
};
