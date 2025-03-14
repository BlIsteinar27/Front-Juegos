import React from 'react'

const Card = ({ item }) => {
    return (
        <>
            <div className='col-lg-3 col-md-6 col-12'>
                <div className="single-product">
                    <div className="product-image">
                        <img src={`http://localhost/juegos/back/img/${item.imagen}`} alt="#" />
                        <span className="new-tag">New</span>
                        <div className="button">
                            <a href="product-details.html" className="btn"><i className="lni lni-cart" /> Agregar al Carrito</a>
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
                            <li><i className="lni lni-star-filled" /></li>
                            <li><span>5.0 Review(s)</span></li>
                        </ul>
                        <div className="price">
                            <span>${item.precio}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card