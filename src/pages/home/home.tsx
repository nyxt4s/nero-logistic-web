
import React, { FC, useState } from "react";


interface homeProps {

}

const Home: FC<homeProps> = () => {
  const [contador, setContador] = useState(0);

  // Define una función que incremente el contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div className="bg-red-50">
      <h1 className="text-3xl font-bold underline">Hola</h1>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

// Exporta el componente para poder usarlo en otros archivos
export default Home;

