interface Persona {
  nombre: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  calle: number;
  barrio: string;
}

function ObjetosLiterales() {
  const ANGEL: Persona = {
    nombre: "angel",
    edad: 21,
    direccion: {
      calle: 3,
      barrio: "Aniversario 2",
    },
  };

  return (
    <>
      <h3>ObjetosLiterales</h3>
      <code>
        <pre>{JSON.stringify(ANGEL, null, 2)}</pre>
      </code>
    </>
  );
}

export default ObjetosLiterales;
