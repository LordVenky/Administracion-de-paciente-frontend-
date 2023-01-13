import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'

// Para importar las herramienta que estan guardarda en el context
const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth