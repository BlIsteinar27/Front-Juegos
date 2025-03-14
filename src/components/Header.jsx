import React from 'react';
import { Link } from 'react-router-dom';
import FiltroGeneros from './(Header)/FiltroGeneros';

const Header = () => {
    return (
        <header className="header navbar-area">
            {/* Start Topbar */}
            <div className="topbar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="top-left">
                                <ul className="menu-top-link">
                                    <li>
                                        <div className="select-position">
                                            <select defaultValue={0}>
                                                <option value={0}>$ USD</option>
                                                <option value={1}>€ EURO</option>
                                                <option value={2}>$ CAD</option>
                                                <option value={3}>₹ INR</option>
                                                <option value={4}>¥ CNY</option>
                                                <option value={5}>৳ BDT</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="select-position">
                                            <select defaultValue={0}>
                                                <option value={0}>English</option>
                                                <option value={1}>Español</option>
                                                <option value={2}>Filipino</option>
                                                <option value={3}>Français</option>
                                                <option value={4}>العربية</option>
                                                <option value={5}>हिन्दी</option>
                                                <option value={6}>বাংলা</option>
                                            </select>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="top-middle">
                                <ul className="useful-links">
                                    <li><Link to='/' href="#">Inicio</Link></li>
                                    <li><a href="about-us.html">Acerca de</a></li>
                                    <li><a href="contact.html">Contacto</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="top-end">
                                <div className="user">
                                    <i className="lni lni-user" />
                                    Hello
                                </div>
                                <ul className="user-login">
                                    <li>
                                        <a href="login.html">Iniciar Sesion</a>
                                    </li>
                                    <li>
                                        <a href="register.html">Registrarse</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Topbar */}
            {/* Start Header Middle */}
            <div className="header-middle">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-3 col-7">
                            {/* Start Header Logo */}
                            <a className="navbar-brand" href="index.html">
                                <img src="/public/logo/logo.svg" alt="Logo" />
                            </a>
                            {/* End Header Logo */}
                        </div>
                        <div className="col-lg-5 col-md-7 d-xs-none">
                            {/* Start Main Menu Search */}
                            <div className="main-menu-search">
                                {/* navbar search start */}
                                <div className="navbar-search search-style-5">
                                    <div className="search-select">
                                        <div className="select-position">
                                            <select defaultValue="All">
                                                <option value="All">Todo</option>
                                                <option value="option 01">option 01</option>
                                                <option value="option 02">option 02</option>
                                                <option value="option 03">option 03</option>
                                                <option value="option 04">option 04</option>
                                                <option value="option 05">option 05</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="search-input">
                                        <input type="text" placeholder="Search" />
                                    </div>
                                    <div className="search-btn">
                                        <button><i className="lni lni-search-alt" /></button>
                                    </div>
                                </div>
                                {/* navbar search Ends */}
                            </div>
                            {/* End Main Menu Search */}
                        </div>
                        <div className="col-lg-4 col-md-2 col-5">
                            <div className="middle-right-area">
                                <div className="nav-hotline">
                                    <i className="lni lni-phone" />
                                    <h3>Contacto Directo:
                                        <span>(+100) 123 456 7890</span>
                                    </h3>
                                </div>
                                <div className="navbar-cart">
                                    <div className="wishlist">
                                        <a href="javascript:void(0)">
                                            <i className="lni lni-heart" />
                                            <span className="total-items">0</span>
                                        </a>
                                    </div>
                                    <div className="cart-items">
                                        <a href="javascript:void(0)" className="main-btn">
                                            <i className="lni lni-cart" />
                                            <span className="total-items">2</span>
                                        </a>
                                        {/* Shopping Item */}
                                        <div className="shopping-item">
                                            <div className="dropdown-cart-header">
                                                <span>2 Articulos</span>
                                                <a href="cart.html">Ver Carrito</a>
                                            </div>
                                            <ul className="shopping-list">
                                                <li>
                                                    <a href="javascript:void(0)" className="remove" title="Remove this item"><i className="lni lni-close" /></a>
                                                    <div className="cart-img-head">
                                                        <a className="cart-img" href="product-details.html"><img src="/public/header/cart-items/item1.jpg" alt="#" /></a>
                                                    </div>
                                                    <div className="content">
                                                        <h4><a href="product-details.html">
                                                            Apple Watch Series 6</a></h4>
                                                        <p className="quantity">1x - <span className="amount">$99.00</span></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="remove" title="Remove this item"><i className="lni lni-close" /></a>
                                                    <div className="cart-img-head">
                                                        <a className="cart-img" href="product-details.html"><img src="/public/header/cart-items/item2.jpg" alt="#" /></a>
                                                    </div>
                                                    <div className="content">
                                                        <h4><a href="product-details.html">Wi-Fi Smart Camera</a></h4>
                                                        <p className="quantity">1x - <span className="amount">$35.00</span></p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="bottom">
                                                <div className="total">
                                                    <span>Total</span>
                                                    <span className="total-amount">$134.00</span>
                                                </div>
                                                <div className="button">
                                                    <a href="checkout.html" className="btn animate">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*/ End Shopping Item */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Header Middle */}
            {/* Start Header Bottom */}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-6 col-12">
                        <div className="nav-inner">
                            {/* Start Mega Category Menu */}
                            <div className="mega-category-menu">
                                <span className="cat-button"><i className="lni lni-menu" />Todos los Generos</span>
                                <ul className="sub-category">
                                    <FiltroGeneros />
                                    <li><a href="product-grids.html">Electronics <i className="lni lni-chevron-right" /></a>
                                        <ul className="inner-sub-category">
                                            <li><a href="product-grids.html">Digital Cameras</a></li>
                                            <li><a href="product-grids.html">Camcorders</a></li>
                                            <li><a href="product-grids.html">Camera Drones</a></li>
                                            <li><a href="product-grids.html">Smart Watches</a></li>
                                            <li><a href="product-grids.html">Headphones</a></li>
                                            <li><a href="product-grids.html">MP3 Players</a></li>
                                            <li><a href="product-grids.html">Microphones</a></li>
                                            <li><a href="product-grids.html">Chargers</a></li>
                                            <li><a href="product-grids.html">Batteries</a></li>
                                            <li><a href="product-grids.html">Cables &amp; Adapters</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            {/* End Mega Category Menu */}
                            {/* Start Navbar */}
                            <nav className="navbar navbar-expand-lg">
                                <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon" />
                                    <span className="toggler-icon" />
                                    <span className="toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                    <ul id="nav" className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <Link to='/' href="index.html" className="active" aria-label="Toggle navigation">Inicio</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#submenu-1-2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Paginas</a>
                                            <ul className="sub-menu collapse" id="submenu-1-2">
                                                <li className="nav-item"><a href="about-us.html">Acerca de</a></li>
                                                <li className="nav-item"><a href="faq.html">Preguntas Frecuentes</a></li>
                                                <li className="nav-item"><a href="login.html">Iniciar Sesion</a></li>
                                                <li className="nav-item"><a href="register.html">Registrar</a></li>
                                                <li className="nav-item"><a href="mail-success.html">Mail Success</a></li>
                                                <li className="nav-item"><a href="404.html">404 Error</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#submenu-1-3" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Tienda</a>
                                            <ul className="sub-menu collapse" id="submenu-1-3">
                                                <li className="nav-item"><Link to='/tienda' href="#">Red de la Tienda</Link></li>
                                                <li className="nav-item"><a href="product-list.html">Lista de la Tienda</a></li>
                                                <li className="nav-item"><a href="product-details.html">Tienda Individual</a></li>
                                                <li className="nav-item"><Link to='/listacompra' href="#">Ver lista de compra</Link></li>
                                                <li className="nav-item"><a href="checkout.html">Checkout</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#submenu-1-4" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">Blog</a>
                                            <ul className="sub-menu collapse" id="submenu-1-4">
                                                <li className="nav-item"><a href="blog-grid-sidebar.html">Blog Grid Sidebar</a>
                                                </li>
                                                <li className="nav-item"><a href="blog-single.html">Blog Single</a></li>
                                                <li className="nav-item"><a href="blog-single-sidebar.html">Blog Single
                                                    Sibebar</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="contact.html" aria-label="Toggle navigation">Contacto</a>
                                        </li>
                                    </ul>
                                </div> {/* navbar collapse */}
                            </nav>
                            {/* End Navbar */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        {/* Start Nav Social */}
                        <div className="nav-social">
                            <h5 className="title me-2">Síguenos en:</h5>
                            <ul>
                                <li>
                                    <a href="javascript:void(0)"><i className="lni lni-facebook-filled" /></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><i className="lni lni-twitter-original" /></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><i className="lni lni-instagram" /></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)"><i className="lni lni-skype" /></a>
                                </li>
                            </ul>
                        </div>
                        {/* End Nav Social */}
                    </div>
                </div>
            </div>
            {/* End Header Bottom */}
        </header>
    );
};

export default Header;
