import React, {useEffect, useState} from 'react';
import { traerArticulos } from '../../articulos/Articulos';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const [datos, setDatos] = useState ([]);

    useEffect( () => {
        traerArticulos.then((devolver) => {
            setDatos(devolver);
        })
        .catch((error) => {
            console.error(error)
        })
    }, []);

    return (
        <div className='contenedorCards'>
            <ItemList articulo = {datos} />
        </div>
    )
}

export default ItemListContainer
