import React from 'react'
import { Link } from 'react-router-dom';
import useDataFetching from '../../hooks/useDataFetching';

const API = "http://localhost/juegos/back/api/generos/get/index.php";

const FiltroGeneros = () => {

    const datos = useDataFetching(API);

    return (
        <>
            {datos.map((item, index) => (

                <li key={index} ><Link to={`generos/${item.idgenero}`} href="#">{item.nombre}</Link></li>

            ))}
        </>
    )
}

export default FiltroGeneros