import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { traerArticulos } from '../../articulos/Articulos'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState ([]);
    const {DescripcionId} = useParams ();

    useEffect (() => {
        traerArticulos
        .then(resp => setProduct(resp.find (produc  => produc.id === DescripcionId)))
    }, [DescripcionId])

    return (
        <div>
            <ItemDetail product = {product}/>
        </div>
    )
}

export default ItemDetailContainer
