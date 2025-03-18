import { useState } from "react";
import { carritoContext } from "./carritoContext"
import Swal from 'sweetalert2';


const Carrito = ({ children }) => {

  const [cart, setCart] = useState([]);

  const agregar = (producto) => {
    setCart((currItems) => {
      const isItemInCart = currItems.some((item) => item.idjuego === producto.idjuego);
      if (isItemInCart) {
        return currItems; // No hacer nada si el juego ya está en el carrito
      } else {
        Swal.fire({
          icon: 'success',
          title: '¡Agregado!',
          text: 'El juego ha sido agregado al carrito.',
          timer: 1500,
          showConfirmButton: false
        });
        return [...currItems, { ...producto, cantidad: 1 }];
      }
    });
  };
  const vaciar = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Quieres vaciar el carrito?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, vaciar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        Swal.fire({

          icon: 'success',
          title: '¡Vaciado!',
          text: 'El carrito ha sido vaciado.',
          timer: 2000,
          showConfirmButton: false

        });
      }
    });

  }
  const eliminar = (producto) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Quieres eliminar este juego del carrito?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        setCart((currItems) => {
          return currItems.filter((item) => item.idjuego !== producto.idjuego);
        });
        Swal.fire({
          icon: 'success',
          title: '¡Eliminado!',
          text: 'El juego ha sido eliminado del carrito.',
          timer: 1700,
          showConfirmButton: false
        });
      }
    });

    /*
    para eliminar todos los item
    setCart((currItems)=>{
        return currItems.filter((item)=> item.idjuego !== producto.idjuego);
    })
    */
    console.log(cart)
  }

  const comprar = () => {
    Swal.fire({
      icon: 'success',
      title: '¡Gracias por tu compra!',
      showConfirmButton: false,
      timer: 1500
    });
    setCart([]);
  };

  return (
    <carritoContext.Provider
      value={{ cart, agregar, vaciar, eliminar, comprar }}>
      {children}
    </carritoContext.Provider>
  )
}

export default Carrito