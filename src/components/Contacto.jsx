import { useState } from "react";
import notyf from "../utils/notificaicon";
import { useNavigate } from "react-router-dom";

function Contacto({ descripcionInicial }) {
  const apiKey=process.env.REACT_APP_VERIFI_EMAI;
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [descripcion, setDescripcion] = useState(descripcionInicial || "");
  const [isDisabled, setIsDisabled] = useState(false);
  const [error,setError]=useState(false)
  const navigate = useNavigate();


  const enviarEmai = async (e) => {
    e.preventDefault();
    if (isDisabled) return;

    if (!nombre || !apellido || !correo || !telefono || !descripcion) {
      return notyf.error("Complete todos los campos!!");
    }
    setIsDisabled(true);  

    try {
      const resul = await fetch("/api/EnviarEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          apellido,
          correo,
          telefono,
          descripcion,
        }),
      });
      if (resul.status === 200) {
        setNombre("");
        setApellido("");
        setCorreo("");
        setTelefono("");
        setDescripcion("");
        notyf.success("Se envió correctamente!!");
        setTimeout(() => {
          setIsDisabled(false);
          navigate("/");
        }, 2000);
      }
      else if(resul.status==400){
        console.log("correo no valido");
        setIsDisabled(false)
      }
      else {
        setIsDisabled(false)
        return notyf.error("Hubo un error al enviar el formulario");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100 mt-10 flex items-center justify-center px-4">
      <div
        className="
          bg-white shadow-lg rounded-2xl p-6 
          max-w-lg sm:max-w-md w-full
        "
      >
        <h1 className="text-2xl sm:text-xl font-bold text-center text-black mb-6">
          Formulario de Contacto
        </h1>
        <form className="space-y-4" onSubmit={(e) => enviarEmai(e)} method="POST">
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Escribe tu nombre"
              className="w-full mt-1 p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="apellido"
              className="block text-sm font-medium text-gray-700"
            >
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              placeholder="Escribe tu apellido"
              className="w-full mt-1 p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="correo"
              className="block text-sm font-medium text-gray-700"
            >
              Correo
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="correo@gmail.com"
              className="w-full mt-1 p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              value={correo}
              onChange={(e) => {setCorreo(e.target.value);if(error)setError(false)}}
            />
           {error && <p className="9px text-red-600">Ingrese un email valido</p>}
          </div>
          <div>
            <label
              htmlFor="telefono"
              className="block text-sm font-medium text-gray-700"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Ej. +54 381 123 4567"
              className="w-full mt-1 p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="descripcion"
              className="block text-sm font-medium text-gray-700"
            >
              Descripción del problema
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              placeholder="Describe brevemente el problema que necesitas solucionar"
              rows="4"
              className="w-full mt-1 p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isDisabled}
              className={`px-4 py-2 sm:px-6 sm:py-3 bg-black text-white font-medium rounded-lg ${
                !isDisabled
                  ? "hover:text-black hover:bg-green-400 transition-colors duration-300"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              {!isDisabled ? "Enviar" : "Enviando..."}
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default Contacto;
