import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({product}) => {
    return (
        <div className='contPantAlter'>
            <h2 className='pantDesc'>Descripcion</h2>
            <h2 className='pantDesc'>{product.producto}</h2>
        </div>
    )
}

export default ItemDetail

