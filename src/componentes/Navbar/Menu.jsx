import React from 'react'
import './Menu.css'
import Carrito from './Cart'



const Menu = () => {
    return (
        <nav className='navBar'>
            <h3>Logo</h3>
            <ul className='listaPrincipal'>
                <li className='itemLista'><a href="#">Ingresar</a></li>
                <li className='itemLista'><a href="#">Lista de articulos</a></li>
                <Carrito />
            </ul>
        </nav>
    )
}

export default Menu
