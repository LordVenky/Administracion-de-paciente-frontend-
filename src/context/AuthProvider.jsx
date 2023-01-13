import { useState, useEffect, createContext } from 'react';
import clienteAxios from '../config/clienteAxios'

const AuthContext = createContext();

// AuthProvider es el que va a contener toda la function principales
// se importa en las rutasy queda como padre
const AuthProvider = ({children}) => {
// En esta parte vamos a crear nuestras herramienta para pasar a cualquier hijo de nuestra app
    const [ auth, setAuth ] = useState({})
    const [ cargando, setCargando ] = useState(true)

    useEffect(() => {
        const autenticarUsuario = async () =>{
            // Obtener el token que guardamos cuando iniciamos sesion
            // asi estraemos los datos del usuario.
            const token = localStorage.getItem('token')

            if(!token) {
                setCargando(false)
                return
            }

            // Como obtenemos los datos con el token 
            // en la base de datos
            const config = {
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const { data } = await clienteAxios('/veterinarios/perfil', config)

                // Los datos del usuario se guarda en el usuestate setAuth
                setAuth(data);
            } catch (error) {
                console.log(error.response.data.msg)
                setAuth({})
            }

            setCargando(false)
        } 
        autenticarUsuario();
    }, [])

    // Cerrar sesión
    const cerrarSesion = () => {
        localStorage.removeItem('token')
        setAuth({})
    }

    return(
        // children hace referencia a los hijos de la ruta de nuestra app
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                cerrarSesion
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export{
    AuthProvider
}

export default AuthContext