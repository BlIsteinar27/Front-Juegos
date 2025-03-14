import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Inicio from "./pages/Inicio"
import Juegos from "./pages/Juegos"
import Tienda from "./pages/Tienda"
import ListaCompra from "./pages/ListaCompra"
import Detalle from "./pages/Detalle"


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/inicio" element={<Inicio/>} />
            <Route path="*" element={<Inicio/>} /> 
            <Route path='/juegos/:idgenero' element={<Juegos/>}/>
            <Route path='/detalle/:idjuego' element={<Detalle/>}/>
            <Route path="/tienda" element={<Tienda/>} /> 
            <Route path="/listacompra" element={<ListaCompra/>} /> 
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
