import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const ModalPut = ({ isOpen, onClose, fetchData, paginaActual, juegoSeleccionado, setJuegoSeleccionado, generos, estatus }) => {
    // Estado para los datos del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        idestatus: '',
        idgenero: '',
        fechapublicacion: '',
        precio: '',
        valoracion: '',
        imagen: null,
    });

    // Actualizar el estado cuando cambia el juego seleccionado
    useEffect(() => {
        if (juegoSeleccionado) {
            setFormData((prevData) => ({
                ...prevData,
                nombre: juegoSeleccionado.nombre_juego || '',
                descripcion: juegoSeleccionado.descripcion_juego || '',
                idestatus: juegoSeleccionado.idestatus?.toString() || '',
                idgenero: juegoSeleccionado.idgenero?.toString() || '',
                fechapublicacion: juegoSeleccionado.fechapublicacion || '',
                precio: juegoSeleccionado.precio?.toString() || '',
                valoracion: juegoSeleccionado.valoracion?.toString() || '',
                imagen: null, // No cargamos la imagen aquí
            }));
        }
    }, [juegoSeleccionado]);

    // Manejar cambios en los campos de texto
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Manejar cambio en el campo de imagen
    const handleImageChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            imagen: e.target.files[0],
        }));
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            if (formData[key] !== null && key !== 'imagen') {
                formDataToSend.append(key, formData[key]);
            }
        });

        // Añadir el ID del juego
        if (juegoSeleccionado) {
            formDataToSend.append('idjuego', juegoSeleccionado.idjuego);
        }

        // Añadir la nueva imagen si existe
        if (formData.imagen) {
            formDataToSend.append('imagen', formData.imagen);
        }

        try {
            const response = await fetch('http://localhost/juegos/back/api/juegos/put.php', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: 'Juego actualizado correctamente',
                    timer: 2000,
                    showConfirmButton: false,
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

    // Si el modal no está abierto, no renderizamos nada
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
                            {/* Campo oculto para idjuego */}
                            <input type="hidden" name="idjuego" value={juegoSeleccionado?.idjuego || ''} />

                            {/* Campos del formulario */}
                            {[
                                { label: 'Nombre', name: 'nombre', type: 'text', required: true },
                                { label: 'Descripción', name: 'descripcion', type: 'textarea', required: true },
                                { label: 'Fecha de Publicación', name: 'fechapublicacion', type: 'date', required: true },
                                { label: 'Precio', name: 'precio', type: 'number', step: '0.01', required: true },
                                { label: 'Valoración', name: 'valoracion', type: 'number', required: true },
                            ].map(({ label, name, type, step, required }) => (
                                <div className="mb-3" key={name}>
                                    <label className="form-label">{label}</label>
                                    {type === 'textarea' ? (
                                        <textarea
                                            className="form-control"
                                            name={name}
                                            value={formData[name]}
                                            onChange={handleChange}
                                            required={required}
                                        />
                                    ) : (
                                        <input
                                            className="form-control"
                                            type={type}
                                            name={name}
                                            value={formData[name]}
                                            onChange={handleChange}
                                            step={step}
                                            required={required}
                                        />
                                    )}
                                </div>
                            ))}

                            {/* Dropdown de Estado */}
                            <div className="mb-3">
                                <label className="form-label">Estado</label>
                                <select
                                    className="form-select"
                                    name="idestatus"
                                    value={formData.idestatus}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecciona un estado</option>
                                    {estatus.map((estado) => (
                                        <option key={estado.idestatus} value={estado.idestatus}>
                                            {estado.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Dropdown de Género */}
                            <div className="mb-3">
                                <label className="form-label">Género</label>
                                <select
                                    className="form-select"
                                    name="idgenero"
                                    value={formData.idgenero}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecciona un género</option>
                                    {generos.map((genero) => (
                                        <option key={genero.idgenero} value={genero.idgenero}>
                                            {genero.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Imagen */}
                            <div className="mb-3">
                                <label className="form-label">Imagen Actual</label>
                                {juegoSeleccionado?.imagen && (
                                    <div>
                                        <img
                                            src={`http://localhost/juegos/back/img/${juegoSeleccionado.imagen}`}
                                            alt="Imagen actual del juego"
                                            style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
                                        />
                                    </div>
                                )}
                                <input
                                    type="file"
                                    className="form-control"
                                    name="imagen"
                                    onChange={handleImageChange}
                                />
                            </div>

                            {/* Botón de envío */}
                            <button type="submit" className="btn btn-primary">
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalPut;