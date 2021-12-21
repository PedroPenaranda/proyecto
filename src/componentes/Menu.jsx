import React from 'react'
import './Menu.css'

const Menu = () => {
    return (
        <header>
            <nav className='navBar'>
                <ul className='listaPrincipal'>
                    <li className='itemLista'><a href="#">LOGO</a></li>
                    <li className='itemLista'><a href="#">Lista de articulos</a></li>
                    <li className='itemLista'><a href="#">Carrito</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu
