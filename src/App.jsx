import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Inicio from "./pages/Inicio"
import Generos from "./pages/Generos"
import Tienda from "./pages/Tienda"
import VerCarrito from "./pages/VerCarrito"
import Detalle from "./pages/Detalle"
import Busquedas from "./pages/Busquedas"
import Carrito from "./contexts/Carrito"
import Juegos from "./pages/Juegos"
import Catalogo from "./pages/(back)/Catalogo"


function App() {


  return (
    <>
      <Carrito>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/busquedas" element={<Busquedas />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/juegos" element={<Juegos />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/vercarrito" element={<VerCarrito />} />
            <Route path='/generos/:idgenero' element={<Generos />} />
            <Route path='/detalle/:idjuego' element={<Detalle />} />
            <Route path="*" element={<Inicio />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Carrito>
    </>
  )
}

export default App
