import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { carritoContext } from '../contexts/carritoContext';

const API = "http://localhost/juegos/back/api/juegos/get/poridjuego.php?idjuego=";

const Detalle = () => {

    const params = useParams()
    let idjuego = params.idjuego;

    const [datos, setDatos] = useState({})
    const { cart, agregar } = useContext(carritoContext);

    let URI = API + idjuego;
    const getDatos = async () => {

        try {
            const response = await fetch(URI);
            const data = await response.json();
            console.log(data) 
           
            setDatos(data[0]);

        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, [params.idjuego]);
    const handleAgregar = () => {
        agregar(datos, 1); // Agrega el producto al carrito con cantidad 1
    };

    return (
        <>
            {/* Start Breadcrumbs */}
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Detalles de {datos.nombre}</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><Link to='/inicio' href="#"><i className="lni lni-home" /> Inicio</Link></li>
                                <li><Link to='/tienda' href="#">Tienda</Link></li>
                                <li>{datos.nombre}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrumbs */}
            {/* Start Item Details */}
            <section className="item-details section">
                <div className="container">
                
                    <div className="top-area">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="product-images">
                                    <main id="gallery">
                                        <div className="main-img">
                                            <img src={`http://localhost/juegos/back/img/${datos.imagen}`}  id="current" alt={`${datos.nombre}`} />
                                        </div>
                                        <div className="images">
                                            <img src={`http://localhost/juegos/back/img/${datos.imagen}`} className="img" alt="#" />
                                           
                                        </div>
                                    </main>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="product-info">
                                    <h2 className="title">{datos.nombre}</h2>
                                    <p className="category"><i className="lni lni-tag" /> {datos.genero}<a href="javascript:void(0)">Action
                                        cameras</a></p>
                                    <h3 className="price">${datos.precio}<span>${datos.precio}</span></h3>
                                    <p className="info-text">{datos.descripcion}</p>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="form-group color-option">
                                                <label className="title-label" htmlFor="size">Choose color</label>
                                                <div className="single-checkbox checkbox-style-1">
                                                    <input type="checkbox" id="checkbox-1" defaultChecked />
                                                    <label htmlFor="checkbox-1"><span /></label>
                                                </div>
                                                <div className="single-checkbox checkbox-style-2">
                                                    <input type="checkbox" id="checkbox-2" />
                                                    <label htmlFor="checkbox-2"><span /></label>
                                                </div>
                                                <div className="single-checkbox checkbox-style-3">
                                                    <input type="checkbox" id="checkbox-3" />
                                                    <label htmlFor="checkbox-3"><span /></label>
                                                </div>
                                                <div className="single-checkbox checkbox-style-4">
                                                    <input type="checkbox" id="checkbox-4" />
                                                    <label htmlFor="checkbox-4"><span /></label>
                                                </div>
                                            </div>
                                        </div>
                                        
                                       
                                    </div>
                                    <div className="bottom-content">
                                        <div className="row align-items-end">
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="button cart-button">
                                                    <button className="btn" style={{ width: '100%' }} onClick={handleAgregar}>Agregar al Carrito</button>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="wish-button">
                                                    <button className="btn"><i className="lni lni-reload" /> Consultar</button>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="wish-button">
                                                    <button className="btn"><i className="lni lni-heart" />To Wishlist</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-details-info">
                        <div className="single-block">
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="info-body custom-responsive-margin">
                                        <h4>Details</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                                        <h4>Features</h4>
                                        <ul className="features">
                                            <li>Capture 4K30 Video and 12MP Photos</li>
                                            <li>Game-Style Controller with Touchscreen</li>
                                            <li>View Live Camera Feed</li>
                                            <li>Full Control of HERO6 Black</li>
                                            <li>Use App for Dedicated Camera Operation</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="info-body">
                                        <h4>Specifications</h4>
                                        <ul className="normal-list">
                                            <li><span>Weight:</span> 35.5oz (1006g)</li>
                                            <li><span>Maximum Speed:</span> 35 mph (15 m/s)</li>
                                            <li><span>Maximum Distance:</span> Up to 9,840ft (3,000m)</li>
                                            <li><span>Operating Frequency:</span> 2.4GHz</li>
                                            <li><span>Manufacturer:</span> GoPro, USA</li>
                                        </ul>
                                        <h4>Shipping Options:</h4>
                                        <ul className="normal-list">
                                            <li><span>Courier:</span> 2 - 4 days, $22.50</li>
                                            <li><span>Local Shipping:</span> up to one week, $10.00</li>
                                            <li><span>UPS Ground Shipping:</span> 4 - 6 days, $18.00</li>
                                            <li><span>Unishop Global Export:</span> 3 - 4 days, $25.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Item Details */}
        </>
    )
}

export default Detalle