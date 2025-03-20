import { useEffect, useState } from "react";

const useDataFetching = (API) => {
  const [datos, setDatos] = useState([]);

  const getDatos = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      //console.log(data) 
      setDatos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);

  return datos;
};

export default useDataFetching;