import React, { useEffect } from 'react';
import { tns } from 'tiny-slider';

const Hero = () => {
    useEffect(() => {
        // Inicializar tiny-slider para el hero-slider
        tns({
            container: '.hero-slider',
            slideBy: 'page',
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 4000, // 4 segundos antes de pasar a la siguiente imagen
            autoplayButtonOutput: false, // Oculta el botón de autoplay
            controls: true,
            controlsText: ['<i class="lni lni-chevron-left"></i>', '<i class="lni lni-chevron-right"></i>'],
            loop: true, // Habilita el bucle infinito
           
            speed: 600, // Ajusta la velocidad de transición para que sea más suave
            swipeAngle: false, // Desactiva el ángulo de deslizamiento
            nav: false, // Oculta la navegación (puntos)
           
            mouseDrag: false, // Desactiva el arrastre con el mouse
        });

        // Inicializar tiny-slider para el carrusel de marcas
        tns({
            container: '.brands-logo-carousel',
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 4000, // 4 segundos antes de pasar a la siguiente imagen
            loop: true, // Habilita el bucle infinito
           
            speed: 600, // Ajusta la velocidad de transición para que sea más suave
            swipeAngle: false, // Desactiva el ángulo de deslizamiento
            nav: false, // Oculta la navegación (puntos)
         
          
        });
    }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

    return (
        <>
            {/* Start Hero Area */}
            <section className="hero-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12 custom-padding-right">
                            <div className="slider-head">
                                {/* Start Hero Slider */}
                                <div className="hero-slider">
                                    {/* Start Single Slider */}
                                    <div className="single-slider" style={{ backgroundImage: 'url(/public/hero/slider-bg1.jpg)' }}>
                                        <div className="content">
                                            <h2><span>No restocking fee ($35 savings)</span> M75 Sport Watch</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <h3><span>Now Only</span> $320.99</h3>
                                            <div className="button">
                                                <a href="product-grids.html" className="btn">Comprar Ahora</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Slider */}
                                    {/* Start Single Slider */}
                                    <div className="single-slider" style={{ backgroundImage: 'url(/public/hero/slider-bg2.jpg)' }}>
                                        <div className="content">
                                            <h2><span>Big Sale Offer</span> Get the Best Deal on CCTV Camera</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <h3><span>Combo Only:</span> $590.00</h3>
                                            <div className="button">
                                                <a href="product-grids.html" className="btn">Comprar Ahora</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Slider */}
                                </div>
                                {/* End Hero Slider */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-6 col-12 md-custom-padding">
                                    {/* Start Small Banner */}
                                    <div className="hero-small-banner" style={{ backgroundImage: 'url("/public/hero/slider-bnr.jpg")' }}>
                                        <div className="content">
                                            <h2><span>New line required</span> iPhone 12 Pro Max</h2>
                                            <h3>$259.99</h3>
                                        </div>
                                    </div>
                                    {/* End Small Banner */}
                                </div>
                                <div className="col-lg-12 col-md-6 col-12">
                                    {/* Start Small Banner */}
                                    <div className="hero-small-banner style2">
                                        <div className="content">
                                            <h2>Weekly Sale!</h2>
                                            <p>Saving up to 50% off all online store items this week.</p>
                                            <div className="button">
                                                <a className="btn" href="product-grids.html">Comprar Ahora</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Small Banner */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Hero Area */}

            {/* Start Brands Logo Carousel */}
            <div className="brands-logo-carousel">
                {/* Contenido del carrusel de marcas */}
            </div>
            {/* End Brands Logo Carousel */}
        </>
    );
};

export default Hero;
