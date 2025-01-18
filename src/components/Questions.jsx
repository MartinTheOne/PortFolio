import React from 'react';
import { Link } from 'react-router-dom';

const Questions = ({ setDescripcion }) => {
  const questions = [
    "Necesito hacer una pagina web.",
    "Necesito hacer un control de stock.",
    "Necesito hacer una aplicacion para mi negocio.",
    "Necesito llevar el control de las ganancias.",
    "Necesito gestionar inventarios y proveedores.",
    "Necesito controlar asistencia y horarios de mi personal."
  ];

  return (
    <div className="flex items-center justify-center mt-10 bg-[#F5F5F5]">
      <div className="form flex justify-center">
        <div 
          className="
            p-5 shadow-lg rounded-2xl text-center 
            w-[100%] h-auto sm:w-[350px] sm:h-[500px] 
            md:w-[400px] md:h-[600px] 
            bg-white
          "
        >
          <h1 className="p-4 text-lg sm:text-xl font-bold">
            ¿Qué proyecto sueñas con crear?
          </h1>

          <div className="space-y-4">
            {questions.map((question, index) => (
              <Link
                to="/contacto"
                onClick={() => {
                  console.log(question);
                  setDescripcion(question);
                }}
                key={index}
                className="
                  block p-4 rounded-xl shadow-lg text-[#283629]
                  text-xs sm:text-sm font-semibold cursor-pointer
                  hover:bg-black hover:scale-105 hover:text-white 
                  transition-transform duration-300
                "
              >
                {question}
              </Link>
            ))}
          </div>
          <Link
            to="/contacto"
            onClick={() => setDescripcion('')}
          >
            <h2 className="mt-6 text-xs sm:text-sm text-[rgb(7,7,134)] cursor-pointer opacity-70 hover:opacity-100 hover:scale-105 transition-transform duration-300">
              ¿Buscas otras soluciones? ¡Click aquí!
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Questions;
