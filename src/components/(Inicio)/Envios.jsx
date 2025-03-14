import React from 'react'

const Envios = () => {
    return (
        <>
            {/* Start Shipping Info */}
            <section className="shipping-info">
                <div className="container">
                    <ul>
                        {/* Free Shipping */}
                        <li>
                            <div className="media-icon">
                                <i className="lni lni-delivery" />
                            </div>
                            <div className="media-body">
                                <h5>Envíos Gratuitos.</h5>
                                <span>Para pedidos superiores a $99</span>
                            </div>
                        </li>
                        {/* Money Return */}
                        <li>
                            <div className="media-icon">
                                <i className="lni lni-support" />
                            </div>
                            <div className="media-body">
                                <h5>Soporte 24/7.</h5>
                                <span>Chat en vivo o llamada.</span>
                            </div>
                        </li>
                        {/* Support 24/7 */}
                        <li>
                            <div className="media-icon">
                                <i className="lni lni-credit-cards" />
                            </div>
                            <div className="media-body">
                                <h5>Pago en línea.</h5>
                                <span>Servicios de pago seguros.</span>
                            </div>
                        </li>
                        {/* Safe Payment */}
                        <li>
                            <div className="media-icon">
                                <i className="lni lni-reload" />
                            </div>
                            <div className="media-body">
                                <h5>Fácil devolución.</h5>
                                <span>Compras sin complicaciones..</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            {/* End Shipping Info */}

        </>
    )
}

export default Envios