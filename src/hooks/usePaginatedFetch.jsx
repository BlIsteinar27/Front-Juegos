import { useEffect, useState } from "react";

const usePaginatedFetch = (apiUrl, limit) => {
  const [datos, setDatos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(0);

  const getDatos = async (pagina) => {
    try {
      const response = await fetch(`${apiUrl}?limit=${limit}&skip=${(pagina - 1) * limit}`);
      const data = await response.json();
      //console.log("Datos obtenidos:", data); // Agrega este log
      setDatos(data.data);
      setTotalPaginas(Math.ceil(data.total / limit));
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  };

  useEffect(() => {
    getDatos(paginaActual);
  }, [paginaActual]);

  const handlePaginaClick = (pagina) => {
    setPaginaActual(pagina);
  };

  // Función para recargar los datos manualmente
  const fetchData = (pagina) => {
    getDatos(pagina);
  };

  return { datos, paginaActual, totalPaginas, handlePaginaClick, fetchData };
};

export default usePaginatedFetch;
