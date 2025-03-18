import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';

const API = 'http://localhost/juegos/back/api/juegos/get/buscarjuego.php?q='

const Busquedas = () => {
  const location = useLocation();
  const txtBuscar = location.state;

  const [datos, setDatos] = useState([])
  const getDatos = async (valueSearch) => {
    try {
      const URI = API + valueSearch;
      const response = await fetch(URI);
      const data = await response.json();
      //console.log(data)
      setDatos(data);
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(() => {
    getDatos(txtBuscar);
  }, [txtBuscar]);
  return (
    <>
      <div className="container mb-3">
        <div className="section-title">
          <h2 className='text-center mt-5'>Buscando... {txtBuscar} ({datos.length})</h2>
          <p>Aquí ofrecemos una vista general de la tienda</p>
        </div>
        
        <div className="row">
          {datos.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Busquedas