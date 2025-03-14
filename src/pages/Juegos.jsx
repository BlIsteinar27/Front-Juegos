import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

const API = "http://localhost/juegos/back/api/juegos/get/porgenero.php?idgenero="

const Juegos = () => {

    const params = useParams()
    let idgenero = params.idgenero;

    const [datos, setDatos] = useState([])
    const [titulo, setTitulo] = useState("")

    let URI = API + idgenero;
    const getDatos = async () => {

        try {
            const response = await fetch(URI);
            const data = await response.json();
            //console.log(data) 
            setTitulo("Juegos de genero  " + idgenero)
            setDatos(data);

        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, [params.idgenero]);

    return (
        <>
            <div className="container mb-3">
                <h3 className='text-center my-5'><b> ({datos.length} juegos disponibles)</b></h3>
                <p className='text-center py-3'>Conoce nuestras mejores opciones, diseñadas especialmente para ti</p>
                <div className="row">
                    {datos && datos.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Juegos