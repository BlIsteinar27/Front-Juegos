import React, { useContext } from 'react'
import { carritoContext } from '../contexts/carritoContext'



const ListaCompra = () => {
  const { cart, eliminar, vaciar, comprar, validado } = useContext(carritoContext)
  return (
    <>
      <div className="container">
        <div className="section-title">

          <h2 className="text-center my-5">Lista de compra</h2>


        </div>
        <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Foto</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">SubTotal</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => {
                        const totalItem = item.precio * item.cantidad;
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td className='text-center'>
                                    <img src={`http://localhost/juegos/back/img/${item.imagen}`} alt={item.nombre} width={60} />
                                </td>
                                <td className='text-center'>{item.nombre}</td>
                                <td className='text-center'>{item.precio}</td>
                                <td className='text-center'>{totalItem.toFixed(2)}</td>
                                <td className="text-center">
                                    <button className="btn btn-danger btn-sm" onClick={() => eliminar(item)}>Eliminar</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end">
                            <b>Total:</b>
                        </td>
                        <td className="text-center">
                            <b>
                                Cantidad de juegos: {cart.reduce((total, item) => total + item.cantidad, 0)}
                            </b>
                        </td>
                        <td className="text-end">
                            <b>
                                {cart.reduce((total, item) => total + item.precio * item.cantidad, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })}
                            </b>
                        </td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        {cart.length > 0 ? (

          <div className="card p-3 my-3" data-bs-theme="dark">

            <button className="btn btn-danger btn-sm mx-1 mb-2" onClick={() => vaciar()}>Vaciar Carrito</button>

            <button className="btn btn-success btn-sm mx-1" onClick={() => comprar()}>Realizar la Comprar</button>


          </div>
        ) : (
          <div className="card p-3 my-3">
            <h5>Carrito Vacío</h5>
          </div>
        )}
      </div>
    </>
  )
}

export default ListaCompra