import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"

function Registrar() {

const [ nombre, setNombre ] = useState("");  
const [ email, setEmail ] = useState(""); 
const [ password, setPassword ] = useState("");
const [ repetirPassword, setRepetirPassword ] = useState("");
const [ alerta, setAlerta ] = useState({})

const handleSubmit = e => {
    e.preventDefault();

    if([nombre, email, password, repetirPassword].includes('')) {
      setAlerta({msg: "Hay campos vacios", error: true});
      return
    }

    if(password !== repetirPassword) {
      setAlerta({msg: "Los password no son iguales", error: true});
      return
    }

    if(password < 6) {
      setAlerta({msg: "El password es muy corto, agrega minimo 6 caracteres", error: true});
      return
    }

    setAlerta({})


    // Subimos la inf a nuestra base de datos con api

}

const { msg } = alerta

  return (
    <>
        <div>
          <h1 className="text-indigo-600 font-black text-6xl">Crea tu Cuenta y Administra {""}<span className="text-black">tus Pacientes</span></h1>
        </div>

        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">

          {msg && <Alerta alerta={alerta} />}


            <form 
              onSubmit={handleSubmit}
            >
                <div className="my-5">
                   <label className="uppercase text-gray-600 block text-xl font-bold">Nombre</label>            
                   <input 
                      type="text"
                      placeholder="Tu nombre"
                      className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                      value={nombre}
                      onChange={ e => setNombre(e.target.value)} 
                      />
                </div>

                <div className="my-5">
                      <label className="uppercase text-gray-600 block text-xl      font-bold">Email</label>            
                      <input 
                        type="email"
                        placeholder="Email de Registro"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={email}
                        onChange={ e => setEmail(e.target.value)} 
                        />
                </div>

                <div className="my-5">
                      <label className="uppercase text-gray-600 block text-xl        font-bold">password</label>            
                      <input 
                          type="password"
                          placeholder="Tu Password"
                          className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" 
                          value={password}
                          onChange={ e => setPassword(e.target.value)} 
                          />
                </div>

                <div className="my-5">
                      <label className="uppercase text-gray-600 block text-xl        font-bold">Repitir password</label>            
                      <input 
                          type="password"
                          placeholder="Repite tu Password"
                          className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" 
                          value={repetirPassword}
                          onChange={ e => setRepetirPassword(e.target.value)} 
                          />
                </div>

                
                <input 
                    type="submit"
                    value="Crear cuenta"
                    className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer   hover:bg-indigo-800 md:w-auto" 
                />


            </form>

            <nav className="mt-1 lg:flex lg:justify-between">
                <Link
                    className="block text-gray-500 text-center my-5"
                    to="/">¿Ya tienes una cuenta? Inicia Sesión</Link>
                <Link 
                    className="block text-center text-gray-500 my-5"
                    to="/olvide-password">Olvide mi Password</Link>
             </nav>


        </div>



    </>
  )
}

export default Registrar