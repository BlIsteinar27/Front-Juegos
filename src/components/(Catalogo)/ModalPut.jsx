import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const ModalPut = ({ isOpen, onClose, fetchData, paginaActual, juegoSeleccionado, setJuegoSeleccionado }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        idestatus: '',
        idgenero: '',
        fechapublicacion: '',
        precio: '',
        valoracion: '',
        imagen: null
    });

    useEffect(() => {
        if (juegoSeleccionado) {
            setFormData({
                nombre: juegoSeleccionado.nombre || '',
                descripcion: juegoSeleccionado.descripcion || '',
                idestatus: juegoSeleccionado.idestatus || '',
                idgenero: juegoSeleccionado.idgenero || '',
                fechapublicacion: juegoSeleccionado.fechapublicacion || '',
                precio: juegoSeleccionado.precio || '',
                valoracion: juegoSeleccionado.valoracion || '',
                imagen: null // No cargamos la imagen aquí
            });
        }
    }, [juegoSeleccionado]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            imagen: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
        });
    
        // Asegúrate de que el idjuego se esté añadiendo correctamente
        if (juegoSeleccionado) {
            formDataToSend.append('idjuego', juegoSeleccionado.idjuego);
        }
    
        // Log de datos a enviar
        for (let pair of formDataToSend.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
    
        try {
            const response = await fetch('http://localhost/juegos/back/api/juegos/put.php', {
                method: 'POST',
                body: formDataToSend
            });
    
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: 'Juego actualizado correctamente',
                    timer: 2000,
                    showConfirmButton: false
                });
                onClose();
                setJuegoSeleccionado(null); // Resetear el juego seleccionado
                fetchData(paginaActual);
            } else {
                const errorData = await response.json();
                Swal.fire('Error', errorData.error || 'Hubo un problema al actualizar el juego', 'error');
            }
        } catch (error) {
            Swal.fire('Error', 'Hubo un problema al conectar con el servidor', 'error');
        }
    };
    
    

    if (!isOpen) return null;

    return (
        <div className="modal show" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Actualizar Juego</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" name="nombre" value={formData.nombre} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Descripción</label>
                                <textarea className="form-control" name="descripcion" value={formData.descripcion} onChange={handleChange} required></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">IdEstado</label>
                                <input type="number" className="form-control" name="idestatus" value={formData.idestatus} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">IdGénero</label>
                                <input type="number" className="form-control" name="idgenero" value={formData.idgenero} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Fecha de Publicación</label>
                                <input type="date" className="form-control" name="fechapublicacion" value={formData.fechapublicacion} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Precio</label>
                                <input type="number" step="0.01" className="form-control" name="precio" value={formData.precio} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Valoración</label>
                                <input type="number" className="form-control" name="valoracion" value={formData.valoracion} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Imagen</label>
                                <input type="file" className="form-control" name="imagen" onChange={handleImageChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalPut;
