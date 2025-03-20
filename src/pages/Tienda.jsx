import React from 'react';
import Card from '../components/Card';
import usePaginatedFetch from '../hooks/usePaginatedFetch';

const API = 'http://localhost/juegos/back/api/juegos/get/paginado.php';
const LIMIT = 12;

const Tienda = () => {
    
    const { datos, paginaActual, totalPaginas, handlePaginaClick } = usePaginatedFetch(API, LIMIT);

    const renderPagination = () => {
        if (totalPaginas === 0) return null;

        const paginas = [];

        // Botón "Primera"
        paginas.push(
            <li key="first" className={`page-item ${paginaActual === 1 ? 'disabled' : ''}`}>
                <a className="page-link" href="#" onClick={() => handlePaginaClick(1)}>Primera</a>
            </li>
        );

        // Botones de página
        const startPage = Math.max(1, paginaActual - 1);
        const endPage = Math.min(totalPaginas, paginaActual + 1);

        for (let i = startPage; i <= endPage; i++) {
            paginas.push(
                <li key={i} className={`page-item ${paginaActual === i ? 'active' : ''}`}>
                    <a className="page-link" href="#" onClick={() => handlePaginaClick(i)}>
                        {i}
                    </a>
                </li>
            );
        }

        // Botón "Última"
        paginas.push(
            <li key="last" className={`page-item ${paginaActual === totalPaginas ? 'disabled' : ''}`}>
                <a className="page-link" href="#" onClick={() => handlePaginaClick(totalPaginas)}>Última</a>
            </li>
        );

        return paginas;
    };

    return (
        <div className="container mb-3">
            <div className="section-title">
                <h2 className='text-center mt-5'>Tienda</h2>
                <p>Aquí ofrecemos una vista general de la tienda</p>
            </div>
            <p className='text-center mb-2'>Página {paginaActual} de {totalPaginas}</p>
            <div className='d-flex justify-content-center align-items-center mb-3'>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {renderPagination()}
                    </ul>
                </nav>
            </div>
            <div className="row">
                {datos.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Tienda;
