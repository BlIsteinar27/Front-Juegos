import React from 'react'
import Card from '../components/Card';
import useDataFetching from '../hooks/useDataFetching';

const API = 'http://localhost/juegos/back/api/juegos/get/'

const Juegos = () => {

    const datos = useDataFetching(API);

    return (
        <>
            <div className="container mb-3">
                <div className="section-title">
                    <h2 className='text-center mt-5'>Todos los juegos</h2>
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

export default Juegos