import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import Contador from '../contador/Contador';


const ItemDetail = ({ product }) => {
    const [mostrar, setMostrar] = useState(true);
    const { añadirCarrito } = useContext(CartContext);

    const añadir = (subPrecio) => {
        añadirCarrito(product, subPrecio);
        setMostrar(false);
    };
    
    
    return (
        <div className='contPantAlter'>
            <h2 className='pantDesc'>Descripcion</h2>
            <h2 className='pantDesc'>{product.producto}</h2>
            {mostrar ? <Contador min = {1} max = {22} añadir = {añadir} /> :
                <div>
                    <Link to = '/'> <button>Seguir comprando</button> </Link>
                    <Link to = '/Cart'> <button>Finalizar compra</button> </Link>
                </div>} 
            
        </div>
    )

}
export default ItemDetail

