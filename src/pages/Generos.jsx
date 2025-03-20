import React from 'react'
import Card from '../components/Card';
import useFetchWithParams from '../hooks/useFetchWithParams';

const API = "http://localhost/juegos/back/api/juegos/get/porgenero.php?idgenero="

const Generos = () => {

    const datos = useFetchWithParams(API, 'idgenero');

    return (
        <>
            <div className="container mb-3">
                <div className="section-title">
                    <h2 className='text-center my-5'><b>({datos.length})juegos disponibles de  </b></h2>
                    <p className='text-center py-3'>Conoce nuestras mejores opciones, diseñadas especialmente para ti</p>
                </div>
                <div className="row">
                    {datos && datos.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Generos