import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

const API = 'http://localhost/juegos/back/api/juegos/get/paginado.php'

const Tienda = () => {
    const [datos, setDatos] = useState([])
    const getDatos = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            //console.log(data)
            setDatos(data.data);

        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, []);
    return (
        <>
            <div className="container mb-3">
                <h3 className='text-center my-5'>Tienda</h3>
                <div className="row">
                    {datos && datos.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Tienda