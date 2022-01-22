import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const Cart = () => {

    const { carrito, borrarProducto, vaciarCarrito, cantidadTotal } = useContext (CartContext);
    

  return ( 
    <div>
      {carrito?.map((product) => (
        <div>
            <img src={product.imagen} alt={product.producto} />
            <div>
                <h3>{product.producto}</h3>
                <h3>${product.precio}</h3>
                <h3>X {product.cantidad}</h3>
            </div>
            <div>
                <button onClick={() => borrarProducto(product.id)}> X </button>
            </div>
        </div>  
      ))}  

        <button onClick={ vaciarCarrito }>Vaciar Carrito</button>
        <h2>{cantidadTotal()}</h2>

    </div>
    )
    
};

export default Cart;
