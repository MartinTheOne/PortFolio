import { useState } from "react";
import  notyf  from "../utils/notificaicon";
import { useNavigate } from "react-router-dom";
function Contacto() {
    const [nombre,setNombre]=useState("")
    const [apellido,setApellido]=useState("")
    const [correo,setCorreo]=useState("")
    const [telefono,setTelefono]=useState("")
    const [descripcion,setDescripcion]=useState("")
    const [isDisabled,setIsDisabled]=useState(false)
    const navigate=useNavigate()

    const enviarEmai=async(e)=>{
      e.preventDefault()
      if(isDisabled)return;

      if(!nombre||!apellido||!correo||!telefono||!descripcion)return notyf.error("Complete todos los campos!!")
        setIsDisabled(true)
      try {
        const resul=await fetch("/api/EnviarEmail",{
          method:"POST",
          headers: { "Content-Type": "application/json" },
          body:JSON.stringify({
            nombre,
            apellido,
            correo,
            telefono,
            descripcion
          })       
        })
        if(resul.status==200){
          setApellido("")
          setNombre("")
          setTelefono("")
          setCorreo("")
          setDescripcion("")
          notyf.success("Se envio correctamente!!")
          setTimeout(() => {
            setIsDisabled(false)
            return navigate("/")
          }, 2000);
        }else{
          return notyf.error("Hubo un error al enviar el formulario")
        }
      } catch (error) {
        console.log(error)
      }
    }
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
          <h1 className="text-3xl font-bold text-center text-black mb-6">
            Formulario de Contacto
          </h1>
          <form className="space-y-6" onSubmit={(e)=>enviarEmai(e)} method="POST">
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
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                required
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)}
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
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                required
                value={apellido}
                onChange={(e)=>setApellido(e.target.value)}
              />
            </div>
  
            <div>
              <label
                htmlFor="gmail"
                className="block text-sm font-medium text-gray-700"
              >
                Correo
              </label>
              <input
                type="email"
                id="gmail"
                name="gmail"
                placeholder="correo@gmail.com"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                required
                value={correo}
                onChange={(e)=>setCorreo(e.target.value)}
              />
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
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                required
                value={telefono}
                onChange={(e)=>setTelefono(e.target.value)}
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
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                required
                value={descripcion}
                onChange={(e)=>setDescripcion(e.target.value)}
              ></textarea>
            </div>
  
            <div className="text-center">
              <button
                type="submit"
                disabled={isDisabled}
                className={`px-6 py-3 bg-black text-white font-medium rounded-lg ${!isDisabled?"hover:text-black  hover:bg-green-400  transition-colors duration-300":"opacity-50 cursor-not-allowed"}  `}
              >
                {!isDisabled?"Enviar":"Enviando..."}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default Contacto;