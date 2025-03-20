import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const useFetchWithParams = (apiUrl, paramsKey, singleResult = false) => {
  const [datos, setDatos] = useState(singleResult ? {} : []);
  const params = useParams();

  const getDatos = async () => {
    try {
      const response = await fetch(`${apiUrl}${params[paramsKey]}`);
      const data = await response.json();
      setDatos(singleResult ? data[0] : data);
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  };

  useEffect(() => {
    getDatos();
  }, [params[paramsKey]]);

  return datos;
};

export default useFetchWithParams;
