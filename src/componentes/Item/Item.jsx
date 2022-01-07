import React from 'react'
import './Item.css'

const Item = ({articulo}) => {
    return (
        <div className='card'>
            <img className='cardImg' src={articulo.imagen} alt= {articulo.producto} />
            <div className='contCardTxt'>
                <h3 className='cardTxtN'>{articulo.producto}</h3>
                <h3 className='cardTxtP'>{articulo.precio}</h3>
            </div>
            <div className='contCardBtn'>
                <button className='btnDescripcion'>Descripcion</button>
            </div>
        </div>
    )
}

export default Item
