import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 min-h-screen pb-20">
      <div className="flex flex-col md:flex-row justify-center mt-12 gap-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl ">
          ¡Hola! Soy <span className="font-bold text-green-400">Martín González</span>
          </h1>
          <p className="text-base md:text-lg mt-4">
            Un programador argentino con experiencia en el desarrollo Backend. 
            Actualmente trabajo en Educa Interactive y estudio en la UTN FRT. Me apasiona crear soluciones innovadoras 
            y enfrentar nuevos desafíos en tecnología.
          </p>

          <div className="flex mt-6 space-x-4">
            <Link to="/contacto">
              <button
                className="px-4 md:px-6 py-3 bg-black text-white font-medium 
                hover:bg-green-400 hover:text-black transition duration-300"
              >
                Contáctame
              </button>
            </Link>
            <Link to="/acerca-de-mi">
              <button
                className="px-4 md:px-6 py-3 bg-gray-200 text-black font-medium 
                hover:bg-gray-300 transition duration-300"
              >
                Leer más
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 hidden md:block">
          <video
            src="/animacion_cover.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full -mt-10"
          />
        </div>
      </div>

      {/* Banner Section */}
      <div className="mt-20 bg-[#121214] text-white rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center relative p-6 md:p-12">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img
              src="/heart_notify-min.png"
              alt="Icon Heart"
              className="w-full max-w-sm mx-auto md:w-96 filter drop-shadow-lg 
                transform -translate-y-4"
            />
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left flex flex-col gap-4">
            <h2 className="text-xl font-bold text-green-400">
              Logros destacados:
            </h2>
            <ul className="text-base md:text-lg space-y-4">
              <li>
                <span className="font-bold text-green-400">10+</span> proyectos completados con éxito.
              </li>
              <li>
                <span className="font-bold text-green-400">100,000+</span> líneas de código escritas.
              </li>
              <li>
                <span className="font-bold text-green-400">100+</span> tazas de café disfrutadas.
              </li>
            </ul>
          </div>

          <div className="absolute right-0 bottom-0 hidden md:block opacity-60">
            <img
              src="/fuego-min.png"
              alt="Fire Icon"
              className="w-64 transform translate-y-1/4"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
