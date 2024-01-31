
import { FC, useState } from "react";
import imgSvg from '../../assets/Programmer-amico 1.svg';

interface homeProps {

}

const Home: FC<homeProps> = () => {


  return (

  <section className="flex justify-center items-center  object-center  ">
      <div className="grid grid-cols-2 grid-rows-3 gap-1">
        <div className="">
          <h1 className="text-gray-200 fontTitle text-6xl m-3">Imagine CLoud</h1>
        </div>
        <div className="row-span-3">
        <img src={imgSvg} alt="" className="rounded-full" />
        </div>
        <div className="row-start-2">
        <span className="m-4">"Tu Tiempo Importa, Nuestro Tecnología
            Simplifica: ¡Vive más, Preocúpate menos!"</span>
        </div>
        <div className="row-start-3 flex">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Nuestro Servicio </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Conocenos</button>
        </div>
      </div>
  </section>
  );
};

export default Home;