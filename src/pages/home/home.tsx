
import React, { FC, useState } from "react";
import imgSvg from '../../assets/Programmer-amico 1.svg';

interface homeProps {

}

const Home: FC<homeProps> = () => {
  const [contador, setContador] = useState(0);

  // Define una función que incremente el contador
 

  return (
    <div className="bg-red-50">
      <div className="flex ">
      <h1>Imagine CLoud</h1>
      <span>"Tu Tiempo Importa, Nuestro Tecnología
        Simplifica: ¡Vive más, Preocúpate menos!"</span>
      <button> </button>
      <button></button>
        </div>
        <div>
          <img src={imgSvg} alt="" />
        </div>
    </div>
  );
};

// Exporta el componente para poder usarlo en otros archivos
export default Home;

