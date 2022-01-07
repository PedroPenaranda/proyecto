import React, { useEffect, useState } from 'react'
import { traerArticulos } from '../../articulos/Articulos'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState ([])

    useEffect (() => {
        traerArticulos
        .then(resp => setProduct(resp.find (produc  => produc.id === 1)))
    }, [])

    return (
        <div>
            <ItemDetail product = {product}/>
        </div>
    )
}

export default ItemDetailContainer
