import React from "react";

function Funciones() {
  const sumar = (a: number, b: number): number => {
    return a + b;
  };
  return (
    <>
      <h3>Funciones</h3>
      <span>{sumar(10, 2)}</span>
    </>
  );
}

export default Funciones;
