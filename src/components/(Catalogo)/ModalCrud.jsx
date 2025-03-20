import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ModalCrud = ({ isOpen, onClose }) => {
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
    
        // Verifica los datos antes de enviar
        console.log(formData);
    
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
        });
    
        try {
            const response = await fetch('http://localhost/juegos/back/api/juegos/post.php', {
                method: 'POST',
                body: formDataToSend
            });
    
            if (response.ok) {
                Swal.fire('Éxito', 'Juego creado correctamente', 'success');
                onClose();
            } else {
                const errorData = await response.json();
                Swal.fire('Error', errorData.error || 'Hubo un problema al crear el juego', 'error');
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
                        <h5 className="modal-title">Agregar Juego</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" name="nombre" onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Descripción</label>
                                <textarea className="form-control" name="descripcion" onChange={handleChange}></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">IdEstado</label>
                                <input type="number" className="form-control" name="idestatus" onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">IdGénero</label>
                                <input type="number" className="form-control" name="idgenero" onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Fecha de Publicación</label>
                                <input type="date" className="form-control" name="fechapublicacion" onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Precio</label>
                                <input type="number" step="0.01" className="form-control" name="precio" onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Valoración</label>
                                <input type="number" className="form-control" name="valoracion" onChange={handleChange} />
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

export default ModalCrud;
