import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({articulo}) => {
    return (
        <div className='contenedorCards'>
            {articulo.map((articulo) => {
               return (<Item key = {articulo.id} articulo = {articulo} imagen = {articulo.imagen} />)
            })} 
        </div>
    )
}

export default ItemList

