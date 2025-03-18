import React from 'react';
import { Link } from 'react-router-dom';
import useDataFetching from '../../hooks/useDataFetching';

const API = 'http://localhost/juegos/back/api/juegos/get/mejorvalorados.php';

const MejorValorados = () => {
    const datos = useDataFetching(API);

    return (
        <>
            {/* Start Trending Product Area */}
            <section className="trending-product section" style={{ marginTop: 12 }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Juegos Mejor Valorados</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {datos && datos.map((item, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-12">
                                {/* Start Single Product */}
                                <div className="single-product">
                                    <div className="product-image">
                                        <img src={`http://localhost/juegos/back/img/${item.imagen}`} alt="#" />
                                        <div className="button">
                                            <Link to={`/detalle/${item.idjuego}`} className="btn"><i className="lni lni-cart" /> Agregar al Carrito</Link>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <span className="category">{item.genero}</span>
                                        <h4 className="title">
                                            <a href="product-grids.html">{item.nombre}</a>
                                        </h4>
                                        <ul className="review">
                                            <li><i className="lni lni-star-filled" /></li>
                                            <li><i className="lni lni-star-filled" /></li>
                                            <li><i className="lni lni-star-filled" /></li>
                                            <li><i className="lni lni-star-filled" /></li>
                                            <li><i className="lni lni-star" /></li>
                                            <li><span>4.0 Review(s)</span></li>
                                        </ul>
                                        <div className="price">
                                            <span>${item.precio}</span>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Product */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* End Trending Product Area */}
        </>
    );
};

export default MejorValorados;
