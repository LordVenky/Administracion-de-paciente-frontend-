import { Outlet, Navigate } from "react-router-dom"
import Footer from "../components/Footer";
import Header from "../components/Header";
import useAuth from '../hooks/useAuth'


function RutaProtegida() {

  const { auth, cargando } = useAuth();
  console.log(auth)

  if(cargando) return "cargando..."

  return (
      <>
        <Header />
              { auth?._id ? (
                 <main className="container mt-10 mx-auto ">
                    <Outlet />
                 </main>
              ) : <Navigate to="/" />} 
        <Footer />
      </>
  )
}

export default RutaProtegida