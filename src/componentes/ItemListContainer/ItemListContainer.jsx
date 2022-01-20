import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { traerArticulos } from '../../articulos/Articulos';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const [datos, setDatos] = useState ([]);
    const {CategoriaId} = useParams ();

    useEffect( () => {
        if(CategoriaId){
            traerArticulos
            .then (respuesta => setDatos (respuesta.filter(articulo => articulo.CategoriaId === CategoriaId)))
            .catch (error => console.log (error))
        }else{
            traerArticulos
            .then (respuesta => setDatos(respuesta))
            .catch (error => console.log (error))
        }
    }, [CategoriaId]);

    return (
        <div className='contenedorCards'>
            <ItemList articulo = {datos} />
        </div>
    )
}

export default ItemListContainer
