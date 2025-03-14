import React from 'react'

const Footer = () => {
    return (
        <>
            {/* Start Footer Area */}
            <footer className="footer">
                {/* Start Footer Top */}
                <div className="footer-top">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="footer-logo">
                                        <a href="index.html">
                                            <img src="/public/logo/white-logo.svg" alt="#" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-8 col-12">
                                    <div className="footer-newsletter">
                                        <h4 className="title">
                                            Suscríbase a nuestro boletín
                                            <span>Obtenga toda la información más reciente, Ventas y Ofertas.</span>
                                        </h4>
                                        <div className="newsletter-form-head ">
                                            <form action="#" method="get" target="_blank" className="newsletter-form">
                                                <input name="EMAIL" placeholder="Correo electrónico aquí..." type="email" />
                                                <div className="button">
                                                    <button className="btn">Suscribirse<span className="dir-part" /></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Footer Top */}
                {/* Start Footer Middle */}
                <div className="footer-middle">
                    <div className="container">
                        <div className="bottom-inner">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-12">
                                    {/* Single Widget */}
                                    <div className="single-footer f-contact">
                                        <h3>Contáctenos</h3>
                                        <p className="phone">Teléfono: +1 (900) 33 169 7720</p>
                                        <ul>
                                            <li><span>Lunes-Viernes: </span> 9.00 am - 8.00 pm</li>
                                            <li><span>Sábado: </span> 10.00 am - 6.00 pm</li>
                                        </ul>
                                        <p className="mail">
                                            <a href="mailto:support@shopgrids.com">support@shopgrids.com</a>
                                        </p>
                                    </div>
                                    {/* End Single Widget */}
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    {/* Single Widget */}
                                    <div className="single-footer our-app">
                                        <h3>Nuestra App Móvil</h3>
                                        <ul className="app-btn">
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i className="lni lni-apple" />
                                                    <span className="small-title">Descargar en</span>
                                                    <span className="big-title">App Store</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i className="lni lni-play-store" />
                                                    <span className="small-title">Descargar en</span>
                                                    <span className="big-title">Google Play</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* End Single Widget */}
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    {/* Single Widget */}
                                    <div className="single-footer f-link">
                                        <h3>Información</h3>
                                        <ul>
                                            <li><a href="javascript:void(0)">Acerca de</a></li>
                                            <li><a href="javascript:void(0)">Contacto</a></li>
                                            <li><a href="javascript:void(0)">Descargas</a></li>
                                            <li><a href="javascript:void(0)">Mapa del sitio</a></li>
                                            <li><a href="javascript:void(0)">Preguntas frecuentes</a></li>
                                        </ul>
                                    </div>
                                    {/* End Single Widget */}
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    {/* Single Widget */}
                                    <div className="single-footer f-link">
                                        <h3>Departamentos de la tienda</h3>
                                        <ul>
                                            <li><a href="javascript:void(0)">Computadoras &amp; Accessorios</a></li>
                                            <li><a href="javascript:void(0)">Smartphones &amp; Tablets</a></li>
                                            <li><a href="javascript:void(0)">TV, Video &amp; Audio</a></li>
                                            <li><a href="javascript:void(0)">Cámaras, Fotos &amp; Videos</a></li>
                                            <li><a href="javascript:void(0)">Audífonos</a></li>
                                        </ul>
                                    </div>
                                    {/* End Single Widget */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Footer Middle */}
                {/* Start Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-12">
                                    <div className="payment-gateway">
                                        <span>Aceptamos:</span>
                                        <img src="/public/footer/credit-cards-footer.png" alt="#" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="copyright">
                                        <p>Diseñado y desarrollado por<a href="https://graygrids.com/" rel="nofollow" target="_blank">GrayGrids</a></p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <ul className="socila">
                                        <li>
                                            <span>Síguenos en:</span>
                                        </li>
                                        <li><a href="javascript:void(0)"><i className="lni lni-facebook-filled" /></a></li>
                                        <li><a href="javascript:void(0)"><i className="lni lni-twitter-original" /></a></li>
                                        <li><a href="javascript:void(0)"><i className="lni lni-instagram" /></a></li>
                                        <li><a href="javascript:void(0)"><i className="lni lni-google" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Footer Bottom */}
            </footer>
            {/*/ End Footer Area */}



        </>
    )
}

export default Footer