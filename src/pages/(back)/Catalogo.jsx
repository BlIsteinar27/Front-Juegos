import React, { useState } from 'react'
import usePaginatedFetch from '../../hooks/usePaginatedFetch';
import ModalCrud from '../../components/(Catalogo)/ModalCrud';

const API = 'http://localhost/juegos/back/api/juegos/get/paginado.php'
const LIMIT = 12;

const Catalogo = () => {

    const { datos, paginaActual, totalPaginas, handlePaginaClick } = usePaginatedFetch(API, LIMIT);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
        <>
            <div className="container mb-3">
                <div className="section-title">
                    <h2 className='text-center mt-5'>Catalogo</h2>
                    <p className='text-center mb-2'>Página {paginaActual} de {totalPaginas}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <button className="btn btn-success" type="button" onClick={openModal}>
                        <i className="bi bi-plus-square me-2" />Agregar Juego Al Catalogo
                    </button>

                    <nav aria-label="Page navigation example">
                        <ul className="pagination mb-0">
                            {renderPagination()}
                        </ul>
                    </nav>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Foto</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Genero</th>
                                <th scope="col">fecha de publicacion</th>
                                <th scope="col">descripcion</th>
                                <th scope="col" >Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datos && datos.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td >
                                        <img src={`http://localhost/juegos/back/img/${item.imagen}`} alt={item.nombre} width={60} />
                                    </td>
                                    <td >{item.nombre}</td>
                                    <td >{item.genero}</td>
                                    <td >{item.fechapublicacion}</td>
                                    <td ><a href="#" className='btn btn-outline-secondary'><i className="bi bi-info-lg"></i></a></td>
                                    <td className='text-center'>
                                        <a href="#" className='btn btn-primary btn-sm me-2'><i className="bi bi-pencil-square"></i></a>
                                        <a href="#" className='btn btn-danger btn-sm ms-2'><i className="bi bi-trash"></i></a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ModalCrud isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

export default Catalogo