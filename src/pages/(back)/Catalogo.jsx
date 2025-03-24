import React, { useState } from 'react';
import usePaginatedFetch from '../../hooks/usePaginatedFetch';
import ModalPost from '../../components/(Catalogo)/ModalPost';
import ModalPut from '../../components/(Catalogo)/ModalPut';
import Swal from 'sweetalert2';

const API = 'http://localhost/juegos/back/api/juegos/get/paginado.php';
const LIMIT = 12;

const Catalogo = () => {
    const { datos, paginaActual, totalPaginas, handlePaginaClick, fetchData } = usePaginatedFetch(API, LIMIT);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openUpdateModal = (juego) => {
        setJuegoSeleccionado(juego);
        setIsUpdateModalOpen(true);
    };

    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
        setJuegoSeleccionado(null);
    };

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

    const handleEliminarJuego = async (id) => {
        const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: "¿Deseas eliminar este juego?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        });

        if (result.isConfirmed) {
            try {
                const response = await fetch('http://localhost/juegos/back/api/juegos/delete.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `idjuego=${id}`
                });

                if (response.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Éxito',
                        text: 'Juego eliminado correctamente',
                        timer: 2000,
                        showConfirmButton: false
                    });
                    fetchData(paginaActual);
                } else {
                    const errorData = await response.json();
                    Swal.fire('Error', errorData.error || 'Hubo un problema al eliminar el juego', 'error');
                }
            } catch (error) {
                Swal.fire('Error', 'Hubo un problema al conectar con el servidor', 'error');
            }
        }
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
                                <th scope="col">Fecha de publicación</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datos.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        <img src={`http://localhost/juegos/back/img/${item.imagen}`} alt={item.nombre} width={60} />
                                    </td>
                                    <td>{item.nombre}</td>
                                    <td>{item.genero}</td>
                                    <td>{item.fechapublicacion}</td>
                                    <td><a href="#" className='btn btn-outline-secondary'><i className="bi bi-info-lg"></i></a></td>
                                    <td className='text-center'>
                                        <a href="#" className='btn btn-primary btn-sm me-2' onClick={() => openUpdateModal(item)}><i className="bi bi-pencil-square"></i></a>
                                        <button className='btn btn-danger btn-sm ms-2' onClick={() => handleEliminarJuego(item.idjuego)}><i className="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ModalPost isOpen={isModalOpen} onClose={closeModal} fetchData={fetchData} paginaActual={paginaActual} />
            <ModalPut isOpen={isUpdateModalOpen} onClose={closeUpdateModal} fetchData={fetchData} paginaActual={paginaActual} juegoSeleccionado={juegoSeleccionado} setJuegoSeleccionado={setJuegoSeleccionado} />
        </>
    );
};

export default Catalogo;
