import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const API = "http://localhost/juegos/back/api/generos/get/minimo.php";

const FiltroGeneros = () => {
    const [datos, setDatos] = useState([])
    const getDatos = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            //console.log(data)
            setDatos(data);

        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, []);
    return (
        <>
            {datos.map((item, index) => (

                <li key={index} ><Link to={`juegos/${item.idgenero}`} href="#">{item.nombre}</Link></li>

            ))}
        </>
    )
}

export default FiltroGeneros