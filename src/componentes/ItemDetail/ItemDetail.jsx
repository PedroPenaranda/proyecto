import React, { useState } from 'react'
import './ItemDetail.css'
import Contador from '../contador/Contador';
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {

    const [show, setShow] = useState (true);
    const añadir = () => {
        setShow (false)
    }

    return (
        <div className='contPantAlter'>
            <h2 className='pantDesc'>Descripcion</h2>
            <h2 className='pantDesc'>{product.producto}</h2>
            {show ? <Contador min = {1} max = {22} añadir = {añadir} /> :
                <div>
                    <Link to = '/'> <button>Seguir comprando</button> </Link>
                    <Link to = '/Cart'> <button>Finalizar compra</button> </Link>
                </div>} 
            
        </div>
    )
}

export default ItemDetail

