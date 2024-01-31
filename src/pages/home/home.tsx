
import React, { FC, useState } from "react";
import imgSvg from '../../assets/Programmer-amico 1.svg';

interface homeProps {

}

const Home: FC<homeProps> = () => {


  return (
    <section className="flex justify-center items-center h-screen object-center  max-w-screen-xl">
      <div className="grid grid-cols-2 max-w-screen-lg place-items-center items-center bg-blue-500">
        <div className="font-serif Times New Roman  grid grid-flow-row-3">
          <h1 className="text-gray-200 fontTitle text-6xl">Imagine CLoud</h1>
          <span>"Tu Tiempo Importa, Nuestro Tecnología
            Simplifica: ¡Vive más, Preocúpate menos!"</span>
          <button>Nuestro Servicio </button>
          <button>Conocenos</button>
        </div>
        <div>
          <img src={imgSvg} alt="" className="" />~
        </div>
      </div>
      </section>
  );
};

export default Home;