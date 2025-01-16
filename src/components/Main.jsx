import React from 'react';

const Main = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-center mt-12 gap-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold">
            Soy un programador ARGENTINO de 21 años
          </h1>
          <p className="text-base md:text-lg mt-4">
            Actualmente estudio en UTN FRT la carrera de técnico universitario en programación.
            Cuento con conocimientos en JAVA con Spring Boot, SQL: My SQL, SQL Server, 
            No SQL: MongoDB, FireBase, React, Tailwind CSS.
          </p>
          <div className="flex mt-6 space-x-4">
            <button className="px-4 md:px-6 py-3 bg-black text-white font-medium 
              hover:bg-green-400 hover:text-black transition duration-300">
              Contactame
            </button>
            <button className="px-4 md:px-6 py-3 bg-gray-200 text-black font-medium 
              hover:bg-gray-300 transition duration-300">
              Leer más
            </button>
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
              src="/heart_notify.png"
              alt="Icon Heart"
              className="w-full max-w-sm mx-auto md:w-96 filter drop-shadow-lg 
                transform -translate-y-4"
            />
          </div>
          
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-normal">
              Ser o no ser, esa es la cuestión
            </h2>
            
          </div>

          <div className="absolute right-0 bottom-0 hidden md:block opacity-60">
            <img
              src="/fuego.png"
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