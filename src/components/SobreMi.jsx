import React from "react";

const SobreMi = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 min-h-screen pb-20">
      <div className="flex flex-col items-center justify-center mt-12 gap-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Sobre Mí
        </h1>
        <p className="text-base md:text-lg mt-4 text-center max-w-4xl">
          ¡Hola! Soy <span className="font-bold  text-green-400">Martín González</span>, 
          un apasionado programador argentino de 21 años. Actualmente, soy desarrollador en 
          <span className="font-bold text-green-400 " ><a href="https://www.educainteractive.com/" target="_blank"> Educa Interactive</a> </span> una empresa de educacion digital y estudiante de programación en la 
          <span className="font-bold text-green-400"> UTN FRT</span>. Mi misión es ayudar a las personas y empresas a 
          transformar ideas en soluciones tecnológicas efectivas y personalizadas.
        </p>

        {/* Imagen o video opcional */}
        <div className="w-full md:w-1/2 mt-6">
          <img
            src="/fotoPerfil-min.jpg"
            alt="Perfil Martín González"
            className="rounded-full sm:rounded-lg shadow-lg w-full"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-12 gap-8">
          {/* Habilidades */}
          <div className="w-full md:w-1/2 bg-[#F5F5F5] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Habilidades</h2>
            <ul className="list-disc ml-5 space-y-2">            
              <li>
                Backend con <span className="font-bold">Java</span> y <span className="font-bold">Spring Boot</span>.
              </li>
              <li>
                Desarrollo web con <span className="font-bold">React</span> y <span className="font-bold">Tailwind CSS</span>.
              </li>
              <li>
                Bases de datos: <span className="font-bold">SQL</span> y <span className="font-bold">MongoDB</span>.
              </li>
              <li>
                Integración de APIs y soluciones escalables.
              </li>
              <li>
                Gestión de proyectos y trabajo en equipo.
              </li>
            </ul>
          </div>

          {/* Filosofía y objetivos */}
          <div className="w-full md:w-1/2 bg-[#F5F5F5] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Mi Filosofía</h2>
            <p className="text-base">
              Creo firmemente en el poder de la tecnología para mejorar la vida de las personas. 
              Mi enfoque se centra en:
            </p>
            <ul className="list-disc ml-5 mt-4 space-y-2">
              <li>
                Crear soluciones que sean simples y efectivas.
              </li>
              <li>
                Aprender continuamente para enfrentar nuevos desafíos.
              </li>
              <li>
                Trabajar con integridad y compromiso en cada proyecto.
              </li>
            </ul>
          </div>
        </div>

        {/* Estadísticas o logros */}
        <div className="mt-20 bg-[#121214] text-white rounded-lg overflow-hidden w-full">
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
                Mis Logros
              </h2>
              <ul className="text-base md:text-lg space-y-4">
                <li>
                  <span className="font-bold text-green-400">10+</span> proyectos completados con éxito.
                </li>
                <li>
                  <span className="font-bold text-green-400">100,000+</span> líneas de código escritas.
                </li>
                <li>
                  <span className="font-bold text-green-400">100+</span> tazas de café disfrutadas mientras programaba.
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
      </div>
    </main>
  );
};

export default SobreMi;
